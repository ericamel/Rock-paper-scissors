let score = 0;
let aiScore = 0;
let roundNum = 1;
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector("#roundResult");
const content = document.createElement('p');
roundResult.appendChild(content);
const scores = document.createElement('p');
scores.textContent = `Your Score:  ${score}`;
roundResult.appendChild(scores);
const aiScores = document.createElement('p');
aiScores.textContent = `AI Score: ${aiScore}`;
roundResult.appendChild(aiScores);
const winner = document.createElement('p');
whoWon.appendChild(winner);
const round = document.createElement('h2');
round.textContent = `Round: ${roundNum}`;
roundNumber.appendChild(round);
const resetButton = document.querySelector('resetBtn');

function computerPlay () {
    let random = Math.random()
    if (random < .3) {
        return ('rock');
    } else if (random > .6) {
        return ('scissors');
    } else {
        return ('paper');
    }
};


function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        content.textContent = "You draw. Try again!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
        score += 1;
        scores.textContent = `Your Score:  ${score}`;
        content.textContent = "You win!";
        if (score == 5) { 
            winner.textContent = "You won! Congratulations!";
        } 
    } else {
        aiScore += 1;
        aiScores.textContent = `AI Score: ${aiScore}`;
        content.textContent = "You lose!"};
        if (aiScore == 5) {
            winner.textContent = "AI won! Better luck next time!";
        } 

    roundNum++;
    round.textContent = `Round: ${roundNum}`;

}; 

function reset() {
    content.textContent = ""
    score = 0;
    scores.textContent = `Your Score:  ${score}`;
    aiScore = 0;
    aiScores.textContent = `AI Score: ${aiScore}`;
    roundNum = 1;
    round.textContent = `Round: ${roundNum}`;
    winner.textContent = ""

};
  
buttons.forEach((button) => {
button.addEventListener('click', playRound);
});


resetBtn.addEventListener('click', reset);










