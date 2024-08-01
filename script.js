//calculator code

const display = document.getElementById("display");

function exibir(input) {
    display.value += input;
}

function limpar() {
    display.value = '';
}

function cancelarEntrada() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/').replace('%', '/100'));
    } catch (e) {
        display.value = 'Erro';
    }
}
