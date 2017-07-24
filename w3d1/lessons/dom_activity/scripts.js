console.log('hey');

const sampleFunction=function(){
	const input = document.getElementById("text").value;
	console.log(input);
	const para=document.getElementById("para");
	para.innerHTML=input;
}



const sample_string="Hello World "

const lowercase=sample_string.toLowerCase();
console.log(lowercase);

const uppercase=sample_string.toUpperCase();
console.log(uppercase)

const repeat = sample_string.repeat(100);
console.log(repeat);

const replace = sample_string.replace('Hello','Goodbye');
console.log(replace);