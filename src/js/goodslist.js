
$.ajax({
  type:'post',
  dataType:"json",
  url:"../ajax/goodlist.php",
  success:function(data){
    console.log(data);
    var str = '';
    for(var i = 0;i<data.length;i++){
      str+= `
            <dl class="item">
              <dt class="photo">
                <a href="./detalist.html?id=${data[i].goodsId}"><img id='photo_img' src="${data[i].goodsImg}" alt=""></a>
              </dt>
              <dd class="detail">
                <a href="#" class="moni">￥${data[i].goodsPrice} </a>
                <a href="#" class="listName">${data[i].goodsName} </a>
              </dd>
            </dl>
            `;
    }

    $('.items').html(str);
  }
})


$(function(){
  var $hasMenu = $('.cat_bd_tr_li').has('ul');
  var i = 1;
  $('i').on('click',function(){
    console.log($hasMenu);
    $hasMenu.children('ul').slideToggle();
    i = i * -1;
    if(i == -1){
      $(this).css('background-position','-24px -99px');
      console.log($(this));
    }else if(i == 1){
      $(this).css('background-position','-6px -99px');
    }
  })
})
