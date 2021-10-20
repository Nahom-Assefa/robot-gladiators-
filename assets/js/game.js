// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots

window.alert("Welcome to Robot Gladiators");

const playerName = window.prompt('What is your player/s name?');
let playerMoney = 10;
let playerHealth = 100;
let playerAttack = 10;

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function(enemyName) {

while(enemyHealth > 0) {
const battleAnswer = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (battleAnswer === "fight" || battleAnswer === "FIGHT") {
enemyHealth = enemyHealth - playerAttack;
console.log(enemyName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

if (enemyHealth <= 0) {
window.alert(enemyName + " has died!");
} 

else {
window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

if (playerHealth <= 0) {
window.alert(playerName + " has died!");
} 

else {
window.alert(playerName + " still has " + playerHealth + " health left.");
}
} // End of first if block --- start of the else if block //

else if (battleAnswer === "skip" || battleAnswer === "SKIP") {
const quitAnswer = window.confirm("Would you like to quit?");

if (quitAnswer) {
window.alert(playerName + " has decided to skip this fight. Goodbye!");
playerMoney = playerMoney - 2;
console.log(playerMoney);
}

else {
fight();
}
} 

// End of else if block --- start of the else block //
else {
window.alert("You need to choose a valid option. Try again!");
}
}
}

for (let i = 0; i < enemyNames.length; i++) {
const pickEnemyName = enemyNames[i];
enemyHealth = 50;
fight(pickEnemyName);
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



