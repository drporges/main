# Memory!

Today we are going to build the game Memory. 

### You will need

#### Data

- An array of ten tiles
	- your ten 'tiles' will represent the letter values that will be displayed on each DOM tile. eg. ['A', 'A', 'B', 'B', etc.]

#### Functions

- `start()`
	- shuffle the tiles array
	- then call makeAndDisplayTiles to build and display the gameboard
- `makeAndDisplayTiles()`
	- this function should empty the container that will hold the gameboard tiles
	- it should clear the text in the info div
	- it should create 10 new game tiles 
	    - give them the class 'column'
		- give them a 'data-value' attribute from each element of your tiles array. The output for an 'A' tile will look like ` <div class="column" data-value="A"></div> `
		- add the game tiles to the board
	- then call the addEventsToTiles function that will add click events to each tile
- `addEventsToTiles()`
	- should add click events to each of the gameboard tiles
	- Each click event should call the makePlay function passing it the tile that was clicked. Strong hint: the tile that was clicked is `this` tile . . . Can you pass `this` as a parameter to the makePlay function? Test it out.
- `makePlay(tile)`
	- this function should set the text of the current clicked tile to the value stored in the data attribute
	- it should add a class of found to the tile
	- it should add a class of clicked to the tile
	- if the number of clicked tiles is 2, then it should check for a match
- `checkForMatch()`
	- this should retrieve the data-value of the two clicked tiles
	- if they are a match
		- the 'clicked' class should be removed from the tiles
		- the click event should be turned off for those tiles
		- should check for a win
	- if no match is found
		- the text of the clicked cards should be set back to empty
		- the found and clicked classes should both be removed
		- **BONUS:** use setTimeout to keep your cards showing for a hot
		  moment.
		  
*After you have the preceding functions working:*

- `checkForWin()`
	- if the number of found tiles is 10
		- add a winning message to the info div
		- remove the found class
		- add a won class

## START

- There is already a click event added to the start button, so that when it is clicked a new game is triggered.
