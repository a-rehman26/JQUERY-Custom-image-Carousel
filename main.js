$(document).ready(function () {

    // ========== THUMBNAIL CLICK ==========
    $(".thumb").click(function () {

        let newImage = $(this).attr("data-large");
        let newCaption = $(this).attr("data-caption");

        $("#mainImage").fadeOut(200, function () {
            $(this).attr("src", newImage).fadeIn(250);
        });

        $("#imgCaption").fadeOut(100, function () {
            $(this).text(newCaption).fadeIn(200);
        });

        $(".thumb").removeClass("active");
        $(this).addClass("active");
    });


    // ========== NEXT / PREV MAIN IMAGE ==========
    function navigate(direction) {
        let current = $(".thumb.active");
        let next = direction === "next" ? current.next(".thumb") : current.prev(".thumb");

        if (next.length) next.click();
    }

    $(".main-next").click(() => navigate("next"));
    $(".main-prev").click(() => navigate("prev"));


    // ========== SCROLL THUMBNAIL BAR ==========
    $(".thumb-next").click(() => {
        $(".thumb-carousel").animate({ scrollLeft: "+=150" }, 300);
    });

    $(".thumb-prev").click(() => {
        $(".thumb-carousel").animate({ scrollLeft: "-=150" }, 300);
    });

});
