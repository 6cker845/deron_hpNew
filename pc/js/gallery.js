	$.getJSON('../js/json/images.json', null, function(json) {
		var ul = $('<ul>')
		for (var i=0; i<json.length; i++) {
			ul.append('<li><img src="' + json[i].image + '" width="100"></a><br><p>' + json[i].label + '</p></li>');
			console.log(json[i].image);
		}
		
		$('#slideshow').html(ul);
});