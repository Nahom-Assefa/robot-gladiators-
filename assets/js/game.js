// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots

window.alert("Welcome to Robot Gladiators");

// Player-Info Object //
const playerInfo = {
  name: window.prompt("What is your player's name?"),
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

//Fight Function//
const fight = function (enemy) {
  while (enemy.health > 0 && playerInfo.health > 0) {
    const battleAnswer = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    if (battleAnswer === "skip" || battleAnswer === "SKIP") {
      const quitAnswer = window.confirm("Are you sure you'd like to quit?");
      if (quitAnswer) {
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye!"
        );
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
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
    console.log(`This is damage ${damage} player inflicted`);

    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(
        enemy.name + " still has " + enemy.health + " health left."
      );
    }

    console.log(`This is the enemyAttack level ${enemy.attack}`);
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
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
    console.log(`This is ${damage} damage enemy inflicted`);

    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
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
  const shopOption = window.prompt(
    `Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE, or 'LEAVE'`
  );

  switch (shopOption) {
    case "REFILL":
    case "refill":
      if (playerInfo.money >= 7) {
        playerInfo.refillHealth();
        console.log(
          `Current Player Health:${playerInfo.health} and Player Money:${playerInfo.money}`
        );
      } else {
        window.alert(`You don't have enough money!`);
      }
      break;

    case "UPGRADE":
    case "upgrade":
      if (playerInfo.money >= 7) {
        playerInfo.upgradeAttack();
        console.log(
          `Current Player Attack: ${playerInfo.attack} and Player Money: $${playerInfo.money}`
        );
      } else {
        window.alert(`You don't have enough money!`);
      }
      break;

    case "LEAVE":
    case "leave":
      window.alert(`Leaving the store`);
      break;
    default:
      window.alert(`You did not pick a valid option. Try again.`);
      shop();
  }
};

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
      window.alert("Round " + (i + 1));
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
