const displayButtons = (conatainer, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? "active-btn" : "null"
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  btns.unshift(`<button class="next-btn">next</button>`);
  btns.push(`<button class="prev-btn">prev</button>`);
  conatainer.innerHTML = btns.join("");
};

export default displayButtons;
