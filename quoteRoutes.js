const express = require("express");

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const quoteRoute = express.Router();

quoteRoute.get("/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send(randomQuote);
});

quoteRoute.get("/", (req, res, next) => {
  if (req.query.person) {
    let specificQuotes = { quotes: [] };
    quotes.forEach((quote) => {
      if (quote.person === req.query.person) {
        specificQuotes.quotes.push(quote);
      }
    });
    if (specificQuotes.quotes.length > 0) {
      res.send(specificQuotes);
    } else {
      res.send([]);
    }
  } else {
    res.send(quotes);
  }
});

quoteRoute.post('/', (req, res, next) => {
    if (req.query.quote && req.query.person) {
        quotes.push(req.query);
        res.status(201).send('Quote Created!');
    } else {
        res.status(400).send('Error, invalid');
    }
})

module.exports = quoteRoute;
