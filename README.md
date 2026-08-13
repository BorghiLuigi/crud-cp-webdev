# CRUD de Jogadoras - Web Dev (crud-cp-webdev)

## 🌐 Deploy (Projeto no ar)
Confira a aplicação rodando ao vivo no navegador através do GitHub Pages:
👉 **[Acessar o Projeto crud-cp-webdev](https://borghiluigi.github.io/crud-cp-webdev/)**

## Sobre o Projeto
Este projeto é uma aplicação web completa de **CRUD (Create, Read, Update, Delete)** desenvolvida com HTML, CSS e JavaScript Vanilla. O sistema permite gerenciar um catálogo de jogadoras de futebol feminino, salvando as informações diretamente no navegador através da API de `localStorage`, ou seja, os dados não se perdem ao recarregar a página!

## Funcionalidades
- **C**reate (Criar): Cadastro de novas jogadoras com informações como nome, posição, clube, foto (URL), gols, assistências e quantidade de jogos.
- **R**ead (Ler): Exibição dinâmica das jogadoras em um layout de *cards* responsivo.
- **U**pdate (Atualizar): Edição das informações e estatísticas de jogadoras já cadastradas.
- **D**elete (Apagar): Remoção de jogadoras do sistema.
- **Busca Dinâmica:** Barra de pesquisa para encontrar jogadoras por nome ou posição em tempo real.
- **Filtros e Ordenação:** Capacidade de filtrar o catálogo por clube e ordenar as jogadoras por Nome ou Posição.
- **Sistema de Favoritos:** Botão para favoritar/desfavoritar jogadoras específicas.
- **Persistência de Dados:** Uso do `localStorage` para manter o banco de dados inicial e as alterações do usuário salvas na máquina.

## Tecnologias Utilizadas
- **HTML5:** Estrutura semântica da aplicação e formulários em modal.
- **CSS3:** Estilização com o uso de variáveis (`:root`), Flexbox, CSS Grid para o layout dos cards e Media Queries para total responsividade em telas menores.
- **JavaScript (Vanilla):** Lógica de programação completa (manipulação do DOM, eventos, array methods como `map`, `filter`, `sort` e persistência no `localStorage`).

## Como executar o projeto localmente

Por ser um projeto Front-end estático utilizando LocalStorage, não é necessária a instalação de bancos de dados ou servidores (Node, Python, etc.).

1. Abra o terminal e faça o clone deste repositório:
   ```bash
   git clone [https://github.com/BorghiLuigi/crud-cp-webdev.git](https://github.com/BorghiLuigi/crud-cp-webdev.git)
