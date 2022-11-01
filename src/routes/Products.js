const routes = require('express').Router();
const productsController = require('../controllers/productsController');

routes.get('/products', productsController.index);
routes.post('/products', productsController.create);

module.exports = routes;