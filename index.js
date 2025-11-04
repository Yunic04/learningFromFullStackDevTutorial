import { dates } from '/utils/dates.js'

const tickers = document.getElementById('tickers')
const generateBtn = document.getElementById('generate-btn')
const loadingArea = document.getElementById('loading-area')
const apiMessage = document.getElementById('api-message')
const tickerArr = []

document.getElementById('add-btn').addEventListener('click', () => {
    const tickerInput = document.getElementById('ticker-input')
    if (tickerInput.value.length > 2) {
        if (tickerArr.length === 0) { tickers.innerHTML = ''}

        generateBtn.disabled = false
        const newTickerStr = tickerInput.value.toUpperCase()

        tickerArr.push(newTickerStr)
        tickers.innerHTML += `<p>${newTickerStr}</p>`
    } else {
        const messageEl = document.getElementById('message-el')

        messageEl.innerHTML = `You must add at least one ticker. A<br>ticker is a 3 letter or more code for a<br>stock. E.g TSLA for Tesla.`
        messageEl.style.color = "red"
    }
})

generateBtn.addEventListener('click', () => {
    fetchStockData()
})

async function fetchStockData() {
    document.getElementById('main').style.display = "none"
    loadingArea.style.display = "block"
    try {
        // const stockData = await Promise.all(tickerArr.map(async (ticker) => {
        //     const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.
        //     startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
        //     const response = await fetch(url)
        //     const data = await response.json()
        //     const status = await response.status
        //     if (status === 200) {
        //         apiMessage.textContent = 'Creating report...'
        //         return data
        //     } else {
        //         loadingArea.innerHTML = 'There was an error fetching stock data'
        //     }
        // }))
        // fetchReport(stockData.join(''))
        setTimeout(()=>{
            document.getElementById('main').style.display = "block"
            loadingArea.style.display = "none"
            tickers.textContent = 'no api key so have this random message instead :)'
        }, 2000)
    } catch (err) {
        loadingArea.innerHTML = 'There was an error fetching stock data'
        console.log(`error: ${err}`)
    }
}

async function fetchReport(data) {
    console.log('hi')
}

function renderReport(output) {
    loadingArea.style.display = 'none'
    document.getElementById('main').style.display = 'block'
    tickers.textContent = output
}