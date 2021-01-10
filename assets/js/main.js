let accordLink = document.querySelectorAll(".accordion-item");

accordLink.forEach((elem) => {
  elem.addEventListener("click", (el) => {
    accordLink.forEach((item) => {
      if (item !== el.currentTarget) {
        item.classList.remove("active");
      }
    });
    elem.classList.toggle("active");
  });
});
