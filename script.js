
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
const performOperationId = event.target.matches(".perform-operation-button");


if (numberId && !operator) {

firstInput.push(event.target.textContent.trim());
console.log(firstInput);

} else if (operatorId && firstInput.length) {

operator = event.target.textContent.trim();
console.log(operator);
console.log(firstInput);

} else if (numberId && firstInput.length && operator) {

secondInput.push(event.target.textContent.trim());
console.log(secondInput);

} else if (performOperationId && firstInput.length && operator && secondInput.length) {

firstInput = Number(firstInput.join(""));
secondInput = Number(secondInput.join(""));

switch (operator) {

case "-": 
  console.log(subtract(firstInput, secondInput));
  break;

case "+":
  console.log(addition(firstInput, secondInput));
  break;

case "*":
  console.log(multiply(firstInput, secondInput));
  break;

case "/":
  console.log(divide(firstInput, secondInput));
  break;

}

}



});




















