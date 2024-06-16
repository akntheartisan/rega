import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
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
import { client } from "../../Client/Clientaxios";


const LoginForm = ({setAdmin,admin}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const credential = { username, password };

    console.log(credential);
    try {
      const response = await client.post("/admin/signin", credential,{ withCredentials: true });

      if (response.status === 200) {
        alert("logged in successfully");
        getProtected();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProtected = async () => {
    try {
      const response = await client.get("/admin/authuser",{ withCredentials: true });
      console.log(response.data.user);
      const adminDetails = response.data.user;
      if(adminDetails){
        setAdmin(adminDetails);
        console.log('admin:' + admin);
        navigate('/admin');
      }
      
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
