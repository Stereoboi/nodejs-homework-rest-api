const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateContactStatus,
} = require("../models/contacts");

const getContactsController = async (req, res, next) => {
  const results = await listContacts();
  res.status(200).json({ results });
};

const getContactIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  res.status(200).json(contact);
};

const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  await removeContact(contactId);
  res.status(200).json({ message: `contact id:${contactId} deleted` });
};

const addNewContactController = async (req, res) => {
  const { name, email, phone, favorite = false } = req.body;
  await addContact(name, email, phone, favorite);
  res.status(201).json({ status: "Successfully created" });
};

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  await updateContact(contactId, req.body);
  res.status(200).json({ status: "Successfully updated" });
};
const updateContactStatusController = async (req, res) => {
  const { contactId } = req.params;
  await updateContactStatus(contactId, req.body);
  res
    .status(200)
    .json({ status: `Contact ${contactId} status updated successfully` });
};

module.exports = {
  getContactsController,
  getContactIdController,
  deleteContactController,
  addNewContactController,
  updateContactController,
  updateContactStatusController,
};
