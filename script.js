
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
  return addition(firstInput, secondInput);

case "-": 
  return subtract(firstInput, secondInput);

case "/":
  return divide(firstInput, secondInput);

case "*":
  return multiply(firstInput, secondInput);

}



}

const displayBox = document.querySelector(".display-box");
displayBox.style.display = "flex";
displayBox.style.alignItems = "center";
displayBox.style.paddingRight = "10px";
displayBox.style.fontSize = "30px";

let firstInput = [];
let operator = "";
let secondInput = [];
let updateResult;


const buttonBox = document.querySelector(".button-box");
buttonBox.addEventListener("click", (event) => {

const numberId = event.target.matches(".number-button");
const operatorId = event.target.matches(".operator-button");
const performOperationId = event.target.matches(".perform-operation-button");
const clearDisplayId = event.target.matches(".clear-button");

if (clearDisplayId) {

firstInput = [];
operator = "";
secondInput = [];
updateResult = "";
displayBox.textContent = updateResult;

} else if (operatorId && operator && firstInput.length && secondInput.length ) {

if (Array.isArray(firstInput) && Array.isArray(secondInput)) {

firstInput = Number(firstInput.join(""));
secondInput = Number(secondInput.join(""));

} else if (typeof firstInput === "string" && Array.isArray(secondInput)) {

firstInput = Number(firstInput);
secondInput = Number(secondInput.join(""));

}


firstInput = String(operate(operator, firstInput, secondInput));
displayBox.textContent = firstInput;
operator = event.target.textContent.trim();
secondInput = [];


} else if (numberId && !operator) {

firstInput.push(event.target.textContent.trim());
displayBox.textContent = firstInput.join("");



} else if (operatorId && firstInput.length) {

operator = event.target.textContent.trim();
displayBox.textContent = operator;



} else if (numberId && firstInput.length && operator) {

secondInput.push(event.target.textContent.trim());
displayBox.textContent = secondInput.join("");



}  else if (performOperationId && firstInput.length && operator && secondInput.length) {

if (Array.isArray(firstInput) && Array.isArray(secondInput)) {

firstInput = Number(firstInput.join(""));
secondInput = Number(secondInput.join(""));

} else if (typeof firstInput === "string" && Array.isArray(secondInput)) {

firstInput = Number(firstInput);
secondInput = Number(secondInput.join(""));


}


updateResult = operate(operator, firstInput, secondInput);
displayBox.textContent = updateResult.toFixed(2);



firstInput = [];
secondInput = [];
operator = "";



}



});




















