function criarCard(j) {
  const card = document.createElement('div');
  card.className = 'card';
  
  // Se a foto falhar, ele carrega um avatar com as iniciais do nome da jogadora.
  card.innerHTML = `
    <img 
      src="${j.foto}" 
      alt="${j.nome}" 
      onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(j.nome)}&background=random&color=fff&size=300';"
    >
    <div class="card-content">
      <h3>${j.nome}</h3>
      <p><strong>Posição:</strong> ${j.posicao}</p>
      <p><strong>Clube:</strong> ${j.clube}</p>
      <div class="stats">
        <span class="stat-pill">⚽ Gols: ${j.gols}</span>
        <span class="stat-pill">🎯 Assist.: ${j.assistencias}</span>
        <span class="stat-pill">📊 Jogos: ${j.jogos}</span>
      </div>
    </div>
    <div class="card-acoes">
      <button class="btn-favorita" data-action="favoritar" data-id="${j.id}" aria-pressed="${j.favorita}">${
        j.favorita ? '★ Favorita' : '☆ Favoritar'
      }</button>
      <button class="btn-editar" data-action="editar" data-id="${j.id}">Editar</button>
      <button class="btn-excluir" data-action="excluir" data-id="${j.id}">Excluir</button>
    </div>
  `;
  return card;
}
