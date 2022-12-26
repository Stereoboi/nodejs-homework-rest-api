const Contact = require("./schemas/contacts");
const {
  WrongParametersError,
  WrongDirectoryError,
} = require("../helpers/errors");

const listContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = await Contact.findOne({ _id: contactId });
  if (!contact) {
    throw new WrongParametersError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contact = await Contact.findByIdAndRemove({ _id: contactId });
  if (!contact) {
    throw new WrongDirectoryError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return contact;
};

const addContact = async (name, email, phone, favorite) => {
  const newContact = await Contact.create({ name, email, phone, favorite });
  if (!newContact) {
    throw new WrongParametersError(`message: "missing required name field"`);
  }
  return newContact;
};

const updateContact = async (contactId, body) => {
  const { name, email, phone, favorite } = body;
  const changeContact = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { $set: { name, email, phone, favorite } },
    { new: true }
  );
  if (Object.keys(body).length === 0) {
    throw new WrongParametersError("missing fields");
  }
  if (!changeContact) {
    throw new WrongDirectoryError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return changeContact;
};

const updateContactStatus = async (contactId, body) => {
  const { favorite } = body;
  const changeContactStatus = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { favorite },
    { new: true }
  );
  if (Object.keys(body).length === 0) {
    throw new WrongParametersError("missing fields");
  }
  if (!changeContactStatus) {
    throw new WrongDirectoryError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return changeContactStatus;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateContactStatus,
};
