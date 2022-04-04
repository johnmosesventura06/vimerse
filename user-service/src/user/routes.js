const express = require('express');
const UserController = require('./controller');
const UserDatabase = require('../data_access/database');
const UserRepository = require('./repository');
const requireAuth = require('../middlewares/require-auth');

const userRoutes = () => {
  const database = new UserDatabase();
  const repository = new UserRepository(database);
  const router = express.Router();
  const controller = UserController( repository );

  router.route('/')
    .get(requireAuth, controller.getUsers)
    .post(controller.addUser)
    .put(requireAuth, controller.updateUser)
  
  router.route('/byid')
    .get(requireAuth, controller.getUserById) 
  
  router.route('/superagent')
    .get(requireAuth, controller.getPlayersAgents) 

  router.route('/agentsplayer')
    .get(requireAuth, controller.getPlayers)
    
  router.route('/alluser')
    .get(requireAuth, controller.getUserByType)

  router.route('/playeragentsuperagent')
    .get(controller.getPlayerAgentAndSuperAgent)

  return router; 
}

module.exports = userRoutes;
