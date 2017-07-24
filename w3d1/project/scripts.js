document.getElementById("appear").style.visibility = 'hidden';
const output=function(){
	const input = document.getElementById("text1").value;
	const input1 = document.getElementById("text2").value;
	const input2 = document.getElementById("text3").value;
	const input3 = document.getElementById("text4").value;
	const input4 = document.getElementById("text5").value;
	const input5 = document.getElementById("text6").value;
	const input6 = document.getElementById("text7").value;
	const input7 = document.getElementById("text8").value;
	const input8 = document.getElementById("text9").value;
	const input9 = document.getElementById("text10").value;
	const input10 = document.getElementById("text11").value;
	const input11 = document.getElementById("text12").value;
	const input12 = document.getElementById("text13").value;
	const input13 = document.getElementById("text14").value;
	const input14 = document.getElementById("text15").value;
	const input15 = document.getElementById("text16").value;
	const input16 = document.getElementById("text17").value;
	const input17 = document.getElementById("text18").value;
	const input18 = document.getElementById("text19").value;
	const para=document.getElementById("para");
	para.innerHTML='A vacation is when you take a trip to some ' + input + ' place with your ' + input1 + ' family. Usually you go to some place that is near a/an ' + input2 + ' or up on a/an '+ input3 + '. A good vacation place is one where you can ride ' + input4 +  ' or play '+ input5 +  ' or go hunting for ' + input6 + '. I like to spend my time' + input7 +  ' or ' + input8 + '. When parents go on a vacation, they spend their time eating three ' + input9 +  ' a day, and fathers play golf, and mothers sit around ' + input10 + '. Last summer, my little brother fell in a/an'+ input11 +  ' and got poison ' + input12 +  ' all over his ' + input13 + '. My family is going to go to (the) ' + input14 +  ' and I will practice ' + input15 + '. Parents need vacations more than kids because parents are always very' + input16 +  'and because they have to work ' + input17 +  ' hours every day all year making enough ' + input18 +  ' to pay for the vacation.'
	document.getElementById("hide").style.visibility = 'hidden';
	document.getElementById("appear").style.visibility = 'visible';
	document.getElementById("para").style.visibility = 'visible';


}
const restart=function(){
	document.getElementById("hide").style.visibility = 'visible';
	document.getElementById("para").style.visibility = 'hidden';
	document.getElementById("appear").style.visibility = 'hidden';


}
