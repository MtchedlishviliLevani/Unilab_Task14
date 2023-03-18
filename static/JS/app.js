const burger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

burger.addEventListener("click", () =>  {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n =>n. addEventListener("click", () => {
    burger.classList.remove("active")
    navMenu.classList.remove("active")
  }))


// margintop for main when i click burger menu

  const main = document.querySelector("main");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
 main.style.margin = "40rem 0 0 0";
  
  })