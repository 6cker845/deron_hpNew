$.getJSON('../../js/json/images.json', null, function(json) {
		var ul = $('<ul>');
		for (var i=0; i<json.rijf.length; i++) {
			ul.append('<li><img src="../../' + json.rijf[i].image + '" width="100"></a><br><p>' + json.rijf[i].label + '</p></li>');
		}
		$('#slideshow').html(ul);
});