const express = require('express');
const gongoose = require('mongoose');
const Users = require("./db/user")
const path = require('path');
const PORT = 3001;
const app = express();

gongoose.connect('mongodb+srv://sickdata:sick@sick1.mfjtw.mongodb.net/<dbname>?retryWrites=true&w=majority',  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static("public"));


app.get("/login/:user/:pass", function(req, res){
    var name = req.params.user;
    var password = req.params.pass;

    Users.findOne({name: new RegExp(name, 'i')})
    .then(function(data){
        if(data.password===password) {
            res.json("Successfully logged in");
        } else{
            res.json("Incorrect Password")
        }
    })

    

})

app.post("/signUp", (req,res)=>{

    var newUser= {
        name:req.body.name,
        password:req.body.password,
    }
    console.log("in post request");
    Users.create(newUser)
    .then(function(data){
       
        res.json("User Created");
    })
    .catch(function(err){
        res.json(err);
    })
})








app.listen(process.env.PORT || 3001, () => {
    console.log('server is running and listening');
});