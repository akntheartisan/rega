const express = require("express");
const router = express.Router();
const prodcont = require("../controller/ProductAddController");

router.post(
  "/productadd",
  prodcont.uploadFile,
  prodcont.resizeImage,
  prodcont.saveImage,
  prodcont.productadd
);

router.get("/getproduct",prodcont.getProduct);

module.exports = router;
