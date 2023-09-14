function updateResult() {
    const inputNumber = document.getElementById('inputNumber').value;
    const displayNumber = inputNumber * inputNumber;
    document.getElementById("hasil").innerHTML = displayNumber;
}

function updateNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    const displayNumber = 4 * inputNumber;
    document.getElementById("hasil").innerHTML = displayNumber;
}