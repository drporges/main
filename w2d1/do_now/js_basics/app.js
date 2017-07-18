// let firstVariable='Hello World'
// firstVariable=2
// let secondVariable=firstVariable

// const yourName="Nick"
// console.log ('Hello my name is ' + yourName)


// function products(num1,num2){
// const fun=  (num1 *num2);
// return fun
// }

// const x=products(2,3);
// console.log(x)

// let x=0
// while (x<)1000 {
// 	console.log(x);
// // 	x=x+1;
// // }

// for (let i=0; i < 5; i=i+1)
// alert(i);
// for (let current=0; current < 20; current++) {
// 	console.log('Testing' + current);
// 	if (current % 2==0) {
// 		console.log (current + ' is even');
// 	}
// 	else {
// 		console.log (current + 'is odd')
// 	}
// }
// for (let y=0; y<=10; y++){
// const multiplier=y;
// for (let x=0; x<=10; x++){
// 	const result= multiplier * x;
// 	console.log(multiplier + '*' + x + '=' + result)
// 	}
// 	}

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

// for (x=60; x<=100; x++){
// 	const y= assignGrade (x)
// 	console.log('for ' + x + ' you get a ' + y)
// }

// const arrayName= ['yeah', 'fun'];

const monster = {
	name: "Monster McMonsterface",
	health: 100,
	attack_damage: 10,
	alive: true
}

const andrew = {
	health: 100,
	attackDamage: 9001,
	alive: true,
	attack: function(enemy) {
		enemy.health = monster.health - this.attackDamage;
		console.log("Andrew is attacking " + enemy.name);
		console.log(enemy.name + " now has " + enemy.health)
	}
}

andrew.attack(monster);

