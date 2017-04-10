$(function(){
  var $idx_banner = $('.idx_banner');
  var $ul = $('.banner_list');

  var firstImg = $ul.children().children();

  var index = 0;

  var timer;

  var $cloneLi = $ul.children().eq(0).clone(true);
  $ul.append($cloneLi);

  var len = $ul.children().length;
  console.log(len);


  //左右按钮的隐藏和显现
  $idx_banner.hover(function(){
    $('.next').show();
    $('.prev').show();
  },function(){
    $('.next').hide();
    $('.prev').hide();
  })


  // 鼠标移入移除
  $idx_banner.on('mouseenter',function(){

    clearInterval(timer);
  }).on('mouseleave',function(){
    timer = setInterval(function(){
      index++;

      showPic();
    },4000);
  }).trigger('mouseleave');

  // 上一张/下一张
  $idx_banner.on('click','.prev',function(){
    index--;
    showPic();
  }).on('click','.next',function(){
    index++;
    showPic();
  });

  function showPic(){
      if(index<0){
        index = len - 1;
      }else if(index>len-1){
        // 立即切换到初始状态
        // $ul.style.left = 0;
        $ul.css('left','0px');

        index = 1;
      }

      animate($ul[0],{left:-index*1920 - 255});
    }



})
