const express = require("express");
const contactsControllers = require("../../controllers");
const {
  addContactValidation,
  updateContactValidation,
} = require("../../middlewares/validationMiddelwares");
const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.get("/", asyncWrapper(contactsControllers.getContactsController));

router.get(
  "/:contactId",
  asyncWrapper(contactsControllers.getContactIdController)
);

router.post(
  "/",
  addContactValidation,
  asyncWrapper(contactsControllers.addNewContactController)
);

router.put(
  "/:contactId",
  updateContactValidation,
  asyncWrapper(contactsControllers.updateContactController)
);

router.delete(
  "/:contactId",
  asyncWrapper(contactsControllers.deleteContactController)
);

router.patch(
  "/:contactId",
  updateContactValidation,
  asyncWrapper(contactsControllers.updateContactStatusController)
);

module.exports = router;
