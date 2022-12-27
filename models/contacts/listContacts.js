const Contact = require("../schemas/contacts");

const listContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

module.exports = listContacts;
