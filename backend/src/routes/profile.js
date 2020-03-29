const express = require('express');
const routes = express.Router();
const { index } = require('../controllers/ProfileController');

routes.get('/', index);

module.exports = routes;
