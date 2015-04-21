var express           = require('express');
var router            = express.Router();

/**
 * Homepage
 */
router.get('/', function(req, res) {
  res.render('index', { title: "whalespin.co" });
});

module.exports = router;
