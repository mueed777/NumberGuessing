const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempt = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Enter a number between ${min} - ${max} to guess!`);

    // Check if the user clicked "Cancel"
    if (guess === null) {
        running = false;
        window.alert("Game cancelled.");
    } else {
        guess = Number(guess);

        if (isNaN(guess) || guess < min || guess > max) {
            window.alert(`Please enter a valid number!`);
        } else {
            attempt++;
            if (guess < answer) {
                window.alert(`TOO LOW!⬇️ Try again!`);
            } else if (guess > answer) {
                window.alert(`TOO HIGH!⬆️ Try again!`);
            } else {
                window.alert(`CORRECT! The answer is ${answer}. It took you ${attempt} attempt(s).`);
                running = false;
            }
        }
    }
}
