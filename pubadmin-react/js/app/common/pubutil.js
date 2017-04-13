var getEventValue = function(e){
	return (e.target.value != undefined)?e.target.value:e.target.getAttribute("value");	
}
