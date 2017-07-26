window.onload = function() {
    console.log('loaded');  
}
// USE THIS TO SHUFFLE YOUR ARRAYS
// o=array
const button = document.getElementsByTagName('Button');

button[0].addEventListener('click', function(){
    start();
})

const tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
const shuffle = function(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
};

const start = function(){
    // shuffle the tiles array
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
        addEventsToTiles();
}

const addEventsToTiles = function(){

    const tile = document.getElementsByClassName('column');
    for (let i = 0; i < tile.length; i++) {
        tile[i].onclick = function() {
        makePlay(this);
        }
    }
}

const makePlay = function(tile){
    tile.classList.add('click');
    tile.classList.add('found');

    tile.innerHTML = tile.getAttribute('data-value');
    console.log(tile.innerHTML);

    const click = document.querySelectorAll('.click');
    if(click.length === 2){
        checkForMatch();
    }
}

const checkForMatch = function(){
    
    const click = document.querySelectorAll('.click');
    for (let i = 0; i < click.length; i++){
        if (click[0].innerHTML === click[1].innerHTML) {
            click[i].classList.remove('click');
            click[i].removeEventListener('click', function(){
            makePlay(this);
        })
        checkForWin();
    } else {
        click[i].innerHTML = '';
        click[i].classList.remove('found', 'click');
    }
}
}

// ///AFTER ALL OTHER FUNCTIONS ARE COMPLETE
const checkForWin = function(){
    const found = document.querySelectorAll('.found')
    if (found.length === 10) {
        document.getElementById('info').textContent = 'You are a winrar!';
        alert('you won!');
        for (var i = 0; i < found.length; i++) {
            found[i].classList.remove('found');
            found[i].classList.add('won');
        }
    }
}