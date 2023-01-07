const { userModel } = require("../Models/User.model");

const userRegistration = async (req, res) => {
  const { name, email, mobile_number } = req.body;
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
};

const userLogin = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email: email });
  if (user) {
  } else {
    res.send({ message: "Please Create Account", status: "exist" });
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
