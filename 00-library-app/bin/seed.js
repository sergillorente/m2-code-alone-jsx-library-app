const mongoose = require("mongoose");

const Author = require('./../models/Author.model');
const Book = require('./../models/Book.model');

const authors = require('./authors-mock-data');
const books = require('./books-mock-data');

const DB_NAME = library;

mongoose
    .connect(`mongodb://localhost:27017/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
    .then((x) => {
        
    })