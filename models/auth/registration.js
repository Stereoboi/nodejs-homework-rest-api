const User = require("../schemas/auth");

const { RegistrationConflictError } = require("../../helpers/errors");

const registration = async (email, password, avatarURL) => {
  const userCheck = await User.findOne({ email });
  if (!userCheck) {
    const user = new User({
      email,
      password,
      avatarURL,
    });
    await user.save();
  } else {
    throw new RegistrationConflictError(`Email ${email} in use`);
  }
};
module.exports = registration;
