const express =  require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const connectDb = require("./config/db");


connectDb();


app.get("/",(req,res)=>{
    res.json("Hii there!");
})

//User Login 

app.get("/login",(req,res)=>{
    res.send("You are on login route");
})

app.post("/login",(req,res) =>{
    res.send("sending the login data");
})

//User Signup

app.get("/signup",(req,res)=>{
    res.send("You are on signup route !");
})
app.post("/signup",(req,res)=>{
    res.send("You are sending the signup data! ");
})

app.listen(3000 , (req,res)=>{
    console.log("Server is listening on port 3000");
})