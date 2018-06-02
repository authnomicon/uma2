/* global describe, it */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../../app/http/exchange/ticket/exchange');


describe('http/exchange/ticket/exchange', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/js/http/oauth2/Exchange');
    expect(factory['@type']).to.equal('urn:ietf:params:oauth:grant-type:uma-ticket');
    expect(factory['@singleton']).to.be.undefined;
  });

  describe('creating exchange', function() {
    var ticketSpy = sinon.stub();
    var issue = function(){};
    
    var factory = $require('../../../../app/http/exchange/ticket/exchange',
      { 'oauth2orize-uma': { exchange: { ticket: ticketSpy } } });
    var exchange = factory(issue);
    
    it('should create exchange', function() {
      expect(ticketSpy).to.have.been.calledOnce;
      expect(ticketSpy).to.have.been.calledWithExactly(issue);
    });
  });
  
});
