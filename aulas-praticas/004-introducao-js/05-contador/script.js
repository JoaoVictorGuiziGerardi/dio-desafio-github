var btnIncrementar = document.getElementById("incrementar");
var btnDecrementar = document.getElementById("decrementar");
var numeroAtualSpan = document.getElementById('numeroAtual');

function verificaLimites() {
    if (Number.parseInt(numeroAtualSpan.innerHTML) >= 10) {
        btnIncrementar.style.display = "none";
    } else {
        btnIncrementar.style.display = "block";
    }

    if (Number.parseInt(numeroAtualSpan.innerHTML) <= -10) {
        btnDecrementar.style.display = "none";
    } else {
        btnDecrementar.style.display = "block";
    }
}


btnIncrementar.addEventListener("click", incrementar);
btnDecrementar.addEventListener("click", decrementar);

function incrementar(){
    let numeroAtual = Number.parseInt(numeroAtualSpan.innerHTML);
    numeroAtual++;

    numeroAtualSpan.innerHTML = `${numeroAtual}`;
    verificaLimites();
}

function decrementar(){
    let numeroAtual = Number.parseInt(numeroAtualSpan.innerHTML);
    numeroAtual--;

    numeroAtualSpan.innerHTML = `${numeroAtual}`;
    verificaLimites();
}