// Player guesses a direction up, down, left, or right
// CPU chooses up, down, left, or right randomly
// Compare results
    // If results are == to each other
    // The player gets 1 point, and gets to guess again immediately
    // If results are !== to each other
    // The player loses his opportunity and the computer gets to guess a direction

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const dir = ["up", "down", "left", "right"];

// const user = prompt("What's your guess?", "Up, down, left, or right?");
// const user = "down";
// const cpu = dir[Math.floor(Math.random() * 4)]; 

let userScore = 0;
let cpuScore = 0;
let winScore = 3; // easy difficulty.
// console.log(cpu)


while (userScore < winScore && cpuScore < winScore) {
    let user = prompt("What's your guess?", "Up, down, left, or right?"); // > > > I originally initialized "user" with const. But it gave me issues when I wanted to re < < <
    const cpu = dir[Math.floor(Math.random() * 4)]; // generates random number 1 - 4 (not including 4). Randomly selects a value (a direction) from the dir (directions) array.
    // console.log(`You point ${user}!`);
    // console.log(`The cpu looks ${cpu}`);
    alert (`You point ${user}!`); // "You point (player choice)"
    alert (`The cpu looks ${cpu}`); // "The cpu looks (random selection)"

    if (user.toLowerCase() == cpu) { // I use .toLowerCase() to account for any capitalized letters which I think would cause some issues (like "Up" may not be == "up", although full disclosure, I'm not 100% sure on that.)
        userScore++; // If the user guesses correctly, they get 1 point added to their score.
        alert (`Nice, you get another turn! Points: ${userScore}`); // This line is the user can keep track of their score.
    }

    else if (user.toLowerCase() !== cpu) {
        alert (`It's the cpu's turn now!`)
        user = prompt("Turn your head!", "Up, down, left, or right?"); // 
        alert (`The cpu points ${cpu}`);
        if (cpu == user.toLowerCase()) {
            cpuScore++; // increases cpu's score
            alert (`The cpu got a point. His score is: ${cpuScore}`) // This line is the user can keep track of the cpu's score.
        }
        else (alert (`The cpu guessed wrong! It's your turn now!`))
    }
}
