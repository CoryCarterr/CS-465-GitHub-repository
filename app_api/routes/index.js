const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (authHeader == null) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  const headers = authHeader.split(' ');
  if (headers.length < 2) {
    console.log('Not enough tokens in Auth Header: ' + headers.length);
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];

  if (token == null) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }

  jwt.verify(token, 'MY_SECRET', (err, verified) => {
    if (err) {
      return res.status(401).json('Token Validation Error!');
    }

    req.auth = verified;
    next();
  });
}

router
  .route('/trips')
  .get(ctrlTrips.tripsList)
  .post(authenticateJWT, ctrlTrips.tripsAddTrip);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindCode)
  .put(authenticateJWT, ctrlTrips.tripsUpdateTrip);

module.exports = router;