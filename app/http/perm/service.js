exports = module.exports = function(createHandler) {
  var express = require('express');
  var router = new express.Router();
  
  // https://docs.kantarainitiative.org/uma/wg/oauth-uma-federated-authz-2.0-09.html#permission-endpoint
  
  router.post('/', createHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/uma2/PermissionService'
];
exports['@path'] = '/uma2/perm';
exports['@require'] = [
  './handlers/request'
];
