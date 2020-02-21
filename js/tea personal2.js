$(function() {
    $("#update").click(sc);
  })

  function sc() {

    for(let i = 1; i <= 30; i++) {
      setTimeout(`shadow(${i})`, i * 20);
    }
  }

  function shadow(val) {
    $(".progressbox").each((i, x) => {
      if($(x)[0].offsetHeight > 0) {
        $(x).ShadowRing({
          r: 350,
          ti: val,
          count: 100,
          offset: 3,
          fontsize: 15,
          fontfamily: "微软雅黑"
        })
      }
    });
  }

function sc2() {

for(let i = 1; i <= 90; i++) {
  setTimeout(`shadow2(${i})`, i * 20);
}
}

function shadow2(val) {
$(".progressbox2").each((i, x) => {
  if($(x)[0].offsetHeight > 0) {
    $(x).ShadowRing({
      r: 350,
      ti: val,
      count: 100,
      offset: 3,
      fontsize: 15,
      fontfamily: "微软雅黑"
    })
  }
});
}

function sc3() {

for(let i = 1; i <= 70; i++) {
  setTimeout(`shadow3(${i})`, i * 20);
}
}

function shadow3(val) {
$(".progressbox3").each((i, x) => {
  if($(x)[0].offsetHeight > 0) {
    $(x).ShadowRing({
      r: 350,
      ti: val,
      count: 100,
      offset: 3,
      fontsize: 15,
      fontfamily: "微软雅黑"
    })
  }
});
}

function sc4() {

for(let i = 1; i <= 10; i++) {
  setTimeout(`shadow4(${i})`, i * 20);
}
}

function shadow4(val) {
$(".progressbox4").each((i, x) => {
  if($(x)[0].offsetHeight > 0) {
    $(x).ShadowRing({
      r: 350,
      ti: val,
      count: 100,
      offset: 3,
      fontsize: 15,
      fontfamily: "微软雅黑"
    })
  }
});
}

function sc5() {

for(let i = 1; i <= 40; i++) {
  setTimeout(`shadow5(${i})`, i * 20);
}
}

function shadow5(val) {
$(".progressbox5").each((i, x) => {
  if($(x)[0].offsetHeight > 0) {
    $(x).ShadowRing({
      r: 350,
      ti: val,
      count: 100,
      offset: 3,
      fontsize: 15,
      fontfamily: "微软雅黑"
    })
  }
});
}

function sc6() {

for(let i = 1; i <= 80; i++) {
  setTimeout(`shadow6(${i})`, i * 20);
}
}

function shadow6(val) {
$(".progressbox6").each((i, x) => {
  if($(x)[0].offsetHeight > 0) {
    $(x).ShadowRing({
      r: 350,
      ti: val,
      count: 100,
      offset: 3,
      fontsize: 15,
      fontfamily: "微软雅黑"
    })
  }
});
}
sc();
sc2();
sc3();
sc4();
sc5();
sc6();
var duang;
$(document).ready(function(){
  $(".side_menu a").hover(function(){
    clearTimeout(duang);
    const _this = this;
    $(_this).find(".fk").css("left","20px");
    duang=setTimeout(function(){
      $(_this).find(".fk").css("left","-18px");
    },300)
  },function(){
    clearTimeout(duang);
    $(".fk").css("left","-260px");
  })


  $(".gz_cancel2").click(function(){
    const _this = this;
    $(this).parents(".like_two").css({"transform":"translateY(-200px)","opacity":"0"});
    setTimeout(function(){
      $(_this).parents(".like_two").css({"display":"none"});
    },500)
  })

  $(".gz_cancel").click(function(){
    const _this = this;
    $(this).parents(".gz_line").css({"transform":"translateX(200px)","opacity":"0"});
    setTimeout(function(){
      $(_this).parents(".gz_line").css({"display":"none"});
    },500)
  })

  $(".delete").click(function(){
    const _this = this;
    $(this).parents(".order_line").css({"transform":"translateX(200px)","opacity":"0"});
    setTimeout(function(){
      $(_this).parents(".order_line").css({"display":"none"});
    },500)
  })

})

