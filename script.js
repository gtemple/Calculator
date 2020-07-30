add = (a, b) => {
   input = a + b;
}

sub = (a, b) => {
    input = a - b;
}

ply = (a, b) => {
    input = a * b;
}

dvd = (a, b) => {
    input = a / b;
}

var display = document.querySelector('#display');
const buttons = document.querySelectorAll('button')

var input = '';
var storedInput = [];
var opr = [];
var final = 0;
var j = 0;


buttons.forEach(button => { 
    button.addEventListener('click', btnPress)
});


function btnPress() {

    if (this.classList.contains('btn-num')) {
        input += this.textContent;
        display.textContent = parseInt(input);
    } else if (this.classList.contains('btn-op')) {
        storedInput.push(parseInt(input));
        opr.push(this.textContent);
        input = '';
    } else if (this.textContent == '=') {
        storedInput.push(parseInt(input));
        equals();
        j = 0;
        opr = [];
        storedInput = [];
    } else if (this.textContent == 'RESET') {       // the reset
        input = '';
        display.textContent = 0;
        j = 0;
        opr = [];
        storedInput = [];
    } 
};

function equals() {

    input = storedInput[0];
    for (let i = 1; i < storedInput.length; i++) {
        if (opr[j] == '+') {
            display.textContent = add(input, storedInput[i]);
        } else if (opr[j] == '-') {
            display.textContent = sub(input, storedInput[i]);
        } else if (opr[j] == 'x') {
            display.textContent = ply(input, storedInput[i]);
        } else if (opr[j] == '/') {
            display.textContent = dvd(input, storedInput[i]);
        }
        j++
    }
    display.textContent = input.toFixed(6);
};

