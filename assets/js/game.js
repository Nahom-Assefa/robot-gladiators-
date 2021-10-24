// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots

let isPlayerTurn = true;
if (Math.random() > 0.5) {
    isPlayerTurn = false;
  } 

window.alert("Welcome to Robot Gladiators");


// Force a Player-Name to be issued //
const getPlayerName = function() {
    let name = "";
    console.log(`Your robot's name is + ${name}`);
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    return name;
}

// Player-Info Object //
const playerInfo = {
  name: getPlayerName(),
  money: 10,
  health: 13,
  attack: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7){
    window.alert(`Refilling player's health by 20 for 7 dollars`);
    this.health += 20;
    this.money -= 7;
  }
    else{
    window.alert(`You don't have enough money!`);
    }
  }, 
  upgradeAttack: function() {
    if (this.money >= 7) {
    window.alert(`Upgrading player's attack by 6 for 7 dollars.`);
    this.attack += 6;
    this.money -= 7;
  }
    else {
    window.alert(`You don't have enough money!`);
  }
}
}

//enemyInfo[0].special = true;
//let enemyHealth = Math.floor(Math.random() * 21) + 40;

//Random Number Generator//
const randomNumber = function (min, max) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(value);
  return value;
};

// Fight Function //
const fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
  
    // randomly change turn order
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    }
  
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
          // if true, leave fight by breaking loop
          break;
        }
  
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
          playerInfo.name +
            " attacked " +
            enemy.name +
            ". " +
            enemy.name +
            " now has " +
            enemy.health +
            " health remaining."
        );
  
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
  
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
  
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // player gets attacked first
      } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
  
        // remove player's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
          enemy.name +
            " attacked " +
            playerInfo.name +
            ". " +
            playerInfo.name +
            " now has " +
            playerInfo.health +
            " health remaining."
        );
  
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
      }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
    }
  };

// End Game Function //
const endGame = function () {
  if (playerInfo.health >= 0) {
    window.alert(
      `Great job, you've survived the game! You now have a score of ${playerInfo.money}`
    );
  } else {
    window.alert(`You've lost your robot in battle`);
  }
  const playAgain = window.confirm(`Would you like to play again?`);

  if (playAgain) {
    startGame();
  } else {
    window.alert(`Thanks you for playing Robot Gladiators! Come back soon!`);
  }
};

//Shop Function//
const shop = function () {
  let shopOption = window.prompt(
    `Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for 'REFILL', 2 for 'UPGRADE, or 3 for 'LEAVE'`
  );

  shopOption = parseInt(shopOption);

  switch (shopOption) {
    case 1:
      if (playerInfo.money >= 7) {
        playerInfo.refillHealth();
        console.log(
          `Current Player Health:${playerInfo.health} and Player Money:${playerInfo.money}`
        );
      } else {
        window.alert(`You don't have enough money!`);
      }
      break;

    case 2:
      if (playerInfo.money >= 7) {
        playerInfo.upgradeAttack();
        console.log(
          `Current Player Attack: ${playerInfo.attack} and Player Money: $${playerInfo.money}`
        );
      } else {
        window.alert(`You don't have enough money!`);
      }
      break;

    case 3:
      window.alert(`Leaving the store`);
      break;
    default:
      window.alert(`You did not pick a valid option. Try again.`);
      shop();
  }
};

// Fight Or Skip Function //

const fightOrSkip = function() {
 let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

 if (promptFight === "" || promptFight === null) {
   window.alert("You need to provide a valid answer! Please try again.");
   return fightOrSkip();
 }

 promptFight = promptFight.toLowerCase();
 if (promptFight === 'skip') {
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

   if (confirmSkip) {
     window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
     playerInfo.playerMoney = playerInfo.money - 10;
     return true;
   }
 }
 return false;
}

// Enemy Array Object //
const enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    },
  ];

//Start Game Function//
const startGame = function () {
  playerInfo.reset();

  for (let i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      //console.log(enemyInfo[i]);
      const pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        const storeConfirm = window.confirm(`Would you like to shop?`);
        if (storeConfirm) {
          shop();
        }
      }
    }
    
  }
  endGame();
};

//Calling the Start Game Function//
startGame();
