! function() {
    const $change = $('.ml5');
    const $span = $('.verify-code');
    $(document).ready(function() {
        $change.on('click', function() {
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

}();
! function() {
    $('#loginsubmit').on('click', function() {
        if ($('#captcha').val() == $('#codeimage').text()) {
            $('#captcha').html('');
            $.ajax({
                type: 'post',
                url: 'http://10.31.164.18/lianxi/happygo/php/radio.php',
                data: {
                    user: $('#user_name').val(),
                    password: $('#password').val()
                },
                success: function(d) {
                    if (d) {
                        $.cookie('mobile', $('#user_name').val(), 5);
                        $.cookie('pssword', $('#password').val(), 5);
                        window.location.assign('http://10.31.164.18/lianxi/happygo/src/html/indx.html')

                    } else {
                        alert('用户名或密码错误');
                        $('#password').val('');
                    }
                }
            })
        } else {
            $('#error_captcha').html('验证码错误');
        }
    });

}();