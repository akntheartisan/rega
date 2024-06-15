const mongoose = require('mongoose');
const adminmodel = require('../model/AdminLoginModel');
const jwt = require('jsonwebtoken');

exports.adminsignin = async (req, res, next) => {
  console.log(req.body);
  // try {
  //   const { username, password } = req.body;
  //   console.log(username, password);

  //   if (!username || !password) {
  //     return res.status(400).json({ 
  //       status: "fail",
  //       message: "Username and Password are required",
  //     });
  //   }

  //   const adminCheck = await adminmodel.findOne({ username }).select("+password");
  //   console.log(adminCheck);

  //   if (
  //     !adminCheck ||
  //     !(await adminCheck.correctPassword(password, adminCheck.password))
  //   ) {
  //     return res.status(401).json({
  //       status: "fail",
  //       message: "Wrong Password, Please check the password",
  //     });
  //   }

  //   const token = jwt.sign({ id: adminCheck._id }, process.env.JWT_SECRET, {
  //     expiresIn: process.env.JWT_EXPIRATION,
  //   });

  //   const cookieOptions = {
  //     expires: new Date(Date.now() + 90 * 24 * 3600 * 1000), // 90 days
  //     httpOnly: true,
  //   };

  //   res.cookie("jwt", token, cookieOptions)
  //     .status(200)
  //     .json({
  //       status: "success",
  //       message: 'Successfully logged in'
  //     });

  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({
  //     status: "error",
  //     message: "An error occurred. Please try again later."
  //   });
  // }
};
