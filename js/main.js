$(document).ready(function() {
	var hash = window.location.hash;
	if (hash !== "") {
		hash = hash.split("").splice(0,1);
	} else {
		hash = "home";
	}
		
	$.ajax({
		url: "templates/" + hash + ".html",
		type: 'GET',
		crossDomain: true
	}).done(function(data){
		('#container').html(data);
	});

	$('li > a').click(function() {
		$('li > a').removeClass('active');
		$(this).addClass('active');
	});
});
