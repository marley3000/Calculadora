//This function clear all the values
const clearScreen = () => {
    document.getElementById('result').value = "";
}

//This function display values
const display = (value) => {
    document.getElementById('result').value += value;
}

//This function evaluates the expression and return result
const calculate = () => {
    let p = document.getElementById('result').value;
    let q = eval(p);
    document.getElementById('result').value = q;
}