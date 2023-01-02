const Contact = require("../schemas/contacts");

const {
  WrongParametersError,
  WrongDirectoryError,
} = require("../../helpers/errors");

const updateContactStatus = async (contactId, body, owner) => {
  const { favorite } = body;
  const changeContactStatus = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
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

module.exports = updateContactStatus;
