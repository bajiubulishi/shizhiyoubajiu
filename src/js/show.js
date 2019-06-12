! function($) {
    const $tit = $('head title');
    const $tit1 = $('.location .tit');
    const $title2 = $('.detail_top .detail_tit ');
    const $explain = $('.detail_top .detail_tit_md')

    let sid = window.location.search;
    sid = sid.substring(sid.indexOf("="), sid.length).substring(1);
    $.ajax({
        url: "http://10.31.164.18/lianxi/happygo/php/show.php",
        data: {
            id: sid,
        }
    }).done(function(d) {

    });
}(jQuery);