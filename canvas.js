/*
Name: LegendT.me - the Homepage / Navipage
Description: Designed and coded by LegendT.me
Version: 0.1
*/

//Canvas dynamic width & height
var w = 0;
var h = 0;

//parameter that used to initialize
// var wm = 0;
// var hm = 0;

function resizeCanvas(){ 
	w = $(document).width() / 2 + 200;
	h = $(document).height() / 2  + 200 / 6;
	// wm = w / 400;
	// hm = h / 900;

	$("canvas").css({"width":w,"height":h});
	// $("canvas").width = w;
	// $("canvas").height = h;
}

function initialCanvas(){
	// first line
	var canvas1 = document.getElementById('line-1');
	var context1 = canvas1.getContext('2d');

	context1.beginPath();
	context1.moveTo(0, 400);
	context1.bezierCurveTo(600, 300, 500, 100, 900, 0);
	context1.lineWidth = 1;

	// line1 color
	context1.strokeStyle = '#3f3f3f';
	context1.stroke();

	var canvas2 = document.getElementById('line-2');
	var context2 = canvas2.getContext('2d');

	// the following two lines
	context2.beginPath();
	context2.moveTo(0, 400);
	context2.bezierCurveTo(500, 300, 400, 100, 900, 0);
	context2.lineWidth = 1;

	// line2 color
	context2.strokeStyle = '#f3f3f3';
	context2.stroke();

	context2.beginPath();
	context2.moveTo(150, 400);
	context2.bezierCurveTo(500, 300, 400, -100, 900, 50);
	context2.lineWidth = 1;

	// line2 color
	context2.strokeStyle = '#f3f3f3';
	context2.stroke();

}
//Initial call
resizeCanvas();
initialCanvas();

window.onresize = function(){   
    resizeCanvas();
}