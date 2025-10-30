import {getStockData} from '/fakeStockAPI.js'

const stockName = document.getElementById('stock-name')
const stockSymbol = document.getElementById('stock-symbol')
const stockPrice = document.getElementById('stock-price')
const timeEl = document.getElementById('time')

let stockData = getStockData()

let previousPrice = Number(JSON.parse(localStorage.getItem("price")))
previousPrice = previousPrice ? previousPrice : 0.00;

let newPrice = Number(stockData.price)

let emoji = newPrice > previousPrice ? '🔺' 
: newPrice < previousPrice ? '🔻' 
: '▶'

localStorage.setItem("price", JSON.stringify(newPrice))

stockName.textContent = `Name: ${stockData.name}`
stockSymbol.textContent = `Symbol: ${stockData.sym}`
stockPrice.textContent = `Price: ${newPrice} ${emoji}`
timeEl.textContent = `Time: ${stockData.time}`

setInterval(() =>{
    newPrice = Number(getStockData().price)
    previousPrice = Number(JSON.parse(localStorage.getItem("price")))
    emoji = newPrice > previousPrice ? '🔺' 
    : newPrice < previousPrice ? '🔻' 
    : '▶'
    localStorage.setItem("price", JSON.stringify(newPrice))
    stockPrice.textContent = `Price: ${newPrice} ${emoji}`
}, 1500)

setInterval(() => {
    timeEl.textContent = `Time: ${getStockData().time}`
}, 1000)