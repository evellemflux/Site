function irPara(url){
    window.location.href = url;
}


const carouselTrack = document.getElementById("carouselTrack");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const carouselDots = document.querySelectorAll(".dot");

let currentSlide = 0;

function mostrarSlide(index) {
    
    if (index >= carouselSlides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = carouselSlides.length - 1;
    } else {
        currentSlide = index;
    }

    
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    
    carouselDots.forEach(dot => {
        dot.classList.remove("active");
    });

    carouselDots[currentSlide].classList.add("active");
}


nextButton.addEventListener("click", () => {
    mostrarSlide(currentSlide + 1);
});


prevButton.addEventListener("click", () => {
    mostrarSlide(currentSlide - 1);
});


carouselDots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = Number(dot.dataset.index);
        mostrarSlide(index);
    });
});


setInterval(() => {
    mostrarSlide(currentSlide + 1);
}, 5000);


document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

        const aberto = navLinks.classList.toggle("show");

        menuToggle.classList.toggle("active", aberto);

        menuToggle.setAttribute("aria-expanded", aberto);
        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");

        });

    });

});
