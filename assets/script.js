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

//code for about forest coffee

const aboutCard = document.querySelector("#link-card1")

aboutCard.addEventListener("click",function(){
    window.location.href = "assets/html/about.html"
})


//code for menu div

const menuCard = document.querySelector("#link-card2")

menuCard.addEventListener("click",function(){
        window.location.href = "assets/html/menu.html"
    })

const giftCard = document.querySelector("#link-card3")

giftCard.addEventListener("click",function(){
        window.location.href = "assets/html/gift.html"
    })

const careersCard = document.querySelector("#link-card4")

careersCard.addEventListener("click",function(){
        window.location.href = "assets/html/careers.html"
    })

const wasteCard = document.querySelector("#link-card5")

wasteCard.addEventListener("click",function(){
        window.location.href = "assets/html/waste.html"
    })

const appCard = document.querySelector("#link-card6")

appCard.addEventListener("click",function(){
        window.location.href = "assets/html/app.html"
    })



