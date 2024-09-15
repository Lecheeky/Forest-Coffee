// code for navbar button

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

// code for hero button ("VIEW OUR MENU")

const heroButton = document.querySelector(".hero-button")

heroButton.addEventListener("click", function(){
    window.location.href = "assets/html/menu.html"
})

//code for menu div

const menuCard = document.querySelector("#link-card2")

menuCard.addEventListener("click",function(){
        window.location.href = "assets/html/menu.html"
    })



