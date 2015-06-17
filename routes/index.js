var express           = require('express');
var router            = express.Router();

/**
 * Homepage
 */
router.get('/', function(req, res) {

  // Array of whale gifs
  var whales = [
    '/images/whales/trainer.gif',
    '/images/whales/trainer-reverse.gif',
    '/images/whales/no-regrets.gif'
  ];

  // Pick an image at random
  var index = Math.floor(Math.random() * whales.length);

  // Pass the random GIF url to the template engine
  res.render('index', { title: "whalespin.co", whale: whales[index] });
});

module.exports = router;
