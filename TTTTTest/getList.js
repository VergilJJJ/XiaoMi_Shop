var lis = $(".s_goods_list li");
var arrT = [];
lis.each(function (index, ele) {
    var o = {};
    o.src = "https" + $(ele).children("a").find("img").attr("src");
    o.y_price = $(ele).find(".fenqi_price").text();
    o.s_price = $(ele).find(".s_price").children().html();
    o.name = $(ele).find(".s_goods_name").html();
    o.stitle = $(ele).find(".goods_sale").children("span").html();
    o.sale = $(ele).find(".goods_sale").children("em").html();
    o.s_shop = $(ele).find(".s_shop").html();

    arrT.push(o)
})
console.log(arrT);

var list = $(".pro-item-category")
var arrT = [];
var ID = 12300;
list.each(function (index, ele) {
    var o = {};
    ID += 1;
    o.ID = ID;
    o.color = $(ele).children(".m-goods-pro-tag-con").html();
    o.imgUrl = $(ele).children(".category-img-container").find("img").attr("src");
    o.imgText = $(ele).children(".category-img-container").find("p").html();
    o.name = $(ele).children(".category-box").find("p").attr("title");
    o.price = $(ele).children(".category-box").find(".m-num").html();
    o.labelA = $(ele).children(".category-box").find(".common-tag").eq(0).html();
    o.labelB = $(ele).children(".category-box").find(".common-tag").eq(1).html();
    o.labelC = $(ele).children(".category-box").find(".common-tag").eq(2).html();
    o.labelD = $(ele).children(".category-box").find(".common-tag").eq(3).html();
    arrT.push(o)
})
console.log(arrT);

var list = $(".cate-detail-list").eq(1).children(".m-tag-a");
var arrT = [];
var ID = 200000;
list.each(function (index, ele) {
    var o = {};
    ID += 1;
    o.ID = ID;
    o.name = $(ele).find("span").html();
    o.imgUrl = $(ele).find("img").attr("src");
    arrT.push(o)
})
console.log(arrT);