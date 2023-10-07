document.addEventListener("DOMContentLoaded", function() {
    const resultInput = document.getElementById("result");
    let currentInput = "";
    let operator = "";
    let firstInput = "";
    let isOperatorClicked = false;

    // Function to update the display
    function updateDisplay() {
        resultInput.value = currentInput || "0";
    }

    // Event listener for digit buttons
    document.querySelectorAll(".buttons button:not(.operator, .equal)").forEach(button => {
        button.addEventListener("click", function() {
            if (isOperatorClicked) {
                currentInput = button.textContent;
                isOperatorClicked = false;
            } else {
                currentInput += button.textContent;
            }
            updateDisplay();
        });
    });

    // Event listener for operator buttons
    document.querySelectorAll(".operator").forEach(operatorBtn => {
        operatorBtn.addEventListener("click", function() {
            if (currentInput !== "") {
                if (firstInput === "") {
                    firstInput = currentInput;
                } else {
                    calculate();
                }
                operator = operatorBtn.textContent;
                isOperatorClicked = true;
            }
        });
    });

    // Event listener for the equal button
    document.getElementById("equals").addEventListener("click", function() {
        calculate();
    });

    // Event listener for the clear button
    document.getElementById("clear").addEventListener("click", function() {
        currentInput = "";
        operator = "";
        firstInput = "";
        isOperatorClicked = false;
        updateDisplay();
    });

    // Function to perform calculations
    function calculate() {
        if (firstInput !== "") {
            const num1 = parseFloat(firstInput);
            const num2 = parseFloat(currentInput);
            switch (operator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    if (num2 !== 0) {
                        currentInput = (num1 / num2).toString();
                    } else {
                        currentInput = "Error";
                    }
                    break;
                default:
                    break;
            }
            operator = "";
            firstInput = "";
            isOperatorClicked = false;
            updateDisplay();
        }
    }
});
