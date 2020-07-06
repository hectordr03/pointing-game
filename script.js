// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Pseudo:

// Ask the player which direction they want to point
    // if the cpu looks in that direction
    // generate random choice for 

// const dir = ["up", "down", "left", "right"];

// let userScore = 0;
// let cpuScore = 0;
// let winScore = 3; // easy difficulty.

// while (userScore < winScore && cpuScore < winScore) {
//     let user = prompt("What's your guess?", "Up, down, left, or right?"); // > > > I originally initialized "user" with const. But it gave me issues when I wanted to re < < <
//     const cpu = dir[Math.floor(Math.random() * 3)]; // generates random number 0 - 3 (not including 3, I only need 0 - 3 bc the indexes of arrays always begin at 0). Randomly selects a value from the dir (directions) array.

//     alert (`You point ${user}!`); // "You point (player choice)"
//     alert (`The cpu looks ${cpu}`); // "The cpu looks (random selection)"

//     if (user.toLowerCase() == cpu) { // I use .toLowerCase() to account for any capitalized letters which I think would cause some issues (like "Up" may not be == "up", although full disclosure, I'm not 100% sure on that.)

//         userScore++; // If the user guesses correctly, they get 1 point added to their score.
//         alert (`Nice, you get another turn! Points: ${userScore}`); // This line is the user can keep track of their score.
//     }

//     else if (user.toLowerCase() !== cpu) {
//         alert (`It's the cpu's turn now!`)
//         user = prompt("Turn your head!", "Up, down, left, or right?"); // Now asks which direction you should turn your head
//         alert (`The cpu points ${cpu}`);
//         if (cpu == user.toLowerCase()) {
//             cpuScore++;
//             alert (`The cpu got a point. His score is: ${cpuScore}`) // This line is the user can keep track of the cpu's score.
//         }
//         else (alert (`The cpu guessed wrong! It's your turn now!`))
//     }
// }

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// > > > > > VARIABLES < < < < <

// declaring initial variables (player, cpu, diections, etc)
const dir = ["up", "down", "left", "right"];
let cpu = dir[Math.floor(Math.random() * 4)];

let userScore = "0";
let cpuScore = "0";
let winScore = 3;;

// > > > > > DIV VARIABLES < < < < <

const up = document.getElementById("up").value = "up";
const down = document.getElementById("down").value = "down";
const left = document.getElementById("left").value = "left";
const right = document.getElementById("right").value = "right";

// Message divs to display different message in message box
const message_div = document.getElementById("message-box");
const userPoint = document.getElementById("point");
const userLook = document.getElementById("look");
const playAgain = document.getElementById("play-again");

// scoreboard div elements
const userScore_div = document.getElementById("user-score");
const cpuScore_div = document.getElementById("cpu-score");

const roundWin = document.getElementById('win-round');
const roundLoss = document.getElementById('loss-round');

const cpuRoundWin = document.getElementById('cpu-roundWin');
const cpuRoundLoss = document.getElementById('cpu-roundLoss');

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// > > > > > FUNCTIONS < < < < <

// Replaces and displays messages in the mssage box
message = (target) => {
    message_div.innerHTML = target.innerHTML;
    userScore_div.innerText= `Player Score: ${userScore}`;
    cpuScore_div.innerText= `CPU Score: ${cpuScore}`;
}

// Functions point and look compare values on button presses, increments score, displays new messages and checks win-state
point = (point, look) => {
    // Sets look to a random direction from our array
    look = dir[Math.floor(Math.random() * 4)];

    // Check point and look direstions. User gets another opportunity if they're right.
    if (point == look) {
        userScore++;
        message(roundWin);
    }
    else (message(roundLoss))

    // Declares you as the winner if you get 3 points
    if (userScore == 3) {
        alert (`Congrats! You beat the CPU at the pointing game. Now the champion deserves some rest`)
        cpuScore = 0;
        userScore = 0;
        message (playAgain);
    }
}

// The "look" function is just the opposite of the "point" function. Checks if CPU wins.
look = (look, point) => {
    point = dir[Math.floor(Math.random() * 4)];

    if (look == point) {
        cpuScore++;
        message(cpuRoundWin)
    } 
    else (message(cpuRoundLoss))

    if (cpuScore == 3) {
        alert (`You lost! to.. a computer... at a pointing game.... Well you'll get 'im next time bud. Just try again.'`)
        cpuScore = 0;
        userScore = 0;
        message (playAgain);
    }
}

// Hides the rules div and shows message box and character images
hide = () => {
    // I added the rule box in last so I didn't bother declaring these as variables
    document.getElementById("rules-box").style.display = "none";
    document.getElementById("cpu").style.visibility = "visible";
    document.getElementById("player").style.visibility = "visible";
    message_div.style.visibility = "visible";
}