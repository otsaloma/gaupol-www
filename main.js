// -*- coding: utf-8-unix -*-

$(document).on("ready", function() {
    platform.os.family.indexOf("Windows") === 0 ?
        $(".download.source").hide() :
        $(".download.windows").hide();

});
