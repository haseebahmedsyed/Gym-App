const express = require('express');
const router = express.Router();

const {postContact,getContacts} = require('./contact-controller');

router.post('/contact/post',postContact);
router.get('/contact/get',getContacts);

module.exports = router;