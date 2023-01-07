const { userModel } = require("../Models/User.model");
const { otpModel } = require("../Models/Otp.model");
require("dotenv").config();
const { transport } = require("./Transport");

const userRegistration = async (req, res) => {
  const { name, email, mobile_number } = req.body;

  if (name == " " || email == " " || mobile_number == " ") {
    res.send({ message: "Empty Input Fields!", status: "failed" });
  } else {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const user_email = user.email;
      const user_mobile_number = user.mobile_number;
      if (user_email || user_mobile_number) {
        res.send({ message: "User already registered", status: "exist" });
      }
    } else {
      const new_user = new userModel({
        name: name,
        email: email,
        mobile_number: mobile_number,
      });
      await new_user.save();
      res.send({ message: "User Register Successful", status: "success" });
    }
  }
};

const userLogin = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000);
  const user = await userModel.findOne({ email: email });
  if (user) {
    transport.sendMail(
      {
        from: process.env.OTP_EMAIL,
        to: email,
        subject: "Verification OTP",
        html: `<h3>Hello ${email},</h3></be><p>Your login verification OTP is <b>${otp}</b></p> `,
      },
      async (err, res) => {
        if (err) {
          return console.log(err);
        } else {
          const otpCreation = new otpModel({
            email: email,
            otp: otp,
          });
          await otpCreation.save();
        }
      }
    );
    res.send({ message: "Verification OTP on your email", status: 200 });
  } else {
    res.send({ message: "Please Create Account", status: "exist" });
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
