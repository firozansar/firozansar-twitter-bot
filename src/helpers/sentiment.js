const unirest = require('unirest')

/*
  Get a new API key at https://market.mashape.com/vivekn/sentiment-3
*/

// Sentiment 3 Mashape API key
var apiKey = '2eYKThsuQmmshLYHTbm10Iz61arzp12TPmMjsnTmvHgRb94v6V'

var sentiment = {}

sentiment.init = function () {
  return unirest.post('https://community-sentiment.p.mashape.com/text/')
  .header('X-Mashape-Key', apiKey)
  .header('Content-Type', 'application/x-www-form-urlencoded')
  .header('Accept', 'application/json')
}

module.exports = sentiment
