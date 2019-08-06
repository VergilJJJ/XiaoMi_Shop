$(function () {
    // 写一个方法来删除之前保存的cookie
    function delCookie(name) {//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间 
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = name + "=a; expires=" + date.toGMTString() + "; path=/";
    }


    function checkLoging() {
        //  判断cookie里是否有一条name为'keeplogin'的信息
        let checkKeepLogin = false;
        // 获取所有cookie,并存入数组里
        var tempArr = document.cookie.split("; ");
        for (let i = 0; i < tempArr.length; i++) {
            if ((tempArr[i].split("=")[0]) == "keeplogin") {
                // 如果check为true,就是有用户已登陆了
                checkKeepLogin = true;
                var userArr = tempArr[i];
            }

            // console.log(tempArr[i].split("=")[0]);
        }

        //判断登陆状态如果为已登陆
        if (checkKeepLogin == true) {
            // A:将用户名显示在头部
            // 获取username
            var username = userArr.split("=")[1].split("&&")[0].split(":")[1];
            var loging = $("<a>")
            loging.attr("href", "#").css("color", "#846f5f");
            loging.html("瓜皮:" + username + "你好");
            $(".m-no-login").children().remove();
            $(".m-no-login").append(loging);

            // B添加注销用户的功能
            var a = $("<span>");
            a.html("账号注销");
            a.attr("id", "clearuser");
            $(".m-no-login").append(a).css("color", "red");
        }

    };

    // 给退出span添加事件
    function clearUser() {
        $("#clearuser").on("click", function () {
            var clear = false;
            if (confirm("是否退出登陆?")) {
                alert("你已退出!");
                clear = true;
                delCookie("keeplogin");
                location.reload();
            } else {
                clear = false;
            }
        })

    };


    // =================================top部分的js代码=============================
    function RunTop() {
        checkLoging();
        clearUser();

    }
    RunTop();




})
