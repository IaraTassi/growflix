import * as script from "../../js/script.js";
import { movies } from "../../js/movies.js";

global.bootstrap = {
  Modal: class {
    constructor(el) {
      this.el = el;
    }
    show() {
      this.el.style.display = "block";
    }
    hide() {
      this.el.style.display = "none";
    }
  },
};

describe("Integração Growflix - Sections, Filmes e Modal", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav><ul id="navbarLinks"></ul></nav>
      <main></main>
      <button class="watchBtn"></button>
    `;
  });

  test("Dado que a página é inicializada, quando os filmes são carregados, então categorias, cards e modal devem funcionar", () => {
    const categories = [{ id: "growcast", name: "Growcast [Episódios]" }];
    script.insertSections(categories);

    const featuredMovie = movies.find((m) => m.featured);
    script.renderMoviesInSections([featuredMovie]);

    const section = document.querySelector("main section");
    expect(section).not.toBeNull();
    expect(section.querySelector("h2").textContent).toBe(
      "Growcast [Episódios]"
    );

    const card = document.querySelector(".card-content");
    expect(card).not.toBeNull();
    expect(card.querySelector("img").alt).toBe(featuredMovie.title);

    script.setupFeaturedMovieButton([featuredMovie]);
    const btn = document.querySelector(".watchBtn");
    btn.click();

    const modal = document.getElementById("movieModal");
    expect(modal).not.toBeNull();
    expect(modal.querySelector("iframe").src).toContain(featuredMovie.link);
  });
});
