var assert = require('assert');
var Calculator = require('./Calculator')

describe('Calculator', function() {
  describe('add()', function() {
    it('should add two numbers', function() {
      var calculator = new Calculator();
      assert.equal(calculator.add(1,2), 3);
    });
  });
});