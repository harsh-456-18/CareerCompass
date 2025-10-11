var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Careercompass',
    pages: [
      "Login / Signup",
      "Landing Page",
      "Dashboard",
      "Career Roadmap",
      "Resume Tools",
      "About Us",
      "Contact / Help"
    ]
  });
});

module.exports = router;
