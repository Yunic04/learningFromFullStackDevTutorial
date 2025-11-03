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


// EMOJI FIGHTER

// let fighters = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄️", "🐨", "🐯", 
// "🦁", "🐮", "🐷", "🐸", "🐵", "🐔"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
//     let fighter1 = getRandomFighter()
//     let fighter2 = getRandomFighter()
//     stageEl.textContent = (`${fighter1} vs ${fighter2}`)
// })

// function getRandomFighter(){
//     return fighters[Math.floor(Math.random() * fighters.length)]
// }

// FRUIT SORTER

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// for (let i = 0; i<fruit.length; i++){
//     if (fruit[i] === "🍎") {
//         appleShelf.textContent += "🍎"
//     } else if (fruit[i] === "🍊"){
//         orangeShelf.textContent += "🍊"
//     } else {
//         console.log("Uncategorized item detected!")
//     }
// }

// RANDOM PASSWORD GENERATOR

// let generateButtonEl = document.getElementById("generate-btn")
// let password1El = document.getElementById("password1")
// let password2El = document.getElementById("password2")
// let passwordLengthEl = document.getElementById("password-length")
// let passwordLength = 15
// let symbolsEl = document.getElementById("symbols")
// let numbersEl = document.getElementById("numbers")
// const characters = [
//   // Uppercase letters
//   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
//   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

//   // Lowercase letters
//   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

//   // Numbers
//   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

//   // Special characters
//   "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
//   "-", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "`", "~", "\"", "\\"
// ];
// const charactersNoNum = [
//   // Uppercase letters
//   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
//   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

//   // Lowercase letters
//   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

//   // Special characters
//   "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
//   "-", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "`", "~", "\"", "\\"
// ];
// const charactersNoSymbols = [
//   // Uppercase letters
//   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
//   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

//   // Lowercase letters
//   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

//   // Numbers
//   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
// ];
// const charactersOnlyAlphabet = [
//   // Uppercase letters
//   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
//   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

//   // Lowercase letters
//   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
// ];


// generateButtonEl.addEventListener("click", function(){
//     if (passwordLengthEl.value === ""){
//         passwordLength = 15
//     } else {
//         passwordLength = passwordLengthEl.value
//     }
//     password1El.textContent = getRandomPassword(passwordLength, symbolsEl.checked, numbersEl.checked)
//     password2El.textContent = getRandomPassword(passwordLength, symbolsEl.checked, numbersEl.checked)
// })

// password1El.addEventListener("click", function(){
//     navigator.clipboard.writeText(password1El.textContent)
//     alert("Password copied!")
// })

// password2El.addEventListener("click", function(){
//     navigator.clipboard.writeText(password2El.textContent)
//     alert("Password copied!")
// })

// function getRandomPassword(passwordLength, symbols, numbers){
//     let password = ""
//     if (symbols === true && numbers === true) {
//         for (let i = 0; i < passwordLength; i++) {
//             password += characters[Math.floor(Math.random() * characters.length)]
//         }
//         return password
//     } else if (!symbols && numbers) {
//         for (let i = 0; i < passwordLength; i++) {
//             password += charactersNoSymbols[Math.floor(Math.random() * charactersNoSymbols.length)]
//         }
//         return password
//     } else if (symbols && !numbers) {
//         for (let i = 0; i < passwordLength; i++) {
//             password += charactersNoNum[Math.floor(Math.random() * charactersNoNum.length)]
//         }
//         return password
//     } else if (!symbols && !numbers) {
//         for (let i = 0; i < passwordLength; i++) {
//             password += charactersOnlyAlphabet[Math.floor(Math.random() * charactersOnlyAlphabet.length)]
//         }
//         return password
//     }
// }

// MY LITTLE CALCULATOR

// const form = document.getElementById('form')
// const numOneInput = document.getElementById('num1')
// const numTwoInput = document.getElementById('num2')
// const resultText = document.getElementById('result')

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const numOneVal = Number(numOneInput.value);
//     const numTwoVal = Number(numTwoInput.value);

//     resultText.textContent = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`
// })

// LEADS TRACKER - CHROME EXTENSION

// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const deleteBtn = document.getElementById("delete-btn")
// const ulEl = document.getElementById("ul-el")
// const tabBtn = document.getElementById("tab-btn")

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// let myLeads = leadsFromLocalStorage ? leadsFromLocalStorage : []

// renderLeads(myLeads)

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLead(inputEl.value)
//     inputEl.value = ""
// })

// tabBtn.addEventListener("click", function(){
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         renderLead(tabs[0].url)
//     })
// })

// deleteBtn.addEventListener("dblclick", function(){
//     localStorage.clear()
//     myLeads = []
//     ulEl.innerHTML = ''
// })

// function renderLead(lead){
//     ulEl.innerHTML += `<li> <a href="${lead}" target="_blank"> ${lead}</a> </li>`
// }

// function renderLeads(leads) {
//     let listItems = ""
//     for (let i = 0; i<leads.length; i++){
//         listItems += `<li> <a href="${leads[i]}" target="_blank"> ${leads[i]}</a> </li>`
//     }
//     ulEl.innerHTML = listItems
// }

// METRIC/IMPERIAL UNIT CONVERSION

// const inputEl = document.getElementById("input-el")
// const convertBtn = document.getElementById("convert-btn")
// const lengthEl = document.getElementById("length-el")
// const volumeEl = document.getElementById("volume-el")
// const massEl = document.getElementById("mass-el")

// let value = 0

// convertBtn.addEventListener("click", function(){
//     value = Number(inputEl.value)
    
//     lengthEl.textContent = `${value} meters = ${(value*3.281).toFixed(3)} feet |
//      ${value} feet = ${(value/3.281).toFixed(3)} meters`

//     volumeEl.textContent = `${value} liters = ${(value/3.875).toFixed(3)} gallons |
//      ${value} gallons = ${(value*3.875).toFixed(3)} liters`

//     massEl.textContent = `${value} kilos = ${(value*2.205).toFixed(3)} pounds |
//      ${value} pounds = ${(value/2.205).toFixed(3)} kilos`
// })

// timeout

// document.getElementById("stop").addEventListener("click",function(){
//     clearTimeout(questionTimer)
//     console.log("au")
// })

// function logAnswer(){
//     console.log(`The answer is 2`)
// }

// console.log(`what is 1 + 1?`)

// const questionTimer = setTimeout(logAnswer, 3000)

// timeout

// const start = performance.now()

// setTimeout(() => {
//     const end = performance.now()
//     console.log(`Execution time: ${end-start} milliseconds`)
// }, 1000)

// for (let i=0; i < 1000000; i++){
//     let answer = i * 2000000 / 67.8 * (45.7 / 3.2)
// }

//time without slow executing code: 1006.3404999999999 milliseconds
//time with slow executing code: 1011.5996 milliseconds

// date

// const dateSnapshot = new Date()

// console.log(dateSnapshot.getFullYear().toString())

//error

// function checkUsername(userName) {
//     if (userName) {
//         console.log(userName)
//     } else {
//         throw new Error('No username provided')
//     }
// }

// checkUsername()

//pre increment

// let i = 0

// function fun(){
//     return ++i
// }

// console.log(fun())
// console.log(fun())
// console.log(fun())

// separator

// let num = 9_438_029_842
// console.log(num)

// STOCK TICKER

// import {getStockData} from '/fakeStockAPI.js'

// const stockName = document.getElementById('stock-name')
// const stockSymbol = document.getElementById('stock-symbol')
// const stockPrice = document.getElementById('stock-price')
// const timeEl = document.getElementById('time')

// let stockData = getStockData()

// let { name, sym, price, time } = stockData

// let prevPrice = null

// price = Number(price)

// let emoji = price > prevPrice ? '🔺' 
// : price < prevPrice ? '🔻' 
// : '▶'

// stockName.textContent = `Name: ${name}`
// stockSymbol.textContent = `Symbol: ${sym}`
// stockPrice.textContent = `Price: ${price} ${emoji}`
// timeEl.textContent = `Time: ${time}`

// setInterval(() =>{
//     price = Number(getStockData().price)
//     emoji = price > prevPrice ? '🔺' 
//     : price < prevPrice ? '🔻' 
//     : '▶'
//     stockPrice.textContent = `Price: ${price} ${emoji}`
//     prevPrice = price
// }, 1500)

// setInterval(() => {
//     timeEl.textContent = `Time: ${getStockData().time}`
// }, 1000)

// ARROW FUNCTION

// const speedWarning = (spdLimit, spd) => {
//     let message = spd > spdLimit ? `You are going at ${spd} mph!` : `All good!`
//     return message
// }

// console.log(speedWarning(30, 20))

// CHALLENGE

// function getLabelsHtml(text, sender, ...recipient){
//     let component = ``
//     recipient.forEach((receiver) => {
//         component += `<div class="label-card">
//         <p>Dear ${receiver.name}</p>
//         <p>${text}</p>
//         <p>Best wishes,</p>
//         <p>${sender}</p>
//         </div>`
//     })
//     return component
// }

// const text = 'Thank you for all your hard work throughout the year'
// const sender = 'Tom'

// document.getElementById('labels-container').innerHTML = getLabelsHtml(
//     text,
//     sender,
//     {name: 'Sally'},
//     {name: 'Mike'},
//     {name: 'Rob'},
//     {name: 'Harriet'}
// )

// method

// const arr = [2,2,2,4,4]

// const count = arr.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1
//     return acc
// }, {})

// console.log(count)

// PROPERTY SALE

// import propertyForSaleArr from "./properties/propertyForSaleArr.js"
// import placeholderPropertyObj from "./properties/placeholderPropertyObj.js"

// function getPropertyHtml(properties = [placeholderPropertyObj]){
//     return properties.map(property => {
//         const { propertyLocation, priceGBP, roomsM2, comment, image } = property
//         const totalSize = roomsM2.reduce((total, size) => total + size, 0)
//         return `
//         <section class="card">
//             <img src="images/${image}">
//             <div class="card-right">
//                 <h2>${propertyLocation}</h2>
//                 <h3>£${priceGBP}</h3>
//                 <p>${comment}</p>
//                 <h3>${totalSize} m²</h3>
//             </div>
//         </section>
//         `
//     }).join('')
// }

// // document.getElementById('container').innerHTML = getPropertyHtml()
// document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)

// async await fetch

// try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             title: 'Holiday',
//             body: 'When I was kidnapped in Scottland...',
//             userId: 101
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if(!response.ok){ throw new Error('There was a problem with the API')}
//     const data = await response.json()
//     console.log(data)
// } catch(err){
//     console.log(err)
// }

// CHALLENGE

// function preLoadImg(url){
//     return new Promise((resolve, reject) => {
//         const img = new Image
//         img.src = url
//         img.alt = 'a beautiful scene'
//         img.addEventListener('load', () => resolve(img))
//         img.addEventListener('error', () => reject('img has NOT loaded'))
//     })
// }

// try {
//     const results = await preLoadImg(`https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvandcedjs/scenic1.jpg`)
//     console.log(results)
//     document.getElementById('img-container').appendChild(results)
// } catch (err) {
//     console.log(err)
// }

// promises

// function uploadFile() {
//     return new Promise((resolve, reject) => {
//         console.log('Step 1: Uploading file...')
//         setTimeout(()=>{
//             resolve()
//         }, 1000)
//     })
// }

// function processFile() {
//     return new Promise((resolve,reject) => {
//         console.log('Step 2: Processing file...')
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
// }

// function notifyUser(){
//     return new Promise((resolve, reject) => {
//         console.log('Step 3: Notifying user...')
//         setTimeout(()=> {
//             resolve()
//         },1000)
//     })
// }

// try {
//     await uploadFile()
//     await processFile()
//     await notifyUser()
//     console.log('All steps completed!')
// } catch(err) {
//     console.log(err)
// }


// function createPromise(){
//     return new Promise((resolve, reject) => {
//         const success = Math.random() > 0.5
//         success ? resolve('yay') : reject('nay')
//     })
// }

// try {
//     const promise1 = createPromise()
//     const promise2 = createPromise()
//     const promise3 = createPromise()
//     const result = await Promise.all([promise1, promise2, promise3])
//     console.log(result)
// } catch (err) {
//     console.log(err)
// }


// function getImagePromise(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const img = new Image()
//             img.src = url
//             img.addEventListener('load', ()=> resolve(img))
//             img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)))
//         }, 500)
//     })
// }

// const images = [
//     'https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.10.0',
//     'https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVwYWwlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
//     'https://www.google.com/imgres?q=mountain&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe7%2FEverest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMountain&docid=oiQv_zLtLLGShM&tbnid=ZH4n6DnAkszpmM&vet=12ahUKEwij-NiOptWQAxUdZSoJHWyUIFUQM3oECBIQAA..i&w=2000&h=1333&hcb=2&ved=2ahUKEwij-NiOptWQAxUdZSoJHWyUIFUQM3oECBIQAA'
// ]

// async function preLoadImages(imageUrlsArr){
//     const imgContainer = document.getElementById('img-container')
//     const uploadContainer = document.getElementById('upload-container')

//     const promiseArr = imageUrlsArr.map(url => getImagePromise(url))

//     try {
//         const results = await Promise.all(promiseArr)
//         console.log('All images loaded successfully!')
//         uploadContainer.style.display = 'none'
//         results.forEach((result) => imgContainer.appendChild(result))
//     } catch(err) {
//         console.log(err)
//     }
// }

// document.getElementById('submit-imgs').addEventListener('click', ()=> preLoadImages(images))