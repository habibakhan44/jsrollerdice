function rollDice() {
    
    document.getElementById("result").innerText = "Rolling...";
    document.getElementById("dice1").src = "images/diceroll.gif";
    document.getElementById("dice2").src = "images/diceroll.gif";

    
    setTimeout(function() {
       
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

       
        document.getElementById("dice1").src = "images/dice" + randomNumber1 + ".png";
        document.getElementById("dice2").src = "images/dice" + randomNumber2 + ".png";

        
        if (randomNumber1 > randomNumber2) {
            document.getElementById("result").innerText = "User 1 WINS!";
        } else if (randomNumber1 < randomNumber2) {
            document.getElementById("result").innerText = "User 2 WINS!";
        } else {
            document.getElementById("result").innerText = "It's a DRAW!";
        }
    }, 1000);  
}