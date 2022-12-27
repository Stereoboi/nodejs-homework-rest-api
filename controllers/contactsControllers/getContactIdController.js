const { getContactById } = require("../../models/contacts");

const getContactIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  res.status(200).json(contact);
};

module.exports = getContactIdController;
