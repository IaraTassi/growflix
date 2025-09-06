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

describe("Funcionalidades da interface (script.js)", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav><ul id="navbarLinks"></ul></nav>
      <main></main>
      <button class="watchBtn"></button>
    `;
  });

  describe("Categorias", () => {
    test("Dado uma lista de filmes, então retorna categorias únicas", () => {
      const categories = script.getCategoriesFromMovies(movies);
      const uniqueIds = [...new Set(categories.map((c) => c.id))];
      expect(categories.length).toBe(uniqueIds.length);
    });

    test("Dado uma categoria, então cria item de nav corretamente", () => {
      const category = { id: "growcast", name: "Growcast [Episódios]" };
      const li = script.createCategoryNavItem(category);
      expect(li.tagName).toBe("LI");
      expect(li.querySelector("a").textContent).toBe("Growcast [Episódios]");
      expect(li.querySelector("a").href).toContain("#growcast");
    });

    test("Dado categorias, então insere no navbar corretamente", () => {
      const categories = [{ id: "growcast", name: "Growcast [Episódios]" }];
      script.insertCategoriesInNavbar(categories);
      const li = document.querySelector("#navbarLinks li");
      expect(li).not.toBeNull();
      expect(li.textContent).toBe("Growcast [Episódios]");
    });

    test("Dado uma categoria, então cria section corretamente", () => {
      const category = { id: "growcast", name: "Growcast [Episódios]" };
      const section = script.createCategorySection(category);
      expect(section.tagName).toBe("SECTION");
      expect(section.querySelector("h2").textContent).toBe(
        "Growcast [Episódios]"
      );
      expect(
        section.querySelector("[data-row-category='growcast']")
      ).not.toBeNull();
    });

    test("Dado várias categorias, então insere sections no main corretamente", () => {
      const categories = [{ id: "growcast", name: "Growcast [Episódios]" }];
      script.insertSections(categories);
      expect(document.querySelector("main section")).not.toBeNull();
    });
  });

  describe("Renderização de filmes", () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <main>
          <section id="growcast">
            <div class="row" data-row-category="growcast"></div>
          </section>
        </main>
      `;
    });

    test("Dado filmes, então renderiza cards corretamente nas sections", () => {
      const testMovie = {
        title: "Growcast #00 | Conheça a Growdev",
        img: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
        link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
        category: { id: "growcast" },
      };

      script.insertSections([{ id: "growcast", name: "Growcast [Episódios]" }]);
      script.renderMoviesInSections([testMovie]);

      const card = document.querySelector(".card-content");
      expect(card).not.toBeNull();
      expect(card.querySelector("img").alt).toBe(testMovie.title);
    });

    test("Dado uma lista vazia, então não renderiza cards", () => {
      script.insertSections([{ id: "growcast", name: "Growcast [Episódios]" }]);
      script.renderMoviesInSections([]);
      const cards = document.querySelectorAll(".card-content");
      expect(cards.length).toBe(0);
    });

    test("Dado filmes sem categoria, então ignora-os", () => {
      const testMovies = [
        {
          title: "Filme sem categoria",
          img: "",
          link: "linkX",
          category: null,
        },
        {
          title: "Outro sem categoria",
          img: "",
          link: "linkY",
          category: undefined,
        },
      ];

      script.insertSections([{ id: "growcast", name: "Growcast [Episódios]" }]);
      script.renderMoviesInSections(testMovies);
      const cards = document.querySelectorAll(".card-content");
      expect(cards.length).toBe(0);
    });
  });

  describe("Botão de filme em destaque (Featured Movie)", () => {
    test("Dado filmes com destaque, então dispara modal com iframe correto", () => {
      script.setupFeaturedMovieButton(movies);
      const btn = document.querySelector(".watchBtn");
      if (btn) btn.click();

      const featuredMovie = movies.find((m) => m.featured);
      const modal = document.getElementById("movieModal");

      expect(modal).not.toBeNull();
      expect(modal.querySelector("iframe").src).toContain(featuredMovie.link);
    });

    test("Dado filmes sem destaque, então não cria modal", () => {
      const moviesNoFeatured = movies.map((m) => ({ ...m, featured: false }));
      script.setupFeaturedMovieButton(moviesNoFeatured);
      const btn = document.querySelector(".watchBtn");
      if (btn) btn.click();

      expect(document.getElementById("movieModal")).toBeNull();
    });

    test("Dado filmes sem destaque, então não dispara createAndShowModal", () => {
      const spy = jest
        .spyOn(script, "createAndShowModal")
        .mockImplementation(() => {});
      const moviesNoFeatured = movies.map((m) => ({ ...m, featured: false }));
      script.setupFeaturedMovieButton(moviesNoFeatured);

      const btn = document.querySelector(".watchBtn");
      if (btn) btn.click();

      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });

    test("Dado botão ausente, então não lança erro", () => {
      document.body.innerHTML = `<main></main>`;
      expect(() => script.setupFeaturedMovieButton(movies)).not.toThrow();
    });

    test("Dado múltiplos cliques, então não duplica modais", () => {
      const featuredMovie = movies.find((m) => m.featured);
      script.setupFeaturedMovieButton([featuredMovie]);
      const btn = document.querySelector(".watchBtn");

      if (btn) {
        btn.click();
        btn.click();
        btn.click();
      }

      const modais = document.querySelectorAll("#movieModal");
      expect(modais.length).toBe(1);
      expect(modais[0].querySelector("iframe").src).toContain(
        featuredMovie.link
      );
    });
  });

  describe("Modal (createAndShowModal)", () => {
    beforeEach(() => {
      document.body.innerHTML = "";
    });

    test("Dado um link, então cria modal com iframe correto", () => {
      const link = "https://www.youtube.com/embed/7OWT3lfHYvE";
      script.createAndShowModal(link);

      const modal = document.getElementById("movieModal");
      expect(modal).not.toBeNull();
      expect(modal.querySelector("iframe").src).toContain(link);
    });

    test("Dado modal existente, então substitui pelo novo link", () => {
      const link1 = "https://www.youtube.com/embed/7OWT3lfHYvE";
      const link2 = "https://www.youtube.com/embed/aJ-HZuLcKeA";

      script.createAndShowModal(link1);
      script.createAndShowModal(link2);

      const modal = document.getElementById("movieModal");
      expect(modal.querySelector("iframe").src).toContain(link2);
    });

    test("Dado evento hidden.bs.modal, então remove modal do DOM", () => {
      const link = "https://www.youtube.com/embed/7OWT3lfHYvE";
      script.createAndShowModal(link);

      const modal = document.getElementById("movieModal");
      modal.dispatchEvent(new Event("hidden.bs.modal"));

      expect(document.getElementById("movieModal")).toBeNull();
    });
  });

  test("Dado a inicialização da página, então initPage não lança erros e renderiza corretamente", () => {
    expect(() => script.initPage()).not.toThrow();
    expect(document.querySelector("#navbarLinks li")).not.toBeNull();
    expect(document.querySelector("main section")).not.toBeNull();
    expect(document.querySelector(".card-content")).not.toBeNull();
  });
});
