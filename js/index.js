
// $(document).ready(function(d){
    $(function(){

    var centerX = document.documentElement.clientWidth / 2;
    var centerY = document.documentElement.clientHeight / 2;

    var r = 190;
    var ballNumber = 24;
    var angleSpace = 360/ballNumber;
    var container=document.getElementsByClassName("bk");
    var contain=document.createElement("div");
    // console.log(container);
    // document.body.appendChild(container);
    for (var i = 0; i < ballNumber; i++) {
        
        var ball = document.createElement("div");
        var ball2 = document.createElement("div");
        ball.classList.add("ball");
        ball2.classList.add("ball2");
        ball.appendChild(ball2);
        var x = centerX + r * Math.cos(i * angleSpace / 180 * Math.PI);
        var y = centerY + r * Math.sin(i * angleSpace / 180 * Math.PI);

        ball.style.left = x + "px";
        ball.style.top = y + "px";

  
        contain.appendChild(ball);
        container[0].appendChild(contain);
    }

    var balls = document.getElementsByClassName("ball");

    var angle = 0;

    function move(){
        angle += 0.2;
        for(var i = 0;i<ballNumber;i++){
            var ball = balls[i];
            var x = centerX + r * Math.cos((angle + i * angleSpace)/180*Math.PI);
            var y = centerY + r * Math.sin((angle + i * angleSpace)/180*Math.PI);
            ball.style.left = x + "px";
            ball.style.top = y+70 + "px";
        }
        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);
    var a,b;
    $(".start").css("opacity","1");
    $(".ball").hover(function(){
        clearTimeout(b);
        clearTimeout(n1);
        clearTimeout(n2);
        clearTimeout(n3);
        clearTimeout(n4);
        clearTimeout(n5);
        clearTimeout(n6);
        var index=$(this).index();
        $(".ball").eq(index).css({"border":"1px solid rgba(255,255,255,1)"});
        $(".town").eq(index).css({"opacity":"1","margin-top":"115px"});
        $(".delta").eq(index).css({"opacity":"1","margin-top":"-100px"});
        $(".start").css("opacity","0");
        $(".index_title").css("opacity","0");
        a=setTimeout(function(){
        $(".town2").eq(index).css({"opacity":"1"});
        },200)
    },function(){
        clearTimeout(a);
        $(".ball").css({"border":"1px solid rgba(255,255,255,0)"});
        $(".town").css({"opacity":"0","margin-top":"105px"});
        $(".town2").css({"opacity":"0"});
        $(".delta").css({"opacity":"0","margin-top":"-120px"});
        b=setTimeout(function(){
            $(".start").css("opacity","1");
            $(".index_title").css("opacity","1");
            $("#typeWord").empty();
                $('#typeWord').typeIt({
                    whatToType: ['中国的乡土文化源远流长、种类繁多。','而茶乡、茶叶作为乡土文化传承的载体，应该得到更多的保护和发展！'],
                    typeSpeed: 200,
                    breakLines: true,
                    lifeLike: false,
                    showCursor: true,
                    // showCursor:false,
                }, function () {
                    // console.log("your type is over");
                });
        },1000)
    })





$(".down").click(function(){
    // console.log("aaa");
    $("html,body").animate({scrollTop:700},800);
})
 $('#typeWord').typeIt({
        whatToType: ['中国的乡土文化源远流长、种类繁多。','而茶乡、茶叶作为乡土文化传承的载体，应该得到更多的保护和发展！'],
        typeSpeed: 150,
        breakLines: true,
        lifeLike: false,
        showCursor: true,
        // showCursor:false,
    }, function () {
        // console.log("your type is over");
    });


var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0;j=0;k=0;
$(document).keydown(function(event){ //监听键盘按下时的事件
	// console.log(event.keyCode); //按下不同的按键，对应的event.keyCode也不同
    if(event.keyCode==67){
        a++;
    }
    if(event.keyCode==74){
        b++;
    }
    if(event.keyCode==84){
        c++;
    }
    if(event.keyCode==76){
        d++;
    }
    if(event.keyCode==79){
        e++;
    }
    if(event.keyCode==86){
        f++;
    }
    if(event.keyCode==69){
        g++;
    }
    if(event.keyCode==88){
        h++;
    }
    if(event.keyCode==53){
        i++;
    }
    if(event.keyCode==50){
        j++;
    }
    if(event.keyCode==48){
        k++;
    }  
    if(a*b*c*d*e*f*g*h*i*j*k==4){
       $(".caidan").css({"display":"block"});
       setTimeout(function(){
       $(".caidan").css("transform","rotate(36000deg)");
        },10);
    }
});
$(".caidan").click(function(){
    $(".caidan").css({"display":"none","transform":"unset"});
    a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0;j=0;k=0;
})
   
    
        var path = document.querySelector('#infinite-path');
        // 获取path的长度
        var pathLength = path.getTotalLength()+4200;
        // 设置足够长的虚线和虚线之间的间隔，这里直接设置了path本身长度
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        // 设置虚线的位移为path本身的长度，使得path看起来完全隐藏了
        path.style.strokeDashoffset = pathLength;
        
        // 获取元素的大小及其相对于视口的位置
        // https://jakearchibald.com/2013/animated-line-drawing-svg/
        path.getBoundingClientRect();
        
        // 监听页面的滚动事件
        window.addEventListener("scroll", function(e) {  

          // 获取滚动的百分比 
          // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
          var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);      
          // 按照页面滚动百分比重新设置虚线的位移
          var drawLength = pathLength * scrollPercentage;
          path.style.strokeDashoffset = pathLength - drawLength+2800; 

          let volumnPath= document.querySelector('#infinite-path');

          // 输出path在长度为100的位置的点坐标
          
        //   console.log(volumnPath.getPointAtLength(drawLength-2800));
          var gs = document.getElementById("gensui");
           gs.style.left=volumnPath.getPointAtLength(drawLength-2800).x*0.943-10+50+'px';
           gs.style.top=volumnPath.getPointAtLength(drawLength-2800).y*0.943-15+100+'px';
           
          // 当页面快滑到底时，移除虚线，否则形状不是很锐利
          if (scrollPercentage >= 0.99) {
            path.style.strokeDasharray = "none";        
          } else {
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
          }  20
        
        });


    
    $(".cs1_title").hover(function(){
        $(".cs1_title .jiao1,.cs1_title .jiao2").css({"width":"40px","height":"30px"});
    },function(){
        $(".cs1_title .jiao1,.cs1_title .jiao2").css({"width":"15px","height":"15px"});
    })
    $(".cs2_title").hover(function(){
        $(".cs2_title .jiao1,.cs2_title .jiao2").css({"width":"40px","height":"30px"});
    },function(){
        $(".cs2_title .jiao1,.cs2_title .jiao2").css({"width":"15px","height":"15px"});
    })
    $(".cs3_title").hover(function(){
        $(".cs3_title .jiao1,.cs3_title .jiao2").css({"width":"40px","height":"30px"});
    },function(){
        $(".cs3_title .jiao1,.cs3_title .jiao2").css({"width":"15px","height":"15px"});
    })
    $(".cs4_title").hover(function(){
        $(".cs4_title .jiao1,.cs4_title .jiao2").css({"width":"40px","height":"30px"});
    },function(){
        $(".cs4_title .jiao1,.cs4_title .jiao2").css({"width":"15px","height":"15px"});
    })
    $(".cs5_title").hover(function(){
        $(".cs5_title .jiao1,.cs5_title .jiao2").css({"width":"40px","height":"30px"});
    },function(){
        $(".cs5_title .jiao1,.cs5_title .jiao2").css({"width":"15px","height":"15px"});
    })


    
        $(function () {
            // var word1 = text({
            // 	str: "传说神农氏为解除人民病痛，<br>亲尝各种植物后中毒，<br>机缘巧合之下，吃了茶而解毒，<br>这就是发现茶的过程。", //所需显示的一段字符文字
            // 	effect: "random", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
            // 	speed : 15, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
            // 	conBox: "#text",
            // });
            var one=true,two=true,three=true,four=true,five=true;
            $(window).scroll(function(){
                var dist=$(window).scrollTop();
                // console.log(dist);
            if(one){         
                if(dist>=1000 && dist<=1300){
               
                    setTimeout(function(){
                        var word1 = text({
                            str: "传说神农氏为解除人民病痛，", //所需显示的一段字符文字
                            effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                            speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                            conBox: "#text1",
                        });
                    },0)
                    setTimeout(function(){
                        var word2 = text({
                            str: "亲尝各种植物后中毒，", //所需显示的一段字符文字
                            effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                            speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                            conBox: "#text2",
                        });
                    },500)
                    setTimeout(function(){
                        var word3 = text({
                            str: "机缘巧合之下，吃了茶而解毒，", //所需显示的一段字符文字
                            effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                            speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                            conBox: "#text3",
                        });
                    },1000)
                    setTimeout(function(){
                        var word4 = text({
                            str: "这就是发现茶的过程。", //所需显示的一段字符文字
                            effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                            speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                            conBox: "#text4",
                        });
                    },1500)
                    one=false;
                }
            }
            if(two){
                if(dist>=1500 && dist<=1900){
                        
                        setTimeout(function(){
                            var word5 = text({
                                str: "魏晋南北朝之时，巴蜀茶叶", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text5",
                            });
                        },0)
                        setTimeout(function(){
                            var word6 = text({
                                str: "已经从野生变为人工栽培。", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text6",
                            });
                        },500)
                        setTimeout(function(){
                            var word7 = text({
                                str: "巴蜀的部落酋长将茶叶和当地", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text7",
                            });
                        },1000)
                        setTimeout(function(){
                            var word8 = text({
                                str: "的蜜橘作为贡品向周武王进贡。", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text8",
                            });
                        },1500)
                        two=false;
                    }
                }
                if(three){
                if(dist>=2100 && dist<=2500){
                        
                        setTimeout(function(){
                            var word9 = text({
                                str: "唐代茶圣陆羽提倡细煎慢品式", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text9",
                            });
                        },0)
                        setTimeout(function(){
                            var word10 = text({
                                str: "的饮茶方式，又称陆羽式煎茶法。", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text10",
                            });
                        },500)
                        setTimeout(function(){
                            var word11 = text({
                                str: "陆羽的《茶经》得到皇帝的赏识，", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text11",
                            });
                        },1000)
                        setTimeout(function(){
                            var word12 = text({
                                str: "召他进宫为皇帝烹煎茶汤，受到赐封，", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text12",
                            });
                        },1500)
                        setTimeout(function(){
                            var word13 = text({
                                str: "煎茶道由此开始盛行。", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text13",
                            });
                        },2000)
                        three=false;
                    }
                }
                if(four){
                if(dist>=2900 && dist<=3400){
                        
                        setTimeout(function(){
                            var word14 = text({
                                str: "点茶始于五代时福建民间，", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text14",
                            });
                        },0)
                        setTimeout(function(){
                            var word15 = text({
                                str: "盛行于北宋，", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text15",
                            });
                        },500)
                        setTimeout(function(){
                            var word16 = text({
                                str: "是两宋饮茶的主流形式，", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text16",
                            });
                        },1000)
                        setTimeout(function(){
                            var word17 = text({
                                str: "也是中国古代茶艺的又一代表。", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text17",
                            });
                        },1500)
                        setTimeout(function(){
                            var word18 = text({
                                str: "而点茶法与煎茶法不同，", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text18",
                            });
                        },2000)
                        setTimeout(function(){
                            var word19 = text({
                                str: "是先将饼茶碾碎，置碗中待用。", //所需显示的一段字符文字
                                effect: "left", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text19",
                            });
                        },2500)
                        four=false;
                    }
                }

                if(five){
                if(dist>=3850 && dist<=4300){
                        
                        setTimeout(function(){
                            var word20 = text({
                                str: "点茶法至明朝后期被泡茶法取代，", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text20",
                            });
                        },0)
                        setTimeout(function(){
                            var word21 = text({
                                str: "由于各种原因，茶文化曾没落一时，", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text21",
                            });
                        },500)
                        setTimeout(function(){
                            var word22 = text({
                                str: "如今，社会的进步，", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text22",
                            });
                        },1000)
                        setTimeout(function(){
                            var word23 = text({
                                str: "促进了传统茶文化的复兴和发展，", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text23",
                            });
                        },1500)
                        setTimeout(function(){
                            var word24 = text({
                                str: "一切都呈现出前所未有的兴旺和繁荣。", //所需显示的一段字符文字
                                effect: "right", //显示效果具体可以到页面中看 normal right left down up random rightBig leftBig downBig upBig
                                speed : 60, //显示速度  慢400 正常200 快60 极快15  数字可以自定义
                                conBox: "#text24",
                            });
                        },2000)
                       
                        five=false;
                    }
                }

               
        })
        });


$(".cs1 div").hover(function(){
    $(".sec1").addClass("change");
},function(){
    $(".sec1").removeClass("change");
})
$(".cs2 div").hover(function(){
    $(".sec2").addClass("change");
},function(){
    $(".sec2").removeClass("change");
})
$(".cs3 div").hover(function(){
    $(".sec3").addClass("change");
},function(){
    $(".sec3").removeClass("change");
})
$(".cs4 div").hover(function(){
    $(".sec4").addClass("change");
},function(){
    $(".sec4").removeClass("change");
})
$(".cs5 div").hover(function(){
    $(".sec5").addClass("change");
},function(){
    $(".sec5").removeClass("change");
})
var xiabiao;
$(".hi-icon").hover(function(){
    xiabiao=$(this).index();
    $(this).find("img").css("margin-top","-38px");
},function(){
    if(xiabiao==0){
        $(this).find("img").css("margin-top","22px");
    }
    if(xiabiao==1){
        $(this).find("img").css("margin-top","27px");
    }
    if(xiabiao==2){
        $(this).find("img").css("margin-top","23px");
    }
    if(xiabiao==3){
        $(this).find("img").css("margin-top","21px");
    }
})
    

})