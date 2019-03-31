// *****************************************************************************
// This file is the starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");

// Models Import
// =============================================================
var db = require("./models");

// Express Set up
// =============================================================
var app = express();
var PORT = process.env.PORT || 8086;

// Allows Express to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Static Files
// =============================================================
app.use(express.static("public/"));

// Controller
// =============================================================
require("./controllers/burgersController.js")(app);

// Listener
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on PORT:" + PORT);
    console.log("http://localhost:" + PORT);
  });
});