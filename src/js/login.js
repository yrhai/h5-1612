$(function(){
  var $phone =/^1[34578]\d{9}$/;
  var $code = /\w{6,}$/;
  var name,
  psw ;
  var bool1=bool2=bool3=false;
  var $icode=$(".icode");
  var $refresh=$(".refresh");
  var $authCode=$("#code");
  $refresh.click(function(){
   var str = '';
   var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
   for(var i = 0 ; i < 4 ; i ++ ){
    str += ''+arr[Math.floor(Math.random() * arr.length)];
  }
  $icode.html(str);
  })
  $authCode.blur(function(){
    if($authCode.val()==$icode.html()){
      bool3=true;
      $(this).siblings(".error").html("验证码输入正确");
    }else{
    $(this).siblings(".error").html("验证码输入错误");
    }
  })


  $("#userName").blur(function(){

    if ($phone.test($("#userName").val())==false) {
      $(this).siblings(".error").html("请输入正确的手机号码");
    }else{
      $(this).siblings(".error").html("手机号码正确");
      bool1=true;

    }
  })
  $("#password").blur(function(){
    if ($code.test($("#password").val())==false) {
      $(this).siblings(".error").html("密码不得少于六位");
    }else{
      $(this).siblings(".error").html("密码设置成功");
      bool2=true;

    }
  })


  $("#Submit").click(function () {

   if(bool1&&bool2){
    psw=$("#password").val();
    name=$("#userName").val();
        var sCookie = getCookie('user') //设置cookie
        var aUser = sCookie?JSON.parse(sCookie):[];
        var bool = true;
         for(var i=0;i<aUser.length;i++){
            if(aUser[i].name==name){
            //用户已注册
              bool=false;
              alert('用户已注册');
            }else{
            //不能添加用户
            }
          }

         for(var i =0 ;i<aUser.length;i++){
            //aUser[i]
            if(aUser[i].name == name){
              bool = false;
             }
            }
            if(bool){
            //用户没有注册
            //将新用户压进用户数组
            aUser.push({"name":name,"psw":psw});
            alert('注册成功')
            //修改cookie 为最新

            location.href="http://localhost/project/src/html/register.html";
              setCookie('user',JSON.stringify(aUser),10,'/');
            }else
              setTimeout(function(){
            location.reload();
            },2000)
      }
  })

})

