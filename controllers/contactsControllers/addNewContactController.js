const contacts = require("../../models/contacts");

const addNewContactController = async (req, res) => {
  const { name, email, phone, favorite = false } = req.body;
  await contacts.addContact(name, email, phone, favorite);
  res.status(201).json({ status: "Successfully created" });
};

module.exports = addNewContactController;
