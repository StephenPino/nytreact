// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;
mongoose.Promise = Promise;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

if (process.env.MONGODB_URI) {
  mongoose = mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose = mongoose.connect("mongodb://localhost/nytreact");
}


var db = mongoose.connection;

db.on("error", function(err) {
  console.log(`Mongoose Error: ${err}`);
});

db.once("open", function() {
  console.log("Mongoose connection successful!")
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});