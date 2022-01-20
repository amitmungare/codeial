const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutusController');

router.get('/aboutme', aboutController.about);

module.exports= router;