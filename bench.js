var http = require('http')

options = {
	host : 'govcheck.net',
	port : 80,
	path : '/'
}

var get_gc = function() {
	req = http.request(options, function(res) {
		var date1 = new Date();
		time1 = date1.getTime();

		res.on('end', function() {
			console.log('Done fetching the page');

			var date2 = new Date();
			time2 = date2.getTime();

			console.log('It took ' + (time2 - time1) + 'ms to complete the request');
		});
	});

	req.end();
}

for(var i = 0; i < 10; i++) {
	get_gc();
}

