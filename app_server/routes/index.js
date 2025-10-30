const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlRoadmap = require('../controllers/roadmap'); // 👈 Add this line

// ROUTES
router.get('/', ctrlMain.home);
router.get('/about', ctrlMain.about);
router.get('/auth', ctrlMain.auth);
router.get('/dashboard', ctrlMain.dashboard);
router.get('/resume-tools', ctrlMain.resume);
router.get('/contact', ctrlMain.contact);

// 👇 Add this route
router.get('/roadmap', ctrlRoadmap.roadmap);

module.exports = router;
