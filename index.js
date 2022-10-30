const navtoggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".menu")

navtoggle.addEventListener("click", () => {
    navmenu.classList.toggle ("menu")
})