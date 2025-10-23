let fighters = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄️", "🐨", "🐯", 
"🦁", "🐮", "🐷", "🐸", "🐵", "🐔"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let fighter1 = getRandomFighter()
    let fighter2 = getRandomFighter()
    stageEl.textContent = (`${fighter1} vs ${fighter2}`)
})

function getRandomFighter(){
    return fighters[Math.floor(Math.random() * fighters.length)]
}