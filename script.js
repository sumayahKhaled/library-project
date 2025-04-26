
// seatch
const search = document.querySelector(".search-form");
document.querySelector("#icon-search").onclick = () => {
    search.classList.toggle("active");
    // 

    shopping.classList.remove("active");
    user.classList.remove("active");
    menu.classList.remove("active");

};
// shopping

const shopping = document.querySelector(".shopping");
document.querySelector("#icon-shopping").onclick = () => {
    shopping.classList.toggle("active");
    // 
    search.classList.remove("active");

    user.classList.remove("active");
    menu.classList.remove("active");
};
// user
const user = document.querySelector(".user");
document.querySelector("#icon-user").onclick = () => {
    user.classList.toggle("active");
    // 
    search.classList.remove("active");
    shopping.classList.remove("active");

    menu.classList.remove("active");
};

// menu
const menu = document.querySelector(".nav");
document.querySelector("#icon-menu").onclick = () => {
    menu.classList.toggle("active");
    // 
    search.classList.remove("active");
    shopping.classList.remove("active");
    user.classList.remove("active");

};

window.onscroll = () => {
    search.classList.remove("active");
    shopping.classList.remove("active");
    user.classList.remove("active");
    menu.classList.remove("active");
}

// ScrollReveal
ScrollReveal().reveal('.card', {
    origin: 'bottom',
    distance: '80px',
    duration: 1500,
    delay: 300,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200,
    opacity: 0,
    reset: false
});

