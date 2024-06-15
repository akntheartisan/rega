const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const adminroute = require('./route/AdminRoute');

app.use(cors());
app.use(express.json());

//routes

app.use("/regaadmin",adminroute);

const mongo_uri =
  "mongodb+srv://aravinthkumaran410:iRPBg1ArJBqv3ayN@cluster0.2eiliwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
  .connect(mongo_uri)
  .then(() => {
    app.listen(4000, () => {
      console.log(`listening to 4000`);
    });
  })
  .catch((err) => console.log(err));
