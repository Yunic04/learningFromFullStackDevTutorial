import {getStockData} from '/fakeStockAPI.js'

const stockName = document.getElementById('stock-name')
const stockSymbol = document.getElementById('stock-symbol')
const stockPrice = document.getElementById('stock-price')
const timeEl = document.getElementById('time')

let stockData = getStockData()

let { name, sym, price, time } = stockData

let prevPrice = null

price = Number(price)

let emoji = price > prevPrice ? '🔺' 
: price < prevPrice ? '🔻' 
: '▶'

stockName.textContent = `Name: ${name}`
stockSymbol.textContent = `Symbol: ${sym}`
stockPrice.textContent = `Price: ${price} ${emoji}`
timeEl.textContent = `Time: ${time}`

setInterval(() =>{
    price = Number(getStockData().price)
    emoji = price > prevPrice ? '🔺' 
    : price < prevPrice ? '🔻' 
    : '▶'
    stockPrice.textContent = `Price: ${price} ${emoji}`
    prevPrice = price
}, 1500)

setInterval(() => {
    timeEl.textContent = `Time: ${getStockData().time}`
}, 1000)