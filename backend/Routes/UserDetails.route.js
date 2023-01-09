const express = require("express");
const userDetailsRouter = express.Router();
const { getDetails } = require("../Controller/UserDetails.controller");

userDetailsRouter.get("/getdetails/:email", getDetails);

module.exports = {
  userDetailsRouter,
};
