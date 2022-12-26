const express = require("express");

const {
  getContacts,
  getContactId,
  deleteContact,
  addNewContact,
  updtContact,
  updtContactStatus,
} = require("../../controllers/contactsControllers");

const {
  addContactValidation,
  updateContactValidation,
} = require("../../middlewares/validationMiddelwares");

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", getContactId);

router.post("/", addContactValidation, addNewContact);

router.put("/:contactId", updateContactValidation, updtContact);

router.delete("/:contactId", deleteContact);

router.patch("/:contactId", updateContactValidation, updtContactStatus);

module.exports = router;
