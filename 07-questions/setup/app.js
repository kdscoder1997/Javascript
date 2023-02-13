//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
    btns.forEach(function (element) {
      /// To close other paras while accessing current
      if (element.parentElement.parentElement !== question) {
        console.log(element);
        element.parentElement.parentElement.classList.remove("show-text");
      }
    });
  });
});
