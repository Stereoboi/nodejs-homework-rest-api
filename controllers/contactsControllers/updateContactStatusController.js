const { updateContactStatus } = require("../../models/contacts");

const updateContactStatusController = async (req, res) => {
  const { contactId } = req.params;
  await updateContactStatus(contactId, req.body);
  res
    .status(200)
    .json({ status: `Contact ${contactId} status updated successfully` });
};

module.exports = updateContactStatusController;
