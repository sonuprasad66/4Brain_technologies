const express = require("express");
const userRouter = express.Router();
const {
  userRegistration,
  userLogin,
} = require("../Controller/User.controller");

userRouter.post("/register", userRegistration);
userRouter.post("/login", userLogin);

module.exports = {
  userRouter,
};
