$(function(){
  //我的淘宝的显现和隐藏
  $('.ul_mytaobao').hover(function(){
    $('.mytaobao_conceal').show();
  },function(){
    $('.mytaobao_conceal').hide();
  })

  //收藏夹的显现和隐藏
  $('.ul_mymenu').hover(function(){
    $('.mymenu_conceal').show();
  },function(){
    $('.mymenu_conceal').hide();
  })

  //手机版的显现和隐藏
  $('.ul_mobile').hover(function(){
    $('.mobile_conceal').show();
  },function(){
    $('.mobile_conceal').hide();
  })

  //商家支持的显现和隐藏
  $('.ul_seller').hover(function(){
    $('.seller_conceal').show();
  },function(){
    $('.seller_conceal').hide();
  })

  //网站导航的显现和隐藏
  $('.ul_sitemap').hover(function(){
    $('.sitemap_conceal').show();
  },function(){
    $('.sitemap_conceal').hide();
  })

  //网站导航的显现和隐藏
  $('.search_slogo,.search_info').hover(function(){
    $('.info_conceal').show();
  },function(){
    $('.info_conceal').hide();
  })

  //手机逛的显现和隐藏
  $('.search_shopwt').hover(function(){
    $('.shopwt_conceal').show();
  },function(){
    $('.shopwt_conceal').hide();
  })

  //本店所有商品的显现和隐藏
  $('.nav_allgoods').hover(function(){
    $('.goods_conceal').show();
  },function(){
    $('.goods_conceal').hide();
  })

  $('.goods_conceal').hover(function(){
    $('.goods_conceal').show();
  },function(){
    $('.goods_conceal').hide();
  })

  var len = $('.goods_conceal').children().children().length;
  var $li = $('.goods_conceal').children().children();
  for(let i = 0;i < len;i++){
    $li.eq(i).hover(function(){
      $li.eq(i).css('background','#000');
      $li.eq(i).css('color','#fff');
      $li.eq(i).children($('.lastConceal')).show();
    },function(){
      $li.eq(i).css('background','#f5f5f5');
      $('.lastConceal').hide();
    })
  }

  var lastLen = $('.lastConceal').children().children().length;
  var $lastLi = $('.lastConceal').children().children();
  for(let i = 0;i < lastLen;i++){
    $lastLi.eq(i).hover(function(){
      $lastLi.eq(i).css('background','#333');
      $lastLi.eq(i).parent().parent().parent().css('background','#000');
      $lastLi.eq(i).parent().parent().parent().css('color','#fff');
    },function(){
      $lastLi.eq(i).css('background-color','rgba(0,0,0,0.9)');
    })
  }


  $('.word_li').hover(function(){
    $('.word_conceal').show();
  },function(){
    $('.word_conceal').hide();
  })
  $('.word_conceal').hover(function(){
    $('.word_conceal').show();
    $('.word_li').css('background','#000');
  },function(){
    $('.word_conceal').hide();
    $('.word_li').css('background','#333');
  })

  $('.popup_li').hover(function(){
    $('.jj_content').show();
  },function(){
    $('.jj_content').hide();
  })
  $('.jj_content').hover(function(){
    $('.jj_content').show();
    $('.popup_li').css('background','#000');
  },function(){
    $('.jj_content').hide();
    $('.popup_li').css('background','#333');
  })

  $('.jm_li').hover(function(){
    $('.jm_content').show();
  },function(){
    $('.jm_content').hide();
  })
  $('.jm_content').hover(function(){
    $('.jm_content').show();
    $('.jm_li').css('background','#000');
  },function(){
    $('.jm_content').hide();
    $('.jm_li').css('background','#333');
  })

  $('.td_li').hover(function(){
    $('.td_content').show();
  },function(){
    $('.td_content').hide();
  })
  $('.td_content').hover(function(){
    $('.td_content').show();
    $('.td_li').css('background','#000');
  },function(){
    $('.td_content').hide();
    $('.td_li').css('background','#333');
  })


  var navLen = $('.log_nav').children($('ul')).children().length;
  var $navLi = $('.log_nav').children($('ul')).children();
  for(let i = 0;i < navLen;i++){
    $navLi.eq(i).hover(function(){
      $navLi.eq(i).css('background','#000');

    },function(){
      $navLi.eq(i).css('background','#333');
    })
  }

  var idxLen = $('.idx_conceal').children($('ul')).children().length;
  var $idxLi = $('.idx_conceal').children($('ul')).children();
  for(let i = 0;i < idxLen;i++){
    $idxLi.eq(i).hover(function(){
      $idxLi.eq(i).css('background','#b1c8d7');

    },function(){
      $idxLi.eq(i).css('background','#fff');
    })
  }

})

