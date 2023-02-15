// MDN
// The "DOMContentLoaded" event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The "load" event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.play();
  } else {
    btn.classList.add("slide");
    video.pause();
  }
});

// preloader  -> we use this gif/image to show while everything been loaded on the webpage

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  //see the description above
  preloader.classList.add("hide-preloader");
});
