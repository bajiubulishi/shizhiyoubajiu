! function() {
    $login1 = $('.login_1');
    $login2 = $('.login_2');
    if ($.cookie('mobile')) {
        $login2.show();
        $login1.hide();
        $('#d_name').html($.cookie('mobile'));
    }
    $('#exid').on('click', function() {
        $login1.show();
        $login2.hide();
        $.cookie('mobile', null, { expires: -1 });
        $.cookie('password', null, { expires: -1 });
    })
}();