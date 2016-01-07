var database = require('../../../app/model/database.js');
var posts = require('../../../app/model/posts.js');
var config = require('../../../config.local.js');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);

describe('post model', function() {
    before(function() {
        database.init(config.database);
        return posts.createTable();
    });

    beforeEach(function() {
        return posts.deleteAll();
    });

    describe('#add', function() {
        it('it should add a post', function() {
            return expect(posts.add({
                title: 'title',
                body: 'body',
                slug: 'test'
            })).to.eventually.equal(1);
        });
    });

    describe('#remove', function() {
        it('it should delete a post', function() {
            return expect(
                posts.add({
                    title: 'title',
                    body: 'body',
                    slug: 'test'
                }).then(function(id) {
                    return posts.remove(id);
                })
            ).to.eventually.equal(1);
        });
    });
    
});