window.onload = function() {
    console.log('loaded');  
}
<<<<<<< HEAD
// USE THIS TO SHUFFLE YOUR ARRAYS
// o=array
const button = document.getElementsByTagName('Button');

button[0].addEventListener('click', function(){
    start();
})

const tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
const shuffle = function(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
=======

const button = document.getElementsByTagName('Button');

button[0].addEventListener('click', function(){
    // launch the game
})

//shuffle function (o = array)

// const tiles = [bla bla bla bla bla bla enter data];

const shuffle = function(o) {
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
        return o;
};

const start = function(){
    // shuffle the tiles array
<<<<<<< HEAD
    shuffle(tiles);
    //then call makeAndDisplayTiles to build and display the gameboard
    makeAndDisplayTiles();
}

const makeAndDisplayTiles = function(){
    for (let i = 0; i < tiles.length; i++) {  
        var createTile = document.createElement('div');
        createTile.className = 'column';
        createTile.setAttribute('data-value', tiles[i]);
        const content = document.getElementById('game');
        content.appendChild(createTile);
        }
        console.log(createTile);
=======

    //then call makeAndDisplayTiles to build and display the gameboard
}

const makeAndDisplayTiles = function(){

    for (let i = 0; i < tiles.length; i++) {  
        //for some reason only var works here, not const/let.  use const/let for everything else.
        var createTile = document.createElement('div');

        // you'll need to set attributes to the new divs and then append them to the page.

        }
>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
        addEventsToTiles();
}

const addEventsToTiles = function(){

<<<<<<< HEAD
    const tile = document.getElementsByClassName('column');
    for (let i = 0; i < tile.length; i++) {
        tile[i].onclick = function() {
        makePlay(this);
=======
    // const tile = document.getElementsByClassName('column');

    for (let i = 0; i < tile.length; i++) {
        tile[i].onclick = function() {
            //launches a makePlay function when a tile is clicked on... 

>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
        }
    }
}

const makePlay = function(tile){
<<<<<<< HEAD
    tile.classList.add('click');
    tile.classList.add('found');

    tile.innerHTML = tile.getAttribute('data-value');
    console.log(tile.innerHTML);

    const click = document.querySelectorAll('.click');
    if(click.length === 2){
        checkForMatch();
    }
=======
    //you might want to add a click and found class

    // const tiles = document.querySelectorAll('.column');
    // tile.innerHTML = tile.getAttribute('data-value');
    // console.log(tile.innerHTML);

    // check for elements that have a 'click' class.  
    // you'll want to write a statement that will launch a 'checkForMatch()' if there are 2 clicks.

    // const click = document.querySelectorAll('.click');
>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
}

const checkForMatch = function(){
    
    const click = document.querySelectorAll('.click');
    for (let i = 0; i < click.length; i++){
<<<<<<< HEAD
        if (click[0].innerHTML === click[1].innerHTML) {
            click[i].classList.remove('click');
            click[i].removeEventListener('click', function(){
            makePlay(this);
        })
        checkForWin();
    } else {
        click[i].innerHTML = '';
        click[i].classList.remove('found', 'click');
=======
        // if (when first click = second click and letters match?)
            //remove the class 'click' from the two tiles that are clicked

            // below removes the 'on click'
            click[i].removeEventListener('click', function(){
                makePlay(this);
            })
        //re launch win condition here
    } else {
        //change the text to blank, and remove the classes 'found', and 'click'.

>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
    }
}
}

// ///AFTER ALL OTHER FUNCTIONS ARE COMPLETE
const checkForWin = function(){
<<<<<<< HEAD
    const found = document.querySelectorAll('.found')
    if (found.length === 10) {
        document.getElementById('info').textContent = 'You are a winrar!';
        alert('you won!');
        for (var i = 0; i < found.length; i++) {
            found[i].classList.remove('found');
            found[i].classList.add('won');
=======
    //you'll want to look for all divs that have className 'found'.  
    if (found.length === 10) {
        //let them know they won
        for (let i = 0; i < found.length; i++) {
            //remove the class 'found', and replace with a different class .won
>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
        }
    }
}