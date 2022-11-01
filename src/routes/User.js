const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/users', userController.index);
routes.post('/users', userController.create);

module.exports = routes;