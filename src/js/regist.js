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
}();
// ! function() {
//     class verify {
//         constructor() {
//             this.phone = $('#mobile');
//             this.word = $('#password');
//             this.password = $('#password_confirm');
//             this.captcha = $('#captcha');
//             const mobilflag=true;
//             const wordflag=true;
//             const passflag=true;
//             const capflag=true;
//         };
//         inint() {
//             let _this = this;
//             this.phone.on('blur', function() {
//                 _this.mobil(this);
//             });
//             this.word.on('blur', function() {
//                 _this.verword(this);
//             });
//             this.password.on('blur', function() {
//                 _this.verpass(this);
//             });
//             this.captcha.on('blur', function() {
//                 _this.captcha(this);
//             });
//         };
//         mobil(gic) {
//             if (gic.val()!=''){
//                 const result=gic.val().replace(/^1[3578]\d{9}$/);
//                 if(result.length=11){

//                 }
//             }
//         }

//     };
//     new verify().inint();
// }();