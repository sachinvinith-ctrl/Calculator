
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


function operate(operator, firstInput, secondInput) {

switch(operator) {

case "+": 
  console.log(addition(firstInput, secondInput));
  return addition(firstInput, secondInput);
  break;

case "-": 
  console.log(subtract(firstInput, secondInput));
  break;

case "/":
  console.log(divide(firstInput, secondInput));
  break;

case "*":
  console.log(multiply(firstInput, secondInput));
  break;

}



}

let firstInput = [];
let operator = "";
let secondInput = [];



const buttonBox = document.querySelector(".button-box");
buttonBox.addEventListener("click", (event) => {

const numberId = event.target.matches(".number-button");
const operatorId = event.target.matches(".operator-button");
const performOperationId = event.target.matches(".perform-operation-button");

if (operatorId && operator && firstInput.length && secondInput.length ) {

if (Array.isArray(firstInput) && Array.isArray(secondInput)) {

firstInput = Number(firstInput.join(""));
secondInput = Number(secondInput.join(""));

} else if (typeof firstInput === "string" && Array.isArray(secondInput)) {

firstInput = Number(firstInput);
secondInput = Number(secondInput.join(""));

}

console.log(`${firstInput} ${operator} ${secondInput}`);

firstInput = String(operate(operator, firstInput, secondInput));
operator = event.target.textContent.trim();
secondInput = [];

console.log(`${firstInput} ${operator} ${secondInput}`);

} else if (numberId && !operator) {

firstInput.push(event.target.textContent.trim());

console.log(`${firstInput} ${operator} ${secondInput}`);


} else if (operatorId && firstInput.length) {

operator = event.target.textContent.trim();

console.log(`${firstInput} ${operator} ${secondInput}`);


} else if (numberId && firstInput.length && operator) {

secondInput.push(event.target.textContent.trim());

console.log(`${firstInput} ${operator} ${secondInput}`);


}  else if (performOperationId && firstInput.length && operator && secondInput.length) {

if (Array.isArray(firstInput) && Array.isArray(secondInput)) {

firstInput = Number(firstInput.join(""));
secondInput = Number(secondInput.join(""));

} else if (typeof firstInput === "string" && Array.isArray(secondInput)) {

firstInput = Number(firstInput);
secondInput = Number(secondInput.join(""));


}


operate(operator, firstInput, secondInput);

console.log(`${firstInput} ${operator} ${secondInput}`);


firstInput = [];
secondInput = [];
operator = "";



}



});




















