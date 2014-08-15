
$.getJSON('../js/json/images.json', null, function(json) {
	for (var i=0; i<json.length; i++) {
		console.log(json[i].image);
	}
});
