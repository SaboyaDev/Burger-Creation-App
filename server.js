// *****************************************************************************
// This file is the starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");

// Express Set up
// =============================================================
var app = express();
var PORT = process.env.PORT || 8086;

// Allows Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static Files
// =============================================================
app.use(express.static("public/"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log("Listening on PORT:" + PORT);
});


