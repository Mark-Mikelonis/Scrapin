var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models/Index");

var PORT = 3333;

// Initialize Express
var app = express();

// Configure middleware


// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});


app.get("/", function (req, res) {
    
    axios.get("https://arstechnica.com/").then(function (response) {
        var $ = cheerio.load(response.data);
        
        $("article").each(function(i, element){
            var result = {};
            result.headline = $(this).find("header h2 a").text().trim();
            result.link = $(this).children("a").attr("href");
            result.summary = $(this).find("header p").text().trim().split(".")[0];
            result.postID = $(this).data("post-id");
            result.imgUrl = $(this).find(".listing").attr("style").toString().split("'")[1];
            
            db.Article.findOne({postID: result.postID.toString()})
                .then(function(data){
                    if(!data){
                        db.Article.create(result)
                            .then(function(data){
                            
                                res.redirect("/articles");
                            
                            })
                            .catch(function(err){
                                return err;
                        });
                    }
                })
                .catch(function(err){
                    return err;
                }); 
            
        });
       
    });    
});
app.get("/articles", function(req,res){
    db.Article.find({})//.sort({_id:-1})
        .then(function(dbArt){
            var hbsObj = {
                articles: dbArt
            }
            res.render("index", hbsObj);
        })
        .catch(function(err){
            res.json(err);
        });
});   
app.get("/articles/:id", function(req,res){
    db.Article.findOne({_id: req.params.id})
        .populate("note")
        .then(function(dbArt){
            return data;
        })
        .catch(function(err){
            return err;
        })
})
app.post("/notes/:id", function(req,res){
    db.Note.create(req.body)
        .then(function(data){
            return db.Article.findOneAndUpdate({_id: req.params.id},{note: data._id}, {new:true});        
        })
        .then(function(dbArt){
            res.json(dbArt);
        })
        .catch(function(err){
            res.json(err);
        });
});



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});


  