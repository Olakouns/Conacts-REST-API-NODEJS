const Contact = require("../models/contact");

exports.getContacts = async (req, res) => {
    res.send(await Contact.getAllContacts())
}


exports.createContactPost = async (req, res) => {
    res.send(await Contact.addContact(req.body));
}

exports.getDetailContact = async (req, res) => {
   res.send(await Contact.getOneContact(req.params.id));
}

exports.updateContactPost = async (req, res) => {
    res.send(await Contact.updateContact(req.params.id, req.body))
}

exports.deleteContactPost = async (req, res) => {
    res.send(await Contact.deleteContact(req.params.id));
}