const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nom : {type : String},
    prenom : {type : String},
    tel : {type : String},
    mobile : {type : String},
    email : {type : String},
});

const Contact = mongoose.model('Contact', ContactSchema)


exports.getAllContacts = async () => {
    return await Contact.find();
}

exports.addContact = async (newContact) => {
    try {
        let contact = new Contact(newContact);
        await contact.save();
        return  result =  {
            success: true,
            message: "Contact saved"
        };
    } catch (error) {
        return result = {
            success: false,
            message : `Some error occure :${err} `
        };
    }
}

exports.getOneContact  = async (idContact) => {
    return await Contact.findById(idContact)
}

exports.updateContact = async (idContact, ContactUpdate) => {
    return Contact.findByIdAndUpdate(
        idContact,
        ContactUpdate,
        {new : true}
    )
}

exports.deleteContact = async (idContact) => {
    return Contact.findByIdAndRemove(idContact)
}