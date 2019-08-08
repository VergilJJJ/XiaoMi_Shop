$(function () {
    console.log("qsdasd")
    $.ajax({
        type: "get",
        url: "server/nav-list-tpl.php",
        // dataType: "json",
        // contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success(res) {
            // console.log(res);
            arr = res.split("|");
            // console.log(arr);
            //  获得装有ID和name的arr数组
            for (var i = 0; i < arr.length - 1; i = i + 2) {

                var li = `<li class="nav-item">
                            <span>
                             <a href="#">${arr[i].split(",")[1]}</a>
                            </span>
                             <span>
                            <span>/</span>
                             <a href="#">${arr[i + 1].split(",")[1]}</a>
                                </span>
                            </li>`;
                $(".nav-list").append($(li));
            }
            // console.log(typeof (res));

        }
    })
    var a = { asd };
})