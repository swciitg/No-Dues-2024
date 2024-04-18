const express = require('express');
const { getUserprofile, registerUser } = require('../controllers/profilecontroller');

const router = express.Router();


router.get('/profile/:email',getUserprofile);
router.post('/register',registerUser);

module.exports = router;
