var express=require("express");
var app= express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var passport=require("passport");
var LocalStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
var User=require("./models/user");
var Client=require("./models/client");
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
app.set('view engine', 'ejs');
const accountSid = 'AC2cadd7718f3315783f8d3b0a3d4d43e4';
const authToken = '2d4a1232c67ae88869e819acd0caac33';

mongoose.connect("mongodb://localhost/medicalApp");
var db=mongoose.connnection;

app.use(require("express-session")({
	secret: "Aparoksha",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));


passport.use(new LocalStrategy(User.authenticate()));
//passport.use(new LocalStrategy(Client.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.serializeUser(Client.serializeUser());
passport.deserializeUser(Client.deserializeUser());

var ambulanceSchema=new mongoose.Schema({
	driverName:String,
	ambulanceNumber:String,
	phoneNumber:String,
	loginId:String
});
var ambulance=new mongoose.model("ambulance",ambulanceSchema);

app.get("/",function(req,res){
	res.render('landing');
});

app.get("/userLogin",function(req,res){
	res.render('userLogin');
});

app.post("/userLogin",passport.authenticate("local", {
		successRedirect: "/userHome",
		failureRedirect: "/userLogin"
	}),function(req,res){
	console.log("User Login Successful!")
});

app.get("/userSignup",function(req,res){
	res.render('userSignup');
});

app.post("/userSignup",function(req,res){
	User.register(new User({username:req.body.username}),
				req.body.password,function(err,user){
					if(err){
						console.log(err);
						alert("Signup not Successful!");
						return res.render("/userSignup");
					}
					passport.authenticate("local")(req,res,function(){
						//res.redirect("/userHome");
						res.send("Done yet");
					});
				});
});

app.get("/userHome",isLoggedIn,function(req,res){
	res.render('userHome');
});

app.get("/book/:id",isLoggedIn,function(req,res){
	ambulance.findById(req.params.id,function(err,bookedAmbulance){
		if(err){
			alert("Booking Could Not Be Done!");
			res.redirect("/userHome");
		}
		else{
			alert("Booking Successful");
			client.messages.create({
     		body: 'Notify the User',
     		to: '+7380681142',
     		from: '+12028997616'
   				})
  			.then(message => console.log(message.sid));
			res.render("/userHome");
		}
	});
});

app.get("/userLogout",function(req,res){
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next;
	}
	res.redirect("/");
};

app.get("/clientSignup",function(req,res){
	res.render('clientSignup');
});

app.post("/clientSignup",function(req,res){
	Client.register(new Client({username:req.body.username}),
			req.body.password,function(err,client){
				if(err){
					console.log(err);
					alert("Signup not Successful!");
					return res.render("/clientSignup");
				}
				passport.authenticate("local")(res,res,function(){
					//res.render("/clientHome");
					res.send("Done Yet!");
				});
			});
});

app.get("/clientLogin",function(req,res){
	res.render('clientLogin');
});

app.post("/clientLogin",passport.authenticate("local", {
		successRedirect: "/clientHome",
		failureRedirect: "/clientLogin"
	}),function(req,res){
	console.log("Client Login Successful!")
});


app.get("/clientHome",function(res,req){
	res.render(clientHome);
});

app.post("/clientHome",function(res,req){
	ambulance.create(req.body.ambulance,function(err,newAmbulance){
		if(err){
			console.log("Error in Entering Data");
			res.redirect("/clientHome");
		}
		else
		{
			console.log("Ambulance Details Added Successfully");
			res.redirect("/");
		}
	});
});

app.listen(3000);
console.log("Running on Port 3000");