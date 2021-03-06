var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


context.lineWidth = radius*2;

var putPoint = function(e){
	if(dragging){
	context.lineTo(e.offsetX , e.offsetY);
	context.stroke();
	context.beginPath();
	context.arc(e.offsetX , e.offsetY , radius , 0 , Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(e.offsetX , e.offsetY);
}}
var start = function(e){
	dragging = true;
	putPoint(e);
}
var end = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown' , start);
canvas.addEventListener('mousemove' , putPoint);
canvas.addEventListener('mouseup' , end);