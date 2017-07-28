<<<<<<< HEAD
$(document).ready(function() {
console.log('hello');

let counter = 0;
const $button = $('#button');
const body = $('body')[1]
const img=$('photo');
const list1 = $('#list1');



const toggler = function(){
	console.log('clicked');
	console.log(counter);
		if(counter%2===0){
			collegeLife();
	}
		else{
			swimLife();
		}
	counter++;

}

 $button.click(function(){
 	toggler();
 })

const collegeLife = function (){
	$('#list1').html('Personal Life: David Alberto Rodriguez was born on October 5, 1983 in Miami, Florida ... is the son of Ricardo Rodriguez and Margarita Del cerro ... is undecided on a major ... considers his parents to be the greatest influence on his athletic career.');
	$('#list2').html('High School: David is a 2002 graduate of Columbus High School in Miami, Florida ... is the school record holder in the 200 IM and 100 back ... is a four-time All-American ... also an all-state water polo player.');
	$('#list3').html('College Career: 2003-04: Claimed eighth in the 200 back (1:53.40), took 11th in the 400 IM (4:05.99), and placed 12th in the 1,650 free (16:15.49) at the conference championships. 2002-03: David scored six points for the Rebels with an 11th place finish in the 400 IM at the MWC Championships. He also swam a 1:54.68 in the 200 IM and a 1:53.38 in the 200 back, but did not score.');
	$('#list4').html('Before AG: He served as head coach at Christopher Columbus High School (Florida, developed multiple All-Americans and state champions) and head age group coach at Pine Crest School (Florida, set 35 team records and brought home the team’s first-­ever 14 and­ under Junior Olympic championship title).');
	$('#header').html('Life Before AG');
	$('#photo').html('<img src="http://graphics.fansonly.com/photos/schools/unlv/sports/m-swim/auto_headshot/100249.jpeg">')
	$('#photo').hide();
	$('#photo').fadeIn(2000);


}

const swimLife = function(){

	$('#list1').html('David has been in coaching since 2005 and joined the Asphalt Green Unified Aquatics (AGUA) Swim Team staff in 2012. His coaching philosophy focuses on long-term development and embracing the learning process. From a young age, our athletes build a strong technical foundation that allows them to grow with our program.');
	$('#list2').html('Since joining the AGUA coaching staff, David has developed several Junior Olympic champions, Zone team members, multiple USA Swimming National Top Ten ranking athletes, and Junior and Senior Nationals qualifiers. His swimmers have broken over 70 team records and 20 metropolitan records. In 2016, two athletes qualified for the US Olympic Trials, and the team captured its first-ever Junior Olympic championship and first sectional championship in eight years.');
	$('#list3').html('As an athlete, David swam for University of Nevada, Las Vegas, where he helped bring home the first conference championship in the history of the school.');
	$('#list4').html('Now with the National Group; I yell at them...alot...and smoke...and take them to places that I can smoke weed which is my real passion besides nuturing my swimmers (Isabel)');
	$('#header').html('Life During AG');
	$('#photo').html('<img src="https://www.asphaltgreen.org/images/uploads/posts/David_Rodriguez_300x325.jpg">')
	$('#photo').hide();
	$('#photo').fadeIn(2000);
	

}



});
=======
console.log('hi');
>>>>>>> b542ff795888f9e0414b5910ae709c45ead4360a
