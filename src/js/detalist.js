$(function(){

  //得到商品列表传过来的id
  var URL= location.search;
  var num=URL.replace(/\?id=/,'');

  $.ajax({
    type:'post',
    dataType:"json",
    url:"../ajax/goodlist.php",
    success:function(data){
      console.log(data);

      var str = '';
        console.log(num);
        str+= `
      <div class="productContent warpper">
        <div class="productPic">
           <div class="pic">
             <img src="${data[num].goodsImg}" alt="">
           </div>
        </div>
       <div class="picBig">
         <img src="${data[num].goodsImg}" alt="">
       </div>
        <div class="productArgument">
           <h2>${data[num].goodsName}</h2>
           <p class="price"><span>价&nbsp;格&nbsp; ：</span><span>¥${data[num].goodsPrice}</span></p>
        <div class="logistics">
           <span class="address">至全国：</span>
           <span class="carriage">运费： 10.00元</span>
         </div>
         <div class="num">
           <span>购买数量</span>
           <input id="textBox" name="" type="text" value="1" />
           <input id="add" name="" type="button" value="+" />
          <input id="min" name="" type="button" value="-" />
         </div>
         <div class="choose">
           <span class="buy"><a href="#">立即购买</a></span>
           <span class="joinCart"><a href="#">添加购物车</a></span>
         </div>
        </div>

            `


      $('#particulars').html(str);

      //给+ - 号添加点击事件
      var $min=$("#min");
      var $add=$("#add");
      var $tex=$("#textBox");
      $add.click(function(){
        $tex.val(parseInt($tex.val())+1);
         if (parseInt($tex.val())>=1) {
         $min.attr("disabled", false);
      }
      })
       if(parseInt($tex.val())<=1){
        console.log('test');
         $min.attr("disabled", true);}

      $min.click(function(){
        $tex.val(parseInt($tex.val())-1);
        if(parseInt($tex.val())<=1){
        console.log('test');
         $min.attr("disabled", true);}

      })

      // 放大镜
      var $pic = $('.pic');
      var $smallImg = $('.pic img');
      var $picBig = $('.picBig');
      var $bigImg = $('.picBig img');
      var ratio;
      // 创建放大镜
      $minZoom = $('<span/>').addClass('minzoom').appendTo($pic);

      //事件绑定，鼠标移入事件
      $pic.on('mousemove',function(e){
        $picBig.css('display','block');
        $minZoom.css('display','block');

        var offset = $pic.offset();
        // 把放大镜中心定位到鼠标位置
        var left = e.pageX - offset.left - $minZoom.outerWidth()/2;
        var top = e.pageY - offset.top - $minZoom.outerHeight()/2;

        // 限定放大镜移动的区域
        if(left < 0){
          left = 0;
        }else if(left > $pic.outerWidth() - $minZoom.outerWidth()){
          left = $pic.outerWidth() - $minZoom.outerWidth()
        }

        if(top < 0){
          top = 0;
        }else if(top > $smallImg.outerHeight() - $minZoom.outerHeight()){
          top = $smallImg.outerHeight() - $minZoom.outerHeight()
        }

        //让放大镜随鼠标移动
        $minZoom.css({left:left,top:top});

        ratio = $smallImg.outerWidth()/$bigImg.outerWidth();

        // 根据小图与大图的比例改变放大镜的形状
        $minZoom.css({
          width:$picBig.outerWidth()*ratio,
          height:$picBig.outerHeight()*ratio
        });

        //让大图随放大镜移动而移动
        $bigImg.css({left:-left/ratio,top:-top/ratio});

      })

      //鼠标移出事件
      $pic.on('mouseleave',function(){
        $picBig.css('display','none');
        $minZoom.css('display','none');
      })
    }
  })

})



