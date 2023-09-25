import { asyncError } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import { sendToken, cookieOptions } from "../utils/features.js";
// import cookie from 'cookie-parser'

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({
      sucess: false,
      message: "Incorrect Email",
    });
  }

  // Handle error
  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return next(new ErrorHandler("Incorrect  Password", 200));
  }

  // json token
  sendToken(user, res, `Welcome Back, ${user.name}`, 200);
});

export const signup = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User Already Exists", 400));

  // Add Cloudanary

  user = await User.create({
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });

  sendToken(user, res, `Registered  Sucessfully`, 201);
});

export const getMyProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);  // find the user 

  res.status(200).json({
    success: true,
    user,
  });
});



export const logout = asyncError(async (req, res, next) => {
  

  res.status(200).cookie("token", "", {
    ...cookieOptions,
    expires: new Date(Date.now()),
  }).json({
    success: true,
    message:"Logged Out SuccessFully"
  });
});





