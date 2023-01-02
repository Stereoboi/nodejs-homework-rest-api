const User = require("../schemas/auth");
const { NotAuthorizedError } = require("../../helpers/errors");

const updateAvatar = async (avatar, id) => {
  const result = await User.findByIdAndUpdate(
    id,
    {
      avatarURL: avatar,
    },
    { new: true }
  );
  if (!result) {
    throw new NotAuthorizedError(`No user with id ${id} where found`);
  }
  return result;
};

module.exports = updateAvatar;
