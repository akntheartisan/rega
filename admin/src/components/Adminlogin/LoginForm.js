import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  Stack,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import "./login.css";
import axios from "axios";
import { client } from "../../Client/Clientaxios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const credential = { username, password };

    console.log(credential);
    try {
      const response = await client.post("/regaadmin/signin", credential);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form">
        <Box
          sx={{
            width: "300px",
            height: "300px",
            padding: "20px",
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(3px)",
            borderRadius: "25px",
            // border:'1px ridge white'
          }}
        >
          <Stack direction={"column"} spacing={4}>
            <Typography sx={{ textAlign: "center" }}>Admin Login</Typography>
            <TextField
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              type="password"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button size="small" variant="contained" onClick={submit}>
              LogIn
            </Button>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default LoginForm;
