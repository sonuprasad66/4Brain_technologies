const express = require("express");
const userRouter = express.Router();
const { userRegistration } = require("../Controller/User.controller");

userRouter.post("/register", userRegistration);

module.exports = {
  userRouter,
};
