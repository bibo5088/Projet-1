const placeholders = document.querySelectorAll(
  '.recipe-preview-link[href="#"]'
);
for (const placeholder of placeholders) {
  placeholder.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Recette placeholder");
  });
}
