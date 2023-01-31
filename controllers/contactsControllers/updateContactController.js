const contacts = require("../../models/contacts");

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const contact = await contacts.updateContact(contactId, req.body, _id);
  res.status(200).json(contact);
};

module.exports = updateContactController;
