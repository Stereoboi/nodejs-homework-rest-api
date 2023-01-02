const Contact = require("../schemas/contacts");

const { WrongParametersError } = require("../../helpers/errors");

const getContactById = async (contactId, owner) => {
  const contact = await Contact.findOne({ _id: contactId, owner });
  if (!contact) {
    throw new WrongParametersError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return contact;
};
module.exports = getContactById;
