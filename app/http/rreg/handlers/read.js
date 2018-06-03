exports = module.exports = function(authenticate) {
  
  function validate(req, res, next) {
    console.log('UMA READ');
    console.log(req.params)
  }
  
  
  return [
    //authenticate('bearer'),
    validate
  ];
};

exports['@require'] = [
  //'http://i.bixbyjs.org/http/middleware/authenticate'
];
