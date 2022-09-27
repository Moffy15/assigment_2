const express = require('express');

const hello = express()

hello.get("/home",(req,res)=>{
    res.sendFile(_dirname + "/home.html")
})

hello.get("/hobbies",(req,res)=>{
    res.sendFile(_dirname + "/hobbies.html")
})

hello.get("/about",(req,res)=>{
    res.sendFile(_dirname + "/about.html")
})

hello.get("/contact",(req,res)=>{
    res.sendFile(_dirname + "/contact.html")
})

hello.listen(3000,()=>{
    console.log('Server starting up at: port:3000');
})
