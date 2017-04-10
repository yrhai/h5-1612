$(function(){
  $(".mui_tab div").mouseenter(function(){
      $(this).children(".mui_tab_tip").animate({left:-90,queue:true});
      $(this).children(".mui_tab_tip").css("visibility","visible");
      $(this).children(".mui_tab_tip").css("display","block");
      $(this).children(".mui_tab_color").css("background-color","#c40000");
    });
    $(".mui_tab div").mouseleave(function(){
      $(this).children(".mui_tab_tip").animate({left:-121,queue:true});
      $(this).children(".mui_tab_tip").css("visibility","hidden");
      $(this).children(".mui_tab_tip").css("display","none");
      $(this).children(".mui_tab_color").css("background-color","#000");
    });

    $(".mui_tab_qrcode").mouseenter(function(){
      $(this).children(".mui_tab_tip").animate({left:-154,queue:true});
      $(this).children(".mui_tab_tip").css("visibility","visible");
      $(this).children(".mui_tab_tip").css("display","block");
    });
    $(".mui_tab_qrcode").mouseleave(function(){
      $(this).children(".mui_tab_tip").animate({left:-183,queue:true});
      $(this).children(".mui_tab_tip").css("visibility","hidden");
      $(this).children(".mui_tab_tip").css("display","none");
    });

    //点击购物车让导航条左右移动
    var i=1;
    $('.mui_tab_cart').click(function(){
      if(i==1){
        $('.mui_mbar').animate({width:315});
        $('.mui_mbar_plugins').css("display","block");
        i =i*-1
      }else{
        $('.mui_mbar').animate({width:35});
        $('.mui_mbar_plugins').css("display","none");
        i = i * -1;
      }
    })


  // 元素以及其他一些变量
  // var eleFlyElement = document.querySelector("#flyItem"), eleShopCart = document.querySelector("#shopCart");
  // var numberItem = 0;
  // 抛物线运动
  // var myParabola = funParabola(eleFlyElement, eleShopCart, {
  //   speed: 400, //抛物线速度
  //   curvature: 0.0008, //控制抛物线弧度
  //   complete: function() {
  //     eleFlyElement.style.visibility = "hidden";
  //     eleShopCart.querySelector("span").innerHTML = ++numberItem;
  //   }
  // });
  // 绑定点击事件
  // if (eleFlyElement && eleShopCart) {

  //   [].slice.call(document.getElementsByClassName("btnCart")).forEach(function(button) {
  //     button.addEventListener("click", function(event) {
  //       // 滚动大小
  //       var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
  //      scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  //      eleFlyElement.style.left = event.clientX + scrollLeft + "px";
  //      eleFlyElement.style.top = event.clientY + scrollTop + "px";
  //      eleFlyElement.style.visibility = "visible";

  //       // 需要重定位
  //       myParabola.position().move();
  //     });
  //   });
  // }

})
