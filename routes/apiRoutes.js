const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./../db/db.json", "utf8"));
// Set up for when users visit the page.
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });

};
