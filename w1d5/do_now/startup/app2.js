// function tellFortune (child, partner, geo, job) {
//  alert('You will be a '+ job + ' in ' + geo +', and married to ' + partner + ' with ' + child + ' kids.');
// }
// tellFortune (12,'john','place','coder')
// // console.log(y);
// // alert (y);

// function calcDog (age) {
// 	alert ('Your dog is' + age * 7 + ' years old in human years')
// }

// calcDog (2)
// calcDog (4)
// calcDog (6)

// function calcSupply (age, maxAge, amount) {
// 	const yes= (maxAge-age) * 365 * amount
// 	alert ('You will need ' + yes + ' to last you until the ripe old age of ' + maxAge);
// }
// calcSupply (16, 100, 1)
// calcSupply (16, 200, 2)
// calcSupply (16, 100, 2)

// function calcCircumfrence (radius) {
// const x= 2 * radius * Math.PI
// alert ('The Circumfrence is' + x)
// }
// calcCircumfrence (2)

// function calcAlrea (radius) {
// 	const y= radius * radius * Math.PI
// // 	alert ('The Area is' + y)
// // }

// calcAlrea (2)

function celciusToFahrenheit (celcius) {
	const x= celcius * (9/5) + 32;
	alert(celcius+'ºC is ' + x + 'ºF');
}
celciusToFahrenheit (0);

function fahrenheitToCelcius (fahrenheit) {
	const y= (fahrenheit -32) * (5/9);
	alert (fahrenheit+'ºF is ' + y + 'ºC');
}
fahrenheitToCelcius (32);

