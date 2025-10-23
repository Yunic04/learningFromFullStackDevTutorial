let generateButtonEl = document.getElementById("generate-btn")
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let passwordLengthEl = document.getElementById("password-length")
let passwordLength = 15
let symbolsEl = document.getElementById("symbols")
let numbersEl = document.getElementById("numbers")
const characters = [
  // Uppercase letters
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

  // Lowercase letters
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

  // Numbers
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

  // Special characters
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
  "-", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "`", "~", "\"", "\\"
];
const charactersNoNum = [
  // Uppercase letters
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

  // Lowercase letters
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

  // Special characters
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
  "-", "=", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "`", "~", "\"", "\\"
];
const charactersNoSymbols = [
  // Uppercase letters
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

  // Lowercase letters
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

  // Numbers
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
];
const charactersOnlyAlphabet = [
  // Uppercase letters
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

  // Lowercase letters
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];


generateButtonEl.addEventListener("click", function(){
    if (passwordLengthEl.value === ""){
        passwordLength = 15
    } else {
        passwordLength = passwordLengthEl.value
    }
    password1El.textContent = getRandomPassword(passwordLength, symbolsEl.checked, numbersEl.checked)
    password2El.textContent = getRandomPassword(passwordLength, symbolsEl.checked, numbersEl.checked)
})

password1El.addEventListener("click", function(){
    navigator.clipboard.writeText(password1El.textContent)
    alert("Password copied!")
})

password2El.addEventListener("click", function(){
    navigator.clipboard.writeText(password2El.textContent)
    alert("Password copied!")
})

function getRandomPassword(passwordLength, symbols, numbers){
    let password = ""
    if (symbols === true && numbers === true) {
        for (let i = 0; i < passwordLength; i++) {
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        return password
    } else if (!symbols && numbers) {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersNoSymbols[Math.floor(Math.random() * charactersNoSymbols.length)]
        }
        return password
    } else if (symbols && !numbers) {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersNoNum[Math.floor(Math.random() * charactersNoNum.length)]
        }
        return password
    } else if (!symbols && !numbers) {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersOnlyAlphabet[Math.floor(Math.random() * charactersOnlyAlphabet.length)]
        }
        return password
    }
}