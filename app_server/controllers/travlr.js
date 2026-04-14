const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const travel = async (req, res) => {
  const trips = await Trip.find();
  res.render('travel', { trips });
};

module.exports = {
  travel
};