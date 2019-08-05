$(function () {



    $("#regbtn").on("click", function () {
        var phone = $("#phone").val();
        var pwdA = $("#passwordA").val();
        var pwdB = $("#passwordB").val();
        // 设定默认值
        var pwd = false;
        var phoneN = false;
        // 设定手机和密码的正则
        let regPhone = /^1[3-9]\d{9}$/; //手机
        let regPwd = /^\w{6,20}$/;

        // 判断协议按钮是否有点上
        if (check == false) {
            $("#errorMsg").html("!!!!请同意协议").css("color", "red");
            $("#checkbox").css("border", "solid 3px red");
        } else {
            $("#errorMsg").html("");
            $("#checkbox").css("border", "solid 3px #fff");
        }

        // 判断密码是否一致 并且不为空
        if (pwdA != pwdB || pwdA == "") {
            $("#errorMsg").html("!!!!两次输入的密码不相同").css("color", "red");
            $("#passwordA,#passwordB").css("border", "red 3px solid");
        } else if (!regPwd.test(pwdA)) {
            $("#errorMsg").html("!!!!密码不符合规则").css("color", "red");
            $("#passwordA,#passwordB").css("border", "red 3px solid");
        } else {
            pwd = true;
            $("#passwordA,#passwordB").css("border", "#555 1px solid");
            $("#errorMsg").html("");
        };


        // 判断手机号码是否为空
        if (phone == "") {
            $("#errorMsg").html("!!!!手机号码为空").css("color", "red");
            $("#phone").css("border", "red 3px solid");
        } else if (!regPhone.test(phone)) {
            $("#errorMsg").html("!!!!手机号码不符合规则").css("color", "red");
            $("#phone").css("border", "red 3px solid");
        } else {
            phoneN = true;
            $("#phone").css("border", "#555 1px solid");
        }



        if (pwd == true && phoneN == true && check == true) {
            console.log("账号密码都正确");
            $.ajax({
                type: "get",
                data: {
                    "username": `${phone}`,
                    "password": `${pwdA}`
                },
                dataType: "json",
                url: "../server/register.php",
                success(res) {

                    if (res.status == "error") {
                        $("#phone").css("border", "red 3px solid");
                        $("#errorMsg").html(res.msg).css("color", "red");
                    } else {
                        setTimeout(function () {
                            window.location.replace("../tpl/login.html");
                        }, 3000)
                        alert(res.msg);
                    }
                }

            })
        }

    })
    // 给协议多选框添加选中条件
    var check = false;
    $("#keep").on("click", function () {
        // return check = $("#keep").prop("checked")
        // console.log($("#keep"));
        console.log($("#keep").prop("localName"));
    })
})