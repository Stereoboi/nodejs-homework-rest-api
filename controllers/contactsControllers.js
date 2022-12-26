const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateContactStatus,
} = require("../models/contacts");

const getContacts = async (req, res, next) => {
  try {
    const results = await listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        tasks: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getContactId = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    console.log(contact);
    if (!contact) {
      return res
        .status(400)
        .json({ message: `Contact with id:${contactId} not found` });
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};
const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await removeContact(contactId);
    !contact
      ? res.status(404).json({ message: `Not Found id:${contactId}` })
      : res.status(200).json({ message: `contact id:${contactId} deleted` });
  } catch (error) {
    next(error);
  }
};
const addNewContact = async (req, res) => {
  try {
    const { name, email, phone, favorite = false } = req.body;
    await addContact(name, email, phone, favorite);
    res.status(201).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};
const updtContact = async (req, res) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await updateContact(contactId, req.body);

    if (!updatedContact) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.status(200).json({ status: "success" });
    }
  } catch (error) {
    console.log(error);
  }
};
const updtContactStatus = async (req, res) => {
  try {
    const { contactId } = req.params;

    const updatedContactStatus = await updateContactStatus(contactId, req.body);

    if (!updatedContactStatus) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res
        .status(200)
        .json({ status: `Contact ${contactId} status updated successfully` });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getContacts,
  getContactId,
  deleteContact,
  addNewContact,
  updtContact,
  updtContactStatus,
};
