const express = require('express');

const booksRouter = express.Router();

// Route back to the APP file where the server listens what's going on

booksRouter.get('/', function (req, res, next) {
    res.render("Books");
  });


module.exports = booksRouter;