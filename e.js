// 1. Function Declaration
function greet() {
    document.getElementById("output").innerHTML =
        "Hello! This is a Function Declaration.";
}

// 2. Function Expression (Function Definition)
const showMessage = function () {
    document.getElementById("output").innerHTML =
        "Hello! This is a Function Expression.";
};

// 3. Arrow Function
const addNumbers = () => {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;

    document.getElementById("output").innerHTML =
        "Arrow Function: Sum = " + sum;
};