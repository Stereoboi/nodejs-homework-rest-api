const contacts = require("../../models/contacts");

const addNewContactController = async (req, res) => {
  const { name, email, phone, favorite = false } = req.body;
  const { _id } = req.user;
  const contact = await contacts.addContact(
    { name, email, phone, favorite },
    _id
  );
  res.status(201).json(
    { status: "Successfully created" },
    {
      contact: {
        contact,
      },
    }
  );
};

module.exports = addNewContactController;
