var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

options = {
	host : 'govcheck.net',
	port : 80,
	path : '/'
}

var times_array = []

var get_gc = function() {
	req = http.request(options, function(res) {
		var date1 = new Date();
		time1 = date1.getTime();

		res.on('end', function() {
			console.log('Done fetching the page');

			var date2 = new Date();
			time2 = date2.getTime();

			var diff = time2 - time1;

			times_array.push(diff);

			console.log('It took ' + diff + 'ms to complete the request');
		});
	});

	req.end();
}

for(var i = 0; i < 10; i++) {
	get_gc();
}

total_time = times_array.reduce(function (a,b) { return a + b; }, 0)

console.log('Total time: ' + total_time)
console.log('Average time: ' + total_time/times_array.length)

