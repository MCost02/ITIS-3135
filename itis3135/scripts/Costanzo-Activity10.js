$(document).ready(function () {
        $("#image_list a").each(function () {
                var reference = $(this).attr("href");
                var caption = $(this).attr("title");
                // preload the image for each link
                var currentImage = new Image();
                currentImage.src = reference;
                // set up the event handlers for each link
                $(this).click(function (event) {
                        // get the image URL and caption for each image and animate the caption
                        $("caption, #image").fadeOut(3000,
                                function () {
                                        $("#image").attr("src", reference);
                                        $("#caption").text(caption);
                                        $("#caption, #image").fadeIn(3000);
                                        $("#caption").animate({ fontSize: "2em" });
                                });
                        // cancel the default action of each link
                        event.preventDefault();
                });
        });
        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready