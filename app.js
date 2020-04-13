const express = require('express');
const app = express();
const date = require(__dirname + '/date.js');

// let item = "";  //only one item is stored and when we want to store next item, it gets over-ridden by this new item we want to add
//so create an array
let items = [];

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {

    let decideDay = date.getDate();
    res.render('list', { dayToday : decideDay, newlistItems : items });

});


app.post("/", (req,res) => {

    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");

});

app.listen(process.env.PORT || 3000, ()=>{
    //process.env.port for heroku deploy
    console.log("Server is running on the port 3000");
    
})
//comment 1
//comment 2