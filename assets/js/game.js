// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots

window.alert("Welcome to Robot Gladiators");

const playerName = window.prompt('What is your player\'s name?');
let playerMoney = 10;
let playerHealth = 13;
let playerAttack = 10;

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = Math.floor(Math.random() * 21) + 40;
let enemyAttack = 12;

//Random Number Generator//
const randomNumber = function(min, max) {
const value = Math.floor(Math.random() * (max - min + 1) + min);
console.log(value);
return value;
};

//Fight Function//
const fight = function(enemyName) {
while(enemyHealth > 0 && playerHealth > 0) {
const battleAnswer = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if (battleAnswer === "skip" || battleAnswer === "SKIP") {
const quitAnswer = window.confirm("Are you sure you'd like to quit?");
if (quitAnswer) {
window.alert(playerName + " has decided to skip this fight. Goodbye!");
playerMoney = Math.max(0, playerMoney - 10);
//playerMoney >= 0 ? window.alert(`You have no money`)
console.log("playerMoney", playerMoney);
break;
}
}

//enemyHealth = Math.max(0, enemyHealth - playerAttack);
var damage = randomNumber(playerAttack - 3, playerAttack);
enemyHealth = Math.max(0, enemyHealth - damage);
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
console.log(`This is damage ${damage} enemy inflicted`);

if (enemyHealth <= 0) {
window.alert(enemyName + " has died!");
break;
} 
else {
window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//playerHealth = Math.max(0, playerHealth - enemyAttack);
console.log(`This is the enemyAttack level ${enemyAttack}`);
var damage = randomNumber(enemyAttack - 3, enemyAttack);
playerHealth = Math.max(0, playerHealth - damage);
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
console.log(`This is ${damage} damage player inflicted`);

if (playerHealth <= 0) {
window.alert(playerName + " has died!");
break;
} 
else {
window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
};

// End Game Function //
const endGame = function() {
if(playerHealth >= 0) {
window.alert(`Great job, you've survived the game! You now have a score of ${playerMoney}`);
}
else {
window.alert(`You've lost your robot in battle`);
}
const playAgain = window.confirm(`Would you like to play again?`)

if(playAgain) {
startGame();
}
else{
window.alert(`Thanks you for playing Robot Gladiators! Come back soon!`);
}
}

//Shop Function//
const shop = function() {
const shopOption = window.prompt(`Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE, or 'LEAVE'`);

switch(shopOption) {
case 'REFILL':
case 'refill':
if(playerMoney >= 7) {
window.alert(`Refilling player's health by 20 for 7 dollars`)
playerHealth += 20;
playerMoney -= 7;
console.log(`Current Player Health:${playerHealth} and Player Money:${playerMoney}`);
}
else {
window.alert(`You don't have enough money!`);
}
break;

case 'UPGRADE':
case 'upgrade':
if(playerMoney >= 7) {
window.alert(`Upgrading player's attack by 6 for 7 dollars`);
playerAttack += 6;
playerMoney -= 7;
console.log(`Current Player Attack: ${playerAttack} and Player Money: $${playerMoney}`);
}
else {
window.alert(`You don't have enough money!`);
}
break;

case 'LEAVE':
case 'leave':
window.alert(`Leaving the store`);
break;
default: 
window.alert(`You did not pick a valid option. Try again.`);
shop();
}
};

//Start Game Function//
const startGame = function() {
playerHealth = 13;
playerAttack = 10;
playerMoney = 10;

for (let i = 0; i < enemyNames.length; i++) {
if (playerHealth > 0) {
window.alert("Round " + (i + 1));
const pickEnemyName = enemyNames[i];
enemyHealth = randomNumber(40,60);
fight(pickEnemyName);
if (playerHealth > 0 && i < enemyNames.length - 1) {
const storeConfirm = window.confirm(`Would you like to shop?`);
if(storeConfirm){
shop();
}
}
}
/*else {
window.alert("You have lost your robot in battle! Game Over!");
break;
}*/
}
endGame();
}

//Calling the Start Game Function//
startGame();









