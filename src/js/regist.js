! function() {
    const $change = $('.ml5');
    const $span = $('.verify-code');
    $(document).ready(function() {
        $change.on('click', function() {
            this
            let arr = [];
            for (i = 48; i <= 57; i++) {
                arr.push(String.fromCharCode(i));
            };
            for (i = 97; i <= 122; i++) {
                arr.push(String.fromCharCode(i));
            };
            let str = '';
            for (i = 0; i < 4; i++) {
                let random = parseInt(Math.random() * arr.length);
                if (random <= 9) {
                    str += arr[random];
                } else {
                    let isupper = Math.random() > 0.5 ? true : false;
                    if (isupper) {
                        str += arr[random].toUpperCase();
                    } else {
                        str += arr[random]
                    }
                }
            }
            $span.html(str)
        })
    })
}();;
! function() {
    $('#submit').on('click', function() {
        $.ajax({
            type: 'post',
            url: 'http://10.31.164.18/lianxi/happygo/php/regist.php',
            data: {
                mobile: $('#mobile').val(),
                password: $('#password').val()
            }
        })
    })
}();