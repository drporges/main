$(document).ready(function() {

// console.log($('p'));
// console.log($('#main'));
// console.log($('.intro'));
// console.log($('#main .intro'));
	
// $('a#yahoo');
// const myLink = $('a#yahoo');
// console.log(myLink);
// console.log(myLink.html());
// const htmlThing = myLink.html();
// // console.log(htmlThing);
// $('a').html('Yahoo!');
// $('a').attr('href', 'http://www.yahoo.com');
// $('a').css({'color': 'purple'})

// const p = $('<p>Hello<p>');
// p.addClass('special');
// $('body').append(p);
// const myParagraph = $('<p class="intro">Welcome!</p>');
// console.log(myParagraph)

const paragraphs = $('p');
    const myParagrpah = paragraphs[0];
    const $myParagrpah = $(paragraphs[0]);

for(let i=0; i<paragraphs.length; i++){
	let element=paragraphs[i];
	let paragraph=$(element);
	paragraph.html(paragraph.html()+ ' woweee!!!!!');
}

});