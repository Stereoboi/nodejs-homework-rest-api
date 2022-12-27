const Contact = require("../schemas/contacts");

const { WrongDirectoryError } = require("../../helpers/errors");

const removeContact = async (contactId) => {
  const contact = await Contact.findByIdAndRemove({ _id: contactId });
  if (!contact) {
    throw new WrongDirectoryError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return contact;
};
module.exports = removeContact;
