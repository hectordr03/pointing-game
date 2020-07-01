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
// const cpu = dir[Math.floor(Math.random() * 4)]; // generates random number 1 - 4. Randomly selects a value (a direction) from the dir (directions) array.

let userScore = 0;
let cpuScore = 0;
let winScore = 3;

// console.log(cpu)


while (userScore < winScore && cpuScore < winScore) {
    const user = prompt("What's your guess?", "Up, down, left, or right?");
    const cpu = dir[Math.floor(Math.random() * 4)];
    // console.log(`You point ${user}!`);
    // console.log(`The cpu looks ${cpu}`);
    alert (`You point ${user}!`);
    alert (`The cpu looks ${cpu}`);

    if (user.toLowerCase() == cpu) {
        userScore++;
        alert (`Nice, you get another turn! Points: ${userScore}`)
    } else(alert ("Wrong! Now it's the CPU's turn"))
}
