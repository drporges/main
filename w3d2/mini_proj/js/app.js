window.onload = function() {
    console.log('loaded');  
}

const button = document.getElementsByTagName('Button');

button[0].addEventListener('click', function(){
    // launch the game
})

//shuffle function (o = array)

// const tiles = [bla bla bla bla bla bla enter data];

const shuffle = function(o) {
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
};

const start = function(){
    // shuffle the tiles array

    //then call makeAndDisplayTiles to build and display the gameboard
}

const makeAndDisplayTiles = function(){

    for (let i = 0; i < tiles.length; i++) {  
        //for some reason only var works here, not const/let.  use const/let for everything else.
        var createTile = document.createElement('div');

        // you'll need to set attributes to the new divs and then append them to the page.

        }
        addEventsToTiles();
}

const addEventsToTiles = function(){

    // const tile = document.getElementsByClassName('column');

    for (let i = 0; i < tile.length; i++) {
        tile[i].onclick = function() {
            //launches a makePlay function when a tile is clicked on... 

        }
    }
}

const makePlay = function(tile){
    //you might want to add a click and found class

    // const tiles = document.querySelectorAll('.column');
    // tile.innerHTML = tile.getAttribute('data-value');
    // console.log(tile.innerHTML);

    // check for elements that have a 'click' class.  
    // you'll want to write a statement that will launch a 'checkForMatch()' if there are 2 clicks.

    // const click = document.querySelectorAll('.click');
}

const checkForMatch = function(){
    
    const click = document.querySelectorAll('.click');
    for (let i = 0; i < click.length; i++){
        // if (when first click = second click and letters match?)
            //remove the class 'click' from the two tiles that are clicked

            // below removes the 'on click'
            click[i].removeEventListener('click', function(){
                makePlay(this);
            })
        //re launch win condition here
    } else {
        //change the text to blank, and remove the classes 'found', and 'click'.

    }
}
}

// ///AFTER ALL OTHER FUNCTIONS ARE COMPLETE
const checkForWin = function(){
    //you'll want to look for all divs that have className 'found'.  
    if (found.length === 10) {
        //let them know they won
        for (let i = 0; i < found.length; i++) {
            //remove the class 'found', and replace with a different class .won
        }
    }
}