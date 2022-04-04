const express = require('express');
const userRoutes = require('./user/routes');
const loginRoutes = require('./login/routes');


const Routes = (dependencies) => {
  const router = express.Router();
  router.use('/users', userRoutes(dependencies));
  router.use('/login', loginRoutes(dependencies));
  
  return router;
}

module.exports = Routes;
