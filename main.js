// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

$(function (){

    $('.rev-slider').slick({
        arrows: false,
        dots: true,
        autoplay : true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay : true,
                    autoplaySpeed: 2000,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    })
})

