let scoreHome = 0
let scoreGuest = 0

let ctnHome = document.getElementById("ctn-home")
let ctnGuest = document.getElementById("ctn-guest")

ctnHome.textContent = scoreHome
ctnGuest.textContent = scoreGuest

function addHome1() {
    scoreHome += 1
    ctnHome.textContent = scoreHome
}
function addHome2() {
    scoreHome += 2
    ctnHome.textContent = scoreHome
}
function addHome3() {
    scoreHome += 3
    ctnHome.textContent = scoreHome
}

function addGuest1() {
    scoreGuest += 1
    ctnGuest.textContent = scoreGuest
}
function addGuest2() {
    scoreGuest += 2
    ctnGuest.textContent = scoreGuest
}

// FIXME: add another function
function addGuest3() {
    scoreGuest += 3
    ctnGuest.textContent = scoreGuest
}

