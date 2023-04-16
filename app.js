require('dotenv').config();
// const mongoose = require('mongoose')
const express = require('express')
require('./server/config/db')
const session = require('express-session')
const passport = require('passport')
const mongoStore = require('connect-mongo')
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = 3000

//Use them above
app.use(passport.initialize());
app.use(passport.session());

//Helps you to access from the html pages
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//static files
app.use(express.static("public"))
//access css from public folders


//templating enigne
app.use(expressLayouts);
app.set("layout", "./layouts/main")
app.set("view engine", "ejs")

// app.get('/', (req, res) => {
//     const locals = {
//         title: "Notes App",
//         description: "Sticky Notes App"
//     }
//     res.render('index', locals)
//     //render means files like handlebars,ejs
//     //send for files like html/css
// })
//Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
app.use('/', require('./server/routes/auth'))

//handle 404 error
app.get('*', (req, res) => {
    // res.status(404).send("404 Page Not Found")
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log("listening ");
})