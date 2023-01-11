const User = require("../schemas/auth");
const { ValidationError } = require("../../helpers/errors");

const verification = async (verificationToken) => {
  const result = await User.findOneAndUpdate(
    { verificationToken: verificationToken },
    {
      $set: {
        verify: true,
        verificationToken: null,
      },
    },
    { new: true }
  );
  if (!result) {
    throw new ValidationError(
      `No user with verificationToken ${verificationToken} where found`
    );
  }
  return result;
};
module.exports = verification;
