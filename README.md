# 🎬 Growflix

## 🎯 Desafio

Desenvolver um site de streaming chamado **Growflix**, inspirado no layout da Netflix, com conteúdos em vídeo exclusivos da Growdev.

## 🔗 Acesso ao Projeto

👀 Você pode acessar o projeto online por este link:

👉 []()
_(link estará disponível após o deploy)_

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
