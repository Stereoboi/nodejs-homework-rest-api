const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateSub = require("./updateSub");
const updateAvatar = require("./updateAvatar");
const verification = require("./verification");
const secondVerification = require("./secondVerification");
module.exports = {
  registration,
  login,
  logout,
  currentUser,
  updateSub,
  updateAvatar,
  verification,
  secondVerification,
};
