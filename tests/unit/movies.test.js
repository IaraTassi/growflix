import { movies } from "../../js/movies.js";

describe("Conjunto de filmes (movies.js)", () => {
  test("Dado os filmes importados, então deve ser um array com pelo menos um item", () => {
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
  });

  test("Dado cada filme, então todos devem possuir as propriedades obrigatórias", () => {
    movies.forEach((filme) => {
      expect(filme).toHaveProperty("title");
      expect(filme).toHaveProperty("img");
      expect(filme).toHaveProperty("link");
      expect(filme).toHaveProperty("category");
      expect(filme.category).toHaveProperty("id");
      expect(filme.category).toHaveProperty("name");
      expect(typeof filme.featured).toBe("boolean");
    });
  });

  test("Dado cada filme, então todos os links devem ser do YouTube embed", () => {
    movies.forEach((filme) => {
      expect(filme.link).toMatch(/^https:\/\/www\.youtube\.com\/embed\//);
    });
  });

  test("Dado cada filme, então todos os títulos devem ser strings não vazias", () => {
    movies.forEach((filme) => {
      expect(typeof filme.title).toBe("string");
      expect(filme.title.trim().length).toBeGreaterThan(0);
    });
  });

  test("Dado cada filme, então todas as imagens devem ser thumbnails do YouTube", () => {
    movies.forEach((filme) => {
      expect(filme.img).toMatch(
        /^https:\/\/img\.youtube\.com\/vi\/.+\/sddefault\.jpg$/
      );
    });
  });

  test("Dado cada filme, então todos os category.id devem ser strings não vazias", () => {
    movies.forEach((filme) => {
      expect(typeof filme.category.id).toBe("string");
      expect(filme.category.id.trim().length).toBeGreaterThan(0);
    });
  });

  test("Dado todos os filmes, então os títulos devem ser únicos", () => {
    const titulos = movies.map((filme) => filme.title);
    const titulosUnicos = new Set(titulos);
    expect(titulosUnicos.size).toBe(titulos.length);
  });
});
