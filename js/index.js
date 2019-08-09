$(function () {
    $.ajax({
        type: "get",
        url: "./server/index.php",
        // dataType: "json",
        success(res) {
            var arr = JSON.parse(res)
            console.log(arr[0]);
            for (var i = 0; i < arr.length; i++) {
                var name = arr[i][1];
                var pirce = arr[i][2];
                var color = arr[i][3];
                var imgText = arr[i][4];
                var imgUrl = arr[i][5];
                var labelA = arr[i][6];
                var labelB = arr[i][7];
                var labelC = arr[i][8];
                var labelD = arr[i][9];
            }

            var strHtml = `
            <div class="m-goods-item-container first pro-item-category">
                            <div class="category-img-container">
                                <img src="https://img.youpin.mi-img.com/800_pic/7154b457fa9590c01df659617c4eab48.png?t=webp" alt="">
                                <p class="pro-desc">3挡风速可调，左右60°摇头，27...</p>
                            </div>
                            <div class="m-goods-pro-tag-con">多色可选</div>
                            <div class="category-box">
                                <div class="m-goods-common-tag-con">
                                    <span class="common-tag common-tag-text" style="background-color: rgb(217, 107, 108);">特价</span>
                                    <span class="common-tag common-tag-text" style="background-color: rgb(217, 107, 108);">加价购</span>
                                </div>
                                <p class="pro-info" title="SOLOVE素乐台式风扇">SOLOVE素乐台式风扇</p>
                                <p class="pro-price">
                                    <span class="pro-unit">¥</span>
                                    <span class="m-num">95</span>
                                </p>
                            </div>
                        </div>`;

        }
    })
})