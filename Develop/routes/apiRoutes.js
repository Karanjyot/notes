const path = require("path");

var notes = require("../db/db.js")

module.exports = app => {
   
   app.get("/", (req, res) =>{
       res.json(notes);
   })
   
   
    app.post("/", (req, res) => {

    var newNote = req.body        
        notes.push(newNote);
       
        console.log(newNote)
        res.json(newNote);
    })

}
