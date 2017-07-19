# Game Logic

## So, overall structure should be like.

##### 1: Declare global variables

##### 2: Establish what happens during player's turn

##### 3: Establish what happens during enemy turn

##### 4: Execute a function which will make these two separate 'turns' happen consecutively

##### 5: When win condition is met, establish how to reset all values to default, then invoke game function to make cycle repeat


## 1: Establish your global variables.

#### Your ships are going to need...

<ul>
	<li>Health</li>
	<li>Alive: True/False?</li>
	<li>Attack Damage?</li>
</ul>  

So, maybe...

```
const playerShip1 = {
    name: " ",
    playerHP: ,
    attack: ,
    alive: true,
    reset: function(){
        this.playerHP = ;
        this.alive = ;
    }
}

const enemyShip1 = {
    name: " ",
    enemyHP: ,
    attack: ,
    alive: true ,
    reset: function(){
        this.enemyHP = ;
        this.alive = ;
    }
}

const arr= [enemyShip1, enemyShip2...];

```

## 2: I'm going to MAYBE want a way to kick off the game:

```
const intro = function(){
	alert("This is the beginning!!!11");
	futureFunction1();
}
```
### What is ```futureFunction1()```?  It's a function that we haven't defined yet, but what do you think it would be good for?

Oh, we need to pick an enemy ship, right?  Ahh...

## 3: Pick the enemy ship!

```
const futureFunction1 = function(){
	// You MAY want to alert @ the user as to how much health he/she has?

	let promptName = prompt("What ship would you like to attack? " + 
	enemyShip1.name + " " + enemyShip2.name + " "...); 

	// Something like above would allow you to ask the user which ship he/she would want to attack.

	let newName = promptName.toLowerCase(); 

	arr.forEach(function(ship){ 
		console.log(ship.name);  					
  	if(ship.name === newName){
  		futureFunction2(ship);
   	}
	});
	// this *cool* function SEARCHES through the array and isolates each individual object 
	// within the array.This lets us compare the prompt to each object's name. 
};
```

## 4: The Game Function!  

```
const futureFunction2 = function(enemy){

	// While this function may not 'seem' to do much... 
	// This is a means for us to declare that we want a player to go.

	futureFunction3(enemy);
}
```

## 5: The Player's Turn!

```
const futureFunction3 = function(enemy){

	playerShip1.attack = Math.floor(Math.random()* 13 + 5); // This randomizes an attack!

	// console.log(enemy.alive);
	if(enemy.enemyHP > 0){

		// I gave you a lot!  What kind of logic do you think would go here, 
		// assuming that the enemy's health is greater than 0?  

		// When your turn is over, you might want to let the enemy attack you, right?

		futureFunction4(enemy);

	} else if(obj.enemyHP <= 0){
			
			// if the enemy is DEAD, you might want to go find the function that prompts 
			// the user to attack ships.  How do I invoke functions?

		}
		
}
```
## 6: The Enemy's Turn!

```
const futureFunction4 = function(enemy){
	enemy.attack = Math.floor(Math.random()* 10 + 4); // random attack

	// insert logic r.e. enemy attacking player

	console.log("Your health: " + playerShip1.playerHP);
	if(playerShip1.playerHP > 0){

		// Here is how you can keep the game rolling.  Which function would you call 
		// if you want the player to attack another ship?

	} else if(playerShip1.playerHP <= 0){
			// insert logic if the player dies.  What would you want the user to see?

			reset();
	}
}

```

## 7: A hard reset

```
const reset = function(){
	// You MAY want to prompt the user if he/she wants to keep playing
	if(answer == "yes"){
		// Look at your object methods and figure out how to invoke them.
		// Invoke a function which will prompt the user to play again.		
	} else {
		alert("YIPPIE KAY YAY");
		throw "exit";
	}
}
```

## 8: Launch the game!

At the bottom of the page, underneath everything... invoke ```intro();```