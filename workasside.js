// var btn = document.getElementsByClassName('btn')[0]

// 第一种 通过点击事件
// 拓展区数据设置
$('.basic4').click(function () {
    if ($(".basiccontent6").height() !== 0) {

        $('.basiccontent6').animate({
            "height": 0,

        }, function () {
            $('.basiccontent6')[0].style.padding = 0 + "px";
        });
        // console.log($('.basicimg1')[0].transform())
        $(".basicimg4").css("transform","rotate(180deg)")
     
    } else {
        $(".basicimg4").css("transform","rotate(0deg)")
        $('.basiccontent6')[0].style.padding = 10 + "px";
        $('.basiccontent6').animate({
            "height": 280,

        }, function () {
        
        });

    }
})
// 数据项数据设置
$('.basic1').click(function () {
    if ($(".basiccontent1").height() !== 0) {

        $('.basiccontent1').animate({
            "height": 0,

        }, function () {
            $('.basiccontent1')[0].style.padding = 0 + "px";
        });
        // console.log($('.basicimg1')[0].transform())
        $(".basicimg1").css("transform","rotate(180deg)")
     
    } else {
        $(".basicimg1").css("transform","rotate(0deg)")
        $('.basiccontent1')[0].style.padding = 10 + "px";
        $('.basiccontent1').animate({
            "height": 198,

        }, function () {
        
        });

    }
})
// 拓展区基础设置
$('.basic2').click(function () {
    if ($(".basiccontent2").height() !== 0) {
        $(".basicimg2").css("transform","rotate(180deg)")
        $('.basiccontent2').animate({
            "height": 0,

        }, function () {
            $('.basiccontent2')[0].style.padding = 0 + "px";
        });
       

    } else {
        $(".basicimg2").css("transform","rotate(0deg)")
        $('.basiccontent2')[0].style.padding = 10 + "px";
        $('.basiccontent2').animate({
            "height": 261,

        }, function () {
         
        });

    }
})
// 数据项基础设置
$('.basic3').click(function () {
    if ($(".basiccontent3").height() !== 0) {
        $(".basicimg3").css("transform","rotate(180deg)")
        $('.basiccontent3').animate({
            "height": 0,

        }, function () {
            $('.basiccontent3')[0].style.padding = 0 + "px";
        });
       

    } else {
        $(".basicimg3").css("transform","rotate(0deg)")
        $('.basiccontent3')[0].style.padding = 10 + "px";
        $('.basiccontent3').animate({
            "height": 60,

        }, function () {
         
        });

    }
})
// 控件关联
$('.second').click(function () {
    $(".basic1").hide();
    $('.basic2').hide();
    $('.basic3').hide();
    $('.basic4').hide();
    $('.basiccontent1').hide();
    $('.basiccontent2').hide();
    $('.basiccontent3').hide();
    $('.basiccontent6').hide();
    $('.type').hide();
    $(this).addClass('Selection');
    $('.first').removeClass('Selection');
    $(".basictwo").removeClass('none');
    $(".basictree").removeClass('none');
    $(".basicfour").removeClass('none');
    $(".basicone").removeClass('none');
    $(".secondone").removeClass('none');
    $(".secondtwo").removeClass('none');
    $(".secondtree").removeClass('none');
    $(".secondfour").removeClass('none');
})
// 单元格属性
$('.first').click(function () {
    if($(".expand").hasClass('expand1')){
        $(".basic1").show();
        $('.basic2').show();
        $('.basiccontent1').show();
        $('.basiccontent2').show();
        $(".basic3").hide();
        $('.basic4').hide();
        $('.basiccontent3').hide();
        $('.basiccontent6').hide();
        $('.typeword1').show();
        $('.typeword2').hide();
    }else{
        $(".basic1").hide();
        $('.basic2').hide();
        $('.basiccontent1').hide();
        $('.basiccontent2').hide();
        $(".basic3").show();
        $('.basic4').show();
        $('.basiccontent3').show();
        $('.basiccontent6').show();
        $('.typeword2').show();
        $('.typeword1').hide();
    }
  
    $('.type').show();
    $(this).addClass('Selection');
    $('.second').removeClass('Selection');
    $(".basictwo").addClass('none');
    $(".basictree").addClass('none');
    $(".basicfour").addClass('none');
    $(".basicone").addClass('none');
    $(".secondone").addClass('none');
    $(".secondtwo").addClass('none');
    $(".secondtree").addClass('none');
    $(".secondfour").addClass('none');
})
$('.select').click(function(){
    $('.someselect').toggle();
})
$('.lc').click(function(){
    $('.nowselect').removeClass("left1").removeClass('top1').removeClass('right1').removeClass('bottom1').addClass('left1');
})
$('.tc').click(function(){
    $('.nowselect').removeClass("left1").removeClass('top1').removeClass('right1').removeClass('bottom1').addClass('top1');
})
$('.bc').click(function(){
    $('.nowselect').removeClass("left1").removeClass('top1').removeClass('right1').removeClass('bottom1').addClass('bottom1');
})
$('.rc').click(function(){
    $('.nowselect').removeClass("left1").removeClass('top1').removeClass('right1').removeClass('bottom1').addClass('right1');
})
$('.li1').click(function(){
    if($(this).hasClass('li')){
        $(this).removeClass('li')
    }else{
        $(this).addClass('li')
    }
})
$('.li2').click(function(){
    if($(this).hasClass('li')){
        $(this).removeClass('li')
    }else{
        $(this).addClass('li')
    }
})
$('.li3').click(function(){
    if($(this).hasClass('li')){
        $(this).removeClass('li')
    }else{
        $(this).addClass('li')
    }
})
$(".tab li").click(function() {
    $(".tab li").eq($(this).index()).addClass("li").siblings().removeClass('li');
    //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

});
// 拓展区按钮
$(".expand").click(function(){
    if( $(".first").hasClass('Selection')){
        $(".typeword2").addClass('none');
        $(".basic3").addClass('none');
        $(".basiccontent3").addClass('none');     
        $(".typeword2").hide();
        $(".basic3").hide();
        $(".basiccontent3").hide();     
        $(".typeword1").removeClass('none');
        $(".basic2").removeClass('none');
        $(".basiccontent2").removeClass('none');
        $(".typeword1").show();
        $(".basic2").show();
        $(".basiccontent2").show();
        $(".basic1").show();
        $(".basic4").hide();
        $(".basiccontent1").show();
        $(".basiccontent6").hide();
    }
    $(".expand").addClass('expand1');
    $(".expand2").removeClass('expand1');
 
})
// 数据项按钮
$(".expand2").click(function(){
    if( $(".first").hasClass('Selection')){
   

    $(".typeword1").addClass('none');
    $(".typeword1").hide();
    $(".typeword2").removeClass('none');
    $(".typeword2").show();
    $(".basic2").addClass('none');
    $(".basiccontent2").addClass('none');
    $(".basic2").hide();
    $(".basiccontent2").hide();
    $(".basic3").removeClass('none');
    $(".basic3").show();
    $(".basiccontent3").removeClass('none');
    $(".basiccontent3").show();
    $(".basic4").show();
    $(".basic1").hide();
    $(".basiccontent6").show();
    $(".basiccontent1").hide();
    }
    $(".expand2").addClass('expand1');
    $(".expand").removeClass('expand1');
})
// 控件关联触发控件配置
$('.basicone').click(function () {
    if ($(".secondone").height() !== 0) {

        $('.secondone').animate({
            "height": 0,

        }, function () {
            $('.secondone')[0].style.padding = 0 + "px";
        });
        // console.log($('.basicimg1')[0].transform())
        $(".basicimgone").css("transform","rotate(180deg)")
     
    } else {
        $(".basicimgone").css("transform","rotate(0deg)")
        $('.secondone')[0].style.padding = 10 + "px";
        $('.secondone').animate({
            "height": 60,

        }, function () {
        
        });

    }
})
// 控件时间选择控件配置
$('.basictwo').click(function () {
    if ($(".secondtwo").height() !== 0) {

        $('.secondtwo').animate({
            "height": 0,

        }, function () {
            $('.secondtwo')[0].style.padding = 0 + "px";
        });
        // console.log($('.basicimg1')[0].transform())
        $(".basicimgtwo").css("transform","rotate(180deg)")
     
    } else {
        $(".basicimgtwo").css("transform","rotate(0deg)")
        $('.secondtwo')[0].style.padding = 10 + "px";
        $('.secondtwo').animate({
            "height": 60,

        }, function () {
        
        });

    }
})
// 控件关联下拉框控件配置
$('.basictree').click(function () {
    if ($(".secondtree").height() !== 0) {

        $('.secondtree').animate({
            "height": 0,

        }, function () {
            $('.secondtree')[0].style.padding = 0 + "px";
        });
        // console.log($('.basicimg1')[0].transform())
        $(".basicimgtree").css("transform","rotate(180deg)")
     
    } else {
        $(".basicimgtree").css("transform","rotate(0deg)")
        $('.secondtree')[0].style.padding = 10 + "px";
        $('.secondtree').animate({
            "height": 30

        }, function () {
        
        });

    }
})
// 控件关联文本控件配置
$('.basicfour').click(function () {
    if ($(".secondfour").height() !== 0) {

        $('.secondfour').animate({
            "height": 0,

        }, function () {
            $('.secondfour')[0].style.padding = 0 + "px";
        });
        // console.log($('.basicimg1')[0].transform())
        $(".basicimgfour").css("transform","rotate(180deg)")
     
    } else {
        $(".basicimgfour").css("transform","rotate(0deg)")
        $('.secondfour')[0].style.padding = 10 + "px";
        $('.secondfour').animate({
            "height": 30

        }, function () {
        
        });

    }
})