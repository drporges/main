# Game Logic

## What do you think you're going to need?

### 1. Are there any initial values we'd want to have?

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

So, maybe...

```
const player = {
    name: "HMS Invincible",
    attackDamage: ,
    playerHP: 75,
    reset: function(){
    	// what will happen when game is reset?
    }
};

const enemyOne = {
    name: ,
    enemyHP: ,
    alive: ,
    attackDamage: ,
    reset: function(){
    	// maybe you'd want to invoke a reset function when game is over?
    }
};

```
#### If you want to make attack damage randomized...

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
// this should be where the main 'battle' or your game takes place.  notice how you can re-invoke this function whenever you'd want?

	// would I maybe want to launch players turn OR enemy turn depending on if the turn is even or odd?  

		if(turn%2==0){
			// execute player's turn
			// maybe a counter would have to increment by one after each player turn
		} else {
			// execute enemy turn
			// maybe a counter would have to increment by one after each enemy turn
		}
	// what if enemy's health = 0?
	// what if player's health = 0?
};

battle(); // execute the battle function.  where would i want to do this?
```

### 5. What if the game is over?

```
if (player health = 0 || player alive=false || enemies eliminated from array || some conditional that is met){
	// reset object/player information to default
		// maybe you'll have to hard reset your objects to what they were before they changed
		// OR you can have a prebuilt 'reset' function within your objects which will reset everything to their default values

	// relaunch game function //
}
```


## So, overall structure should be like.

##### 1: Declare global variables

##### 2: Establish what happens during player's turn

##### 3: Establish what happens during enemy turn

##### 4: Execute a function which will make these two separate 'turns' happen consecutively

##### 5: When win condition is met, establish how to reset all values to default, then invoke game function to make cycle repeat


