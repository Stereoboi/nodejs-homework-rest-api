const contacts = require("../../models/contacts");

const getContactsController = async (req, res, next) => {
  const { _id } = req.user;
  let { page, limit, favorite } = req.query;
  limit = parseInt(limit) > 10 ? 10 : parseInt(limit);
  page = parseInt(page - 1) * parseInt(limit);
  const results = await contacts.listContacts(_id, { page, limit, favorite });
  res.status(200).json({ results });
};

module.exports = getContactsController;
