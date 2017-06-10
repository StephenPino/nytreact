var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  date: String,
  dateSaved: {
    type: Date,
    default: Date.now
  },
  url: String
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;