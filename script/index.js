const burgerMenuBtn = document.querySelector(".burger-menu-btn")
const burgerMenu = document.querySelector("#burger")

document.onclick = (e) => {
    if(e.target.id !== "burger" && e.target.className !== "burger-menu-btn"){
        burgerMenu.classList.remove("active")
    }
}


burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("active")
})
