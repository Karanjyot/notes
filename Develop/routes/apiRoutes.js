const path = require("path");
const fs = require("fs");

var notes = require("../db/db")

module.exports = function(app) {
   
   app.get("/api/notes", (req, res) =>{
      return res.json(notes);
   });
   
   
    app.post("/api/notes", (req, res) => {

       var newNote = req.body 
        notes.push(newNote);
       
        console.log(notes)

       
  

        res.json(notes);


    });


    app.delete("/api/notes/:title", function(req, res) {
      var chosen = req.params.title;
    
      console.log(chosen);
    
      for (var i = 0; i < notes.length; i++) {
        if (chosen === notes.title) {
          notes.splice(i, 1)
        }
      }
    
     
      res.json(notes);
    });
    

}


// fs.appendFile(path.join(__dirname, "../db", "/db.js"), notes, err =>{

//    if (err) throw err;
//    console.log("folder created");

//  });