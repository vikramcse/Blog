var database = require('./database');

exports.createTable = function() {
    return database.query(`
    	CREATE TABLE IF NOT EXISTS posts(
    		id INT NOT NULL AUTO_INCREMENT,
    		title VARCHAR(255) NOT NULL,
    		body TEXT NOT NULL,
    		slug VARCHAR(255) NOT NULL,
    		PRIMARY KEY(id),
    		INDEX(slug)
    	)
    `);
};

exports.add = function(params) {
	return database.query('INSERT INTO posts SET ?', params)
		.then(function(result) {
			return result.insertId;
		});
};

exports.dropTable = function() {
	return database.query('DROP TABLE IF EXISTS posts');
};

exports.remove = function(id) {
    return database.query('DELETE FROM posts WHERE ?', {
        id: id
    }).then(function(result) {
        return result.affectedRows;
    });
};

exports.deleteAll = function() {
    return database.query('DELETE FROM posts').then(function() {
        return database.query('ALTER TABLE posts AUTO_INCREMENT=1');
    });
};