(navDuty => {
    const sideNav = document.getElementById('sideNav');
    const closeNavBtn = document.querySelector('.closeBtn');
    const toggleNavBtn = document.querySelector('.toggleNav');
    const pageOverlay = document.querySelector('.page__overlay');

    // Nav listeners
    closeNavBtn.addEventListener('click', toggleNav);
    toggleNavBtn.addEventListener('click', toggleNav);
    pageOverlay.addEventListener('click', toggleNav);
    // Nav funtion
    function toggleNav() {
        sideNav.classList.toggle('open');
    };

    // (on mobile) close nav menu when link is clicked
    // this is useful on mobile when clicking an anchor tag on the current page (eg. index.html#last-section)
    let navItems = document.querySelectorAll(".nav__item");
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function (event) {
            toggleNav();
        });
    }
})();


//non related

$('.slick-list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slick-list-post').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
});
$(".search_click").click(function(){
    $(".search__overlay").css('display', 'inline-block');
});
$(".search__close").click(function () {
    $(".search__overlay").css('display', 'none');
});

// $(document).ready(function(){
//     $('.dropdown a.submenu').on("click", function(e){
//         $(this).next('ul').toggle();
//         e.stopPropagation();
//         e.preventDefault();
//     });
// });





