/* global describe, it */

var pkg = require('..');
var expect = require('chai').expect;


describe('authnomicon-oauth2-uma2', function() {
  
  it('should export hello world', function() {
    expect(pkg.hello).to.equal('world');
  });
  
});
