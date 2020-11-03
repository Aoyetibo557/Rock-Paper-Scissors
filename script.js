//Local Varaibles
var res;
let playerScoreCount = 0;
let houseScoreCount = 0;
let moves = 5;
/**
 * 
 * @param {*to get the value of the button the player cliked on} clicked 
 */
function getPlayerMove(clicked){
    res = clicked
    
   return clicked;
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min)) +min;
}

/**
 * To statrt up the game on  clic it could call the getPlayerMove Function then randomly get a move
 * from the array and compare player move with house moves and decide between a draw, WON or lose
 *
 */
function playGame(){
        const houseMoves = ["rock", "paper", "scissors"];
        var moveNum = getRandomNum(0,3);
        var houseMove = houseMoves[moveNum];
        var playerMove = res;
        
        

        console.log("Player move: "+ playerMove +" HouseMove: " + moveNum + ":" + houseMove);
        


        if ( houseMove == playerMove )
        {
            console.log("Draw");
            document.getElementById("status").innerHTML = "DRAW"

        }
        // Rock and paper
        else if(houseMove == "paper" && playerMove == "rock")
        {
            console.log("House WONs")
            document.getElementById("status").innerHTML = "YOU LOSE"
            houseScoreCount+=5;
        }
        else if(houseMove == "rock" && playerMove == "paper")
        {
            console.log("Player WONs")
            document.getElementById("status").innerHTML = "YOU WON"
            playerScoreCount = playerScoreCount + 5;
        }
        // r&p end

        //Rock and Scissors
        else if(houseMove == "rock" && playerMove == "scissors")
        {
            console.log("House WONs");
            document.getElementById("status").innerHTML = "YOU LOSE";
            houseScoreCount+=5;

        }
        else if(houseMove == "scissors" && playerMove == "rock")
        {
            console.log("Player WONs")
            document.getElementById("status").innerHTML = "YOU WON"
            playerScoreCount+=5;

        }
        //r&s end

        else if(houseMove == "scissors" && playerMove == "paper")
        {
            console.log("House WONs");
            document.getElementById("status").innerHTML = "YOU LOSE";
            houseScoreCount+=5;

        }
        else if(houseMove == "paper" && playerMove == "scissors")
        {
            console.log("Player WONs")
            document.getElementById("status").innerHTML = "YOU WON"
            playerScoreCount+=5;

        }
        
        
            document.getElementById("playerScore").innerHTML = playerScoreCount;
            // document.getElementById("playerChoice").innerHTML = playerMove;
            // document.getElementById("houseChoice").innerHTML = houseMove;

            document.getElementById("playerChoice").innerHTML = updateDisplay(playerMove);
            document.getElementById("houseChoice").innerHTML = updateDisplay(houseMove);

        moves--;
        document.getElementById("mvs").innerHTML = moves;

        // reomve the hide class from the game result div
        var doc = document.getElementById("gameResult");
        doc.classList.remove("hide");

        if(moves == 0){

            // alert("Out oF Moves");
            resetMoves();
        }

    /**
     * GAME RULES
     * paper beats rock,
     * rock beats scissors
     * scissors beats paper
     */

}


function updateDisplay(entry){
    if(entry == "rock"){
        var btn1 = '<button class="ripple" id="rock" aria-label="rock" value="rock"><i class="fas fa-hand-rock res"></i></button>';
        // console.log(btn1);
        return btn1;
    }
    else if(entry == "paper"){
        var btn2 =  '<button class="ripple" id="paper" aria-label="rock" value="paper"><i class="fas fa-hand-paper res"></i></button>';
        // console.log(btn2);

        return btn2;
    }
    else if(entry == "scissors"){
        var btn3 = '<button class="ripple" id="sis" aria-label="rock" value="scissors"><i class="fas fa-hand-scissors res"></i></button>';
        // console.log(btn3);

        return btn3;
    }
}

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes  = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60 , 10);

        minutes = minutes < 10 ?  "0"+ minutes: minutes;
        seconds = seconds < 10 ?  "0"+ seconds: seconds;

        display.textContent  = minutes+ ":" +seconds;

        if(--timer < 0){
            timer = duration;
        }
    }, 1000);
}
function resetMoves(){
    moves = 5;
    playerScoreCount = 0;
}