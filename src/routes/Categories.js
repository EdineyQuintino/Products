const routes = require('express').Router();
const categoriesController = require('../controllers/categoriesController');

routes.get('/categories', categoriesController.index);
routes.post('/categories', categoriesController.create);

module.exports = routes;