const contacts = require("../../models/contacts");

const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  await contacts.removeContact(contactId, _id);
  res.status(200).json({
    message: `contact id:${contactId} deleted`,
    id: `${contactId}`,
  });
};

module.exports = deleteContactController;
