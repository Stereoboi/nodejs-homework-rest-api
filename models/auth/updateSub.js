const User = require("../schemas/auth");
const { NotAuthorizedError } = require("../../helpers/errors");

const updateSub = async (id, newSubscriptionStatus) => {
  const result = await User.findOneAndUpdate(
    { _id: id },
    { $set: { subscription: `${newSubscriptionStatus}` } },
    { new: true }
  );
  console.log(result);
  if (!result) {
    throw new NotAuthorizedError(`No user with id ${id} where found`);
  }
  return result;
};
module.exports = updateSub;
