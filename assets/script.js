const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments flèches de la page
const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");

// Création des points de navigation
const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === 0) {
        dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
}

let currentSlide = 0;


function afficherSlide() {
    const image = document.querySelector(".banner-img");
    const texte = document.querySelector("#banner p");
    const dots = document.querySelectorAll(".dot");

    image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    texte.innerHTML = slides[currentSlide].tagLine;
    dots.forEach(dot => {
        dot.classList.remove("dot_selected");
    });

    dots[currentSlide].classList.add("dot_selected");
}

//Click gauche et droite pour changer de slide
flecheDroite.addEventListener("click", function () {
    console.log("clic sur la flèche droite");
    currentSlide++;
    if (currentSlide >= slides.length)
        { currentSlide = 0; }
    afficherSlide();
});

flecheGauche.addEventListener("click", function () {
    console.log("clic sur la flèche gauche");
    currentSlide--;
    if (currentSlide < 0)
        { currentSlide = slides.length - 1; }
    afficherSlide();
});