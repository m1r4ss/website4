// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }



//opacity
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


//slider
$(function (){

    $('.rev-slider1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: true,
        arrows: false,
        dots: false,
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 1250,
                settings: "unslick"

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})


//katalog
const $svyaz = document.querySelector('.svyaz1');
const $form1 = document.querySelector('.form');
const $svyaz1 = document.querySelector('.svyaz2');
const $form2 = document.querySelector('.form');
const $svyaz2 = document.querySelector('.svyaz3');
const $form3 = document.querySelector('.form');
$svyaz.addEventListener('click', e => {

    $form1.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});

$svyaz1.addEventListener('click', e => {

    $form2.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});
$svyaz2.addEventListener('click', e => {

    $form3.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav33") {
        x.className += " responsive";
    } else {
        x.className = "topnav33";
    }
}
