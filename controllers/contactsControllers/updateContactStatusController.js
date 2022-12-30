const contacts = require("../../models/contacts");

const updateContactStatusController = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  await contacts.updateContactStatus(contactId, req.body, _id);
  res
    .status(200)
    .json({ status: `Contact ${contactId} status updated successfully` });
};

module.exports = updateContactStatusController;
