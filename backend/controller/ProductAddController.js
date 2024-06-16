const projectmodel = require("../model/ProductsModel");

exports.productadd = async (req, res, next) => {
  try {
    let newProduct = await projectmodel.create(req.body);
    if (newProduct) {
      res.status(200).json({
        status: "success",
        message: "Product Add Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Something Wrong",
    });
  }
};
