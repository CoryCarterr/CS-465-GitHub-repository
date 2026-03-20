var express = require('express');
var router = express.Router();
var ctrlTravlr = require('../controllers/travlr');

/* GET home page. */
router.get('/', ctrlTravlr.travel);
router.get('/travel', ctrlTravlr.travel);

module.exports = router;