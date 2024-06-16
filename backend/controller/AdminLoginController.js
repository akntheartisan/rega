const mongoose = require("mongoose");
const adminmodel = require("../model/AdminLoginModel");
const jwt = require("jsonwebtoken");

exports.adminsignin = async (req, res, next) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Username and Password are required",
      });
    }

    const adminCheck = await adminmodel
      .findOne({ username })
      .select("+password");
    console.log(adminCheck);

    if(!adminCheck){
      return res.status(401).json({
        status:'fail',
        error:'Invalid Username, Please try again'
      })
    }

    if (!(await adminCheck.correctPassword(password, adminCheck.password))) {
      return res.status(401).json({
        status: "fail",
        error: "Incorrect password. Please try again",
      });
    }

    const jwtSecret = "sdflkjsadlfhasldfjsdlk";
    const jwtExpiration = "90d";

    const token = jwt.sign({ id: adminCheck._id }, jwtSecret, {
      expiresIn: jwtExpiration,
    });

    console.log(token);

    const cookieOptions = {
      expires: new Date(Date.now() + 90 * 24 * 3600 * 1000),
      httpOnly: true,
    };

    res.cookie("jwt", token, cookieOptions).status(200).json({
      status: "success",
      message: "Successfully logged in",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred. Please try again later.",
    });
  }
};

exports.protect = async (req, res, next) => {
  console.log("thisismwtriggered");

  // 1) Get the token from the cookies
  let token;
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
    console.log("protecttoken:" + token);
  } else {
    return res.status(401).json({
      status: "fail",
      message: "Not authenticated",
    });
  }

  // 2) Verify token
  const jwtSecret = "sdflkjsadlfhasldfjsdlk";
  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log(decoded.id);

    // 3) Check if user still exists
    const adminCheck = await adminmodel.findById(decoded.id);
    if (!adminCheck) {
      return res.status(401).json({
        status: "fail",
        message: "This user no longer exists",
      });
    }

    console.log(adminCheck);

    req.user = adminCheck;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Token expired or invalid. Please log in again",
    });
  }
};
