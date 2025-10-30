export function getStockData(){
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: getTime()
    }
}

function getTime(){
    let date = new Date()
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i.toString()
}