const auth = require("../../models/auth");

const currentUserController = async (req, res) => {
  const { _id } = req.user;
  // console.log("req", req);
  const result = await auth.currentUser(_id);
  const { name, email, subscription } = result;
  res.status(200).json({
    name: `${name}`,
    email: `${email}`,
    subscription: `${subscription}`,
  });
};

module.exports = currentUserController;
