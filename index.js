const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let value = 0

convertBtn.addEventListener("click", function(){
    value = Number(inputEl.value)
    
    lengthEl.textContent = `${value} meters = ${(value*3.281).toFixed(3)} feet |
     ${value} feet = ${(value/3.281).toFixed(3)} meters`

    volumeEl.textContent = `${value} liters = ${(value/3.875).toFixed(3)} gallons |
     ${value} gallons = ${(value*3.875).toFixed(3)} liters`

    massEl.textContent = `${value} kilos = ${(value*2.205).toFixed(3)} pounds |
     ${value} pounds = ${(value/2.205).toFixed(3)} kilos`
})