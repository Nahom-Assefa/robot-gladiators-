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

while(enemyHealth > 0 && playerHealth > 0) {
const battleAnswer = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

/*if(battleAnswer != 'skip' || battleAnswer != "SKIP" || battleAnswer != 'fight' || battleAnswer != 'FIGHT') {
    window.alert('This is unacceptable please try again');
}*/


// if player picks "skip" confirm and then stop the loop
if (battleAnswer === "skip" || battleAnswer === "SKIP") {
// confirm player wants to skip
const quitAnswer = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
if (quitAnswer) {
window.alert(playerName + " has decided to skip this fight. Goodbye!");
// subtract money from playerMoney for skipping
playerMoney = playerMoney - 10;
console.log("playerMoney", playerMoney)
break;
}
}

//if (battleAnswer === "fight" || battleAnswer === "FIGHT") {
enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

if (enemyHealth <= 0) {
window.alert(enemyName + " has died!");
break;
} 

else {
window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

if (playerHealth <= 0) {
window.alert(playerName + " has died!");
break;
} 

else {
window.alert(playerName + " still has " + playerHealth + " health left.");
}

}
};




for (let i = 0; i < enemyNames.length; i++) {
if (playerHealth > 0) {
window.alert("Round " + (i + 1));
const pickEnemyName = enemyNames[i];
enemyHealth = 50;
fight(pickEnemyName);
}
else {
window.alert("You have lost your robot in battle! Game Over!");
break;
}
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



