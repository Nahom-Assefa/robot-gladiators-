window.alert("The fight has begun!");
const playerName = "James";
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

const enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function() {
    window.alert("Welcome to Robot Gladiators");
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
}

fight();

if (playerHealth <= 0) {
window.alert(playerName + " has died!");
} 
else {
window.alert(playerName + " still has " + playerHealth + " health left.");
}