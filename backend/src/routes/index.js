const express = require('express');
const routes = express.Router();

// BASE
routes.get('/', (req, res) => {
  return res.send('API v0.0.1');
});

routes.use('/sessions', require('./sessions'));

// ONGS
routes.use('/ongs', require('./ongs'));

// INCIDENTS
routes.use('/incidents', require('./incidents'));

// PROFILE
routes.use('/profile', require('./profile'));

module.exports = routes;
