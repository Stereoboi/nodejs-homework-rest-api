const registrationController = require("./registrationController");
const loginController = require("./loginController");
const logoutController = require("./logoutController");
const currentUserController = require("./currentUserController");
const updateSubController = require("./updateSubController");
const uploadController = require("./uploadController");
const verificationController = require("./verificationController");
const secondVerificationController = require("./secondVerificationController");
module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateSubController,
  uploadController,
  verificationController,
  secondVerificationController,
};
