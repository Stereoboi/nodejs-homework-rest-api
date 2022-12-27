const contacts = require("../../models/contacts");

const getContactIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);
  res.status(200).json(contact);
};

module.exports = getContactIdController;
