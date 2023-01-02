const User = require("../schemas/auth");
const { NotAuthorizedError } = require("../../helpers/errors");

const logout = async (id, token) => {
  const result = await User.findByIdAndUpdate(id, token);
  if (!result) {
    throw new NotAuthorizedError(`No user with id ${id} where found`);
  }
  return result;
};
module.exports = logout;
