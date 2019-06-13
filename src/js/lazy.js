! function() {
    $(function() { //和拼接的元素放在一起。
        $("img.lazy").lazyload({
            effect: "fadeIn" //图片显示方式
        });
    });
}();