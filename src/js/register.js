 onload = function(){
    document.getElementById("registerSubmit").onclick = function(){
        var name = document.getElementById("userName").value;
        var psw = document.getElementById("password").value;
        var sCookie = getCookie('user');
        var aUser = sCookie?JSON.parse(sCookie):[];
        if(aUser.length<=0){
            alert('用户没有注册');
        }else{
            //判断输入的用户名和密码是否存在当前cookie中
            var bool = false; //用户不存在
            for(var i =0;i<aUser.length;i++){
                //{name：jjk，psw：12345}
                //判断用户名是否存在  用户的密码是否正确
                if(aUser[i].name == name && aUser[i].psw == psw){
                    bool = true;//用户存在

                    //alert('用户登录成功');
                }
            }

            if(bool){
                //当前的登录信息存在cookie里面
                var user = {"user":name};
                setCookie('login',JSON.stringify(user),7,'/')
                location.href="http://localhost/src/html/index.html"
                alert('用户登录成功');

            }else{
                alert('用户信息错误');
            }
        }

    }
}

$(function(){
    $('.hd_mm').on('click',function(){
        $('.conter_text_mm').hide();
        $('.conter_text_sm').show();
    })
    $('.hd_sm').on('click',function(){
        $('.conter_text_sm').hide();
        $('.conter_text_mm').show();
    })
})
