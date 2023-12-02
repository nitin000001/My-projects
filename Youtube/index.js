const menu = document.querySelector("#menu");
const menubtn = document.querySelectorAll(".menu-btn");

menubtn.forEach((btn) => {
    btn.addEventListener("click",function(){
        menu.classList.toggle("visible");
    });
});

document.addEventListener("click", function(e) {
    if(!menu.contains(e.target)&& !menubtn[0].contains(e.target)){
        menu.classList.remove("visible");
    }
});














































// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log("odd numbers",i);
//     }
// }


// let gameNum = 10;

// let userNum = prompt("Guess the game Number");

// while (userNum != gameNum) {
//     let userNum = prompt("You have entered wrong number, Please try again : ")
// }

// console.log("Congo, You have entered the right number");

// let  obj = {
//     item : "pen",
//     price : 10,
// };

// console.log(`the cost of ${obj.item} is \t ${obj.price}`)


// let array = [5, 2, 7, 1, 9]; // Your array of 5 elements

// // Sort the array in ascending order
// array.sort(function(a, b) {
//   return a - b;
// });

// console.log('Array in ascending order:', array);











// function check(){
//   throw new Error("Nitin required");
// }

// function show(name = check()) {
//   console.log(name);
// }

// show();