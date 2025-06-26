  document.addEventListener("DOMContentLoaded", function () {
      const toggle = document.getElementById("menu-toggle");
      const nav = document.querySelector("nav");
      const close = document.getElementById("close-menu");

      toggle.addEventListener("click", () => {
        nav.classList.add("open");
      });

      close.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
