const userController = {
  // Register View
  register: (req, res, next) => {
    res.render("users/register");
  },

  // Registration form data handling
  handleRegistration: (req, res, next) => {},

  // Login View
  login: (req, res, next) => {
    res.render("users/login");
  },

  // Login form data handling
  handleLogin: (req, res, next) => {},
};

module.exports = userController;
