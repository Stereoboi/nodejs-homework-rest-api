const User = require("../schemas/auth");
const { RegistrationConflictError } = require("../../helpers/errors");

const registration = async (email, password) => {
  const userCheck = await User.findOne({ email });
  // console.log("userCheck", userCheck);

  if (!userCheck) {
    const user = new User({
      email,
      password,
    });
    await user.save();
  } else {
    throw new RegistrationConflictError(`Email ${email} in use`);
  }
};
module.exports = registration;
