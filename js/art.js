var a,b,c,d,e,f;
$(".close").click(function(){
    $(".poel_contain").removeClass("displayblock");
    $(".poel_con").removeClass("opacity1");
    $("body").removeClass("overhidden");
    $(".arrow_left,.arrow_right").css("opacity","0");
    $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("opacity1");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    clearTimeout(d);
    clearTimeout(e);
    clearTimeout(f);
})
var number=0;
$(".arrow_right").click(function(){
    $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("opacity1");
    $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").addClass("transitionunset");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    clearTimeout(d);
    clearTimeout(e);
    clearTimeout(f);
    number++;
})
$(".arrow_left").click(function(){
    $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("opacity1");
    $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").addClass("transitionunset");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    clearTimeout(d);
    clearTimeout(e);
    clearTimeout(f);
    number--;
})
$(".arrow_right").click(function(){
            if(number>6){number=0}
            if(number==0){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("︽<br>莫分茶<br>︾");
            $(".poel_word2").html("病起萧萧两鬓华<br>，卧看残月上窗纱<br>。");
            $(".poel_word3").html("豆蔻连梢煎熟水<br>，莫分茶<br>。");
            $(".poel_word4").html("枕上诗书闲处好<br>，门前风景雨来佳<br>，");
            $(".poel_word5").html("终日向人多酝藉<br>，木犀花<br>。");
            $(".poel_word6").html("[宋] · 李清照");
            a=setTimeout(function(){     
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
            f=setTimeout(function(){
                $(".poel_word6").addClass("opacity1");
            },5100)
              
                $(".poel_show").css("background-image","url(./images/tea_poel/poel-3.jpg)");
        }
            if(number==1){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("杯子无用<br>，当只剩下北风<br>。");
            $(".poel_word2").html("黄沙匆匆<br>，绿洲早已无踪<br>。");
            $(".poel_word3").html("生命之源<br>，只存在于我们的想念<br>。");
            $(".poel_word4").html("那最后一杯<br>，是水<br>，还是泪<br>。");
            a=setTimeout(function(){     
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            
            $(".poel_show").css("background-image","url(./images/tea_poel/poel-2.jpg)");
        }
        if(number==2){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("杯盈绿叶水无瑕<br>，");
            $(".poel_word2").html("缕缕清香透碧纱<br>。");
            $(".poel_word3").html("龙井山泉甘苦煮<br>，");
            $(".poel_word4").html("高朋满座赞新芽<br>。");
            a=setTimeout(function(){
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            
            $(".poel_show").css("background-image","url(./images/tea_poel/poel-4.jpg)");
        }
        if(number==3){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("如果人生如茶<br>，");
            $(".poel_word2").html("煎熬就变成了一种成就<br>。");
            $(".poel_word3").html("︽<br>林清玄<br>、于丹<br>、五星夜话<br>︾");
            a=setTimeout(function(){
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            
            $(".poel_show").css("background-image","url(./images/tea_poel/poel-1.jpg)");
        }
        if(number==4){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("︽<br>采茶<br>︾");
            $(".poel_word2").html("雾海云山摘叶忙<br>，");
            $(".poel_word3").html("并非三月为蚕桑<br>。");
            $(".poel_word4").html("精华天地甘泉煮<br>，");
            $(".poel_word5").html("慢品新芽水韵香<br>。");

            a=setTimeout(function(){
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
           
            $(".poel_show").css("background-image","url(./images/tea_poel/poel-6.jpg)");
        }
        if(number==5){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html(" ︽<br>幽居初夏<br>︾");
            $(".poel_word2").html("湖山胜处放翁家<br>，槐柳阴中野径斜<br>。");
            $(".poel_word3").html("水满有时观下鹭<br>，草深无处不鸣蛙<br>。");
            $(".poel_word4").html("箨龙已过头番笋<br>，木笔犹开第一花<br>。");
            $(".poel_word5").html("叹息老来交旧尽<br>，睡来谁共午瓯茶<br>。");
            $(".poel_word6").html("[宋] · 陆游");
            a=setTimeout(function(){
            
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
            f=setTimeout(function(){
                $(".poel_word6").addClass("opacity1");
            },5100)
            
                $(".poel_show").css("background-image","url(./images/tea_poel/poel-7.jpg)");
        }
        if(number==6){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html(" ︽<br>送陆鸿渐山人采茶回<br>︾");
            $(".poel_word2").html("千峰待逋客<br>，香茗复丛生。");
            $(".poel_word3").html("采摘知深处<br>，烟霞羡独行<br>。");
            $(".poel_word4").html("幽期山寺远<br>，野饭石泉清<br>。");
            $(".poel_word5").html("寂寂燃灯夜<br>，相思一磬声<br>。");
            $(".poel_word6").html("[唐] · 皇甫曾");
            a=setTimeout(function(){
            
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
            f=setTimeout(function(){
                $(".poel_word6").addClass("opacity1");
            },5100)
        
                $(".poel_show").css("background-image","url(./images/tea_poel/poel-5.jpg)");
        }
        
        })

        $(".arrow_left").click(function(){
            if(number<0){number=6}
            if(number==0){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("︽<br>莫分茶<br>︾");
            $(".poel_word2").html("病起萧萧两鬓华<br>，卧看残月上窗纱<br>。");
            $(".poel_word3").html("豆蔻连梢煎熟水<br>，莫分茶<br>。");
            $(".poel_word4").html("枕上诗书闲处好<br>，门前风景雨来佳<br>，");
            $(".poel_word5").html("终日向人多酝藉<br>，木犀花<br>。");
            $(".poel_word6").html("[宋] · 李清照");
            a=setTimeout(function(){     
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
            f=setTimeout(function(){
                $(".poel_word6").addClass("opacity1");
            },5100)
       
            $(".poel_show").css("background-image","url(./images/tea_poel/poel-3.jpg)");
        }
        if(number==1){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("杯子无用<br>，当只剩下北风<br>。");
            $(".poel_word2").html("黄沙匆匆<br>，绿洲早已无踪<br>。");
            $(".poel_word3").html("生命之源<br>，只存在于我们的想念<br>。");
            $(".poel_word4").html("那最后一杯<br>，是水<br>，还是泪<br>。");
            a=setTimeout(function(){     
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
        
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-2.jpg)");
        }
        if(number==2){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("杯盈绿叶水无瑕<br>，");
            $(".poel_word2").html("缕缕清香透碧纱<br>。");
            $(".poel_word3").html("龙井山泉甘苦煮<br>，");
            $(".poel_word4").html("高朋满座赞新芽<br>。");
            a=setTimeout(function(){
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)

        $(".poel_show").css("background-image","url(./images/tea_poel/poel-4.jpg)");
        }
        if(number==3){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("如果人生如茶<br>，");
            $(".poel_word2").html("煎熬就变成了一种成就<br>。");
            $(".poel_word3").html("︽<br>林清玄<br>、于丹<br>、五星夜话<br>︾");
            a=setTimeout(function(){
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
 
                $(".poel_show").css("background-image","url(./images/tea_poel/poel-1.jpg)");
        }
        if(number==4){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html("︽<br>采茶<br>︾");
            $(".poel_word2").html("雾海云山摘叶忙<br>，");
            $(".poel_word3").html("并非三月为蚕桑<br>。");
            $(".poel_word4").html("精华天地甘泉煮<br>，");
            $(".poel_word5").html("慢品新芽水韵香<br>。");

            a=setTimeout(function(){
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
         
                $(".poel_show").css("background-image","url(./images/tea_poel/poel-6.jpg)");
                }
        if(number==5){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
                    $(".poel_word1").html(" ︽<br>幽居初夏<br>︾");
            $(".poel_word2").html("湖山胜处放翁家<br>，槐柳阴中野径斜<br>。");
            $(".poel_word3").html("水满有时观下鹭<br>，草深无处不鸣蛙<br>。");
            $(".poel_word4").html("箨龙已过头番笋<br>，木笔犹开第一花<br>。");
            $(".poel_word5").html("叹息老来交旧尽<br>，睡来谁共午瓯茶<br>。");
            $(".poel_word6").html("[宋] · 陆游");
            a=setTimeout(function(){
            
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
            f=setTimeout(function(){
                $(".poel_word6").addClass("opacity1");
            },5100)
    
                $(".poel_show").css("background-image","url(./images/tea_poel/poel-7.jpg)");
                }
        if(number==6){
            setTimeout(function(){     
                $(".poel_word1,.poel_word2,.poel_word3,.poel_word4,.poel_word5,.poel_word6").removeClass("transitionunset"); 
            },100)
            $(".poel_word1").html(" ︽<br>送陆鸿渐山人采茶回<br>︾");
            $(".poel_word2").html("千峰待逋客<br>，香茗复丛生。");
            $(".poel_word3").html("采摘知深处<br>，烟霞羡独行<br>。");
            $(".poel_word4").html("幽期山寺远<br>，野饭石泉清<br>。");
            $(".poel_word5").html("寂寂燃灯夜<br>，相思一磬声<br>。");
            $(".poel_word6").html("[唐] · 皇甫曾");
            a=setTimeout(function(){
            
                $(".poel_word1").addClass("opacity1");    
            },100)
            b=setTimeout(function(){
                $(".poel_word2").addClass("opacity1");
            },1100)
            c=setTimeout(function(){
                $(".poel_word3").addClass("opacity1");
            },2100)
            d=setTimeout(function(){
                $(".poel_word4").addClass("opacity1");
            },3100)
            e=setTimeout(function(){
                $(".poel_word5").addClass("opacity1");
            },4100)
            f=setTimeout(function(){
                $(".poel_word6").addClass("opacity1");
            },5100)
  
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-5.jpg)");
        }
        })




$(".tea_poel_top .animate-1").click(function(){
    var index=$(this).index();
    console.log(index);
    $(".poel_contain").addClass("displayblock");
    $("body").addClass("overhidden");
    setTimeout(function(){
        $(".poel_con").addClass("opacity1");    
        $(".arrow_left,.arrow_right").css("opacity","1");
    },100)
    
    if(index==0){
        number=0;
    $(".poel_word1").html("︽<br>莫分茶<br>︾");
    $(".poel_word2").html("病起萧萧两鬓华<br>，卧看残月上窗纱<br>。");
    $(".poel_word3").html("豆蔻连梢煎熟水<br>，莫分茶<br>。");
    $(".poel_word4").html("枕上诗书闲处好<br>，门前风景雨来佳<br>，");
    $(".poel_word5").html("终日向人多酝藉<br>，木犀花<br>。");
    $(".poel_word6").html("[宋] · 李清照");
    a=setTimeout(function(){     
        $(".poel_word1").addClass("opacity1");    
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
    d=setTimeout(function(){
        $(".poel_word4").addClass("opacity1");
    },3100)
    e=setTimeout(function(){
        $(".poel_word5").addClass("opacity1");
    },4100)
    f=setTimeout(function(){
        $(".poel_word6").addClass("opacity1");
    },5100)
       
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-3.jpg)");
        
    }
    if(index==1){
        number=1;
    $(".poel_word1").html("杯子无用<br>，当只剩下北风<br>。");
    $(".poel_word2").html("黄沙匆匆<br>，绿洲早已无踪<br>。");
    $(".poel_word3").html("生命之源<br>，只存在于我们的想念<br>。");
    $(".poel_word4").html("那最后一杯<br>，是水<br>，还是泪<br>。");
    a=setTimeout(function(){     
        $(".poel_word1").addClass("opacity1");    
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
    d=setTimeout(function(){
        $(".poel_word4").addClass("opacity1");
    },3100)
  
      
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-2.jpg)");
        
    }
   
})

$(".tea_poel_middle .animate-1").click(function(){
    var index=$(this).index();
    
    $(".poel_contain").addClass("displayblock");
    $("body").addClass("overhidden");
    setTimeout(function(){
        $(".poel_con").addClass("opacity1");
        $(".arrow_left,.arrow_right").css("opacity","1");
    },100)
   
    if(index==0){
        number=2;
    $(".poel_word1").html("杯盈绿叶水无瑕<br>，");
    $(".poel_word2").html("缕缕清香透碧纱<br>。");
    $(".poel_word3").html("龙井山泉甘苦煮<br>，");
    $(".poel_word4").html("高朋满座赞新芽<br>。");
    a=setTimeout(function(){
        $(".poel_word1").addClass("opacity1");    
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
    d=setTimeout(function(){
        $(".poel_word4").addClass("opacity1");
    },3100)
     
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-4.jpg)");

       
    }
    if(index==1){
        number=3;
    $(".poel_word1").html("如果人生如茶<br>，");
    $(".poel_word2").html("煎熬就变成了一种成就<br>。");
    $(".poel_word3").html("︽<br>林清玄<br>、于丹<br>、五星夜话<br>︾");
    a=setTimeout(function(){
        $(".poel_word1").addClass("opacity1");    
        $(".arrow_left,.arrow_right").css("opacity","1");
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
      
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-1.jpg)");

        
    }
})

$(".bottom1").click(function(){
    var index=$(this).index();
    
    $(".poel_contain").addClass("displayblock");
    $("body").addClass("overhidden");
    setTimeout(function(){
        $(".poel_con").addClass("opacity1"); 
        $(".arrow_left,.arrow_right").css("opacity","1");
    },100)
   
    if(index==0){
        number=4;
    $(".poel_word1").html("︽<br>采茶<br>︾");
    $(".poel_word2").html("雾海云山摘叶忙<br>，");
    $(".poel_word3").html("并非三月为蚕桑<br>。");
    $(".poel_word4").html("精华天地甘泉煮<br>，");
    $(".poel_word5").html("慢品新芽水韵香<br>。");

    a=setTimeout(function(){
        $(".poel_word1").addClass("opacity1");    
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
    d=setTimeout(function(){
        $(".poel_word4").addClass("opacity1");
    },3100)
    e=setTimeout(function(){
        $(".poel_word5").addClass("opacity1");
    },4100)
     
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-6.jpg)");

    }
})

$(".tea_poel_bottom_right .animate-1").click(function(){
    var index=$(this).index();

    $(".poel_contain").addClass("displayblock");
    $("body").addClass("overhidden");
    setTimeout(function(){
        $(".poel_con").addClass("opacity1");
        $(".arrow_left,.arrow_right").css("opacity","1");
    },100)
    
    if(index==0){
        number=5;
    $(".poel_word1").html(" ︽<br>幽居初夏<br>︾");
    $(".poel_word2").html("湖山胜处放翁家<br>，槐柳阴中野径斜<br>。");
    $(".poel_word3").html("水满有时观下鹭<br>，草深无处不鸣蛙<br>。");
    $(".poel_word4").html("箨龙已过头番笋<br>，木笔犹开第一花<br>。");
    $(".poel_word5").html("叹息老来交旧尽<br>，睡来谁共午瓯茶<br>。");
    $(".poel_word6").html("[宋] · 陆游");
    a=setTimeout(function(){
       
        $(".poel_word1").addClass("opacity1");    
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
    d=setTimeout(function(){
        $(".poel_word4").addClass("opacity1");
    },3100)
    e=setTimeout(function(){
        $(".poel_word5").addClass("opacity1");
    },4100)
    f=setTimeout(function(){
        $(".poel_word6").addClass("opacity1");
    },5100)
        
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-7.jpg)");
    }
    if(index==1){
        number=6;
    $(".poel_word1").html(" ︽<br>送陆鸿渐山人采茶回<br>︾");
    $(".poel_word2").html("千峰待逋客<br>，香茗复丛生。");
    $(".poel_word3").html("采摘知深处<br>，烟霞羡独行<br>。");
    $(".poel_word4").html("幽期山寺远<br>，野饭石泉清<br>。");
    $(".poel_word5").html("寂寂燃灯夜<br>，相思一磬声<br>。");
    $(".poel_word6").html("[唐] · 皇甫曾");
    a=setTimeout(function(){
        $(".arrow_left,.arrow_right").css("opacity","1");
        $(".poel_word1").addClass("opacity1");    
    },100)
    b=setTimeout(function(){
        $(".poel_word2").addClass("opacity1");
    },1100)
    c=setTimeout(function(){
        $(".poel_word3").addClass("opacity1");
    },2100)
    d=setTimeout(function(){
        $(".poel_word4").addClass("opacity1");
    },3100)
    e=setTimeout(function(){
        $(".poel_word5").addClass("opacity1");
    },4100)
    f=setTimeout(function(){
        $(".poel_word6").addClass("opacity1");
    },5100)
        
        $(".poel_show").css("background-image","url(./images/tea_poel/poel-5.jpg)");
    }
})

$(".top1").hover(function(){
    $(".poel_biaoti1").addClass("bottom80");
    $(".poel_author1").addClass("opacity1");
    $(".poel_author1").addClass("bottom50");
    $(".top1 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(0).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti1").removeClass("bottom80");
    $(".poel_author1").removeClass("opacity1");
    $(".poel_author1").removeClass("bottom50");
    $(".top1 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})
$(".top2").hover(function(){
    $(".poel_biaoti2").addClass("bottom80");
    $(".poel_author2").addClass("opacity1");
    $(".poel_author2").addClass("bottom50");
    $(".top2 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(1).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti2").removeClass("bottom80");
    $(".poel_author2").removeClass("opacity1");
    $(".poel_author2").removeClass("bottom50");
    $(".top2 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})
$(".middle1").hover(function(){
    $(".poel_biaoti3").addClass("bottom80");
    $(".poel_author3").addClass("opacity1");
    $(".poel_author3").addClass("bottom50");
    $(".middle1 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(2).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti3").removeClass("bottom80");
    $(".poel_author3").removeClass("opacity1");
    $(".poel_author3").removeClass("bottom50");
    $(".middle1 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})
$(".middle2").hover(function(){
    $(".poel_biaoti4").addClass("bottom80");
    $(".poel_author4").addClass("opacity1");
    $(".poel_author4").addClass("bottom50");
    $(".middle2 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(3).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti4").removeClass("bottom80");
    $(".poel_author4").removeClass("opacity1");
    $(".poel_author4").removeClass("bottom50");
    $(".middle2 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})
$(".bottom1").hover(function(){
    $(".poel_biaoti5").addClass("bottom80");
    $(".poel_author5").addClass("opacity1");
    $(".poel_author5").addClass("bottom50");
    $(".bottom1 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(4).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti5").removeClass("bottom80");
    $(".poel_author5").removeClass("opacity1");
    $(".poel_author5").removeClass("bottom50");
    $(".bottom1 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})
$(".bottom2").hover(function(){
    $(".poel_biaoti6").addClass("bottom80");
    $(".poel_author6").addClass("opacity1");
    $(".poel_author6").addClass("bottom50");
    $(".bottom2 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(5).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti6").removeClass("bottom80");
    $(".poel_author6").removeClass("opacity1");
    $(".poel_author6").removeClass("bottom50");
    $(".bottom2 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})
$(".bottom3").hover(function(){
    $(".poel_biaoti7").addClass("bottom80");
    $(".poel_author7").addClass("opacity1");
    $(".poel_author7").addClass("bottom50");
    $(".bottom3 .box_mengban").css({"height":"110%","opacity":"1"});
    $(".biankuang").eq(6).css({"opacity":"1","transform":"scale(1)","top":"28px"});
},function(){
    $(".poel_biaoti7").removeClass("bottom80");
    $(".poel_author7").removeClass("opacity1");
    $(".poel_author7").removeClass("bottom50");
    $(".bottom3 .box_mengban").css({"height":"20%","opacity":"0"});
    $(".biankuang").css({"opacity":"0","transform":"scale(1.05)","top":"38px"});
})

$(".arrow_left").hover(function(){
    $(".arrow_left_circle").css("transform","scale(1.1)");
    $(".arrow_left_jiantou").css({"transform":"rotate(360deg)"});
},function(){
    $(".arrow_left_circle").css("transform","scale(1)");
    $(".arrow_left_jiantou").css({"transform":"rotate(0deg)"});
})
$(".arrow_right").hover(function(){
    $(".arrow_right_circle").css("transform","scale(1.1)");
    $(".arrow_right_jiantou").css({"transform":"rotate(-360deg)"});
},function(){
    $(".arrow_right_circle").css("transform","scale(1)");
    $(".arrow_right_jiantou").css({"transform":"rotate(0deg)"});
})
var time=0; var x,y,wy;var flag2=true;var index;var w1,h1;
$(".art_box").click(function(){
    index=$(this).index();
    console.log(flag2);
if(flag2){
    flag2=false;/*点击图片后立即禁用点击事件，每1秒才能触发一次点击事件，防鼠标连点*/
        w1=$(".box_blank").width();
        h1=$(".box_blank").height();
        console.log("width"+w1);
        console.log("height"+h1);
        $("body").css("overflow","hidden");
        $(".blank_mengban").css("display","block");/*点击后屏幕出现一层透明蒙版，无法点击其他区域*/
        $(".art_box").css("cursor","url(./images/mouse.png),default");
        setTimeout(function(){
            $(".blank_mengban").css("opacity","1");
        },10)
        x=$(".art_box").eq(index).find(".box_blank").offset().left;/*获取元素距离屏幕左边的距离,即x*/
        y=$(".art_box").eq(index).find(".box_blank").offset().top;
        wy=$(window).scrollTop();
        console.log("top:"+(y-wy));/*获取元素距离屏幕顶部的距离,即（y-wy）*/
        $(".art_box").eq(index).find(".box_blank").css({"position":"fixed","top":(y-wy),"left":x});/*点击后图片立马变为fixed，并定位到原来位置*/
        $(".art_box").eq(index).find(".box_blank").css({"z-index":"1000","width":"500px","height":"530px","top":"50%","left":"50%","margin-left":"-250px","margin-top":"-235px","box-shadow":"0 0 30px rgba(0, 0, 0, 0.2)"});
        $(".art_box").eq(index).find(".box_image").css({"width":"500px","height":"530px"});/*改变图片大小和位置*/
        $(".art_box").eq(index).siblings().css("filter","blur(10px)");
        $(".art_title2,.picture_line").css("filter","blur(10px)");
       
        setTimeout(function(){
            $(".art_box").eq(index).find(".box_blank").css({"width":"800px","height":"530px","top":"50%","left":"50%","margin-left":"-400px","margin-top":"-235px"});
            /*过渡效果结束后，出现展开框*/
        },500)
        setTimeout(function(){
            $(".art_box").eq(index).find(".blank_container").css({"display":"block"});
            /*出现内容*/
        },1000)
        setTimeout(function(){
            $(".art_box").eq(index).find(".blank_container").css({"opacity":"1"});
        },1010)

}
  
})

$(".picture_close").click(function(e){
    e.stopPropagation();/*点击子元素，不受父元素的点击事件影响*/
        console.log("aaa");
        $(".art_box").css("cursor","pointer");
        $(".art_box").eq(index).find(".blank_container").css({"opacity":"0"});
        $(".art_box").eq(index).find(".blank_container").css({"display":"none"});
        $(".art_box").eq(index).find(".box_blank").css({"width":"500px","height":"530px","top":"50%","left":"50%","margin-left":"-250px","margin-top":"-235px"});/*展开框消失*/
        setTimeout(function(){
            $(".art_box").eq(index).find(".box_blank").css({"z-index":"100","width":w1,"height":h1,"top":"50%","left":"50%","margin-left":"0","margin-top":"0","box-shadow":"none"});
            $(".art_box").eq(index).find(".box_blank").css({"top":(y-wy),"left":x});
            $(".art_box").eq(index).find(".box_image").css({"width":w1,"height":h1});/*图片变小并恢复到原位*/
        },500)
        setTimeout(function(){
            $(".blank_mengban").css("opacity","0");//蒙版透明度变为0
            $(".art_box").eq(index).siblings().css("filter","unset");
            $(".art_title2,.picture_line").css("filter","unset");
        },700)
        setTimeout(function(){
           
             $(".blank_mengban").css("display","none");/*透明蒙版消失*/
            flag2=true;
            $("body").css({"overflow":"auto","overflow-x":"hidden"});
            $(".art_box").eq(index).find(".box_blank").css({"position":"absolute","top":"unset","left":"unset"});/*图片重新变为absolute并清空top，left值*/
        },1000)
        time++;
 
})


$(".heart").click(function (e) {//画喜欢点击事件
    e.stopPropagation();
    var D = $(this).attr("rel");
    var picknum=$(this).next().text()-0;
    if (D === 'like') {
        $(this).addClass("heartAnimation").attr("rel", "unlike");
        $(this).next().text(picknum+1)
    }
    else {
        $(this).removeClass("heartAnimation").attr("rel", "like");

        $(this).next().text(picknum-1)
    }
});

$(".up").hover(function(){
    $(".up img").css("top","-39px");
    $(".up_word").css("top","5px");
},function(){
    $(".up img").css("top","9px");
    $(".up_word").css("top","44px");
})