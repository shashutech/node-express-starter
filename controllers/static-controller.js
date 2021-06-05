const staticController = {
  // Web app landing/home page view
  index: (req, res, next) => {
    res.render("index", {
      title: "Homepage |",
    });
  },

  // Details page about the project
  details: (req, res, next) => {
    res.render("details", {
      title: "Details |",
    });
  },
};

module.exports = staticController;
