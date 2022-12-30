const User = require("../schemas/auth");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { NotAuthorizedError } = require("../../helpers/errors");

const login = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new NotAuthorizedError(`No user with email ${email} where found`);
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError(`Wrong password`);
  }

  const token = jsonwebtoken.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET
  );
  await User.findByIdAndUpdate(user._id, { token });
  return token;
};
module.exports = login;
