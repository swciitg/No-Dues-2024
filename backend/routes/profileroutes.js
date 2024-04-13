const express = require('express');
const { getUserprofile, registerUser } = require('../controllers/profilecontroller');

const router = express.Router();


router.get('/profile/:id',getUserprofile);
router.post('/register',registerUser);

module.exports = router;