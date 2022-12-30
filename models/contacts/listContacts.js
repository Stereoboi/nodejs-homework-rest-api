const Contact = require("../schemas/contacts");

const listContacts = async (owner, { page, limit, favorite }) => {
  const contacts = await Contact.find(
    favorite ? { owner, favorite } : { owner },
    "-createdAt -updatedAt"
  )
    .skip(parseInt(page))
    .limit(parseInt(limit));
  return contacts;
};

module.exports = listContacts;
