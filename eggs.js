console.log("KONAMI Gamers Find the Passphrase");

$(document).ready(function(){
	$("#outside" ).on( "click",function() {
		window.location.href='http://blog.legendt.me';
	});
});

konami = new Konami()
konami.code = function(){
	console.log("打开了新世界的大门<br />");
	console.log("Across the Great Wall we can reach every corner in the world.");

	$( "#inside" ).on( "click",function() {
		window.location.href='http://jtapi.legendt.me';
	});
}

konami.load();