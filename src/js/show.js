(function() {
    const $lianxi = $('#lianxi')
    const $wf = $('#wf')
    $lianxi.hover(function() {
        $wf.show();
    }, function() {
        $wf.hide()
    })
    $wf.hover(function() {
        $wf.show();
    }, function() {
        $wf.hide();
    })
})();
(function() {
    const $li = $('.li_all_type');
    const $type = $('.index_type');
    const $ul = $('.nav_type_list')
    $li.hover(function() {
        $type.show();
    }, function() {
        $type.hide();
        $ul.hide();
    })
    $type.hover(function() {
        $type.show();
        $ul.show();
    }, function() {
        $type.hide();
        $ul.hide();
    })
})();
(function() {
    const $oa = $('#show ');
    const $pic = $('.ewm_tc_bg .pic1');

    $oa.hover(function() {
        $pic.show();
        $oa.css({ "background": "#F11323" })
    }, function() {
        $pic.hide();
        $oa.css({ "background": "#262626" })
    })
})();
! function() {
    const $down = $('#a_down');
    const $center = $('.cus_center');
    const $line = $('.oline');
    const $img = $('.down_load_hpg');
    $down.hover(function() {
        $center.show();
        $down.css({ "backgroudn": "#fff" })
    }, function() {
        $center.hide();
    })
    $center.hover(function() {
        $center.show();
    }, function() {
        $center.hide();
    })
    $line.hover(function() {
        $img.show();
    }, function() {
        $img.hide();
    })
}();

! function($) {
    const $tit = $('head title');
    const $tit1 = $('.location .tit');
    const $title2 = $('.detail_top .detail_tit ');
    const $explain = $('.detail_top .detail_tit_md');
    const $price = $('.price_box .price_now');
    const $priceold = $('.detail_price del');
    const $big = $('.jqzoom img');
    const $thumblist = $('#thumblist');
    let sid = window.location.search;
    const $bf = $('.zoomWrapperImage');
    const $reduce = $('.btn-reduce');
    const $buy_num = $('#buy_num');
    const $add = $('.btn-add');
    let $num = $buy_num.val();
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
//购物车的飞翔
! function() {
    class cart {
        constructor() {
            this.addcar = $('.a_add_car');
            this.car = $('.a_car');
            this.num = $('.car_num');
            this.foc = $('.fly_item');
            this.number = 0;
        };
        init() {
            const _this = this;
            this.addcar.on('click', function() {
                _this.fly(this);
            });
        };
        fly(obj) {
            //存储当前盒子运动的值
            this.foc.css({ "visibility": "visible" });
            this.foc.css({ "left": (this.addcar.offset().left) });
            this.foc.css({ "top": (this.addcar.offset().top) });
            const $sposition = {
                x: this.foc.offset().left,
                y: this.foc.offset().top,
            };
            //运动距离
            const $distance = {
                x: this.car.offset().left - $sposition.x,
                y: this.car.offset().top - $sposition.y
            };

            //抛物线运动
            const a = 0.001;
            const b = ($distance.y - a * $distance.x * $distance.x) / $distance.x;
            var vx = 5;
            let _this = this;
            const $timer = setInterval(function() {
                vx += 5;
                if (_this.foc.offset().left >= _this.car.offset().left) {
                    clearInterval($timer);
                    _this.foc.css({ "visibility": "hide" })
                    _this.num.html(++_this.number);
                } else {
                    _this.foc.css('left', $sposition.x + vx + 'px');
                    _this.foc.css('top', $sposition.y + a * vx * vx + b * vx + 'px');
                }
            }, 5)
        };

    }
    new cart().init();
}();