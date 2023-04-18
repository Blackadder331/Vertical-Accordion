const options = document.querySelectorAll(".option");
options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(option => option.classList.remove("active"));
    option.classList.add("active");
  });
});