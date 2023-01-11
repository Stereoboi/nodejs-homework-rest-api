const auth = require("../../models/auth");

const secondVerificationController = async (req, res) => {
  const { email } = req.body;

  await auth.secondVerification(email);

  res.status(200).json({
    status: `Verification email sent`,
  });
};

module.exports = secondVerificationController;
