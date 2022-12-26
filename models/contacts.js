const Contact = require("./schemas/contacts");

const listContacts = async () => {
  return Contact.find();
};

const getContactById = async (contactId) => {
  return Contact.findOne({ _id: contactId });
};

const removeContact = async (contactId) => {
  return Contact.findByIdAndRemove({ _id: contactId });
};

const addContact = async (name, email, phone, favorite) => {
  return Contact.create({ name, email, phone, favorite });
};

const updateContact = async (contactId, body) => {
  const { name, email, phone, favorite } = body;
  return Contact.findByIdAndUpdate(
    { _id: contactId },
    { name, email, phone, favorite },
    { new: true }
  );
};

const updateContactStatus = async (contactId, body) => {
  const { favorite } = body;
  return Contact.findByIdAndUpdate(
    { _id: contactId },
    { favorite },
    { new: true }
  );
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateContactStatus,
};
