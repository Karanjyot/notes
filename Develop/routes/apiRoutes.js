const path = require("path");

var notes = require("../db/db.js")

module.exports = app => {
   
   app.get("/notes", (req, res) =>{
       res.json(notes);
   })
   
   
    app.post("/notes", (req, res) => {

    var newNote = req.body        
        notes.push(newNote);
       
        console.log(newNote)
        res.json(newNote);
    })

}
