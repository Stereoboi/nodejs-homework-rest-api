const User = require("../schemas/auth");
const { v4: uuidv4 } = require("uuid");
const { RegistrationConflictError } = require("../../helpers/errors");
const verificationToken = uuidv4(7);
const sendGridMsg = require("../../helpers/sendGridMsg");

const registration = async (email, password, avatarURL, name) => {
  const userCheck = await User.findOne({ email });
  if (!userCheck) {
    const user = new User({
      name,
      email,
      password,
      avatarURL,
      verificationToken: verificationToken,
    });
    await sendGridMsg(email, verificationToken);
    await user.save();
  } else {
    throw new RegistrationConflictError(`Email ${email} in use`);
  }
};
module.exports = registration;
