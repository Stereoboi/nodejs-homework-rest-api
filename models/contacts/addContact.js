const Contact = require("../schemas/contacts");

const { WrongParametersError } = require("../../helpers/errors");

const addContact = async ({ name, email, phone, favorite }, owner) => {
  const newContact = await Contact.create({
    name,
    email,
    phone,
    favorite,
    owner,
  });
  if (!newContact) {
    throw new WrongParametersError(`message: "missing required name field"`);
  }
  return newContact;
};
module.exports = addContact;
