



        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'vertical', // 垂直切换选项
          
          mousewheel: true,
          mousewheelControl: true,
          autoplay: {
           delay: 2000,//时间 毫秒
           disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 
       },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })        

    new WOW().init();
    $(".title1,.title2,.title3,.title4,.title5,.title6,.title7,.title8,.pic2,.pic3-1,.pic5-1,.audio1,.audio2,.audio4,.audio5,.audio6,.audio7,.audio8").addClass("wow fadeIn");
    $(".brief,.story,.way,.brief3,.way2,.story4,.brief5,.story5,.way6,.pic6-4,.brief7,.story7,.story8,.pic8-4").addClass("wow fadeInUp");
    $(".pic2-1,.brief2_title,.brief2_main,.pic2-3,.story2,.brief4,.pic6-1,.brief6,.pic6-3,.story6,.pic8-1,.brief8,.way8").addClass("wow fadeInLeft");
    $(".pic2-2,.brief_part2,.pic6-2,.brief6_part2,.brief8_part2,.pic8-2").addClass("wow fadeInRight");
    $(".pic2-4").addClass("wow flipInX");
    $(".pic4-1,.pic7-1").addClass("wow flipInY");
    $(".pic4-2,.pic8-3").addClass("wow rotateIn");
    $(window).scroll(function(){
        var dist=$(window).scrollTop();
        // console.log("dist:"+dist);
        if(dist>400){
            $(".pic1").css({"right":"8%"});     
        }
        if(dist>0&&dist<2300){
            $(".blank").css("position","absolute");
        }
        if(dist>2300&&dist<3400){
            $(".blank").css("position","fixed");
        }
        if(dist>3400){
            $(".blank").css("position","absolute");
        }
        if(dist>0&&dist<4700){
            $(".blank2").css("position","absolute");
        }
        if(dist>4700&&dist<6000){
            $(".blank2").css("position","fixed");
        }
        if(dist>6000){
            $(".blank2").css("position","absolute");
        }
    })


    var num1=0,num2=0,num4=0,num5=0,num6=0,num7=0,num8=0;
    var audio1=document.getElementById("bgMusic");
    var audio2=document.getElementById("bgMusic2");
    var audio4=document.getElementById("bgMusic4");
    var audio5=document.getElementById("bgMusic5");
    var audio6=document.getElementById("bgMusic6");
    var audio7=document.getElementById("bgMusic7");
    var audio8=document.getElementById("bgMusic8");
    
    var i;var yxx=false;
    $(".audio1").click(function () {
        if (num1 % 2 == 0) {
            audio1.play();
            audio2.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            num2 = 0, num4 = 0, num5 = 0, num6 = 0, num7 = 0, num8 = 0;
            $(".audio2,.audio4,.audio5,.audio6,.audio7,.audio8").attr("src", "./images/tea_township/play.png");
            $(".audio1").attr("src", "./images/tea_township/stop.png");
        }
        if (num1 % 2 == 1) {
            audio1.pause();       
            $(".audio1").attr("src", "./images/tea_township/play.png");
        }
        num1++;
    })
    $(audio1).on("timeupdate", function () {
        var currentTime = $(audio1)[0].currentTime;
        var duration = $(audio1)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 421;
        $('.story_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio1").attr("src", "./images/tea_township/play.png");
            $('.story_main').scrollTop(0);
            num1++;
        }
    });
    
    $(".audio2").click(function () {
    
        if (num2 % 2 == 0) {
            audio2.play();
            audio1.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            num1 = 0, num4 = 0, num5 = 0, num6 = 0, num7 = 0, num8 = 0;
            $(".audio1,.audio4,.audio5,.audio6,.audio7,.audio8").attr("src", "./images/tea_township/play.png");
            $(".audio2").attr("src", "./images/tea_township/stop.png");
        }
        if (num2 % 2 == 1) {
            audio2.pause();
            $(".audio2").attr("src", "./images/tea_township/play.png");
        }
        num2++;
    })
    $(audio2).on("timeupdate", function () {
        var currentTime = $(audio2)[0].currentTime;
        var duration = $(audio2)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 672;
        $('.story2_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio2").attr("src", "./images/tea_township/play.png");
            $('.story2_main').scrollTop(0);
            num2++;
        }
    });
    
    $(".audio4").click(function () {
    
        if (num4 % 2 == 0) {
            audio4.play();
            audio1.pause();
            audio2.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            num1 = 0, num2 = 0, num5 = 0, num6 = 0, num7 = 0, num8 = 0;
            $(".audio1,.audio2,.audio5,.audio6,.audio7,.audio8").attr("src", "./images/tea_township/play.png");
            $(".audio4").attr("src", "./images/tea_township/stop.png");
        }
        if (num4 % 2 == 1) {
            audio4.pause();
            $(".audio4").attr("src", "./images/tea_township/play.png");
        }
        num4++;
    })
    
    $(audio4).on("timeupdate", function () {
        var currentTime = $(audio4)[0].currentTime;
        var duration = $(audio4)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 325;
        $('.story4_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio4").attr("src", "./images/tea_township/play.png");
            $('.story4_main').scrollTop(0);
            num4++;
        }
    });
    $(".audio5").click(function () {
    
        if (num5 % 2 == 0) {
            audio5.play();
            audio1.pause();
            audio2.pause();
            audio4.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            num1 = 0, num2 = 0, num4 = 0, num6 = 0, num7 = 0, num8 = 0;
            $(".audio1,.audio4,.audio2,.audio6,.audio7,.audio8").attr("src", "./images/tea_township/play.png");
            $(".audio5").attr("src", "./images/tea_township/stop.png");
        }
        if (num5 % 2 == 1) {
            audio5.pause();
            $(".audio5").attr("src", "./images/tea_township/play.png");
        }
        num5++;
    })
    
    $(audio5).on("timeupdate", function () {
        var currentTime = $(audio5)[0].currentTime;
        var duration = $(audio5)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 584;
        $('.story5_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio5").attr("src", "./images/tea_township/play.png");
            $('.story5_main').scrollTop(0);
            num5++;
        }
    });
    

    $(".audio6").click(function () {
        if (num6 % 2 == 0) {
            audio6.play();
            audio1.pause();
            audio2.pause();
            audio4.pause();
            audio5.pause();
            audio7.pause();
            audio8.pause();
            num1 = 0, num2 = 0, num4 = 0, num5 = 0, num7 = 0, num8 = 0;
            $(".audio1,.audio4,.audio5,.audio2,.audio7,.audio8").attr("src", "./images/tea_township/play.png");
            $(".audio6").attr("src", "./images/tea_township/stop.png");
        }
        if (num6 % 2 == 1) {
            audio6.pause();
            $(".audio6").attr("src", "./images/tea_township/play.png");
        }
        num6++;
    })
    
    $(audio6).on("timeupdate", function () {
        var currentTime = $(audio6)[0].currentTime;
        var duration = $(audio6)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 441;
        $('.story6_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio6").attr("src", "./images/tea_township/play.png");
            $('.story6_main').scrollTop(0);
            num6++;
        }
    });
    $(".audio7").click(function () {
        if (num7 % 2 == 0) {
            audio7.play();
            audio1.pause();
            audio2.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio8.pause();
            num1 = 0, num2 = 0, num4 = 0, num5 = 0, num6 = 0, num8 = 0;
            $(".audio1,.audio4,.audio5,.audio6,.audio2,.audio8").attr("src", "./images/tea_township/play.png");
            $(".audio7").attr("src", "./images/tea_township/stop.png");
        }
        if (num7 % 2 == 1) {
            audio7.pause();
            $(".audio7").attr("src", "./images/tea_township/play.png");
        }
        num7++;
    })
    
    $(audio7).on("timeupdate", function () {
        var currentTime = $(audio7)[0].currentTime;
        var duration = $(audio7)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 1260;
        $('.story7_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio7").attr("src", "./images/tea_township/play.png");
            $('.story7_main').scrollTop(0);
            num7++;
        }
    });
    $(".audio8").click(function () {
        if (num8 % 2 == 0) {
            audio8.play();
            audio1.pause();
            audio2.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            num1 = 0, num2 = 0, num4 = 0, num5 = 0, num6 = 0, num7 = 0;
            $(".audio1,.audio4,.audio5,.audio6,.audio7,.audio2").attr("src", "./images/tea_township/play.png");
            $(".audio8").attr("src", "./images/tea_township/stop.png");
        }
        if (num8 % 2 == 1) {
            audio8.pause();
            $(".audio8").attr("src", "./images/tea_township/play.png");
        }
        num8++;
    })
    
    $(audio8).on("timeupdate", function () {
        var currentTime = $(audio8)[0].currentTime;
        var duration = $(audio8)[0].duration;
        var a = currentTime / duration - 0.04;
        var b = a * 333;
        $('.story8_main').scrollTop(b);
        if (currentTime == duration) {
            $(".audio8").attr("src", "./images/tea_township/play.png");
            $('.story8_main').scrollTop(0);
            num8++;
        }
    });
    

jQuery(function(){
$(".town_menu").Tdrag({
    scope:".menu_line",
    axis:"y"
});
})

$(".movemenu").hover(function(){
    $(".movemenu").css({"transform":"scale(1.1)"});
},function(){
    $(".movemenu").css({"transform":"scale(1)"});
})
var number=0;var panduan=true;var flag=false;
$(".movemenu").click(function(){
    if(panduan){/*导航弹出动画执行完成后(0.8s)才可收缩*/
        if(number%2==0){
            flag=true;/*点击后启用下面滚轮方法*/
            $(".menu_box").eq(0).animate({"right":"80px","opacity":"1"},100);
            $(".menu_box").eq(1).animate({"right":"150px","opacity":"1"},200);
            $(".menu_box").eq(2).animate({"right":"220px","opacity":"1"},300);
            $(".menu_box").eq(3).animate({"right":"290px","opacity":"1"},400);
            $(".menu_box").eq(4).animate({"right":"360px","opacity":"1"},500);
            $(".menu_box").eq(5).animate({"right":"430px","opacity":"1"},600);
            $(".menu_box").eq(6).animate({"right":"500px","opacity":"1"},700);
            $(".menu_box").eq(7).animate({"right":"570px","opacity":"1"},800);
            panduan=false;
            setTimeout(function(){
                panduan=true;
            },800);
            
                $(window).scroll(function(){/*屏幕滚动让八大茶乡导航收缩*/
                    if(panduan){/*导航弹出动画执行完成后(0.8s)才可收缩*/
                        if(flag){/*滚动一下立马禁用滚轮方法，只让滚轮方法执行一次就够*/
                            $(".menu_box").animate({"right":"0px","opacity":"0"},300);
                            flag=false;
                            number++;
                        }
                    }
                    console.log("flag:"+flag);
                    console.log("number:"+number);
                })
            
           
            
        }
        else{
            $(".menu_box").animate({"right":"0px","opacity":"0"},300);
            flag=false;/*再次点击导航，禁用滚轮方法*/
        }
        number++;
    }
    
})

$(".menu_box").hover(function(){
    var index=$(this).index();
    $(".menu_box").eq(index-1).find(".menu_tinybox").css({"width":"65px","height":"65px","top":"0","right":"0"});
},function(){
    $(".menu_box").find(".menu_tinybox").css({"width":"55px","height":"55px","top":"5px","right":"5px"});
})

$(".menu_box").click(function(){
    flag=false;/*点击八大茶乡按钮禁用滚轮方法*/
    var index=$(this).index();
    // console.log(index);
    $(".menu_box").animate({"right":"0px","opacity":"0"},300);
    number++;
    if(index==1){
        $("html,body").animate({scrollTop:780},1000);
    }
    if(index==2){
        $("html,body").animate({scrollTop:1453},1000);
    }
    if(index==3){
        $("html,body").animate({scrollTop:2427},1000);
    }
    if(index==4){
        $("html,body").animate({scrollTop:3400},1000);
    }
    if(index==5){
        $("html,body").animate({scrollTop:4089},1000);
    }
    if(index==6){
        $("html,body").animate({scrollTop:4564},1000);
    }
    if(index==7){
        $("html,body").animate({scrollTop:5992},1000);
    }
    if(index==8){
        $("html,body").animate({scrollTop:6590},1000);
    }
})

$(window).scroll(function(){
    var dist=$(window).scrollTop();
    // console.log(dist);
    if(dist<=610){
        $(".pot").css("opacity","1");
        $(".menu_title").css("opacity","0");
    }
    if(dist>610 && dist<=1350){
        $(".menu_title").eq(0).css("opacity","1");
        $(".menu_title").eq(0).siblings().css("opacity","0");
    }
    if(dist>1350 && dist<=2330){   
        $(".menu_title").eq(1).css("opacity","1");
        $(".menu_title").eq(1).siblings().css("opacity","0");
    }
    if(dist>2330 && dist<=3100){   
        $(".menu_title").eq(2).css("opacity","1");
        $(".menu_title").eq(2).siblings().css("opacity","0");
    }
    if(dist>3100 && dist<=4040){   
        $(".menu_title").eq(3).css("opacity","1");
        $(".menu_title").eq(3).siblings().css("opacity","0");
    }
    if(dist>4040 && dist<=4500){   
        $(".menu_title").eq(4).css("opacity","1");
        $(".menu_title").eq(4).siblings().css("opacity","0");
    }
    if(dist>4500 && dist<=5560){   
        $(".menu_title").eq(5).css("opacity","1");
        $(".menu_title").eq(5).siblings().css("opacity","0");
    }
    if(dist>5560 && dist<=6490){   
        $(".menu_title").eq(6).css("opacity","1");
        $(".menu_title").eq(6).siblings().css("opacity","0");
    }
    if(dist>6490){   
        $(".menu_title").eq(7).css("opacity","1");
        $(".menu_title").eq(7).siblings().css("opacity","0");
    }

    
})

$(".title1").hover(function(){
    $(".rectangle1").css("height","200px");
},function(){
    $(".rectangle1").css("height","150px");
})
$(".title2").hover(function(){
    $(".rectangle2").css("height","200px");
},function(){
    $(".rectangle2").css("height","150px");
})
$(".title3").hover(function(){
    $(".rectangle3").css("height","200px");
},function(){
    $(".rectangle3").css("height","150px");
})
$(".title4").hover(function(){
    $(".rectangle4").css("height","200px");
},function(){
    $(".rectangle4").css("height","150px");
})
$(".title5").hover(function(){
    $(".rectangle5").css("height","200px");
},function(){
    $(".rectangle5").css("height","150px");
})
$(".title6").hover(function(){
    $(".rectangle6").css("height","250px");
},function(){
    $(".rectangle6").css("height","190px");
})
$(".title7").hover(function(){
    $(".rectangle7").css("height","200px");
},function(){
    $(".rectangle7").css("height","150px");
})
$(".title8").hover(function(){
    $(".rectangle8").css("height","250px");
},function(){
    $(".rectangle8").css("height","190px");
})

$(document).ready(function(){
    $(".top_logo").css("opacity","1");
    
})
/*导航栏*/
$(document).ready(function(){
    var count=0;
        var a;
        var b,c,d,e,f,g,h;
        $(".toggle input + div").click(function(){
            
            if(count%2==0){
                $(".nav_top").css("cursor","none");
                $(".toggle input + div div span, .toggle input + div div span").removeClass("change");
                $(".toggle input + div svg").css("stroke","#fff");
               
              console.log(count);
                clearTimeout(a);
                $(".menu").css("display","flex");
                setTimeout(function(){
                $(".menu").css("opacity","1");
                $(".menu").css("background","rgba(0,0,0,0.85)");
                $(".menu").css("height","100vh");
                $(".menu_circle").css("opacity","1");
                $(".logo img").attr("src","./images/white logo.png");
                },10)
                $("body").css("overflow","hidden");
                b=setTimeout(function(){
                $(".nav li:nth-child(1)").addClass("animated fadeInUp");
                },10)
                c=setTimeout(function(){
                $(".nav li:nth-child(2)").addClass("animated fadeInUp");
                },200)
                d=setTimeout(function(){
                $(".nav li:nth-child(3)").addClass("animated fadeInUp");
                },400)
                e=setTimeout(function(){
                $(".nav li:nth-child(4)").addClass("animated fadeInUp");
                },600)
                f=setTimeout(function(){
                $(".nav li:nth-child(5)").addClass("animated fadeInUp");
                },800)
                g=setTimeout(function(){
                $(".nav li:nth-child(6)").addClass("animated fadeInUp");
                },1000)
                h=setTimeout(function(){
                $(".nav li:nth-child(7)").addClass("animated fadeInUp");
                },1200)
                $(".nav_top").addClass("backadd");
            }
            if(count%2==1){
                $(".nav_top").css("cursor","url(./images/mouse.png),default");
                clearTimeout(b);
                clearTimeout(c);
                clearTimeout(d);
                clearTimeout(e);
                clearTimeout(f);
                clearTimeout(g);
                clearTimeout(h);
                a=setTimeout(function(){
                $(".menu").css("display","none");
                },500)
                $(".toggle input + div svg").css("stroke","#000");
                $(".logo img").attr("src","./images/logo.png");
                $(".menu_circle").css("opacity","0");
                $(".menu").css("height","0vh");
                $(".menu").css("opacity","0");
                $(".menu").css("background","rgba(0,0,0,0)");  
                $("body").css("overflow-y","auto");
                $(".nav li").removeClass("animated fadeInUp");
                $(".nav_top").removeClass("backadd");
            }
            count++;      
            })
        $(window).scroll(function(){/*顶部导航栏滚动变色*/
    
            var dist=$(window).scrollTop();
            console.log("dist:"+dist);
            if(dist>0){
                $(".nav_top").css({"background":"#fff","box-shadow": "0 0 0.9375rem 0 rgba(34, 35, 36, 0.25)"});
                $(".toggle input + div div span, .toggle input + div div span").addClass("change");
                $(".toggle input + div svg").css("stroke","#000");
                $(".logo img").attr("src","./images/logo.png");
            var count2=0;
            $(".toggle input + div").click(function(){
            if(count2%2==0){
                $(".logo img").attr("src","./images/white logo.png");
            }
            if(count2%2==1){
                $(".logo img").attr("src","./images/logo.png");
                $(".toggle input + div div span, .toggle input + div div span").addClass("change");
                $(".toggle input + div svg").css("stroke","#000");
    
            }
            count2++;      
            })
            }
            else{
                $(".nav_top").css({"background":"none","box-shadow": "none"});
                $(".toggle input + div div span, .toggle input + div div span").removeClass("change");
                $(".toggle input + div svg").css("stroke","#000");
                $(".logo img").attr("src","./images/logo.png");
            
                var count2=0;
                $(".toggle input + div").click(function(){
                if(count2%2==0){
                $(".logo img").attr("src","./images/white logo.png");
                }
                if(count2%2==1){
                $(".logo img").attr("src","./images/logo.png");
                $(".toggle input + div div span, .toggle input + div div span").removeClass("change");
                $(".toggle input + div svg").css("stroke","#000");
                }
                count2++;      
                })
            }     
         })
    // Yep, that's it!
    $('#scene').parallax();
    $(".menu_circle").hover(function(){
            $("#box1,#box2").css("opacity","0");
            $(".small_circle").css({"width":"220px","height":"220px"});
            $(".circle_word").css({"color":"#000","font-size":"23px","letter-spacing":"2px"});
        },function(){
            $("#box1,#box2").css("opacity","1");
            $(".small_circle").css({"width":"0px","height":"0px"});
            $(".circle_word").css({"color":"#fff","font-size":"26px","letter-spacing":"8px"});
    })
    $(".link").hover(function(){
        $("#box1").css({"opacity":"0"});
        $("#box2").css({"background":"#000","width":"8px","height":"8px"});
    },function(){
        $("#box1").css({"opacity":"1"});
        $("#box2").css({"background":"#fff","width":"10px","height":"10px"});
    })
    })