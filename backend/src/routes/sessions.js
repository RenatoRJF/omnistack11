const express = require('express');
const routes = express.Router();
const { create } = require('../controllers/SessionController');

routes.post('/', create);

module.exports = routes;
