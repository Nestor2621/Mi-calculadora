// JavaScript source code
function caracter(val) {
    var v = document.getElementById('panel');
    v.value += val;
}

function Resultado() {
    var num1 = document.getElementById('panel').value;
    var num2 = eval(num1);
    document.getElementById('panel').value = num2;
}

function Clear() {
    var inp = document.getElementById('panel');
    inp.value = '';
}

function Back() {
    var ev = document.getElementById('panel');
    ev.value = ev.value.slice(0, -1);
}