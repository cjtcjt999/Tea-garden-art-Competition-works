$(document).ready(function(){
var count=0;
    var a;
    var b,c,d,e,f,g,h;
    $(".toggle input + div").click(function(){
        
        if(count%2==0){
            $(".nav_top").css("cursor","none");
            $(".toggle input + div div span, .toggle input + div div span").removeClass("change");
            $(".toggle input + div svg").css("stroke","#fff");
           
        //   console.log(count);
            clearTimeout(a);
            $(".menu").css("display","flex");
            setTimeout(function(){
            $(".menu").css("opacity","1");
            $(".menu").css("background","rgba(0,0,0,0.85)");
            $(".menu").css("height","100vh");
            $(".menu_circle").css("opacity","1");
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
        // console.log("dist:"+dist);
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
            $(".toggle input + div svg").css("stroke","#fff");
            $(".logo img").attr("src","./images/white logo.png");
        
            var count2=0;
            $(".toggle input + div").click(function(){
            if(count2%2==0){
            $(".logo img").attr("src","./images/white logo.png");
            }
            if(count2%2==1){
            $(".logo img").attr("src","./images/white logo.png");
            $(".toggle input + div div span, .toggle input + div div span").removeClass("change");
            $(".toggle input + div svg").css("stroke","#fff");
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
