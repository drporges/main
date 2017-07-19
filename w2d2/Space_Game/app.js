const intro = function (){
alert("Welcome to the Game");
funStuff();
}
const funStuff = function () {
alert("Earth has been attacked by a horde of aliens! You are the captain of the USS Dylan, on a mission to destroy every last alien ship."
);

let opening = prompt("Do you want to enter Enemy territory?(yes/no)");
    if (opening.toLowerCase() == "yes") {
  alert("LET THE BATTLE BEGIN");
} 
 else {
    alert('You are a wimp, you are no Captain, fuck you we are going in anyway');
  }
let shipName= prompt('what is the name of your ship?');
ussDylan.name=shipName;
nameShip();
}

const ussDylan = {
    name: "",
    health: 100,
    attackDamageDylan: 10,
    alive: true,
    reset: function(){
        this.dylanHP = 100;
        this.alive = true;
    }
}

const enemy1 = {
    name : 'enemy 1',
    health: 20,
    attackDamage: 5,
    alive: true,
    reset: function(){
        this.enemyHP = 20;
        this.alive = true;
    }

}

const enemy2 = {
    name : 'enemy 2',
    health: 20,
    attackDamage: 5,
    alive: true,
     reset: function(){
        this.enemyHP = 20;
        this.alive = true;
    }
}

const enemy3 = {
    name : 'enemy 3',
    health: 20,
    attackDamage: 20,
    alive: true,
     reset: function(){
        this.enemyHP = 20;
        this.alive = true;
    }

}

const enemy4 = {
    name : 'enemy 4',
    health: 20,
    attackDamage: 10,
    alive: true,
     reset: function(){
        this.enemyHP = 20;
        this.alive = true;
    }
}

const enemy5 = {
    name : 'enemy 5',
    health: 20,
    attackDamage: 15,
    alive: true,
     reset: function(){
        this.enemyHP = 20;
        this.alive = true;
    }
}

const enemy6 = {
    name : 'enemy 6',
    health: 20,
    attackDamage: 5,
    alive: true,
     reset: function(){
        this.enemyHP = 20;
        this.alive = true;
    }
}


// for(let x=0; x<ships.length; x++){

// let attackAlien= prompt("Which Alien ship do you want to attack; Enemy 1, Enemy 2, Enemy 3, Enemy 4, Enemy 5, Enemy 6");
//     if (ships[x].name == attackAlien) {
//         DylanAttackAlien (ships[x]);
//         alert('The health of Enemy 1 is' + enemy1.health);
//         alert('The health of Enemy 2 is' + enemy2.health);
//         alert('The health of Enemy 3 is' + enemy3.health);
//         alert('The health of Enemy 4 is' + enemy4.health);
//         alert('The health of Enemy 5 is' + enemy5.health);
//         alert('The health of Enemy 6 is' + enemy6.health);
//     };
// };

// function DylanAttackAlien (obj) {
//         obj.health = obj.health - ussDylan.attackDamageDylan
//  };
// GO ME

const nameShip = function(){
    console.log('in name ship');
    const ships=[enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
   
    let promptName = prompt("What ship would you like to attack? " + 
    enemy1.name + " " + enemy2.name + " " + enemy3.name + " " + enemy4.name + " " + enemy5.name + " " + enemy6.name + " "); 

    let newName = promptName.toLowerCase(); 

    ships.forEach(function(ship){ 
    // console.log(ship.name);                     
    if(ship.name == newName){
        futureFunction2(ship);
    }
    else if  {
        alert('Learn to spell you idiot, write one of the names correctly')
        nameShip();
    }
    });
};

  const futureFunction2= function(enemy){
    console.log('I am in future function 2');
    alienAttackDylan(enemy);
 }

 const alienAttackDylan = function(enemy){

    ussDylan.attackDamage = Math.floor(Math.random()* 13 + 5); 
    enemy.health=enemy.health-ussDylan.attackDamage;


    if(enemy.health > 0){
        alert( enemy.name + ' is alive with '+ enemy.health + ' remaining')
        DylanAttackAlien(enemy);

    } 
    else if(enemy.health <= 0){
            alert('This ship is dead GANG GANG');
            enemy.alive=false;
                  alert('We were not attacked cause you sniped the ship so' + ussDylan.name + 'is still alive with ' + ussDylan.health + ' remaining');
                    nameShip();
                }
        
        
        
}
const DylanAttackAlien = function(enemy){
    enemy.attackDamage = Math.floor(Math.random()* 10 + 4); 
    ussDylan.health=ussDylan.health-enemy.attackDamage
    
    if(ussDylan.health > 0){
        alert('WE HAVE BEEN ATTACKED ' + ussDylan.name + 'is alive with ' + ussDylan.health + ' remaining');
        nameShip();

    } else if(ussDylan.health <= 0){
            alert('BOY WE DEAD!!! You dun fucked up, now everyone you care and love will die...congrats')
            }
            ussDylan.alive=false
            reset();
    
}



const reset = function(){
    let answer = prompt("Do you want to keep playing? (yes/no)");
    if(answer == "yes"){
        ussDylan.reset();
        enemy1.reset(); 
        enemy2.reset(); 
        enemy3.reset(); 
        enemy4.reset(); 
        enemy5.reset(); 
        enemy6.reset();     
    } else {
        alert("WE OUT OF HERE");
        throw "exit";
    }
}

intro();






























































