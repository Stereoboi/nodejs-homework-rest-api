const Contact = require("../schemas/contacts");

const {
  WrongParametersError,
  WrongDirectoryError,
} = require("../../helpers/errors");

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
module.exports = updateContact;
