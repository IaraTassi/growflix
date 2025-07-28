function getCategoriesFromMovies(movies) {
  return movies.reduce((acc, movie) => {
    const exists = acc.some((cat) => cat.id === movie.category.id);
    if (!exists) {
      acc.push(movie.category);
    }
    return acc;
  }, []);
}

function createCategoryNavItem(category) {
  const li = document.createElement("li");
  li.classList.add("nav-item");

  const a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = `#${category.id}`;
  a.textContent = category.name;

  li.appendChild(a);

  return li;
}

function insertCategoriesInNavbar(categories) {
  const navbarLinks = document.getElementById("navbarLinks");

  categories.forEach((category) => {
    const li = createCategoryNavItem(category);
    navbarLinks.appendChild(li);
  });
}

const featuredMovie = movies.find((movie) => movie.featured);
const staticWatchBtn = document.querySelector(".watchBtn");

if (featuredMovie && staticWatchBtn) {
  staticWatchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    createAndShowModal(featuredMovie.link);
  });
}

function createCategorySection(category) {
  const section = document.createElement("section");
  section.classList.add("category-section", "container");
  section.id = category.id;

  const divTitle = document.createElement("div");
  divTitle.classList.add("div-title", "d-flex", "align-items-center", "gap-1");
  section.appendChild(divTitle);

  const title = document.createElement("h2");
  title.classList.add("category-title", "fs-5", "fw-bold");
  title.textContent = category.name;

  divTitle.appendChild(title);

  const svgWrapper = document.createElement("div");
  svgWrapper.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      class="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
  `;
  const svg = svgWrapper.firstElementChild;
  divTitle.appendChild(svg);

  const row = document.createElement("div");
  row.classList.add("row", "g-4");
  row.dataset.rowCategory = category.id;
  section.appendChild(row);

  return section;
}

function insertSections(categories) {
  const main = document.querySelector("main");

  categories.forEach((category) => {
    const section = createCategorySection(category);
    main.appendChild(section);
  });
}

function renderMoviesInSections(movies) {
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card", "card-content");

    const img = document.createElement("img");
    img.classList.add("img-fluid", "img-movie");
    img.src = movie.img;
    img.alt = movie.title;

    const iconLink = document.createElement("a");
    iconLink.classList.add("movie-icon");
    iconLink.href = movie.link;
    iconLink.setAttribute("aria-label", `Assistir ${movie.title}`);
    iconLink.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" 
        class="bi bi-play-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
      </svg>
    `;

    iconLink.addEventListener("click", function (e) {
      e.preventDefault();
      createAndShowModal(movie.link);
    });

    const title = document.createElement("h5");
    title.classList.add("movie-title");
    title.textContent = movie.title;

    const footer = document.createElement("div");
    footer.classList.add("card-link", "movie-link");
    footer.appendChild(iconLink);
    footer.appendChild(title);

    card.appendChild(img);
    card.appendChild(footer);

    const section = document.getElementById(movie.category.id);
    if (section) {
      const row = document.querySelector(
        `[data-row-category="${movie.category.id}"]`
      );
      const col = document.createElement("div");
      col.classList.add("col-12", "col-sm-6", "col-md-3", "card-movie");
      col.appendChild(card);
      row.appendChild(col);
    }
  });
}

function createAndShowModal(movieUrl) {
  const modalHTML = `
    <div class="modal fade" id="movieModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-transparent border-bottom-none">
          <div class="modal-header modal-header-custom border-0">
            <button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>          
            <div class="ratio ratio-21x9">
              <iframe
                width="560" height="315"
                id="modalVideo"
                src="${movieUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>   
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
  const modalEl = document.getElementById("movieModal");
  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();

  modalEl.addEventListener("hidden.bs.modal", function () {
    modalEl.remove();
  });
}

const categories = getCategoriesFromMovies(movies);
insertCategoriesInNavbar(categories);
insertSections(categories);
renderMoviesInSections(movies);
