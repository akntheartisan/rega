import React, { useState } from "react";
import { client } from "../../../Client/Clientaxios";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const intial = {
  image: "",
  motor: "",
  battery: "",
  range: "",
  tyresize: "",
  brakes: "",
  ground: "",
  payload: "",
  charging: "",
  frame: "",

};

const Product = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("768px"));
  const [product, setProduct] = useState(intial);
  console.log(product);

  const handleChange = (e)=>{
        
    const {name,value} = e.target;
    setProduct((prev)=>({
        ...prev,
        [name]:value
    }));
  }

  const submit = async ()=>{
    try {
        const response = await client.post("/admin/productadd",product);
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "10px auto",
          padding: "20px",
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", margin: "0px 0px 13px 0px" }}
        >
          Product Entry Form
        </Typography>
        <Stack spacing={2}>
          <Stack direction={isMobile ? "column" : "row"} spacing={2}>
            <TextField
              fullWidth
              label="Product Image"
              variant="outlined"
              size="small"
              value={product.image}
              onChange={handleChange}
              name="image"
            />
            <TextField
              fullWidth
              label="Motor"
              variant="outlined"
              size="small"
              value={product.motor}
              onChange={handleChange}
              name="motor"
            />
          </Stack>
          <Stack direction={isMobile ? "column" : "row"} spacing={2}>
            <TextField
              fullWidth
              label="Battery"
              variant="outlined"
              size="small"
              value={product.battery}
              onChange={handleChange}
              name="battery"
            />
            <TextField
              fullWidth
              label="Range"
              variant="outlined"
              size="small"
              value={product.range}
              onChange={handleChange}
              name="range"
            />
          </Stack>
          <Stack direction={isMobile ? "column" : "row"} spacing={2}>
            <TextField
              fullWidth
              label="Tyre Size and Type"
              variant="outlined"
              size="small"
              value={product.tyresize}
              onChange={handleChange}
              name="tyresize"
            />
            <TextField
              fullWidth
              label="Brakes"
              variant="outlined"
              size="small"
              value={product.brakes}
              onChange={handleChange}
              name="brakes"
            />
          </Stack>
          <Stack direction={isMobile ? "column" : "row"} spacing={2}>
            <TextField
              fullWidth
              label="Ground Clearance"
              variant="outlined"
              size="small"
              value={product.ground}
              onChange={handleChange}
              name="ground"
            />
            <TextField
              fullWidth
              label="Payload"
              variant="outlined"
              size="small"
              value={product.payload}
              onChange={handleChange}
              name="payload"
            />
          </Stack>
          <Stack direction={isMobile ? "column" : "row"} spacing={2}>
            <TextField
              fullWidth
              label="Charging Time"
              variant="outlined"
              size="small"
              value={product.charging}
              onChange={handleChange}
              name="charging"
            />
            <TextField
              fullWidth
              label="Frame"
              variant="outlined"
              size="small"
              value={product.frame}
              onChange={handleChange}
              name="frame"
            />
          </Stack>
          <Stack direction={"row"} spacing={2} justifyContent={"center"}>
            <Button variant="contained" color="warning">
              Cancel
            </Button>
            <Button variant="contained" onClick={submit}>Submit</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Product;
