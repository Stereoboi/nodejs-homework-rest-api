const Contact = require("../schemas/contacts");

const { WrongParametersError } = require("../../helpers/errors");

const getContactById = async (contactId) => {
  const contact = await Contact.findOne({ _id: contactId });
  if (!contact) {
    throw new WrongParametersError(
      `failure, no contacts with id ${contactId} where found`
    );
  }
  return contact;
};
module.exports = getContactById;
