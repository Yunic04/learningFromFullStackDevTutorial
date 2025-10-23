let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

for (let i = 0; i<fruit.length; i++){
    if (fruit[i] === "🍎") {
        appleShelf.textContent += "🍎"
    } else if (fruit[i] === "🍊"){
        orangeShelf.textContent += "🍊"
    } else {
        console.log("Uncategorized item detected!")
    }
}