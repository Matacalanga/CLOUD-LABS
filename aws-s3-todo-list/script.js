/* ===============================
   CAPTURA DOS ELEMENTOS DO HTML
================================ */
const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");
const botaoTema = document.getElementById("toggle-theme");
const contador = document.getElementById("contador-tarefas");


/* ===============================
   ESTADO DO FILTRO ATUAL
================================ */
let filtroAtual = "todas";

/* ===============================
   APLICA TEMA SALVO AO CARREGAR
================================ */
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    botaoTema.textContent = "☀️ Modo claro";
}

/* ===============================
   ARRAY DE TAREFAS
   (vem do localStorage ou começa vazio)
================================ */
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

/* ===============================
   FUNÇÃO PARA SALVAR NO localStorage
================================ */
function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

/* ===============================
   FUNÇÃO PARA RENDERIZAR TAREFAS
================================ */
function renderizarTarefas() {

    /* Limpa a lista antes de recriar */
    lista.innerHTML = "";

    /* Por padrão, usamos todas as tarefas */
    let tarefasFiltradas = tarefas;

    /* Filtra apenas pendentes */
    if (filtroAtual === "pendentes") {
        tarefasFiltradas = tarefas.filter(function (tarefa) {
            return !tarefa.concluida;
        });
    }

    /* Filtra apenas concluídas */
    if (filtroAtual === "concluidas") {
        tarefasFiltradas = tarefas.filter(function (tarefa) {
            return tarefa.concluida;
        });
    }

    /* Renderiza as tarefas filtradas */
    tarefasFiltradas.forEach(function (tarefa) {

        /* Cria o <li> */
        const li = document.createElement("li");

        /* ===============================
           TEXTO DA TAREFA (span)
           Separar texto do botão evita bugs de layout
        ================================ */
        const spanTexto = document.createElement("span");
        spanTexto.textContent = tarefa.texto;

        /* Aplica classe se estiver concluída */
        if (tarefa.concluida) {
            li.classList.add("concluida");
        }

        /* Clique no texto marca/desmarca como concluída */
        li.addEventListener("click", function () {
            tarefa.concluida = !tarefa.concluida;
            salvarTarefas();
            renderizarTarefas();
        });

        /* ===============================
           BOTÃO REMOVER
        ================================ */
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.classList.add("remover");

        botaoRemover.addEventListener("click", function (event) {
    event.stopPropagation();

    /* Aplica animação de saída */
    li.classList.add("removendo");

    /* Aguarda a animação antes de remover */
    setTimeout(function () {
        const indexReal = tarefas.indexOf(tarefa);
        tarefas.splice(indexReal, 1);

        salvarTarefas();
        renderizarTarefas();
    }, 300);
});


        /* Monta o <li> */
        li.appendChild(spanTexto);
        li.appendChild(botaoRemover);

        /* Adiciona na lista */
        lista.appendChild(li);
    });
    atualizarContador();

}

/* ===============================
   EVENTO DO FORMULÁRIO
================================ */
form.addEventListener("submit", function (event) {
    event.preventDefault();

    /* Evita adicionar tarefa vazia */
    if (input.value.trim() === "") return;

    tarefas.push({
        texto: input.value,
        concluida: false
    });

    salvarTarefas();
    renderizarTarefas();

    input.value = "";
});

/* ===============================
   BOTÕES DE FILTRO
================================ */
const botoesFiltro = document.querySelectorAll(".filtros button");

botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {

        filtroAtual = botao.dataset.filtro;

        botoesFiltro.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        renderizarTarefas();
    });
});

/* ===============================
   BOTÃO MODO ESCURO
================================ */
botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const temaAtual = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("tema", temaAtual);

    botaoTema.textContent =
        temaAtual === "dark" ? "☀️ Modo claro" : "🌙 Modo escuro";
});

/* ===============================
   CARREGA AS TAREFAS AO ABRIR
================================ */
renderizarTarefas();

/* ===============================
   ATUALIZA CONTADOR DE TAREFAS
================================ */
function atualizarContador() {

    const total = tarefas.length;

    const pendentes = tarefas.filter(t => !t.concluida).length;
    const concluidas = tarefas.filter(t => t.concluida).length;

    let texto = "";

    if (filtroAtual === "todas") {
        texto = `Total: ${total} | Pendentes: ${pendentes} | Concluídas: ${concluidas}`;
    }

    if (filtroAtual === "pendentes") {
        texto = `Pendentes: ${pendentes}`;
    }

    if (filtroAtual === "concluidas") {
        texto = `Concluídas: ${concluidas}`;
    }

    contador.textContent = texto;
}

