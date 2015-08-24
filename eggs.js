$(document).ready(function(){
	$("#outside" ).on( "click",function() {
		window.location.href='https://blog.legendt.com';
	});

	console.log("%c", "padding:6px 150px; line-hight: 28px; background:url('http://legendt.com/images/Konami_Code.png') no-repeat;");

	var konami = new Konami();

	konami.code = function(){
		console.log("打开了新世界的大门");
		console.log("Across the Great Wall we can reach every corner in the world.");

		$( "#inside" ).on( "click",function() {
			window.location.href='https://drrr.legendt.com';
		});
	}

	konami.load();
});
