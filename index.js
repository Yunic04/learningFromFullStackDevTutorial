let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


function incrementScore(score, side) {
    if (side == "home"){
        homeScore += score
        homeScoreEl.textContent = homeScore 
    } else {
        guestScore += score
        guestScoreEl.textContent = guestScore
    }
}