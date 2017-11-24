var setRadius = function(newRadius){
	if(newRadius<minRad)
		 newRadius = minRad;
	else if (newRadius >maxRad)
		 newRadius = maxRad;
	 radius = newRadius;
	  context.lineWidth = radius*2;
     radSpan.innerHTML = radius;
}



var minRad = 0.5;
var maxRad = 100,
defaultRad = 20,
interval=5,
radSpan = document.getElementById('radval'),
decRad = document.getElementById('decRad'),
incRad = document.getElementById('incRad'); 


decRad.addEventListener('click' , function(){
	setRadius(radius - interval);
});

incRad.addEventListener('click' , function(){
	setRadius(radius + interval);
});
