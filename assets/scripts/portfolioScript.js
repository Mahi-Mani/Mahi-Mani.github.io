// $(window).on('load', function () {
//     AOS.refresh();
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $(".navbar").addClass("bg-dark");
        } else {
            $(".navbar").removeClass("bg-dark");
        }
    })

    $(".projectbutton").mouseover(function() {
        var id = $(this).data("id");
        $(this).addClass("animate__animated animate__pulse");
        // console.log("Inside hoverover dintion");
        // console.log(id);
    })
});