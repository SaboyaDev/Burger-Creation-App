var htmlRoutes = (app) => {
  app.get("/", (req, res) => {
    // db.Burgers.findAll({}).then(function(dbBurgers) {
    //   res.json(dbBurgers);
    res.render("index", {
      layout: "main"
    });
  });
};

module.exports = htmlRoutes;