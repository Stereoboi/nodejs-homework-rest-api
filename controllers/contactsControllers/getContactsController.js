const contacts = require("../../models/contacts");

const getContactsController = async (req, res, next) => {
  const results = await contacts.listContacts();
  res.status(200).json({ results });
};

module.exports = getContactsController;
