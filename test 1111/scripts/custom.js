// nav
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});

$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});

// slide
var slideCount = $(".slideImg").length;
var currentIndex = 0;

setInterval(function(){
    if(currentIndex < slideCount - 1){
        currentIndex++;
    } else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-378) + "px";
    $(".slideList").animate({top:slidePosition},400);
},3000)