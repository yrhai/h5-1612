define(['jquery','template'],function($,template){
    var Yemaijui = function(){
      $('#top').load('../html/header.html');
      $('#footer').load('../html/footer.html');
      $('#mui_mbar').load('../html/reight_tabs.html');
    };
    return Yemaijui;
})
