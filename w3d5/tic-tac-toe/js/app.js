// console.log('hello');

// $(document).ready(function(){
	
// 8 if else statements

// let counter = 0;
// const $button = $('#button');



// const p1 = function(){
// 	if ($(this).html('')) {
// 	$(this).append('<p>X</p>');
// 	gameMain()
// 	}
// 	else {
// 		gameMain()
// 	}
// }

// const p2= function(){
// 	if ($(this).html('')) {
// 		
// 	}
// 	else {
// 		gameMain()
// 	}

// }

// $('#game').on('click')

// });

$(document).ready(function(){
  let character = ''; //X or O
  let player = 'Player 1'; //init player on turn 0
  let turn = 0; //turn = 0

  $('.box').click(function(){
      if($(this).html()===''){ //if square is blank...
          if (turn%2!==0) { //ensures that every other turn = player 2
                character = 'O';
                player = 'Player 2';
          } else {
                character = 'X'; //player 1 turn
                player = 'Player 1';
          }
      // alert(player+" chose " + character);
      $(this).html(character); //sticks character (X or O) on the box
      checkForWin(); //check win condition after each rd
      turn++ //incremental turn counter leading to draw count
      }
  });

const checkForWin = function(){
	// alert('hi');	
  if ($('#a1').html()===character && $('#b1').html()===character && $('#c1').html()===character ){
        $('#a1, #b1, #c1').addClass('winner'); //a1, b1, c1 win
        alert(player + ' won!');

  } else if ($('#a1').html()===character && $('#a2').html()===character && $('#a3').html()===character ){
        $('#a1, #a2, #a3').addClass('winner'); //a1, a2, a3 win
        alert(player + ' won!');

  } else if ($('#a1').html()===character && $('#b2').html()===character && $('#c3').html()===character ){
        $('#a1, #b2, #c3').addClass('winner'); //a1, b2, c3 win
        alert(player + ' won!');
    
  } else if ($('#b1').html()===character && $('#b2').html()===character && $('#b3').html()===character ){
        $('#b1, #b2, #b3').addClass('winner'); //b1, b2, b3 win
        alert(player + ' won!');
 
  } else if ($('#c1').html()===character && $('#c2').html()===character && $('#c3').html()===character ){
        $('#c1, #c2, #c3').addClass('winner'); //c1, c2, c3 win
        alert(player + ' won!');

  } else if ($('#a2').html()===character && $('#b2').html()===character && $('#c2').html()===character ){
        $('#a2, #b2, #c2').addClass('winner'); //a2, b2, c2 win
        alert(player + ' won!');

  } else if ($('#a3').html()===character && $('#b3').html()===character && $('#c3').html()===character ){
        $('#a3, #b3, #c3').addClass('winner'); //a3, b3, c3 win
        alert(player + ' won!');

  } else if ($('#a3').html()===character && $('#b2').html()===character && $('#c1').html()===character ){
        $('#a3, #b2, #c1').addClass('winner'); //a3, b2, c1 win
        alert(player + ' won!');
  }
//check when turn reaches 8 (total turn 9) to determine draw

    else if (turn === 8) {
        alert("It's a draw!")
        }    
} 

$('#restart').click(function(){
    $('.box').html('');
    $('.box').removeClass('winner');
    turn = 0;
    });

});


 });







