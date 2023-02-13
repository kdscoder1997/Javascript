const toggleButton = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", function () {
  console.log(sidebar.classList);
  if (sidebar.classList.contains("show-sidebar"))
    sidebar.classList.remove("show-sidebar");
  else sidebar.classList.add("show-sidebar");
});

closeButton.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  console.log(sidebar.classList);
});
