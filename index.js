let scoreHome = 0
let scoreGuest = 0

let ctnHome = document.getElementById("ctn-home")
let ctnGuest = document.getElementById("ctn-guest")

ctnHome.textContent = scoreHome
ctnGuest.textContent = scoreGuest

function updateLeader() {
    if (scoreHome > scoreGuest) {
        ctnHome.style.border = "3px solid #43DD76"
        ctnGuest.style.border = "none"
    } else if (scoreGuest > scoreHome) {
        ctnHome.style.border = "none"
        ctnGuest.style.border = "3px solid #43DD76"
    } else {
        ctnHome.style.border = "none"
        ctnGuest.style.border = "none"
    }
}


function addHome1() {
    scoreHome += 1
    ctnHome.textContent = scoreHome
    updateLeader()
}
function addHome2() {
    scoreHome += 2
    ctnHome.textContent = scoreHome
    updateLeader()
}
function addHome3() {
    scoreHome += 3
    ctnHome.textContent = scoreHome
    updateLeader()
}

function addGuest1() {
    scoreGuest += 1
    ctnGuest.textContent = scoreGuest
    updateLeader()
}
function addGuest2() {
    scoreGuest += 2
    ctnGuest.textContent = scoreGuest
    updateLeader()
}

function addGuest3() {
    scoreGuest += 3
    ctnGuest.textContent = scoreGuest
    updateLeader()
}

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    ctnHome.textContent = scoreHome
    ctnGuest.textContent = scoreGuest
    updateLeader()
    clearInterval(timerInterval);
    minutes = 0;  // Reset minutes
    seconds = 0;  // Reset seconds
    updateTimerDisplay();
}

let timerInterval;
let seconds = 0;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    document.getElementById("min").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("sec").textContent = remainingSeconds.toString().padStart(2, "0");
}

