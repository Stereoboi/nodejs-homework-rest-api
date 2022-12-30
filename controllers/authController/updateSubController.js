const auth = require("../../models/auth");

const updateSubController = async (req, res) => {
  const { _id } = req.user;
  const oldSubscriptionStatus = req.body.subscription;
  const result = await auth.updateSub(_id, oldSubscriptionStatus);
  const { subscription } = result;
  res.status(200).json({
    subscription: `You update your subscription to ${subscription}`,
  });
};

module.exports = updateSubController;
