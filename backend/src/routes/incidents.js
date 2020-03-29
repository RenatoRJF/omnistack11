const express = require('express');
const routes = express.Router();
const { index, create, remove } = require('../controllers/IncidentController');

// incidents
routes.get('/', index);
// incidents/:id
routes.get('/', index);
// incidents
routes.post('/', create);
// incidents/:id
routes.delete('/:id', remove);

module.exports = routes;
