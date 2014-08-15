$.getJSON('../js/json/images.json', null, function(json) {
		var ul = $('<ul>');
		for (var i=0; i<json.event.length; i++) {
			ul.append('<li><a href="' + json.event[i].link + '"><img src="' + json.event[i].image + '" width="100"></a><br><p>' + json.event[i].label + '</p></li>');
		}
		$('#slideshow').html(ul);
});