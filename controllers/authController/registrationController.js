const auth = require("../../models/auth");

const registrationController = async (req, res) => {
  const { email, password } = req.body;
  await auth.registration(email, password);
  res.status(201).json({
    status: "success",
    user: { email: `${email}`, subscription: "starter" },
  });
};

module.exports = registrationController;
