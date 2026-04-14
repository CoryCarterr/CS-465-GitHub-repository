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

// POST /api/trips
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

// PUT /api/trips/:tripCode
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.tripCode,
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ message: 'trip not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindCode,
  tripsAddTrip,
  tripsUpdateTrip
};