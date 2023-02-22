const express = require("express");
const bodyParser = require("body-parser")

const app = express();
let item = '';
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    // res.send("Hello World Let us check the problem");;
   // res.sendFile(__dirname + "/index.html");

   let today = new Date();
  // let currentDay = today.getDay();
   let day = "";
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    day =today.toLocaleString("en-US", options);
   res.render('index', {kindOfDay : day, newListItem : item});
});
app.post("/", function(req, res){
     item = req.body.newItem;
    res.redirect("/");

})
app.listen(5000, function(){
    console.log("The Server was started at port 5000 and the template is okay.");

})