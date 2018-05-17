const express = require('express');

module.exports = function(server){


  // define base url
  const router = express.Router();
  server.use('/api', router)

  // billing Cycle routes
  const billingCycle = require('../api/billingCycle/billingCycleServices');
  billingCycle.register(router, '/billingCycles');
}