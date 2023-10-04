//Variables
const num1 = document.querySelector("#numberOne")
const num2 = document.querySelector("#numberTwo")
const output = document.querySelector("p")


function addNumbers() {
    const val1 = parseInt(numberOne.value); 
    const val2 = parseInt(numberTwo.value); 

    let result = val1 + val2;
    output.textContent = result;

    num1.value = "";
    num2.value = "";
}

function subNumbers() {
    const val1 = parseInt(numberOne.value);
    const val2 = parseInt(numberTwo.value);

    let result = val1 - val2;
    output.textContent = result;

    num1.value = "";
    num2.value = "";
}

function multiplyNumbers() {
    const val1 = parseInt(numberOne.value);
    const val2 = parseInt(numberTwo.value);

    let result = val1 * val2;
    output.textContent = result;

    num1.value = "";
    num2.value = "";
}

function divideNumbers() {
    const val1 = parseInt(numberOne.value);
    const val2 = parseInt(numberTwo.value);

    let result = val1 / val2;
    output.textContent = result;

    num1.value = "";
    num2.value = "";
}


function resetNumbers() {
    num1.value = "";
    num2.value = "";
    output.textContent = "";
}
