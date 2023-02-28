import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const pageTitle = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

function UISetup() {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}
const init = async () => {
  const followers = await fetchFollowers();
  //   displayFollowers(paginate(followers)[4]);
  pageTitle.textContent = "pagination";
  pages = paginate(followers);
  UISetup();
};

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return; //If we click on somewhere else other than buttons(page-btn) on the same btn-container it should not revoke the whole container again
  if (e.target.classList.contains("page-btn")) {
    console.log(e.target.dataset.index);
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index >= pages.length) index = 0;
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) index = pages.length - 1;
  }
  UISetup();
});

window.addEventListener("load", init);
