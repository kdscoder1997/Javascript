// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");

  /* To adjust height of element dynamically(when any programmer adds new links or deletes links in this container) use element.getBoundingClientRect() -> this will current size of the element*/
  const containerHeight = linksContainer.getBoundingClientRect().height; //returns height of links-container div
  const linksHeight = links.getBoundingClientRect().height; // return total height of all links added

  if (containerHeight === 0) linksContainer.style.height = `${linksHeight}px`;
  else linksContainer.style.height = "0px";
});

// ********** fixed navbar ************ navbar will not disappear after scrolling down (use window.pageYOffset)

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) navbar.classList.add("fixed-nav");
  else navbar.classList.remove("fixed-nav");

  //for arrow to top functionality

  if (scrollHeight > 600)
    // any random number
    topLink.classList.add("show-link");
  else topLink.classList.remove("show-link");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(id);
    //calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight; //return position just before the element   // we minus the nav-height to bring the elements(about, services etc)/show elements below the navbar not behind the navBar

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82)
      //for smaller screens
      position = position + containerHeight;

    window.scrollTo({ let: 0, top: position }); //go to the particular section
    linksContainer.style.height = 0;
  });
});
