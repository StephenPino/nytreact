var Articles = require("../models/Article");

module.exports = {

    find: function (req, res) {
        console.log("Retrieving all saved articles.");
        Articles.find({}, function (err, docs) {
            if (err) {
                return res.send(err);
            }
            res.json(docs);
        });
    },

    save: function (req, res) {
        console.log("Saving a new article.");
        var newArticle = new Articles({
            title: req.body.title,
            date: req.body.date,
            url: req.body.url
        });
        newArticle.save(function (err) {
            if (err) {
                return res.send(err);
            }
            res.sendStatus(204);
            console.log("Save successful.")
        });
    },

    destroy: function (req, res) {
        console.log(`Removing article with id ${req.query.id} from database.`);
        Articles.findByIdAndRemove(req.query.id, function (err) {
            if (err) {
                return res.send(err);
            }
            res.sendStatus(204);
        });
    }
    
};