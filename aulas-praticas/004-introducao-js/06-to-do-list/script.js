const adicionar = document.getElementById('adicionar-form');

const divLimpar = document.getElementById('btn-limpar');
const btnLimpar = document.getElementById('btnLimpa');

adicionar.onsubmit = function (e) {
    e.preventDefault();
    const inputCampo = document.getElementById('input');
    adicionaTarefa(inputCampo)
}

function adicionaTarefa(inputCampo){
    let divTarefas = document.getElementById('tarefas');
    let input = inputCampo.value;

    const divNovoInput = document.createElement('div');
    const inputNovo = document.createElement('input');
    const novaLabel = document.createElement('label');


    if (input != ""){
        inputNovo.setAttribute('type', 'checkbox');
        inputNovo.setAttribute('id', input);
    
        novaLabel.setAttribute('for', input);
        novaLabel.innerText = input;

        divNovoInput.appendChild(inputNovo);
        divNovoInput.appendChild(novaLabel);

        divTarefas.appendChild(divNovoInput);
    }
    

    inputCampo.value = "";
    divLimpar.style.display = 'block';
}

btnLimpar.addEventListener('click', limpaTarefas)

function limpaTarefas() {
    let divTarefas = document.getElementById('tarefas');
    divTarefas.innerHTML = '';

    divLimpar.style.display = 'none';
}