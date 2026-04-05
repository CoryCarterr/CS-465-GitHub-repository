const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  length: String,
  start: Date,
  resort: String,
  perPerson: Number,
  image: String,
  description: String
});

mongoose.model('Trip', tripSchema);