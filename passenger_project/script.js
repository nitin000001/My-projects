// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el");

// let count = 0

// function increment(){
//     count += 1
//     countEl.textContent = count
// }


// function save() {
//     let countstr = count + " - "
//     saveEl.innerText += countstr
//     countEl.textContent = 0
//    count = 0
// }


// let username = "Nitin"
// let msg = "You have new Message"

// console.log(msg + ", " + username + "!")

// let welc = document.getElementById("welcome");

// let name = " Nitin !"
// let greeting = "Good morning,"


// welc.innerText = greeting + name

// let myPoints = 0

// function addPoints() {
//     myPoints += 3
// }

// addPoints()
// console.log(myPoints)



// let errorEL = document.getElementById("error")
//  function purchase(){
//     errorEL.textContent = "Something Went Wrong, Please try again"
//  }

let num1 = 5
let num2 = 7

let sum = document.getElementById("sum")

function add() {
    let result = num1 + num2
    sum.textContent = "sum " + result
}
function sub() {
    sum.textContent = num1 - num2
}
function divide() {
    sum.textContent = num1 / num2
}
function multiply() {
    sum.textContent = num1 * num2
}