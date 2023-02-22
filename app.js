const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.get('/', function(req, res){
    // res.send("Hello World Let us check the problem");;
    res.sendFile(__dirname + "/index.html");
});

app.listen(5000, function(){
    console.log("The Server was started at port 3000 and added ejs");

})