// *********************************************************************************
// This file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring the All Models
var db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {
  // get route -> index
  app.get("/", (req,res) => {
    res.redirect("/burgers");
  });

  app.get("/burgers", (req, res) => {
    db.Burgers.findAll()
      .then((dbBurger) => {
        // console.log(dbBurger);

        var handleBarsObject = {
          burger: dbBurger
        };

        return res.render("index", handleBarsObject);
      });
  });

  app.post("/burgers/create", (req, res) => {
    db.Burgers.create({
      burger_name: req.body.burger_name
    })
    .then((dbBurger) => {
      // console.log(dbBurger);
      res.redirect("/");
    })
  });

  app.put("/burgers/update", (req, res) => {
    console.log({
      id: req.body.id,
      state: req.body.state
    });
    console.log(typeof req.body.state);
    // Why is my data not parsing???
    if(req.body.state === "false") {
      db.Burgers.update({
        devoured: true
      }, {
        where: {
          id: req.body.id
        }
      }).then((dbBurger) => {
        // console.log(dbBurger);
        res.json("/");
      });
    } else {
      db.Burgers.update({
        devoured: false
      }, {
        where: {
          id: req.body.id
        }
      }).then((dbBurger) => {
        res.json("/");
      });
    }
  });
};

