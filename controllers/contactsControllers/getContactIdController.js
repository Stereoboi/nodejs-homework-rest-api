const contacts = require("../../models/contacts");

const getContactIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const contact = await contacts.getContactById(contactId, _id);
  res.status(200).json(contact);
};

module.exports = getContactIdController;
