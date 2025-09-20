# 🎬 Growflix

## 🎯 Desafio

Desenvolver um site de streaming chamado **Growflix**, inspirado no layout da Netflix, com conteúdos em vídeo exclusivos da Growdev.

## 🔗 Acesso ao Projeto

👀 Você pode acessar o projeto online por este link:

👉 [Versão no GitHub Pages](https://iaratassi.github.io/growflix/)

## 🖼️ Screenshots

### Página Inicial

![Página Inicial](./assets/screenshots/index.png)

### Home com vídeos

![Home](./assets/screenshots/home.png)

## 🛠️ Pré-requisitos

Para concluir este desafio, você precisará ter familiaridade com:

- 🏗️ **HTML**: Estruturação da página.
- 🎨 **CSS**: Estilização de sites e aplicações.
- 💻 **JavaScript**: Implementação de interatividade e manipulação do DOM.
- 📱 **Bootstrap Framework (v5.3 ou superior)**: Estilização e criação de layouts responsivos, utilização de componentes e ícones.

---

## 📋 Regras e requisitos da entrega

1. 🎯 Reproduzir fielmente o layout conforme o [https://growflix.vercel.app/]

2. 🖼️ Utilizar as imagens fornecidas para compor os elementos visuais (baixe as imagens e armazene no projeto).

3. 💡 Utilizar as tecnologias HTML, CSS, JavaScript e Bootstrap (versão mínima 5.3).

4. 📥 Baixar e adicionar os arquivos do Bootstrap no projeto seguindo a documentação oficial.

5. 📂 Organização da estrutura de pastas do projeto:

   - 📁 `assets/` para imagens e bibliotecas (Bootstrap).
   - 📁 `css/` para arquivos CSS.
   - 📁 `js/` para arquivos JavaScript.
   - 📄 Arquivos HTML na raiz do projeto.

6. 🎬 Os vídeos exibidos na página `home.html` devem ser criados dinamicamente via JavaScript, manipulando o DOM.

7. 🗂️ Criar um array `movies` contendo objetos com propriedades:

   ```js
   const movies = [
     {
       img: "https://img.youtube.com/vi/<id>/sddefault.jpg",
       title: "Título do vídeo",
       link: "https://youtube.com/embed/<id>",
       category: "Categoria do vídeo",
     },
     // demais vídeos...
   ];
   ```

8. 🎬 Para cada seção da página home.html, você deverá mostrar os
   vídeos de acordo com a categoria. Por exemplo: vídeos que
   possuem a categoria “webinar” deverão ser mostrados na sessão
   “Webinar em Flutter”, e assim por diante.

9. 📌 Após concluído o desenvolvimento, você deverá realizar o Deploy da
   sua aplicação utilizando um dos serviços abaixo:
   a. Github Pages
   b. Vercel

10. ✅ A entrega do desafio envolve o envio do link para o repositório no
    Github e o link do Deploy. Além disso, o repositório deve estar em
    modo Público para que possamos analisar o código implementado
    e gerar seu feedback.

11. 🔍 O projeto só será considerado como entregue, mediante ao envio de
    ambos os links:
    a. Link do repositório no Github
    b. Link para o Deploy

---

🧪 Testes

O projeto conta com testes automatizados para garantir a qualidade do código e o correto funcionamento das funções e da manipulação do DOM.

⚙ Tecnologias de teste

Jest – framework de testes em JavaScript

▶ Como executar os testes

1. Instale as dependências:
   `npm install`

2. Execute os testes:
   `npm test`

📌 O que está sendo testado

Funções utilitárias – manipulação de arrays de filmes e categorias

DOM dinâmico – renderização de seções e botões interativos

Eventos de clique – abertura do modal de vídeo ao clicar em um card

Os testes estão na pasta:

```plaintext

├─ tests/
│ ├─ unit/
│ │ ├─ movies.test.js
│ │ └─ script.test.js
│ └─ integration/
│ └─ integration.test.js

```

</details>

✅ Exemplo de saída

```plaintext

PASS tests/unit/movies.test.js

PASS tests/unit/script.test.js

PASS tests/integration/integration.test.js

-----------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files | 97.22 | 92.59 | 94.44 | 98.07 |
movies.js | 100 | 100 | 100 | 100 |
script.js | 97.19 | 92.59 | 94.44 | 98.05 | 142-143
-----------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests: 25 passed, 25 total
Snapshots: 0 total
Time: 2.794 s
Ran all test suites.

```

</details>

🚀 Deploy

📌 Link do projeto no ar:
👉 [Growflix no ar](https://iaratassi.github.io/growflix/)

---

👩‍💻 Autor(a)

Desenvolvido por Iara Tassi durante o desafio da Growdev.


