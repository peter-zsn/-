var i = 0;
var timer;
$(function () {
    //
    // $(".igs").hover(function () {
    //     $(".btn").show();
    // }, function () {
    //     $(".btn").hide();
    // });
    $(".ig").eq(0).show().siblings().hide();
    ShowBanner();
    tab_hover();
    $(".btn1").click(function () {
        btn1();
    });
    $(".btn2").click(function () {
        btn2();
    });
});

// 显示指定下标的，其他的不显示
function Show() {
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

// 渐变显示图片
function ShowBanner() {
     timer = setInterval(function () {
        i++;
        if(i == 4){
            i = 0;
        }
        Show();
    }, 1000);
}

// tab鼠标响应事件
function tab_hover() {
    $(".tab").hover(function () {
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        ShowBanner();
    })
}

function btn1() {
    clearInterval(timer);
    if(i == 0){
        i = 3;
    }else{
        i--;
    }
    Show();
    ShowBanner();
}

function btn2() {
    clearInterval(timer);
    if(i == 3){
        i = 0;
    }else{
        i++;
    }
    Show();
    ShowBanner();
}