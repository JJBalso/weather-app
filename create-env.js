'use strict';
var fs = require('fs');

var rs = fs.createReadStream('.sample-env');
rs.on("error", function(err, fd) {
	console.log("createReadStream - Error - Can't read from .sample-env file, please create a sample env file with the name '.sample-env'")
})
.pipe(fs.createWriteStream('.env', {flags:"wx"}))
.on("error", function(err, fd) {
	console.log("createWriteStream - Error - %s", err.code);
})
.on("finish", function() {
	console.log(".ENV file copied from sample");
})