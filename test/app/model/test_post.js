var database = require('../../../app/model/database.js');
var posts = require('../../../app/model/posts.js');
var config = require('../../../config.local.js');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);

database.init(config.database);

beforeEach(function() {
    return posts.dropTable().then(function() {
    	return posts.createTable();
    });
});

describe('post model', function() {
    it('should add a post', function() {
        return expect(posts.add({
            title: 'title',
            body: 'body',
            slug: 'test'
        })).to.eventually.equal(1);
    });
});