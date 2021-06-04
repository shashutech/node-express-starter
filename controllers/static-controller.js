const staticController = {
  // Web app landing/home page view
  index: (req, res, next) => {
    res.render("index");
  },

  // Details page about the project
  details: (req, res, next) => {
    res.render("details");
  },
};

module.exports = staticController;
