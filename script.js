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
console.log("Working (1)")

const dir = ["up", "down", "left", "right"];
let cpu = dir[Math.floor(Math.random() * 4)];

const up = document.getElementById("up").value = "up";
const down = document.getElementById("down").value = "down";
const left = document.getElementById("left").value = "left";
const right = document.getElementById("right").value = "right";

console.log(`Logging button values: ${up}, ${down}, ${left}, ${right} (2)`)

let userScore = 0;
let cpuScore = 0;
let winScore = 3;

const message = document.getElementById("message");
const userPoint = document.getElementById("point");
const userLook = document.getElementById("look");
const playAgain = document.getElementById("play-again")

testFunction = (direction) => {
    console.log(direction)
}

// compare = (point, look) => {
//     look = dir[Math.floor(Math.random() * 4)];
//     if (point == look) {
//         console.log (`Nice, You pointed ${point}. The cpu looked ${look}`)
//     } else (console.log (`Dang, You pointed ${point}. The cpu looked ${look}`))
// }

start = () => {
    message.innerHTML = userPoint.innerHTML;
}

next = (current, next) => {
    current.innerHTML = next.innerHTML;
}

point = (point, look) => {
    look = dir[Math.floor(Math.random() * 4)];

    if (point == look) {
        userScore++;
        alert(`You point ${point} with the fury of a thousand suns. The CPU shamefully looks ${look}. Your point total is now: ${userScore}`)
    }
    else (alert(`You point ${point} in full confidence... but the CPU looks ${look}. It's their turn now.`), next (message, userLook))

    if (userScore == winScore) {
        alert (`Congrats! You beat the CPU at the pointing game. Now the champion deserves some rest`)
        cpuScore = 0;
        userScore = 0;
        message.innerHTML = playAgain.innerHTML; 
    }
}

look = (look, point) => {
    point = dir[Math.floor(Math.random() * 4)];

    if (look == point) {
        cpuScore++;
        alert(`The CPU points ${point}. You dramatically turn your head ${look}. Their point total is now ${cpuScore}`)
        // document.getElementById("message").innerText = `The CPU got a point. Their total is: ${cpuScore}`;
    } else (alert(`The CPU points ${point}. You epically turn your head away, looking ${look}.`), next(message, userPoint))

    if (cpuScore == winScore) {
        alert (`You lost! to.. a computer... at a pointing game.... Well you'll get 'im next time bud. Just try again.'`)
        cpuScore = 0;
        userScore = 0;
        message.innerHTML = playAgain.innerHTML; 
    }
}

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// if (userScore == winScore) {
//     console.log (`Congrats! You beat the CPU at the pointing game. Now the champion deserves some rest`)
//     cpuScore = 0;
//     userScore = 0;
// } 
// else if (cpuScore == winScore) {
//     console.log (`You lost! to.. a computer... at a pointing game.... Well you'll get 'im next time bud. Just try again.'`)
//     cpuScore = 0;
//     userScore = 0;
// }