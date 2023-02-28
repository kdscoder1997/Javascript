const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (value) {
  } else {
    resultsDOM.innerHTML =
      '<div class="error"> please enter valid search term</div> ';
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchInput) => {
  resultsDOM.innerHTML = '<div class="loading"></div>';
  try {
    // console.log(searchInput);
    const response = await fetch(`${url}${searchInput}`);
    const data = await response.json();
    const results = data.query.search;
    renderResults(results);
    if (results.length < 1) {
      resultsDOM.innerHTML =
        '<div class="error"> No matching results please try again..</div> ';
    }
    // console.log(data);
  } catch (error) {
    resultsDOM.innerHTML = '<div class="error"> Error occured...</div> ';
  }
};

const renderResults = (list) => {
  const cardsList = list
    .map((items) => {
      const { title, snippet, pageid } = items;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join("");
  resultsDOM.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
};
