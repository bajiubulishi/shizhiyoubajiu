;
! function() {
    const $change = $('.ml5');
    const $span = $('.verify-code');
    $change.on('click', function() {
        var arr = [];
        for (i = 48; i <= 57; i++) {
            arr.push(String.fromCharCode(i));
        };
        for (i = 97; i <= 122; i++) {
            arr.push(String.fromCharCode(i));
        };
        var str = '';
        for (i = 0; i < 4; i++) {
            var random = parseInt(Math.random() * arr.length);
            if (random <= 9) {
                str += arr[random];
            } else {
                var isupper = Math.random() > 0.5 ? true : false;
                if (isupper) {
                    str += arr[random].toUpperCase();
                } else {
                    str += arr[random]
                }
            }
        }
        $span.html(str)
    })
}();