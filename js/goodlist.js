$(function () {
    var gid = (window.location.href).split("?")[1].split("=")[1];
    $.ajax({
        type: "get",
        data: {
            goodlistID: `${gid}`
        },
        dataType: "json",
        url: "../server/goodlist.php",
        success(res) {
            $("<div>").addClass("typeGoods-item");
            // $("<div>").addClass("m-product-list");
            var box = $("<div>").addClass("m-product-list clearfix");
            for (var i = 0; i < res.length; i++) {
                var html = `
                <div class="pro-item m-tag-a" commoID="${res[i][0]}">
                    <div class="pro-img m-img-hover">
                        <img src="${res[i][1]}" alt="">
                    </div>
                    <div class="pro-tags-con"></div>
                    <p class="pro-info" title="${res[i][2]}">${res[i][2]}</p>
                    <p class="pro-desc" title="${res[i][3]}">${res[i][3]}</p>
                    <p class="pro-price">
                        <span class="pro-unit">¥</span>
                        <span class="m-num">${res[i][4]}</span>
                        <span class="pro-flag">起</span>
                    </p>
                </div>`
                $(html).appendTo($(box));
            }
            $(box).appendTo($(".typeGoods-item"));

            $(".typeGoods-item").appendTo($(".c-goodlist .container"));
        }
    })

    $(".typeGoods-item ").on("click", ".m-product-list .pro-item", function () {
        console.log($(this).attr("commoID"));
    });
})
