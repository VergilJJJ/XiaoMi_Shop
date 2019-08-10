$(function () {
    // =================专属推荐==================
    $.ajax({
        type: "get",
        url: "./server/index.php",
        // dataType: "json",
        success(res) {
            var arr = JSON.parse(res)
            // console.log(arr[14]);
            // let BOX = $(".m-product-list");
            for (var i = 0; i < arr.length; i++) {
                // i = 14
                var o = {};
                o.name = arr[i][1];
                o.price = arr[i][2];
                o.color = arr[i][3];
                o.imgText = arr[i][4];
                o.imgUrl = arr[i][5];
                o.labelA = arr[i][6];
                o.labelB = arr[i][7];
                o.labelC = arr[i][8];
                o.labelD = arr[i][9];

                var div = $("<div>");
                $(div).addClass("m-goods-item-container first pro-item-category");

                var divA = $("<div>");
                $(divA).addClass("category-img-container");
                var imgurl = $("<img>");
                $(imgurl).attr("src", o.imgUrl);
                var imgtext = $("<p>");
                $(imgtext).addClass("pro-desc").html(o.imgText);
                $(divA).append($(imgurl)).append($(imgtext));

                var divB = $("<div>");
                if (o.color != "") {
                    $(divB).addClass("m-goods-pro-tag-con").html(o.color);
                }

                var divC = $("<div>");
                $(divC).addClass("category-box");
                var divC1 = $("<div>").addClass("m-goods-common-tag-con");


                if (o.labelA != "") {
                    $("<span>").addClass("common-tag common-tag-text").css("background-color", "rgb(217, 107, 108)").html(o.labelA).appendTo(divC1);
                }
                if (o.labelB != "") {
                    $("<span>").addClass("common-tag common-tag-text").css("background-color", "rgb(217, 107, 108)").html(o.labelB).appendTo(divC1);
                }
                if (o.labelC != "") {
                    $("<span>").addClass("common-tag common-tag-text").css("background-color", "rgb(217, 107, 108)").html(o.labelC).appendTo(divC1);
                }
                if (o.labelD != "") {
                    $("<span>").addClass("common-tag common-tag-text").css("background-color", "rgb(217, 107, 108)").html(o.labelD).appendTo(divC1);
                }

                $(divC1).appendTo($(divC));

                $("<p>").addClass("pro-info").attr("title", o.name).html(o.name).appendTo($(divC));

                var Pc = $("<p>").addClass("pro-price");
                $("<span>").addClass("pro-unit").html("¥").appendTo($(Pc));
                $("<span>").addClass("m-num").html(o.price).appendTo($(Pc));
                $("<span>").addClass("pro-flag").html("起").appendTo($(Pc));
                $(Pc).appendTo($(divC));



                $(div).append($(divA)).append($(divB)).append($(divC));

                $(".m-product-list").append($(div));
            }



        }
    })
})