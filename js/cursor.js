window.onload = function(){
                
    /*
     * 使div可以跟随鼠标移动
     */
    
    //获取box1
    var box1 = document.getElementById("box1");
    //获取box2
    var box2 = document.getElementById("box2");
    //绑定鼠标移动事件
    document.onmousemove = function(event){
        
        //解决兼容问题
        event = event || window.event;
        
        //获取滚动条滚动的距离
        /*
         * chrome认为浏览器的滚动条是body的，可以通过body.scrollTop来获取
         * 火狐等浏览器认为浏览器的滚动条是html的，
         */
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
        //var st = document.documentElement.scrollTop;
        
        
        //获取到鼠标的坐标
        /*
         * clientX和clientY
         *  用于获取鼠标在当前的可见窗口的坐标
         * div的偏移量，是相对于整个页面的
         * 
         * pageX和pageY可以获取鼠标相对于当前页面的坐标
         *  但是这个两个属性在IE8中不支持，所以如果需要兼容IE8，则不要使用
         */
        var left = event.clientX-13;
        var　top = event.clientY-13;
        
        //设置div的偏移量
        // box1.style.left = left + 1 + sl + "px";
        // box1.style.top = top + st + "px";
        TweenMax.to($("#box1"), 0.3, {x:left,y:top});






        var st2 = document.body.scrollTop || document.documentElement.scrollTop;
        var sl2 = document.body.scrollLeft || document.documentElement.scrollLeft;

        var left2 = event.clientX+1;
        var　top2 = event.clientY+2;

        TweenMax.to($("#box2"), 0, {x:left2,y:top2});
    };
    
    
};

