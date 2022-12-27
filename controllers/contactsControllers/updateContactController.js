const contacts = require("../../models/contacts");

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  await contacts.updateContact(contactId, req.body);
  res.status(200).json({ status: "Successfully updated" });
};

module.exports = updateContactController;
