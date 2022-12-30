const Contact = require("../schemas/contacts");

const { WrongDirectoryError } = require("../../helpers/errors");

const removeContact = async (contactId, owner) => {
  const contact = await Contact.findOneAndRemove({ _id: contactId, owner });
  if (!contact) {
    throw new WrongDirectoryError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return contact;
};
module.exports = removeContact;
