exports = module.exports = function(listHandler, createHandler, readHandler, updateHandler, deleteHandler) {
  var express = require('express');
  var router = new express.Router();
  
  // https://docs.kantarainitiative.org/uma/wg/oauth-uma-federated-authz-2.0-09.html#resource-registration-endpoint
  
  router.get('/', listHandler);
  router.post('/', createHandler);
  router.get('/:id', readHandler);
  router.put('/:id', updateHandler);
  router.delete('/:id', deleteHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/uma2/ResourceRegistrationService'
];
exports['@path'] = '/uma2/rreg';
exports['@require'] = [
  './handlers/list',
  './handlers/create',
  './handlers/read',
  './handlers/update',
  './handlers/delete'
];
