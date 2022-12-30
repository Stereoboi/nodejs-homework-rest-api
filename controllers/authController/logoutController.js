const auth = require("../../models/auth");

const logOutController = async (req, res) => {
  const { _id } = req.user;
  await auth.logout(_id, { token: "" });
  res.status(204).json({
    status: "success",
  });
};

module.exports = logOutController;
