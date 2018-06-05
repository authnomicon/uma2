exports = module.exports = function(interactionHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/', interactionHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/uma2/ClaimsInteractionService'
];
exports['@path'] = '/uma2/claims';
exports['@require'] = [
  './handlers/interaction'
];
