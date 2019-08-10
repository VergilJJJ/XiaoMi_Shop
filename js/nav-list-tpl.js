$(function () {

    $.ajax({
        type: "get",
        url: "server/nav-list-tpl.php",
        dataType: "json",
        // contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success(res) {
            // console.log(res);
            //  获得装有ID和name的arr数组'
            for (var i = 0; i < res.length - 1; i = i + 2) {

                var li = `<li class="nav-item">
                            <span>
                             <a href="#" gid="${res[i][0]}">${res[i][1]}</a>
                            </span>
                             <span>
                            <span>/</span>
                             <a href="#" gid="${res[i + 1][0]}">${res[i + 1][1]}</a>
                                </span>
                            </li>`;
                $(".nav-list").append($(li));
            }
        }
    })

    // 添加事件,鼠标经过li获取里面两个a标签的gid属性
    $(".nav-list ").on("mouseenter", ".nav-item", function () {
        $(".nav-detail").empty();
        var Aid = $(this).children("span").eq(0).find("a").attr("gid");
        var Bid = $(this).children("span").eq(1).find("a").attr("gid");
        console.log(Aid, Bid);
        $.ajax({
            type: "get",
            data: { id: Aid },
            url: "server/nav-list-tpl2.php",
            dataType: "json",
            success(res) {
                var div = $("<div>").addClass("cate-detail-group");
                $("<p>").addClass("title").html(res[0][1]).appendTo($(div));
                var ul = $("<ul>").addClass("cate-detail-list");
                console.log($(div)[0]);
                for (var i = 1; i < res.length; i++) {
                    var html = `<li class="m-tag-a">
                    <img src="${res[i][2]}"
                            alt="${res[i][1]}">
                        <span>${res[i][1]}</span>
                    </li>`;
                    $(html).appendTo($(ul));
                    // console.log(html + "第" + i + "次");
                }
                $(ul).appendTo($(div));
                $(div).appendTo($(".nav-detail"));
            }
        });
        $.ajax({
            type: "get",
            data: { id: Bid },
            url: "server/nav-list-tpl2.php",
            dataType: "json",
            success(res) {
                var div = $("<div>").addClass("cate-detail-group");
                $("<p>").addClass("title").html(res[0][1]).appendTo($(div));
                var ul = $("<ul>").addClass("cate-detail-list");
                console.log($(div)[0]);
                for (var i = 1; i < res.length; i++) {
                    var html = `<li class="m-tag-a">
                    <img src="${res[i][2]}"
                            alt="${res[i][1]}">
                        <span>${res[i][1]}</span>
                    </li>`;
                    $(html).appendTo($(ul));
                    // console.log(html + "第" + i + "次");
                }
                $(ul).appendTo($(div));
                $(div).appendTo($(".nav-detail"));
            }
        })
    })
    // $(".nav-list ").on("mouseleave", ".nav-item", function () {
    //     $(".nav-detail").css("display", "none");
    // })

})