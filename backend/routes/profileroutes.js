const express = require('express');
const { getUserprofile, registerUser } = require('../controllers/profilecontroller');

const router = express.Router();


router.get('/profile', (req, res) => {});

// POST request to update user profile
router.post('/profile', (req, res) => {});

module.exports = router;
