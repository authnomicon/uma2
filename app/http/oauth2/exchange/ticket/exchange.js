exports = module.exports = function(issue) {
  var oauth2orize = require('oauth2orize-uma');
  
  return oauth2orize.exchange.ticket(issue);
}

exports['@implements'] = 'http://schemas.authnomicon.org/js/http/oauth2/Exchange';
exports['@type'] = 'urn:ietf:params:oauth:grant-type:uma-ticket';
exports['@require'] = [ './issue' ];
