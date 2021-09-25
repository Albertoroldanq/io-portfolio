$(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("active");
    $(".menu-icon").toggleClass("fa-times");
    $(".menu-icon").toggleClass("fa-bars");
    $(".overlay").toggleClass("active");
    $(".menu-items-wrapper-mobile").toggleClass("active");
});

$(".menu-item-mobile").click(function () {
    $(".menu-icon").toggleClass("fa-times");
    $(".menu-icon").toggleClass("fa-bars");
    $(".menu-btn").removeClass("active");
    $(".overlay").removeClass("active");
    $(".menu-items-wrapper-mobile").toggleClass("active");
});