// Challenge 2:
// // Replace the parameters below according to your preference.

// // space, scary, military, romantic, cowboy, fantasy, superhero
// favouriteMovieGenre("space")

// // watermelon, tomato, banana, orange, avocado, blueberry
// favouriteFruit("blueberry")

// // light, dark
// favouriteMode("light")

// // sharp, soft, round
// favouriteEdgeStyle("soft")



// ////////////////////////////////////
// // IGONE THE CODE BELOW THIS LINE //
// ////////////////////////////////////

// function setProp(prop, value) {
//     document.documentElement.style.setProperty(prop, value)
// }

// function favouriteEdgeStyle(style) {
//     setProp("--image", "var(--" + style + ")");
// }

// function favouriteMovieGenre(font) {
//     if (font) {
//         setProp("--font", "var(--" + font + ")");    
//     }
// }

// function favouriteMode(mode) {
//     if (mode === "light" || !mode) {
//         setProp('--background', "var(--light)");
//         setProp('--text', "var(--dark)");
//     } else if (mode === "dark") {
//         setProp('--background', "var(--dark)");
//         setProp('--text', "var(--light)");
//     }
// }

// function favouriteFruit(theme) {
//     if (theme === "pastel") {
//         setProp('--light', "#f2f6c3")
//         setProp('--dark', "#68c4af")
//     } else if (theme === "muted") {
//         setProp('--light', "#4c5b64")
//         setProp('--dark', "#45241c")
//     } else if (theme === "love") {
//         setProp('--light', "#f06836")
//         setProp('--dark', "#ba0001")
//     } else if (theme === "sky") {
//         setProp('--light', "#99ccff")
//         setProp('--dark', "#3366ff")
//     } else if (theme === "forrest") {
//         setProp('--light', "#91B247")
//         setProp('--dark', "#597C2B")
//     }  else if (theme === "shiny") {
//         setProp('--light', "#2e9afe")
//         setProp('--dark', "#02197c")
//     } else if (theme === "banana") {
//         setProp('--light', "#fbec5d")
//         setProp('--dark', "#6b3e26")
//     } else if (theme === "watermelon") {
//         setProp('--light', "#75b855")
//         setProp('--dark', "#ad3838")
//     } else if (theme === "tomato") {
//         setProp('--light', "#d62e2e")
//         setProp('--dark', "#600000")
//     } else if (theme === "avocado") {
//         setProp('--light', "#6b8c21")
//         setProp('--dark', "#704012")
//     } else if (theme === "orange") {
//         setProp('--light', "#ffca16")
//         setProp('--dark', "#f97300")
//     } else if (theme === "blueberry") {
//         setProp('--light', "#41a8f9")
//         setProp('--dark', "#064490")
//     } else  {
//         setProp('--light', "#f5f5f5")
//         setProp('--dark', "#222222")
//     } 
// }




// let countEl = document.getElementById("count-el")
// let count = 0
// let saveEl = document.getElementById("save-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     saveEl.textContent += count + " - "
//     count = 0
//     countEl.textContent = count
// }


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Sparkle"
// let greeting = "Hanabi da yo!"

// welcomeEl.innerText = name + ", " + greeting

// welcomeEl.innerText += " 😝"


// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// function add() {
//     let sum = num1 + num2
//     sumEl.textContent = "Sum: " + sum
// }

// function substract() {
//     let sum = num1 - num2
//     sumEl.textContent = "Sum: " + sum
// }

// function multiply() {
//     let sum = num1 * num2
//     sumEl.textContent = "Sum: " + sum
// }

// function divide() {
//     let sum = num1 / num2
//     sumEl.textContent = "Sum: " + sum
// }


// let homeScoreEl = document.getElementById("home-score")
// let guestScoreEl = document.getElementById("guest-score")
// let homeScore = 0
// let guestScore = 0


// function incrementScore(score, side) {
//     if (side == "home"){
//         homeScore += score
//         homeScoreEl.textContent = homeScore 
//     } else {
//         guestScore += score
//         guestScoreEl.textContent = guestScore
//     }
// }

// BLACKJACK GAME

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// // let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// let player = {
//     name: "Player",
//     chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// function startGame(){
//     cards = [getRandomCard(), getRandomCard()]
//     sum = cards[0] + cards[1]
//     isAlive = true
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (i=0; i<cards.length; i++){
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"

//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard(){
//     if (isAlive && !hasBlackJack) {
//         let card = getRandomCard()
//         cards.push(card)
//         sum += card
//         renderGame()
//     }
// }

// function getRandomCard() {
//     // return Math.floor(Math.random() * 10) + 2
//     let randomCard = Math.floor( Math.random() * 13) + 1
//     if (randomCard === 1) {
//         return 11
//     } else if (randomCard > 10) {
//         return 10
//     } else {
//         return randomCard
//     }
// }

// ROCK PAPER SCISSORS

// let hands = ["rock", "paper", "scissor"]

// function getHand(){
//     return hands[Math.floor(Math.random() * 3)]
// }

// function play(){
//     let hand1 = getHand()
//     let hand2 = getHand() 
//     if(hand1 === "scissor"){
//         if (hand2 === "paper"){
//             console.log(`hand1 (${hand1}) won against hand2 (${hand2})`)
//         } else if (hand2 === "rock") {
//             console.log(`hand1 (${hand1}) lost against hand2 (${hand2})`)
//         } else {
//             console.log(`hand1 (${hand1}) drew with hand2 (${hand2})`)
//         }
//     } else if (hand1 === "paper"){
//         if (hand2 === "paper"){
//             console.log(`hand1 (${hand1}) drew against hand2 (${hand2})`)
//         } else if (hand2 === "rock") {
//             console.log(`hand1 (${hand1}) won against hand2 (${hand2})`)
//         } else {
//             console.log(`hand1 (${hand1}) lost against hand2 (${hand2})`)
//         }
//     } else {
//         if (hand2 === "paper"){
//             console.log(`hand1 (${hand1}) lost against hand2 (${hand2})`)
//         } else if (hand2 === "rock") {
//             console.log(`hand1 (${hand1}) drew against hand2 (${hand2})`)
//         } else {
//             console.log(`hand1 (${hand1}) won against hand2 (${hand2})`)
//         }
//     }
// }

// play()