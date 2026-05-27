

function addition(first, second) {

return first + second;

}

function subtract(first, second) {

return first - second;

}

function multiply(first, second) {

return first * second;

}


function divide(first, second) {

return first / second;

}


let firstInput;
let operator;
let secondInput;

function operate(numberOne, operator, numberTwo) {



}


function updateNumber(number) {


}

const btn = document.querySelector(".button-box");
btn.addEventListener("click", (event) =>  { firstInput = Number(event.target.closest("button").textContent.trim())

const displayBox = document.querySelector(".display-box");
displayBox.style.display = "flex";
displayBox.style.alignItems = "center";
displayBox.textContent = firstInput;
displayBox.style.fontWeight = "bold";
displayBox.style.fontSize = "150%";


})





