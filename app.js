// Chave nova para forçar o navegador a criar um banco de dados zerado e sem erros
const STORAGE_KEY = 'meu_banco_de_jogadoras';
let jogadoras = [];

// Dados iniciais com o caminho exato da sua pasta img/
const dadosIniciais = [
  { id: 1, nome: 'Andressa Alves', posicao: 'Meio-campo', clube: 'Corinthians', foto: 'img/andressa.jpg', gols: 15, assistencias: 10, jogos: 28, favorita: false },
  { id: 2, nome: 'Dayana Rodríguez', posicao: 'Meio-campo', clube: 'Corinthians', foto: 'img/dayana.jpg', gols: 5, assistencias: 12, jogos: 30, favorita: false },
  { id: 3, nome: 'Mariza', posicao: 'Zagueira', clube: 'Corinthians', foto: 'img/mariza.jpg', gols: 2, assistencias: 1, jogos: 32, favorita: false },
  { id: 4, nome: 'Thaís Regina', posicao: 'Zagueira', clube: 'Corinthians', foto: 'img/thais.jpg', gols: 1, assistencias: 2, jogos: 25, favorita: false },
  { id: 5, nome: 'Letícia Teles', posicao: 'Zagueira', clube: 'Corinthians', foto: 'img/leticia.jpg', gols: 0, assistencias: 0, jogos: 18, favorita: false }
];

// Carregar dados ao iniciar a página
function iniciar() {
  const dadosSalvos = localStorage.getItem(STORAGE_KEY);
  if (dadosSalvos) {
    jogadoras = JSON.parse(dadosSalvos);
  } else {
    jogadoras = dadosIniciais;
    salvarNoNavegador();
  }
  atualizarFiltroClubes();
  desenharCards(jogadoras);
}

// Salva o array atualizado no navegador
function salvarNoNavegador() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jogadoras));
}

// Função para desenhar as jogadoras na tela
function desenharCards(lista) {
  const divLista = document.getElementById('listaJogadoras');
  divLista.innerHTML = ''; // Limpa a tela antes de desenhar

  lista.forEach(jogadora => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
            <img src="${jogadora.foto}" alt="${jogadora.nome}">
            <div class="card-content">
                <h3>${jogadora.nome}</h3>
                <p><strong>Posição:</strong> ${jogadora.posicao}</p>
                <p><strong>Clube:</strong> ${jogadora.clube}</p>
                <div class="stats">
                    <span class="stat-pill">⚽ Gols: ${jogadora.gols}</span>
                    <span class="stat-pill">🎯 Assist.: ${jogadora.assistencias}</span>
                    <span class="stat-pill">📊 Jogos: ${jogadora.jogos}</span>
                </div>
            </div>
            <div class="card-acoes">
                <button onclick="favoritar(${jogadora.id})">${jogadora.favorita ? '★ Favorita' : '☆ Favoritar'}</button>
                <button onclick="editar(${jogadora.id})">Editar</button>
                <button onclick="excluir(${jogadora.id})">Excluir</button>
            </div>
        `;
    divLista.appendChild(card);
  });
}

// Ações dos botões do Card
window.favoritar = function (id) {
  const index = jogadoras.findIndex(j => j.id === id);
  jogadoras[index].favorita = !jogadoras[index].favorita;
  salvarNoNavegador();
  desenharCards(jogadoras); // Atualiza a tela
}

window.excluir = function (id) {
  if (confirm('Apagar esta jogadora?')) {
    jogadoras = jogadoras.filter(j => j.id !== id);
    salvarNoNavegador();
    atualizarFiltroClubes();
    desenharCards(jogadoras);
  }
}

window.editar = function (id) {
  const jogadora = jogadoras.find(j => j.id === id);

  document.getElementById('jogadoraId').value = jogadora.id;
  document.getElementById('nome').value = jogadora.nome;
  document.getElementById('posicao').value = jogadora.posicao;
  document.getElementById('clube').value = jogadora.clube;
  document.getElementById('foto').value = jogadora.foto;
  document.getElementById('gols').value = jogadora.gols;
  document.getElementById('assistencias').value = jogadora.assistencias;
  document.getElementById('jogos').value = jogadora.jogos;

  document.getElementById('tituloForm').innerText = 'Editar Jogadora';
  document.getElementById('formSection').classList.remove('oculto');
}

// Interações do Formulário (Abrir, Fechar, Salvar)
document.getElementById('novaJogadora').addEventListener('click', () => {
  document.getElementById('formJogadora').reset();
  document.getElementById('jogadoraId').value = ''; // Limpa o ID oculto
  document.getElementById('tituloForm').innerText = 'Cadastrar Jogadora';
  document.getElementById('formSection').classList.remove('oculto');
});

document.getElementById('cancelar').addEventListener('click', () => {
  document.getElementById('formSection').classList.add('oculto');
});

document.getElementById('formJogadora').addEventListener('submit', (evento) => {
  evento.preventDefault(); // Evita que a página recarregue

  const idAtual = document.getElementById('jogadoraId').value;

  const novaJogadora = {
    id: idAtual ? parseInt(idAtual) : Date.now(), // Gera um ID único se for nova
    nome: document.getElementById('nome').value,
    posicao: document.getElementById('posicao').value,
    clube: document.getElementById('clube').value,
    foto: document.getElementById('foto').value,
    gols: parseInt(document.getElementById('gols').value),
    assistencias: parseInt(document.getElementById('assistencias').value),
    jogos: parseInt(document.getElementById('jogos').value),
    favorita: false
  };

  if (idAtual) {
    // Se tem ID, está editando
    const index = jogadoras.findIndex(j => j.id === parseInt(idAtual));
    novaJogadora.favorita = jogadoras[index].favorita; // Mantém o status de favorita
    jogadoras[index] = novaJogadora;
  } else {
    // Se não tem ID, é cadastro novo
    jogadoras.push(novaJogadora);
  }

  salvarNoNavegador();
  atualizarFiltroClubes();
  desenharCards(jogadoras);
  document.getElementById('formSection').classList.add('oculto'); // Fecha modal
});

// Filtros e Buscas
function atualizarFiltroClubes() {
  const select = document.getElementById('filtroClube');
  const clubes = [...new Set(jogadoras.map(j => j.clube))];

  select.innerHTML = '<option value="">Todos os clubes</option>';
  clubes.forEach(clube => {
    select.innerHTML += `<option value="${clube}">${clube}</option>`;
  });
}

document.getElementById('busca').addEventListener('input', (evento) => {
  const termo = evento.target.value.toLowerCase();
  const filtradas = jogadoras.filter(j =>
    j.nome.toLowerCase().includes(termo) ||
    j.posicao.toLowerCase().includes(termo)
  );
  desenharCards(filtradas);
});

document.getElementById('filtroClube').addEventListener('change', (evento) => {
  const clubeEscolhido = evento.target.value;
  if (clubeEscolhido === "") {
    desenharCards(jogadoras);
  } else {
    const filtradas = jogadoras.filter(j => j.clube === clubeEscolhido);
    desenharCards(filtradas);
  }
});

document.getElementById('ordenarNome').addEventListener('click', () => {
  jogadoras.sort((a, b) => a.nome.localeCompare(b.nome));
  desenharCards(jogadoras);
});

document.getElementById('ordenarPosicao').addEventListener('click', () => {
  jogadoras.sort((a, b) => a.posicao.localeCompare(b.posicao));
  desenharCards(jogadoras);
});

// Executa a função inicial quando o arquivo carrega
iniciar();