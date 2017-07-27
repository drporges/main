

console.log('hello');
let counter = 0;
const $button = $('button');
const body = $('body')[0]

// button.addEventListener('click', function(){
//     toggler();
// });
// const list1 =document.getElementById('list1');
// const list2 =document.getElementById('list2');
// const list3 =document.getElementById('list3');
// const list4 =document.getElementById('list4');
// const list5 =document.getElementById('list5');
// const header=document.getElementById('header');

const toggler = function(){
	console.log('clicked');
	counter++;
	console.log(counter);
		if(counter%2==0){
			toggleHate();
	}
		else{
			toggleLove()
		}
}
 $button.click(function(){
 	toggler();
 })

const toggleHate = function(){

	body.id = 'hate';
	$('#list1').html('Isabel');
	$('#list2').html('Swimming');
	$('#list3').html('Ear Infections');
	$('#list4').html('Allen');
	$('#list5').html('People who cant code');
	$('#header').html('Things I Hate');


}


const toggleLove = function (){
	$('#list1').html('Coding');
	$('#list2').html('Food');
	$('#list3').html('Sleeping');
	$('#list4').html('Memes');
	$('#list5').html('Everyone excet Allen');
	$('#header').html('Things I Love');
	body.id = 'love'


}


});
	

