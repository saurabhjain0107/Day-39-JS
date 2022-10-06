function getRandomDiceNumber(){
    return ((Math.floor(Math.random() * 10) % 6) + 1);
}

let diceNumberMap = new Map();
while(true){
    let randomDiceNumber = getRandomDiceNumber();
    let previousCount = diceNumberMap.get(randomDiceNumber);
    if (previousCount == null) {
        diceNumberMap.set(randomDiceNumber, 1);
    } else {
        diceNumberMap.set(randomDiceNumber, previousCount+1);
    }
    if(previousCount+1 >= 10){
        console.log(randomDiceNumber + " is reached 10 times");
        break;
    }
}

console.log(diceNumberMap);