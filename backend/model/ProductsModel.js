const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    image: {
      url: {
        type: String,
      },
      pid: {
        type: String,
      },
    },
    model:{
        type:String
    },
    motor: {
      type: String,
    },
    battery: {
      type: String,
    },
    range: {
      type: String,
    },
    tyresizeandtype: {
      type: String,
    },
    brakes: {
      type: String,
    },
    groundclearance: {
      type: String,
    },
    payload: {
      type: String,
    },
    chargingtime: {
      type: String,
    },
    frame: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", Product);
