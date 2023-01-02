const User = require("../schemas/auth");
const { NotAuthorizedError } = require("../../helpers/errors");

const currentUser = async (id) => {
  const result = await User.findById(id);
  // console.log(result.email);
  if (!result) {
    throw new NotAuthorizedError(`No user with id ${id} where found`);
  }
  return result;
};
module.exports = currentUser;
