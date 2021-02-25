const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const { profile } = require('console');

const app = express()
app.use(express.static("basic/public"));
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require("./passport.js");

app.get('/customer/google',passport.authenticate('cust', {scope:['profile','email']}))
app.get('/customer/google/callback',
    passport.authenticate('cust',{failureRedirect: '/failed'}),(req,res)=>{
    console.log(req.user)
    res.redirect('/customer/home')
})


app.get('/banquet/google', passport.authenticate('banq', {scope:['profile','email']}))
app.get('/banquet/google/callback',
    passport.authenticate('banq',{failureRedirect: '/failed'}),(req,res)=>{
    console.log(req.user)
    res.redirect('/banquet/home')
})

app.get('/caterer/google', passport.authenticate('cat', {scope:['profile','email']}))
app.get('/caterer/google/callback',
    passport.authenticate('cat',{failureRedirect: '/failed'}),(req,res)=>{
    console.log(req.user)
    res.redirect('/caterer/home')
})

app.get('/photographer/google', passport.authenticate('photog', {scope:['profile','email']}))
app.get('/photographer/google/callback',
    passport.authenticate('photog',{failureRedirect: '/failed'}),(req,res)=>{
    console.log(req.user)
    res.redirect('/photographer/home')
})

app.get("/customer/home",(req,res)=>{
    res.send('successful login customer')
})

app.get("/banquet/home",(req,res)=>{
    res.send('successful login banquet')
})

app.get("/caterer/home",(req,res)=>{
    res.send('successful login caterer')
})

app.get("/photographer/home",(req,res)=>{
    res.send('successful login photographer')
})

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"basic/public",'index.html'))
})
app.listen(5000, ()=>{
    console.log('The server listenining on port 5000')
})