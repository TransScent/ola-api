const express = require('express');
const router = express.Router();
const UserDetails = require('../controllers/user_controller');
router.post('/', UserDetails.getUserDetails);

module.exports = router;
