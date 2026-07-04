

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


let firstInput = [];
let operator = "";
let secondInput = [];


const buttonBox = document.querySelector(".button-box");
buttonBox.addEventListener("click", (event) => {

const numberId = event.target.matches(".number-button");
const operatorId = event.target.matches(".operator-button");

if (numberId) {

firstInput.push(event.target.textContent.trim());
console.log(firstInput);

} else if (firstInput.length && operatorId) {

operator = event.target.textContent.trim();
firstInput = Number(firstInput.join(""));
console.log(operator);
console.log(firstInput);

}

});




















