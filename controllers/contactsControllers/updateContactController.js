const contacts = require("../../models/contacts");

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  await contacts.updateContact(contactId, req.body, _id);
  res.status(200).json({ status: "Successfully updated" });
};

module.exports = updateContactController;
