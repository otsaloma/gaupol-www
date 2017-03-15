// -*- coding: utf-8-unix -*-

$(document).on("ready", function() {
    if (platform.os.family.indexOf("Windows") === 0) {
        $(".download.source").hide();
        $(".download.windows").show();
    }
});

$(document).on("ready", function() {
    $(".gallery").magnificPopup({
        closeOnContentClick: false,
        delegate: "a",
        gallery: {enabled: true},
        retina: {ratio: 2},
        showCloseBtn: true,
        type: "image",
    });
});
