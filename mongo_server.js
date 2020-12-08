const express = require('express');
const gongoose = require('mongoose');
const path = require('path');
const PORT = 3001;
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static("public"));


app.get("/login/:user/:pass", function(req, res){
    var name = req.params.user;
    var password = req.params.pass;

    

})
































app.listen(process.env.PORT || 3001, () => {
    console.log(`server is running and listening`);
});