$(document).ready(function () {

    $(".thumb-prev").click(function () {
        let c = $(".thumb-carousel");
        c.animate({ scrollLeft: c.scrollLeft() - 200 }, 300);
    });

    $(".thumb-next").click(function () {
        let c = $(".thumb-carousel");
        c.animate({ scrollLeft: c.scrollLeft() + 200 }, 300);
    });

    let thumbs = $(".thumb");
    let currentIndex = 0;
    let isAnimating = false;

    function updateMainImage(index) {
        if (isAnimating) return;
        isAnimating = true;

        let large = thumbs.eq(index).attr("data-large");
        let caption = thumbs.eq(index).attr("data-caption");
        let img = $("#mainImage");

        img.removeClass("show");

        setTimeout(() => {
            img.attr("src", large);
            $("#imgCaption").text(caption);
            img.addClass("show");

            thumbs.removeClass("active");
            thumbs.eq(index).addClass("active");

            scrollThumbnailIntoView(index);

            setTimeout(() => { isAnimating = false; }, 450);

        }, 150);
    }

    function scrollThumbnailIntoView(index) {
        let c = $(".thumb-carousel");
        let t = thumbs.eq(index);

        c.stop().animate({
            scrollLeft: t.position().left + c.scrollLeft() - 200
        }, 400);
    }

    thumbs.click(function () {
        currentIndex = thumbs.index(this);
        updateMainImage(currentIndex);
    });

    $(".main-next").click(function () {
        currentIndex = (currentIndex + 1) % thumbs.length;
        updateMainImage(currentIndex);
    });

    $(".main-prev").click(function () {
        currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
        updateMainImage(currentIndex);
    });

    $("#hideThumbs").click(function () {
        $(".thumb-wrapper").slideUp(300);
        $(this).addClass("active");
        $("#showThumbs").removeClass("active");
    });

    $("#showThumbs").click(function () {
        $(".thumb-wrapper").slideDown(300);
        $(this).addClass("active");
        $("#hideThumbs").removeClass("active");
    });

});
