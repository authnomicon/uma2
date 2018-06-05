exports = module.exports = function(authenticate, ceremony) {
  
  return ceremony('uma2/interaction',
    authenticate([ 'session', 'anonymous' ]),
  { external: true });
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/ceremony'
];
