const express = require("express");
const { authControllers } = require("../../controllers");
const {
  registrationValidation,
  loginValidation,
} = require("../../middlewares/validationMiddelwares");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post(
  "/registration",
  registrationValidation,
  asyncWrapper(authControllers.registrationController)
);

router.post(
  "/login",
  loginValidation,
  asyncWrapper(authControllers.loginController)
);
router.post(
  "/logout",
  authMiddleware,
  asyncWrapper(authControllers.logoutController)
);
router.get(
  "/current",
  authMiddleware,
  asyncWrapper(authControllers.currentUserController)
);
router.patch(
  "/",
  authMiddleware,
  asyncWrapper(authControllers.updateSubController)
);

module.exports = router;
