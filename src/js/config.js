requirejs.config({
  baseUrl:'../',
  //设置依赖
  shim:{
      'common_jquery':['jquery']
  },
  paths:{
    'jquery':"js/jquery-3.1.1",
    'common_jquery':"./common_jquery",
    'template':'js/template-debug',
    'AjaxBase':'js/AjaxBase',
    'banner':'js/banner',
    'common':'js/common',
    'cookiebase':'js/cookiebase',
    'detalist':'js/detalist',
    'goodslist':'js/goodslist',
    'index':'js/index',
    'login':'js/login',
    'register':'js/register',
    'reight_tabs':'js/reight_tabs',
    'rq_index':'js/rq_index',
    'rq_index1':'js/rq_index1',
  }
})

//require 属于按需加载
require(['jquery','rq_index1'],function($,rq_index1){
  // console.log(rq_index1);
  var path=location.pathname;
  // var url1 = /index/;
    // var url4=/page/;
    // var url2=/midetails/;
    // var url3=/mlogin/;
    // var url5=/menter/;
    if(path=='localhost/html/index.html' ){
        rq_index1.init();
        // console.log(111)

    }
})
