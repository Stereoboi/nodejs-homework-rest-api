const { listContacts } = require("../../models/contacts");

const getContactsController = async (req, res, next) => {
  const results = await listContacts();
  res.status(200).json({ results });
};

module.exports = getContactsController;
