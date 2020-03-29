const express = require('express');
const routes = express.Router();
const { index, create } = require('../controllers/OngController');

routes.get('/', index);

routes.post('/', create);

module.exports = routes;
