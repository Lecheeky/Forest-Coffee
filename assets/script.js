const navbarButton = document.querySelector(".navbar-links-button")
const buttonMenu = document.querySelector(".button-menu")
const hideButtonMenu = document.querySelector(".button-menu-hide")

let navbarButtonClicked = 0

navbarButton.addEventListener("click", function(){
    navbarButtonClicked++;
    if (navbarButtonClicked % 2 !== 0){
        buttonMenu.classList.remove("button-menu-hide");
    }
    else {
        buttonMenu.classList.add("button-menu-hide");
    }
})
