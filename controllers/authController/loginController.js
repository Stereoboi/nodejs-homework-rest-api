const auth = require("../../models/auth");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const token = await auth.login(email, password);
  res.json({
    status: "success",
    token: token,
    user: { name: `${token.name}`, email: `${email}`, subscription: "starter" },
  });
};

module.exports = loginController;
