var a =10;
obr();
function obr(){
	document.getElementById('out').innerHTML = a;
	a--;
	if (a<0){
		clearTimeout(timer);
		alert('Таймер отключен');
	}
	else {
		timer = setTimeout(obr, 1000);
	}
}