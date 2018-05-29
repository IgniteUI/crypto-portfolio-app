var should = require('should');
var compare = require('../index');


describe('index.js', function () {
    it ('1.0.0 < 1.0.1', function () {
        compare('1.0.0', '1.0.1').should.equal(-1);
    });

    it ('2.10.0 > 2.0.1', function () {
        compare('2.10.0', '2.0.1').should.equal(1);
    });

    it ('35.2.5 > 24.3.6', function () {
        compare('35.2.5', '24.3.6').should.equal(1);
    });

    it ('3.2.5-3 > 3.2.5', function () {
        compare('3.2.5-3', '3.2.5').should.equal(1);
    });

    it ('5.2.5-3 < 5.2.5-13', function () {
        compare('5.2.5-3', '5.2.5-13').should.equal(-1);
    });

    it ('2014.10.15-alpha.1 < 2014.10.15-beta.1', function () {
        compare('2014.10.15-alpha.1', '2014.10.15-beta.1').should.equal(-1);
    });

    it ('2014.10.15-alpha < 2014.10.15-alpha.2', function () {
        compare('2014.10.15-alpha', '2014.10.15-alpha.2').should.equal(-1);
    });

    it ('10.100.1-beta.61 > 10.100.1-beta.51', function () {
        compare('10.100.1-beta.61', '10.100.1-beta.51').should.equal(1);
    });

    it ('0.0.0 == 0.0.0', function () {
        compare('0.0.0', '0.0.0').should.equal(0);
    })

    it ('9.178.1350-beta.66.0.183.99999 == 9.178.1350-beta.66.0.183.99999', function () {
        compare('9.178.1350-beta.66.0.183.99999', '9.178.1350-beta.66.0.183.99999').should.equal(0);
    });

})
