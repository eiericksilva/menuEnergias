const menuContainer = document.querySelector(".menu-container");
const sidebar = document.querySelector(".sidebar");

menuContainer.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  const isClickedInsideMenu = menuContainer.contains(event.target);
  const isClickedInsideSidebar = sidebar.contains(event.target);

  if (!isClickedInsideMenu && !isClickedInsideSidebar) {
    sidebar.classList.remove("show");
  }
});
