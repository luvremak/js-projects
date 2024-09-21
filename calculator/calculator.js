const expression = document.getElementById("expression");

function display(input) {
    expression.value += input;
}

function calculate() {
    try {
        expression.value = eval(expression.value) || "";
    } catch (error) {
        expression.value = "error";
    }
}

function clearExpression() {
    expression.value = "";
}
