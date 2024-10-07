// Para podermos deletar uma tarefa que é adicionada, precisariamos saber qual é o indice de cada nova tarefa, para fazer isso utilizaremos um contador:
let contador = 0

// Pegando o valor do input das tarefas
let input = document.getElementById("inputTarefas")

// Pegando o botão de tarefas
let botaoAdd = document.getElementById("botaoAdd")

// Pegando a seção das listas da página
let listaTarefas = document.getElementById("areaLista")


function addTarefa() {
    // Incrementando 1 valor no contador
    ++contador

    // Pegando o valor digitado no input
    let valorInput = input.value

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        novaTarefa =
        `<div id="${contador}" class="item">

            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <i id="icone-${contador}" class="bi bi-circle"></i>
            </div>

            <div class="item-nome">${valorInput}</div>

            <div class="item-botao">
                <button type="button" onclick="delTarefa(${contador})">Deletar</button>
            </div>

        </div>`;

        // A nossa seção vai receber o que ela já tem nela mais o item da novaTarefa - Poderia ser listaTarefas.innerHTML += novaTarefa também.
        listaTarefas.innerHTML = listaTarefas.innerHTML + novaTarefa;

        // Limpando o campo de im=nput ao clicar no botão adicionar
        input.value = ""

        // Deixando o campo de input focado após clicar no botão adicionar
        input.focus()
    }  
}

// Função para pegar um evento acionado ao clicar em uma tecla do teclado, no caso, o enter. Ele deverá fazer um ação ao ter um evento acionado neste item (o input).

// keyup é quando a pessoa aperta uma tecla, quando isso acontecer, ele fara o seguinte:
input.addEventListener("keyup", function (event) {
    // Se o evento do keyup (a tecla digitada) for = a 13 (que representa a tecla "enter", cada tecla do teclado tem um número e o "enter" é 13)
    if (event.keyCode === 13) {
        // Serve para evitar que a tecla "enter" faça qualquer coisa que poderia fazer que seja diferente da ação que pedidmos aqui
        event.preventDefault()

        // Ele vai ter a mesma função da função de clicar no botão adicionar
        botaoAdd.click()
    }
})


// Função deletar tarefas
// Id é o valor que sera pego do contador, é só um nome passado para a variavel para o parametro da função
function delTarefa(id) {
    // Aqui estou pegando o id exatamente da tarefa especifica que quero deletar
    var tarefa = document.getElementById(id)
    tarefa.remove()
}


// Função marcar tarefas
function marcarTarefa(id) {
    // Aqui estou pegando o id exatamente da tarefa especifica que quero marcar

    var item = document.getElementById(id)

    // Isso é para saber qual classe esta neste item em que eu estiver clicando
    var classe = item.getAttribute("class");
    
    // Se o item clicado estiver somente com a classe item nele, ele vai adicionar a palavra "concluido", fazendo com que isso adicione a classe de concluido que esta estilizada no CSS, neste item
    if (classe == "item") {
        item.classList.add("concluido")

        // Vamos pegar as informções deste icone atual desta tarefa pelo id dado e o id do contador especifico dele
        var icone = document.getElementById("icone-" + id)
        
        // Vamos remorver a classe atual (no caso, o icone do circulo vazio)
        icone.classList.remove("bi-circle")

        // Adicionando a classe do icone novo (o icone de tarefa concluida - check)
        icone.classList.add("bi-check-circle-fill")

        // "parentNode" - Qual é o nó de parentesco dele (no caso, a seção em que ele está) e então colocamos o "appendChild" que é adicionar um filho, ele vai jogar este item, ao ser marcado, para o final da lista.
        item.parentNode.appendChild(item)

    } else {
        // Remover a estilização da tarefa concluida ao remover a palavra "concluido" que acionava esta classe ao elemento
        item.classList.remove("concluido")

        // Vamos pegar as informções deste icone atual desta tarefa pelo id dado e o id do contador especifico dele
        var icone = document.getElementById("icone-" + id)
        
        // Removendo a classe do icone novo (o icone de tarefa concluida - check)
        icone.classList.remove("bi-check-circle-fill")

        // Vamos adicionar a classe do icone do circulo vazio
        icone.classList.add("bi-circle")
    }
}