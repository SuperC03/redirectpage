var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var links = {
    google: {
        "link": "https://www.google.com",
        "name": "Google",
        "image": "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },  
    amazon: {
        "link": "https://www.amazon.com",
        "name": "Amazon",
        "image": "http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg"
    },
    netflix: {
        "link": "https://www.netflix.com",
        "name": "Netflix",
        "image": "https://cdn.wccftech.com/wp-content/uploads/2016/06/netflix.png"
    }
};

app.get("/", function(req, res){
    res.render("home", {links: links});
});

app.get("/addlink", function(req, res){
   res.render("addlink"); 
});

app.post("/addlink", function(req, res){
    links[req.body.name] = req.body;
    res.redirect("/");
});

app.get("/:linkSend", function(req, res){
    res.redirect(links[req.params.linkSend]["link"]);
});

app.listen(8080, function(){
    console.log("Server is active");
})

