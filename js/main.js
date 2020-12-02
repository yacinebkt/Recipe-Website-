// fixed navbar
window.addEventListener("scroll", function() {
    const header = document.querySelector(".headerJs");
    header.classList.toggle("fixednav", window.scrollY > 0);
});

// function start animation

// crolled into the viewport

var $animation_elements = $(".expertanimaion");
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;

        //check to see if this current container is within viewport
        if (
            element_bottom_position >= window_top_position &&
            element_top_position <= window_bottom_position
        ) {
            $element.addClass("start");
        }
        /* else {
                                                                                                                                                                                                                                                                                                       $element.removeClass("start");
                                                                                                                                                                                                                                                                                                   }*/
    });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

// End function start animation

// Toggle NavBar

function toggelmenu() {
    const togllem = document.querySelector(".toggel");
    togllem.classList.toggle("active");

    //
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
}

// close hamburger menu after click a
const navigation = document.querySelector(".navigation");

var elements = document.querySelectorAll(".navigation a");

elements.forEach((a) => {
    a.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });
});

//

/* button to top */
var coverhieght = $("#cover").height();
$(window).scroll(function() {
    if ($(window).scrollTop() > coverhieght) $("#backtotop").addClass("visible");
    else $("#backtotop").removeClass("visible");
});

/* button to top */

/* Carousel */
//
$(".carousel.carousel-multi-item.v-2 .carousel-item").each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));
    }
});