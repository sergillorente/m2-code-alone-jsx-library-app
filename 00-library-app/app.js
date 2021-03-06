require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const booksRouter = require('./routes/booksRouter');

const mongoose = require('mongoose');
const erv = require('express-react-views');

const app = express();

const DB_NAME = 'library';

// DB CONNECTION

mongoose
    .connect(`mongodb://localhost:27017/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((x) => {
        console.log(`Connected to DB: "${x.connections[0].name}"`);
    })
    .catch((error) => {
        console.log('Error connecting to mongo', error)
    });


// VIEW ENGINE SET UP

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());


// MIDDLEWARE

app.use(express.static(__dirname + "/public"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', booksRouter);

// ROUTES

app.get("/", (req, res, next) => {
    res.render("Home");
});

module.exports = app;
