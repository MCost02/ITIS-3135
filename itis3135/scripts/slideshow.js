const images = [
    { "source": "images/me.png", "caption": "Marx at Mountaintop Overlook" },
    { "source": "images/airport_overlook.jpeg", "caption": "View of St. Thomas from the Airport Overlook" },
    { "source": "images/magens_bay.jpeg", "caption": "Magens Bay, St. Thomas, VI" },
    { "source": "images/pinnacle_point.jpeg", "caption": "View of harbor from Pinnacle Point" },
    { "source": "images/trunk_bay.jpeg", "caption": "Trunk Bay, St. John, VI" },
    { "source": "images/plane_view.jpeg", "caption": "View of St. Thomas from the plane" },
];

let index = 1;

$(function () {
    $('#slideshow-image-list div').each(function () {
        let swappedImage = new Image();
        swappedImage.src = $(this).children().attr('src');
    });
    $('#slideshow-image-list div').click(function (evt) {
        let imageURL = $(this).children().attr('src');
        $('#slideshow-main-image').attr('src', imageURL);

        let imageCaption = $(this).children().attr('alt');
        $('#caption').text(imageCaption);

        index = images.findIndex((item) => item.source === $('#slideshow-main-image').attr('src'));
        evt.preventDefault();
    });
});

$(function () {
    setInterval(function () {
        if (index === 6) {
            index = 0;
        }
        $('#slideshow-main-image').attr('src', images[index].source);
        $('#caption').text(images[index].caption);
        index++;
    }, 4000);

})