const staticController = {
  index: (req, res, next) => {
    res.render("index");
  },

  details: (req, res, next) => {
    res.render("details");
  },
};

module.exports = staticController;
