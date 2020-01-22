// requiring packages
var express = require("express");
var fs = require("fs");
var path = require("path");

//init express
var app = express();
//require files
 require("./routes/htmlRoutes")(app);
 require("./routes/apiRoutes")(app);



var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request




// listener
app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})
