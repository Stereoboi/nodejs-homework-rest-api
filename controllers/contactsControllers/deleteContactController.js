const { removeContact } = require("../../models/contacts");

const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  await removeContact(contactId);
  res.status(200).json({ message: `contact id:${contactId} deleted` });
};

module.exports = deleteContactController;
