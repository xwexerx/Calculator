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
    mainScreen.textContent += number.textContent;
};

function allClear() {
    mainScreen.textContent = "";
    secondaryScreen.textContent = "";
    mainScreen.style.fontSize = "2.5em";
    secondaryScreen.style.fontSize = "2em";
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
    if(mainScreen.textContent.length > 15) {
        mainScreen.style.fontSize = "1.75em";
        secondaryScreen.style.fontSize = "1.5em";
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

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 56 & event.shiftKey == true) {
        operate(document.getElementById("times-button"));
    }
    else if(event.keyCode == 189) {
        operate(document.getElementById("minus-button"));
    }
    else if(event.keyCode == 187 & event.shiftKey == true) {
        operate(document.getElementById("add-button"));
    }
    else if(event.keyCode == 187) {
        equate(document.getElementById("equals-button"));
    }
    else if(event.keyCode == 53 & event.shiftKey == true) {
        operate(document.getElementById("modulo-button"));
    }
    else if(event.keyCode == 186 & event.shiftKey == true) {
        operate(document.getElementById("divide-button"));
    }
    else if(event.keyCode == 8) {
        let usuniete = mainScreen.textContent.slice(0, -1);
        mainScreen.textContent = usuniete;
    }
    else if(event.keyCode == 49) {
        mainScreen.textContent += 1;
    }
    else if(event.keyCode == 50) {
        mainScreen.textContent += 2;
    }
    else if(event.keyCode == 51) {
        mainScreen.textContent += 3;
    }
    else if(event.keyCode == 52) {
        mainScreen.textContent += 4;
    }
    else if(event.keyCode == 53) {
        mainScreen.textContent += 5;
    }
    else if(event.keyCode == 54) {
        mainScreen.textContent += 6;
    }
    else if(event.keyCode == 55) {
        mainScreen.textContent += 7;
    }
    else if(event.keyCode == 56) {
        mainScreen.textContent += 8;
    }
    else if(event.keyCode == 57) {
        mainScreen.textContent += 9;
    }
    else if(event.keyCode == 48) {
        mainScreen.textContent += 0;
    }
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