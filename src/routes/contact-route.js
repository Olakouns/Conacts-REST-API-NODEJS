const express = require('express');
const router = express.Router();

// Require controller modules.

const contactController = require("../controllers/contact-controller");

// GET request for list of all Contact.
router.get("/", contactController.getContacts);

// POST REQUEST FOR CREATING Contact
router.post("/create", contactController.createContactPost);

// POST REQUEST FOR CREATING Contact
router.get("/:id", contactController.getDetailContact);

// POST request to update Contact.
router.put("/:id/update", contactController.updateContactPost);

// POST request to delete Contact.
router.delete("/:id/delete", contactController.deleteContactPost);

module.exports = router;
