const express = require("express");

const {
  getContactsController,
  getContactIdController,
  deleteContactController,
  addNewContactController,
  updateContactController,
  updateContactStatusController,
} = require("../../controllers/contactsControllers");

const {
  addContactValidation,
  updateContactValidation,
} = require("../../middlewares/validationMiddelwares");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.get("/", asyncWrapper(getContactsController));

router.get("/:contactId", asyncWrapper(getContactIdController));

router.post("/", addContactValidation, asyncWrapper(addNewContactController));

router.put(
  "/:contactId",
  updateContactValidation,
  asyncWrapper(updateContactController)
);

router.delete("/:contactId", asyncWrapper(deleteContactController));

router.patch(
  "/:contactId",
  updateContactValidation,
  asyncWrapper(updateContactStatusController)
);

module.exports = router;
