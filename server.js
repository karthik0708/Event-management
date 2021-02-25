let express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const { profile } = require('console');

let app = express();
app.disable("x-powered-by");
app.use(express.static("basic/public"));
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require("./passport.js");

function call_back(category,type){
	app.get(category+'/google',passport.authenticate(type, {scope:['profile','email']}))
	app.get(category+'/google/callback',
		passport.authenticate(type,{failureRedirect: '/failed'}),(req,res)=>{
		console.log(req.user)
		res.redirect(category+'/home')
	})
}

call_back('/customer','cust');
call_back('/banquet','banq');
call_back('/caterer','cat');
call_back('/photographer','photog');


function confirmation(category){
	app.get('/'+ category + '/home',(req,res)=>{
    	res.send('successful login '+ category)
	})
}

confirmation('customer');
confirmation('banquet');
confirmation('caterer');
confirmation('photographer');

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"basic/public",'index.html'))
})
app.listen(5000, ()=>{
    console.log('The server listenining on port 5000')
})
