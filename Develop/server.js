// requiring packages
const express = require("express");
const fs = require("fs");
const path = require("path");

//init express
const app = express();
//require files
 require("./routes/htmlRoutes")(app);
 require("./routes/apiRoutes")(app);



const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request




// listener
app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})
