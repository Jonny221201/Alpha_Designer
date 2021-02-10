let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";

}

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const disappear = document.querySelector(".disappear");


hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
disappear.addEventListener('click', () => {
    container.classList.toggle("active");
})