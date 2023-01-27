const auth = require("../../models/auth");
const gravatar = require("gravatar");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;
  const avatar = gravatar.url(
    email,
    {
      s: "250",
      d: "retro",
    },
    true
  );
  await auth.registration(name, email, password, avatar);
  res.status(201).json({
    status: "success",
    user: { email: `${email}`, subscription: "starter" },
  });
};

module.exports = registrationController;
