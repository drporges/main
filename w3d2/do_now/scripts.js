console.log('hello');

let counter = 0;
const box=document.getElementById('box');

const clicky = function(){
	counter++
	if (counter%2==0){
		box.setAttribute('style','background-color: honeydew;')
	}
	else {
		box.setAttribute('style','background-image: url("http://images2.wikia.nocookie.net/__cb20110927053956/breakingbad/images/f/ff/4x11_-_Huell.jpg")');
	}
	document.getElementById('para').innerHTML = "The Counter is:" + counter;
}
