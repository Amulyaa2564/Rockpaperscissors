let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissors=document.getElementById('scissors');

function random(){
    let choice=['rock','paper','scissors'];
    let randomIndex=Math.floor(Math.random()*3);
    return choice[randomIndex];
}

// UPDATED showResult()
function showResult(message, won=false){
    document.getElementById("modalMessage").innerText = message;

    let prize = document.getElementById("prize"); // image element from modal

    if(won){
        prize.src = "prize.png";   // make sure prize.png is in same folder
        prize.style.display = "block";

        // confetti only for win
        confetti({
            particleCount: 120,
            spread: 60,
            origin: { y: 0.6 }
        });

    } else {
        prize.style.display = "none";
    }

    let modal = new bootstrap.Modal(document.getElementById('resultModal'));
    modal.show();
}


// ROCK
rock.addEventListener('click', function() {
    let computer = random();

    if (computer === 'scissors') {
    showResult("The mighty Rock shattered Scissors into dust.", true);
} 
else if (computer === 'paper') {
    showResult("Rock was sealed and silenced beneath Paper’s calm command.");
} 
else {
    showResult("An equal clash. No victory. The war continues.");
}

});


// PAPER
paper.addEventListener('click', function() {
    let computer = random();

    if (computer === 'rock') {
        showResult("Rock’s strength meant nothing… Paper claimed the throne.", true);
    }
    else if (computer === 'paper') {
        showResult("Both forces mirror each other — fate refuses to decide.");
    }
    else { // computer === 'scissors'
        showResult("Paper was sliced clean — Scissors reigns with sharp precision.");
    }
});

// SCISSORS
scissors.addEventListener('click', function() {
    let computer = random();

    if (computer === 'paper') {
        showResult("No mercy. Scissors cut Paper without hesitation.", true);
    }
    else if (computer === 'scissors') {
        showResult("Steel meets steel — neither blade yields.");
    }
    else { // computer === 'rock'
        showResult("Rock breaks Scissors — the battlefield falls silent.");
    }
});
