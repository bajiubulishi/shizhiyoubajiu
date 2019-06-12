// 头部滑过效果
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

// 右边广告滑动效果
(function() {
    const $oa = $('#show');
    const $pic = $('.ewm_tc_bg .pic1');
    $oa.hover(function() {
        $pic.show();
        $oa.css({ "background": "#F11323" })
    }, function() {
        $pic.hide();
        $oa.css({ "background": "#262626" })
    })
})();
// 底部关闭
(function() {
    const $adver = $('.bottom_tc');
    const $close = $('.bottom_tc .bottom_close');
    $close.on('click', function() {
        $adver.hide();
    })
})();
// 搜索框滚轮出现
(function() {
    const $search = $('.search_fixed');
    $(window).scroll(function() {
        const $top = $(window).scrollTop();
        if ($top > 1200) {
            $search.show();
        } else {
            $search.hide();
        }
    });
})();
// 左侧导航 

// 导航菜单
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
// 侧边栏滑出
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
//幻灯片
(function() {
    class kuialego {
        constructor() {
            this.big = $('.full_big_eye');
            this.banner = $('.indexBanner');
            this.pic = $('.big_eye_pic');
            this.picli = $('.big_eye_pic li');
            this.btns = $('.btn .btn_all li');
            this.num = 0;
            this.set = null;
        }
        init() {
            let _this = this;
            // 1.改变布局
            const $first = this.picli.first().clone(true, true);
            const $last = this.picli.last().clone(true, true);
            this.pic.append($first);
            this.pic.prepend($last);
            // 2.给ul赋值宽度
            // 3.给所有的btn添加点击事件。
            this.btns.on('click', function() {
                _this.num = $(this).index(); //当前索引

                _this.tabswidth();
                _this.btns.eq(_this.num).addClass('active').siblings().removeClass('active');

            });

            this.set = setInterval(function() {
                _this.num++;
                if (_this.num > _this.btns.length - 1) {
                    _this.num = 0
                }
                _this.tabswidth();
            }, 2000)
            this.big.hover(function() {
                clearInterval(_this.set);
            }, function() {
                _this.set = setInterval(function() {
                    _this.num++;
                    if (_this.num > _this.btns.length - 1) {
                        _this.num = 0
                    }
                    _this.tabswidth();
                }, 2000)
            })
        }
        tabswidth() {
            let _this = this;
            this.picli.eq(this.num).animate({ opacity: 1 }).siblings().animate({ opacity: 0 });
            this.btns.eq(this.num).addClass('active').siblings().removeClass('active');
        }
    }
    new kuialego().init();
})();
// 数据渲染
! function() {
    const $php = "http://10.31.164.18/lianxi/happygo/php/select.php";
    const $title = $('.g_other_info');
    const $explain = $('.p_title');
    const $pice = $('.price1 span');
    const $pics = $('.p_p .price2 del');
    const $url = $('.p_img img');

    $.ajax({
        url: $php
    }).done(function(d) {
        let arr = JSON.parse(d);
        for (var i = 0; i < arr.length; i++) {
            $title.eq(i).html(arr[i].title);
            $explain.eq(i).html(arr[i].explain);
            $pice.eq(i).html(arr[i].pice);
            $pics.eq(i).html(arr[i].oldpice);
            $url.eq(i).attr({ src: arr[i].url });
            $('.div_a').eq(i).attr({ href: "http://10.31.164.18/lianxi/happygo/src/html/show.html?sid=" + arr[i].id })
        }
    })
}();
// 楼梯
;
(function($) {
    class dage {
        constructor() {
            this.louti = $('#loutinav');
            this.loutinav = $('#loutinav li');
            this.louceng = $('.h2_top');
        };

        init() {
            const _this = this;
            $(window).on('scroll', function() {
                _this.gunlun();
            });
            this.loutinav.on('click', function() {
                _this.nav(this);
            });
        };
        gunlun() {
            var _this = this;
            let $top = $(window).scrollTop();
            if ($top > 630) {
                _this.louti.show();
            } else {
                _this.louti.hide();
            }
            this.louceng.each(function(index, element) {
                let loucengtop = $(element).offset().top + $(element).outerHeight() / 2;
                if (loucengtop > $top) {
                    _this.loutinav.removeClass('active');
                    _this.loutinav.eq(index).addClass('active');
                    return false;
                }
            })
        }
        nav(tab) {
            $(tab).addClass('active').siblings('li').removeClass('active');
            var $ttop = this.louceng.eq($(tab).index()).offset().top;

            $('html,body').animate({
                scrollTop: $ttop
            });
        }
    }
    new dage().init();
})(jQuery);