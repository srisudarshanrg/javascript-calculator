const entry = document.getElementById("entryBox");

function WriteToEntry(char) {
    entry.value += char
}

function CalculateExpression() {
    entry.value = eval(entry.value)
}

function ClearEntry() {
    entry.value = ""
}

function Square() {
    expression = eval(entry.value)
    entry.value = expression * expression
}

function SquareRoot() {
    expression = eval(entry.value)
    entry.value = Math.sqrt(expression)
}

function Backspace() {
    expression = entry.value.split("")
    expressionUpdated = [expression[0, expression.length - 1]]
    console.log(expression[0], expression.length)
    finalExpression = expressionUpdated.join("")
    entry.value = finalExpression
}

function Copy() {
    navigator.clipboard.writeText(entry.value)
}