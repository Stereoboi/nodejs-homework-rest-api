const auth = require("../../models/auth");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const result = await auth.login(email, password);
  const { token, logdUser } = result;
  res.json({
    status: "success",
    token: token,
    user: {
      name: `${logdUser.name}`,
      email: `${email}`,
      subscription: "starter",
    },
  });
};

module.exports = loginController;
