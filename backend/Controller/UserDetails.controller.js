const { userModel } = require("../Models/User.model");

const getDetails = async (req, res) => {
  const { email } = req.params;
  const user = await userModel.findOne({ email: email });
  res.send(user);
};

module.exports = {
  getDetails,
};
