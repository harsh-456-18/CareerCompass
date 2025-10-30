module.exports.home = (req, res) => {
  res.render('index');
};

module.exports.about = (req, res) => {
  res.render('about');
};

module.exports.auth = (req, res) => {
  res.render('auth', { title: 'Sign Up / Login' });
};


module.exports.dashboard = (req, res) => {
  res.render('dashboard');
};


module.exports.resume = (req, res) => {
  res.render('resume-tools');
};

module.exports.contact = (req, res) => {
  res.render('contact');
};
