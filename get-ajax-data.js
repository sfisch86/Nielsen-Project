var XMLHttpRequest = require('XMLHttpRequest');
var request = new XMLHttpRequest();

request.open('get', 'send-ajax-data.php');

request.onreadystatechange = function() {
	var DONE = 4;
	var OK   = 200;
	
	if (request.readyState === DONE) {
		if (request.status === OK) {
			alert(request.responseText);
		}
		else {
			alert('Error: ' + request.status);
		}
	}
};

request.send(null);