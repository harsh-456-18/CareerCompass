const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

// ROUTES
router.get('/', ctrlMain.home);
router.get('/about', ctrlMain.about);
router.get('/auth', ctrlMain.auth);  // ✅ This line must exist
router.get('/dashboard', ctrlMain.dashboard);
router.get('/roadmap', ctrlMain.roadmap);
router.get('/resume-tools', ctrlMain.resume);
router.get('/contact', ctrlMain.contact);

module.exports = router;
