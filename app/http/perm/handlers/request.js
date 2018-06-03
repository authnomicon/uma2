exports = module.exports = function(parse, authenticate) {
  
  function validate(req, res, next) {
    console.log('UMA PERM CREATE');
    console.log(req.body)
    
    
    res.json({ ticket: '123-456' })
  }
  
  
  return [
    //authenticate('bearer'),
    validate
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse'
  //'http://i.bixbyjs.org/http/middleware/authenticate'
];
