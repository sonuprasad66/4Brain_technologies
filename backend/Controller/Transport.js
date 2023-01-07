const nodemailer = require("nodemailer");
require("dotenv").config();

const email = process.env.OTP_EMAIL;
const password = process.env.OTP_PASSWORD;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: email,
    pass: password,
  },
});

module.exports = {
  transport,
};
