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
}

// TODO: Timing feature

let timerMin = document.getElementById("min")
let timerSec = document.getElementById("sec")

let minutes = 0
let seconds = 0

timerMin.textContent = minutes
timerSec.textContent = seconds

function pause() {
    clearInterval(cron)
}

function startTimer() {
    pause()
    cron = setInterval(() => { timer(); }, 10);
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
      }
      if (second == 60) {
        second = 0;
        minute++;
      }
      if (minute == 60) {
        minute = 0;
        hour++;
      }
      timerMin.textContent  = returnData(minute);
      timerSec.textContent = returnData(second);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
  }