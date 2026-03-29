var express = require('express');
var router = express.Router();
var ctrlTravlr = require('../controllers/travlr');

/* GET home page. */
router.get('/', ctrlTravlr.travel);
router.get('/travel', ctrlTravlr.travel);

module.exports = router;

router.get('/api/trips', async (req, res) => {
  const mongoose = require('mongoose');
  const Trip = mongoose.model('Trip');
  const trips = await Trip.find();
  res.json(trips);
});