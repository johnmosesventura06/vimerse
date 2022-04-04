const express = require('express');
const LoginController = require('./controller');
const UserDatabase = require('../data_access/database');
const UserRepository = require('./repository');

const loginRoutes = () => {
  const database = new UserDatabase();
  const repository = new UserRepository(database);
  const router = express.Router();
  const controller = LoginController( repository );

  router.route('/')
    .post(controller.loginUser)
  
  return router;
}

module.exports = loginRoutes;
