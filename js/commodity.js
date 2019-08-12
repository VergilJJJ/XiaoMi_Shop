$(function () {
    var gid = (window.location.href).split("?")[1].split("=")[1];
    console.log(gid);
    $.ajax({
        type: "get",
        data: {
            gid: gid
        },
        dataType: "json",
        url: "../server/commodity.php",
        success(res) {
            console.log(res[0]);
            $(".good-name").html(res[0][1]);
            $(".price .value").html(res[0][2]);
            var url = "w=166&amp;h=166&amp;crop=a_0_95_1080_1080&amp;t=webp";
            var Burl = res[0][3] + "w=1080&h=1080";
            res[0][3] += res[0][3] + url;
            res[0][4] += res[0][4] + url;
            res[0][5] += res[0][5] + url;
            res[0][6] += res[0][6] + url;
            res[0][7] += res[0][7] + url;
            res[0][8] += res[0][8] + url;
            $(".thumb-pic").eq(0).find("img").attr("src", res[0][3]);
            $(".thumb-pic").eq(1).find("img").attr("src", res[0][4]);
            $(".thumb-pic").eq(2).find("img").attr("src", res[0][5]);
            $(".thumb-pic").eq(3).find("img").attr("src", res[0][6]);
            $(".thumb-pic").eq(4).find("img").attr("src", res[0][7]);
            $(".thumb-pic").eq(5).find("img").attr("src", res[0][8]);

            $(".main").find("img").attr("src", Burl);
        }
    })
})