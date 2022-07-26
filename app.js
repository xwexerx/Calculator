const mainScreen = document.querySelector("#calculator-screen-main");
const secondaryScreen = document.querySelector("#calculator-screen-history");
const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
let a = 0;
let b = 0;
let result = 0;
let currentOperator;
let timesClicked = 0;




function inputButton(number) {
    mainScreen.textContent+= number.textContent;
};

function allClear() {
    mainScreen.textContent = "";
    secondaryScreen.textContent = "";
    a = 0;
    b = 0;
    result = 0;
    timesClicked = 0;
    currentOperator = "";
}

function clear() {
    mainScreen.textContent = mainScreen.textContent.slice(0, -1);
}

function operate(button) {
    timesClicked++;
    if(timesClicked > 1) {
        equate();
        secondaryScreen.textContent = result;
    }
    currentOperator = button.textContent;
    a = Number(mainScreen.textContent);
    equate();
    secondaryScreen.textContent = `${a} ${button.textContent}`;
    mainScreen.textContent = "";
}

function equate() {
    b = Number(mainScreen.textContent);
    if(a === 0 && b === 0) {
        secondaryScreen.textContent = "";
    } else {
        secondaryScreen.textContent = `${a} ${currentOperator} ${b}`;
    }
    switch (currentOperator) {
        case "%":
            result = modulo(a, b);
            mainScreen.textContent = result;
            break;
        case "÷":
            result = divide(a, b);
            mainScreen.textContent = result;
            break;
        case "×":
            result = multiply(a, b);
            mainScreen.textContent = result;
            break;
        case "−":
            result = subtract(a, b);
            mainScreen.textContent = result;
            break;
        case "+":
            result = sum(a, b);
            mainScreen.textContent = result;
            break;
        default:
            break;
    }
}

function sum(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if(b === 0) {
        return "Nice try!"
    } else {
        return a/b;
    }
}

function modulo(a, b) {
    return a%b;
}


numberButtons.forEach(number => {
    number.addEventListener("click", () => inputButton(number));
});

operationButtons.forEach(button => {
    switch (button.textContent) {
        case "AC":
            button.addEventListener("click", () => allClear());
            break;
        case "C":
            button.addEventListener("click", () => clear());
            break;
        case "%":
            button.addEventListener("click", () => operate(button));
            break;
        case "÷":
            button.addEventListener("click", () => operate(button));
            break;
        case "×":
            button.addEventListener("click", () => operate(button));
            break;
        case "−":
            button.addEventListener("click", () => operate(button));
            break;
        case "+":
            button.addEventListener("click", () => operate(button));
            break;
        case "=":
            button.addEventListener("click", () => equate(button));
            break;
        default:
            break;
    }
});