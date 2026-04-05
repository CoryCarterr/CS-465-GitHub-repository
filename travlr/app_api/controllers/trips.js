const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(404).json(err);
  }
};

// GET /api/trips/:tripCode
const tripsFindCode = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripCode);

    if (!trip) {
      return res.status(404).json({ message: 'trip not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindCode
};
