var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ server: 'Online', host: process.env.API_HOST+':'+process.env.API_PORT });
});

module.exports = router;
