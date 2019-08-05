$(function () {
    let imgCodeText = "";

    // let capCode = $("captchaCode");
    // 1.将随机验证码插件装进canvas
    (new Captcha({ fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        //将验证码存到全局变量
        imgCodeText = r;

    });

    // 00点击开始验证
    $("#logbtn").on("click", function () {
        // 获得输入的验证码
        checkCap();
        checkPassword();
        checkPhone();
        var username = $("#username").val();
        var password = $("#userpwd").val();
        // if (checkCap() == checkPassword() == checkPhone() == true) {
        $.ajax({
            type: "get",
            data:
            {
                username: `${username}`,
                password: `${password}`
            }
            ,
            dataType: "json",
            url: "../server/login.php",
            success: function (res) {
                console.log(res.status);
                if (res.status == "error") {
                    if (res.msg == "登录失败：该用户不存在") {
                        $("#username").css("border", "3px solid red");
                        // $("#userpwd").css("border", "1px solid #999");
                        $("#errorMsg").html("登录失败：该用户不存在");
                    } else {
                        $("#userpwd").css("border", "3px solid red");
                        // $("#username").css("border", "1px solid #999");
                        $("#errorMsg").html("登录失败：密码不正确！");
                    }
                } else if (res.status == "success") {
                    $("#username").css("border", "3px solid green");
                    $("#userpwd").css("border", "3px solid green");
                    alert("登陆成功");
                    // 判断是否有勾选10天免登陆
                    if ($("#keep").prop("checked") == true) {
                        // 如果有勾选,将账号密码存到cookie并设置十天后过期
                        var time = new Date();
                        time.setDate(time.getDate() + 10);
                        document.cookie = "keeplogin" + "=" + `username=${username}&&password=${password}` + ";expires=" + time;
                    }
                }
            }
        })


    })

    // 01-A判断输入的验证码是否正确
    function checkCap() {
        // 01-B判断
        function judgeCap() {
            return $("#captchaCode").val().toLowerCase() == imgCodeText.toLowerCase();
        }
        let inputCap = $("#captchaCode").val();
        let cap = judgeCap();
        // 01-C 如果是错误就弹出错误信息
        if (cap == false) {
            $("#captchaCode").css("border", "3px solid red");
            // 01-D 判断是否为空值
            if (inputCap == "") {
                $("#errorMsg").html("!!!!验证码为空");
                // 01-d 如果是返回错误
                return cap;
            }
            // 01-E 非空值就报错
            $("#errorMsg").html("!!!!验证码错误");
            return cap;
        } else {
            // 01—F 如果正确就添加颜色 并且返回正确
            $("#captchaCode").css("border", "2px solid green");
            $("#errorMsg").html("");
            return cap;
        }
    }

    //02检查手机号码是否正确的方法
    function checkPhone() {
        let regPhone = /^1[3-9]\d{9}$/; //手机
        let userPhone = $("#username").val();
        // 02-A判断手机号码是否符合正则
        if (userPhone == ""
        ) {
            $("#username").css("border", "3px solid red");
            $("#errorMsg").html("!!!!手机号码空的");
            return false;
        } else if (regPhone.test(userPhone) == false) {
            $("#username").css("border", "3px solid red");
            $("#errorMsg").html("!!!!手机号码格式不对");
            return false;
        } else if (regPhone.test(userPhone) == true) {
            $("#username").css("border", "3px solid green");
            return true;
        }
    }

    //03检查密码是否正确的方法
    function checkPassword() {
        let regPwd = /^\w{6,20}$/;
        let userPassword = $("#userpwd").val();
        // 02-A判断手机号码是否符合正则
        if (userPassword == ""
        ) {
            $("#userpwd").css("border", "3px solid red");
            $("#errorMsg").html("????密码空的");
            return false;
        } else if (regPwd.test(userPassword) == false) {
            $("#userpwd").css("border", "3px solid red");
            $("#errorMsg").html("!!!!密码格式不对");
            return false;
        } else if (regPwd.test(userPassword) == true) {
            $("#userpwd").css("border", "3px solid green");
            return true;
        }
    }

    //04实现各个input框的失去焦点判断
    $("#username").blur(function () {
        checkPhone()
    });

    $("#userpwd").blur(function () {
        checkPassword()
    })

    $("#captchaCode").blur(function () {
        checkCap()
    })
})