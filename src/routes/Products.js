const express = require('express');

const productsController = require('../controllers/productsController');

const routes = express.Router();

routes.get('/products', productsController.index);
routes.post('/products', productsController.create);

module.exports = routes;