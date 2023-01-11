const User = require("../schemas/auth");
const { ValidationError } = require("../../helpers/errors");
const sendGridMsg = require("../../helpers/sendGridMsg");

const secondVerification = async (email) => {
  const result = await User.findOne({ email: email });
  if (!result) {
    throw new ValidationError(
      `No user with verificationToken ${email} where found`
    );
  }
  const { verificationToken, verify } = result;
  if (verify) {
    throw new ValidationError(`Verification has already been passed`);
  }
  await sendGridMsg(email, verificationToken);

  return result;
};
module.exports = secondVerification;
