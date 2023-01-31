const contacts = require("../../models/contacts");

const addNewContactController = async (req, res) => {
  const { name, email, phone, favorite = false } = req.body;
  const { _id } = req.user;
  await contacts.addContact({ name, email, phone, favorite }, _id);
  res.status(201).json(
    { status: "Successfully created" },
    {
      contact: {
        name: { name },
        email: { email },
        phone: { phone },
        _id: { _id },
      },
    }
  );
};

module.exports = addNewContactController;
