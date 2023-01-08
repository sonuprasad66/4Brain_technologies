const express = require("express");
const userRouter = express.Router();
const {
  userRegistration,
  userLogin,
  matchOtp,
} = require("../Controller/User.controller");

userRouter.post("/register", userRegistration);
userRouter.post("/login", userLogin);
userRouter.post("/verifyotp", matchOtp);

module.exports = {
  userRouter,
};
