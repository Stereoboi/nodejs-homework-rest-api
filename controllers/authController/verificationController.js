const auth = require("../../models/auth");

const verificationController = async (req, res) => {
  const { verificationToken } = req.params;

  await auth.verification(verificationToken);

  res.status(200).json({
    status: `Your email are verified`,
  });
};

module.exports = verificationController;
