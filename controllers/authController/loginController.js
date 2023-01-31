const auth = require("../../models/auth");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const result = await auth.login(email, password);
  res.json({
    status: "success",
    token: result.token,
    user: {
      name: `${result.name}`,
      email: `${email}`,
      subscription: "starter",
    },
  });
};

module.exports = loginController;
