const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

// Set up for when users visit the page.
module.exports = function (app) {
  // pulling data from notes db
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });
  // pulling id from notes db
  app.get("/api/notes/:id", function (req, res) {
    res.json(data[Number(req.params.id)]);
  });
  // adding notes id to notes db
  app.post("/api/notes/:id", function (req, res) {
    let newNote = req.body;
    let uniqueId = (data.length).toString();
    newNote.id = uniqueId;
    data.push(newNote);
    console.log(uniqueId);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
      if (err) throw new Error("something went wrong");
    });
    res.json(data);
  });
  
  // wip deleting from notes db via id
  app.delete("/api/notes/:id", function (req, res) {
    if(this.newId === undefined)
      {return}
    let noteId = req.prams.id;
    let newId = 0;
    console.log(`Deleting note with id ${noteId}`);
    data = data.fliter((currentNote) => {
      return currentNote.id != noteId;
    });
    for (currentNote of data) {
      currentNote.id = newId.toString();
      newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
  });
};
