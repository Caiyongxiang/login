(function ($) {
    //rem: 相对于html元素的字体大小
    //767px: 手机端 100px = 1rem
    //>=768px: 100px = 1rem;

    var id = null;
    function setRem() {
        id = new Date().getTime();
         if(innerWidth<=320){
             var fontSize = 50 + 'px';
         }else if(innerWidth<=360){
            var fontSize = 56.26  + 'px';
         }else if(innerWidth<=375){
            var fontSize = 58.29375  + 'px';
         }else if(innerWidth<=400){
            var fontSize =  62.5 + 'px';
         }else if(innerWidth<=414){
            var fontSize = 64.6875  + 'px';
         }else if(innerWidth<=440){
            var fontSize = 68.75  + 'px';
         }else if(innerWidth<=480){
            var fontSize = 75  + 'px';
         }else if(innerWidth<=520){
            var fontSize = 81.75  + 'px';
         }else if(innerWidth<=560){
            var fontSize =   87.5+ 'px';
         }else if(innerWidth<=600){
            var fontSize =   93.75+ 'px';
         }else if(innerWidth<=640){
            var fontSize =  100+ 'px';
         }else if(innerWidth<=680){
            var fontSize =   106.25+ 'px';
         }else if(innerWidth<=720){
            var fontSize =   112.5+ 'px';
         }else if(innerWidth<=760){
            var fontSize =   118.75+ 'px';
         }else if(innerWidth<=800){
            var fontSize =  125+ 'px';
         }else if(innerWidth<=960){
            var fontSize =  150+ 'px';
         }
        // var fontSize = innerWidth >= 768 ? '100px' : innerWidth / 767 * 100 + 'px';

        var style = $('<style>html{font-size: ' + fontSize + ';}</style>');
        style.attr('id', id);

        $('head').append(style);
    }

    setRem();
    

    //保存所有定时器序号
    var timers = [];

    $(window).on('resize', function () {
       //函数节流，函数防抖
        var timer = setTimeout(function () {
            //清除后续定时器，只保留第一个定时器，减少setRem()函数执行次数
            for (var i = 1; i < timers.length; i++) {
                clearTimeout(timers[i]);
            }

            //移除原本创建的style与元素
            $('#' + id).remove();

            //重设rem
            setRem();

        }, 500)


        timers.push(timer);
    })

})(jQuery);