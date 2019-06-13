! function($) {
    const $tit = $('head title');
    const $tit1 = $('.location .tit');
    const $title2 = $('.detail_top .detail_tit ');
    const $explain = $('.detail_top .detail_tit_md');
    const $price = $('.price_box .price_now');
    const $priceold = $('.detail_price del');
    const $big = $('.jqzoom img');
    const $thumblist = $('#thumblist');
    const $pup = $('.zoomPup');
    let sid = window.location.search;
    const $bf = $('.zoomWrapperImage');
    const $fang = $('.zoomWindow');
    sid = sid.substring(sid.indexOf("="), sid.length).substring(1);
    $.ajax({
        url: "http://10.31.164.18/lianxi/happygo/php/show.php",
        data: {
            id: sid,
        },
        dataType: 'json'
    }).done(function(d) {
        let arr = d.urls.split(',');
        $tit.html(d.title);
        $tit1.html(d.title);
        $title2.html(d.title);
        $explain.html(d.explain);
        $price.html('￥' + d.pice);
        $priceold.html('￥' + d.oldpice);
        $big.attr({ src: d.url });
        $('.zoomWrapperImage img').attr({ src: d.url });
        $.each(arr, function(indenx, value) {
            $thumblist.append(`<li class="als-item"><a class="zoomThumbActive"><img  src="${value}"></a></li>`);
        })

    });
    $thumblist.on('mouseover', 'li', function() {
        var $result_pic = $(this).find('a').find('img').attr('src');

        $big.attr({ 'src': $result_pic });

        $bf.show().find('img').attr({ 'src': $result_pic });
    });
}(jQuery);
//放大镜
! function() {
    class dage {
        constructor() {
            this.warp = $('#warp');
            this.spic = $('.jqzoom');
            this.xf = $('.zoomPup');
            this.df = $('.zoomWindow');
            this.dpic = $('.zoomWrapperImage img');
        }
        init() {
            let _this = this;
            this.spic.hover(function() {
                _this.showscale();
                $(this).on('mousemove', function(e) {
                    _this.spicmove(e);
                });
                _this.xfsize();
            }, function() {
                _this.hidescale();
            })

        };
        showscale() {
            this.xf.show();
            this.df.show();
        }
        hidescale() {
            this.xf.hide();
            this.df.hide();
        }

        xfsize() {
            this.bili = this.dpic.outerWidth() / this.spic.outerWidth();
        }
        spicmove(e) {
            let l = e.pageX - this.warp.offset().left - this.xf.width() / 2;
            let t = e.pageY - this.warp.offset().top - this.xf.height() / 2;
            if (l <= 0) {
                l = 0;
            } else if (l >= this.spic.outerWidth() - this.xf.outerWidth() - 2) {
                l = this.spic.outerWidth() - this.xf.outerWidth() - 2;
            }

            if (t <= 0) {
                t = 0;
            } else if (t >= this.spic.outerHeight() - this.xf.outerHeight() - 2) {
                t = this.spic.outerHeight() - this.xf.outerHeight() - 2;
            }

            this.xf.css({
                left: l,
                top: t,
            });

            //给大图赋值位置
            this.dpic.css({
                left: -l * this.bili,
                top: -t * this.bili
            })
        }
    }
    new dage().init();
}();
//产品增加以及相减
! function() {
    const $reduce = $('.btn-reduce');
    const $buy_num = $('#buy_num');
    const $add = $('.btn-add');
    let $num = $buy_num.val();
    $add.on('click', function() {
        $num++;
        $buy_num.val($num);
    });
    $reduce.on('click', function() {
        $num--;
        if ($num < 1) {
            $num = 1;

        }
        $buy_num.val($num);
    })
}();