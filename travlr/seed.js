const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('./app_server/models/db');

const Trip = mongoose.model('Trip');

const trips = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'trips.json'), 'utf-8')
);

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();