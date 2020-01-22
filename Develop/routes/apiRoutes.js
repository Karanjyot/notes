const path = require("path");

var notes = require("../db/db.js")

module.exports = app => {
   
   app.get("/api/notes", (req, res) =>{
       res.json(notes);
   });
   
   
    app.post("/api/notes", (req, res) => {

       var newNote = req.body 
        notes.push(newNote);
       
        console.log(notes)

        res.json(notes);
    });

}
