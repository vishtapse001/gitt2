// Get elements from the DOM
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let totalSeconds = 0;
let interval; // Variable to hold setInterval function

// Function to start the timer
function startTimer() {
  interval = setInterval(() => {
    totalSeconds++;
    updateTimerDisplay();
  }, 1000); // Update every 1 second (1000 milliseconds)
}

// Function to stop the timer
function stopTimer() {
  clearInterval(interval);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(interval);
  totalSeconds = 0;
  updateTimerDisplay();
}

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  minutesDisplay.textContent = padTime(minutes);
  secondsDisplay.textContent = padTime(seconds);
}

// Function to pad single digit numbers with leading zero
function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initial timer display
updateTimerDisplay();
