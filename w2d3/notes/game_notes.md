# Game Logic

## What do you think you're going to need?

### 1. A way to initialize the game.  Are there any initial values we'd want to have?

If you'd want to toggle a 'combat', so you can flip between 'true' and 'false' at given points in your game.
```
const combat = true;
const turn = 0;
```

### 2. Objects!

<ul>
	<li>Health</li>
	<li>Alive: True/False?</li>
	<li>Attack Damage?</li>
</ul>  

#### If you want to make it randomized...

```
const playerAttackDamage = Math.floor(Math.random()* 13 + 5); // sets dmg to be between 5 and 13
```

### 3. How does the enemy take damage?

```
	currentShip.enemyHP = currentShip.enemyHP - playerAttackDamage;
```

Where might this formula be useful?

### 4. Would I maybe want different functions to determine what happens during a player turn, and during an ememy turn?

```
const playerTurn = function(){
	// code regarding player attacking current enemy
};

const enemyTurn = function(){
	// code regarding current enemy attacking player
};

const battle = function(){
	// would I maybe want to launch players turn OR enemy turn depending on if the turn is even or odd?  

		if(turn%2==0?){
		// execute player's turn
		} else {
		// execute enemy turn
	}
	// what if enemy's health = 0?
	// what if player's health = 0?
};

battle(); // execute the battle function
```

### 5. What if the game is over?

```
if (player health = 0 || player alive=false || enemies eliminated){
	// reset object/player information to default
		// maybe you'll have to hard reset your objects to what they were before they changed
		// OR you can have a prebuilt 'reset' function within your objects which will reset everything to their default values

	// relaunch game function //
}
```