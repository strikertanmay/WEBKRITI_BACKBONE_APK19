var express = require('express');
var app = express();
var _ = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "xxxx",
    database: "ambulance"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


// Add this line below
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get("/ambulances", function (req, res) {

    var sqlQuery = "select * from ambulance";
    con.query(sqlQuery, function (err, result) {
        if (err) throw (err);
        res.send(result);
    });
});

app.get("/login/moderator", function (req, res) {
    if (req.cookies['moderator'] || req.cookies['user']) {
        if (req.cookies['moderator']) {
            res.redirect("/moderatorDashboard");
        } else {
            res.redirect("/userDashboard");
        }
    } else {
        res.render("moderatorLogin.ejs");
    }
});

app.get("/login/user", function (req, res) {
    if (req.cookies['moderator'] || req.cookies['user']) {
        if (req.cookies['moderator']) {
            res.redirect("/moderatorDashboard");
        } else {
            res.redirect("/userDashboard");
        }
    } else {
        res.render("userLogin.ejs");
    }
});

app.get("/moderatorDashboard", function (req, res) {
    if (!req.cookies['moderator'] || req.cookies['user']) {
        res.send("Not allowed to see this page");
    } else {
        var email = req.cookies['moderator'];
        var sqlQuery = "select * from moderators where email = ?";
        con.query(sqlQuery, [email], function (err, result) {
            if (err) throw (err);
            res.render("moderatorDashboard.ejs", { data: result[0] });
        });
    }
});

app.get("/userDashboard", function (req, res) {
    if (!req.cookies['user'] || req.cookies['moderator']) {
        res.send("Not allowed to se the page");
    } else {
        var email = req.cookies['user'];
        var sqlQuery = "select * from users where email = ?";
        con.query(sqlQuery, [email], function (err, result) {
            if (err) throw (err);
            res.render("userDashboard.ejs", { data: result[0] });
        });
    }
});

app.post("/auth/moderator", function (req, res) {
    if (req.cookies['moderator'] || req.cookies['user']) {
        res.send("Not allowed to do this!");
    } else {
        var email = req.body.email;
        var password = req.body.password;

        var sqlQuery = "select password from moderators where email = ?";
        con.query(sqlQuery, [email], function (err, result) {
            if (err) throw (err);
            if (result.length === 0) {
                res.send("Login failed!");
            } else {

                var queryPassword = result[0].password;
                if (queryPassword === password) {
                    res.cookie('moderator', email, { maxAge: 90000, httpOnly: true });
                    res.redirect("/moderatorDashboard");
                } else {
                    res.send("Login failed!");
                }
            }
        });
    }
});

app.post("/auth/user", function (req, res) {
    if (req.cookies['user'] || req.cookies['moderator']) {
        res.send("You're not allowed to do this");
    } else {
        var email = req.body.email;
        var password = req.body.password;

        var sqlQuery = "select password from users where email = ?";
        con.query(sqlQuery, [email], function (err, result) {
            if (err) throw (err);
            if (result.length === 0) {
                res.send("Login failed!");
            } else {

                var queryPassword = result[0].password;
                if (queryPassword === password) {
                    res.cookie('user', email, { maxAge: 90000, httpOnly: true });
                    res.redirect("/userDashboard");
                } else {
                    res.send("Login failed!");
                }
            }
        });
    }
});

app.post("/ambulances", function (req, res) {
    if (!req.cookies['moderator'] || req.cookies['user']) {
        res.send("Not allowed to access this");
    } else {
        var driverName = req.body.driverName;
        var phoneNumber = parseInt(req.body.phoneNumber);
        var location = req.body.location;
        var status = "active";

        var tmp = [driverName, phoneNumber, location, status];
        var values = [tmp];
        var sqlQuery = "insert into ambulance (driverName, phoneNumber, location, status) values ?";
        con.query(sqlQuery, [values], function (err, result) {
            if (err) throw (err);
            res.redirect("/moderatorDashboard");
        });
    }
});

app.post("/ambulances/:id", function (req, res) {
    if (!req.cookies['moderator'] || req.cookies['user']) {
        res.send("You're not allowed to access this nigga");
    } else {
        var ambulanceNumber = req.params.id;
        var driverName = req.body.driverName;
        var phoneNumber = parseInt(req.body.phoneNumber);
        var location = req.body.location;
        var status = req.body.status;

        var sqlQuery = "update ambulances set driverName = ?, phoneNumber = ?, location = ?, status = ? where ambulanceNumber = ?";
        var res = [driverName, phoneNumber, location, status, ambulanceNumber];
        con.query(sqlQuery, res, function (err, result) {
            if (err) throw (err);
            res.send("OK");
        });
    }
});

app.listen(3000, function () {
    console.log("Server initialised");
});