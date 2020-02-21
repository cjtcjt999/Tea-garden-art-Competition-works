/**
 * Created by Marven Gong on 2016/3/21.
 * jquery.niceHover v1.0.0
 */
(function($){
    $.fn.niceHover=function(option){
        var _target=$(this);
        var defaultOptions={
            color:"#00b4ff",
            weight:3
        };
        var settings= $.extend(defaultOptions,option);
        var _init=function(){
            _target.css({"position":"relative","cursor":"pointer"});
            var width=_target.outerWidth();
            var height=_target.outerHeight();
            var leftBorder=$("<span class='hover-border left-right-border left-border'></span>");
            var rightBorder=$("<span class='hover-border left-right-border right-border'></span>");

            var leftTopBorder=$("<span class='hover-border left-right-top-bottom-border left-top-border'></span>");
            var leftBottomBorder=$("<span class='hover-border left-right-top-bottom-border left-bottom-border'></span>");
            var rightTopBorder=$("<span class='hover-border left-right-top-bottom-border right-top-border'></span>");
            var rightBottomBorder=$("<span class='hover-border left-right-top-bottom-border right-bottom-border'></span>");

            _target.append(leftBorder).append(rightBorder).append(leftTopBorder).append(leftBottomBorder).append(rightTopBorder).append(rightBottomBorder);
            $(".hover-border").css({"background-color":settings.color});
            $(".left-right-border").width(settings.weight+"px");
            $(".left-right-top-bottom-border").height(settings.weight+"px");
        }
        _init();

        _target.hover(function(){
            var _self=$(this);
            $(this).find(".left-top-border").animate({"width":"50%"},"normal",function(){
                _self.find(".left-border").animate({"height":"100%"},"normal",function(){
                    _self.find(".left-bottom-border").animate({"width":"50%"},"normal");
                })
            });
            $(this).find(".right-bottom-border").animate({"width":"50%"},"normal",function(){
                _self.find(".right-border").animate({"height":"100%"},"normal",function(){
                    _self.find(".right-top-border").animate({"width":"50%"},"normal");
                })
            });
            /*setTimeout(function(){
             _self.find(".left-border").animate({"height":"100%"},500);
             },500)*/
        },function(){
            var _self=$(this);
            _self.find(".left-right-border,.left-right-top-bottom-border").stop();
            _self.find(".left-right-border").animate({"height":"0px"},"normal");
            _self.find(".left-right-top-bottom-border").animate({width:"0px"},"normal");
        })
    }
})($)

