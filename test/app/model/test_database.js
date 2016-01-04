/*
*  Here chai as promised is used because
*  database queries are async.
* */

var database = require('../../../app/model/database.js');
var config = require('../../../config.local.js');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);

database.init(config.database);

describe('database.query', function() {
    it('should let me run a query', function() {
        return expect(database.query('Select ? as value', [10])
        ).to.eventually.deep.equal([{value: 10}]);
    });
});