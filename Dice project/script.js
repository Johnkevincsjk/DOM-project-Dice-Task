var player1start = 0;
var player2start = 0;

var playersturnmsg = document.getElementById("players-turn");
var playeronescores = document.getElementById("player1-scores");
var playertwoscores = document.getElementById("player2-scores");
var rolldice1 = document.getElementById("roll-dice1");
var rolldice2 = document.getElementById("roll-dice2");
var resetbtn = document.getElementById("reset-btn");
var numberboard1 = document.getElementById("number-board1");
var numberboard2 = document.getElementById("number-board2");



rolldice1.addEventListener("click", startgame1)
rolldice2.addEventListener("click", startgame2)
resetbtn.addEventListener("click", endgame)


// Function for player 1 below
function startgame1() {



    if (20 <= player1start) {
        playeronescores.textContent = "Winner"


    } else {
        var randam1 = Math.floor(Math.random() * 6) + 1;
        numberboard1.textContent = randam1;
        player1start += randam1
        playeronescores.textContent = player1start
        playersturnmsg.textContent = "Player-2 To Play"
        console.log(player1start)
    }



}
// Function for Player 2 below
function startgame2() {


    if (20 <= player2start) {
        playertwoscores.textContent = "Winner"
    } else {
        var randam2 = Math.floor(Math.random() * 6) + 1
        numberboard2.textContent = randam2
        player2start += randam2
        playertwoscores.textContent = player2start

        playersturnmsg.textContent = "Player-1 To Play"
    }



}

// Function for reset is below
function endgame(randam1, randam2) {
    playeronescores.textContent = 0;
    playertwoscores.textContent = 0;
    numberboard1.textContent = 0;
    numberboard2.textContent = 0;
    playersturnmsg.textContent = " Start Game"
    player1start = 0 == randam1;
    player2start = 0 == randam2

}














