<?php
$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop"); //连接数据库

$query = "set names utf8";
$result = $conn->query($query);

$json_string = file_get_contents("test.json");  //json 数据
$data = json_decode($json_string, true);
// print_r($data);  //数据打印

echo count($data);
for ($i = 0; $i < count($data); $i++) {
    $ID = $data[$i]["ID"];
    $name = $data[$i]["name"];
    $price = $data[$i]["price"];
    $color = $data[$i]["color"];
    $imgurl = $data[$i]["imgUrl"];
    $imgtext = $data[$i]["imgText"];
    $labelA = $data[$i]["labelA"];
    $labelB = $data[$i]["labelB"];
    $labelC = $data[$i]["labelC"];
    $labelD = $data[$i]["labelD"];

    // $sql = "INSERT INTO `t_jx_goodlist`(`src`, `title`, `pro`, `price`, `goodid`, `type`) VALUES ('$src','$title','$pro','$price','$goodid','$type')";
    $sql = "INSERT INTO `ShopList` (`ID`, `name`, `price`, `color`, `imgText`, `imgUrl`, `labelA`, `labelB`, `labelC`, `labelD`) VALUES ('$ID', '$name', '$price', '$color', '$imgtext', '$imgurl', '$labelA', '$labelB', '$labelC', '$labelD')";
    echo $sql;
    $result = mysqli_query($conn, $sql);
    // var_dump($result);  //查看是否成功

}
mysqli_close($conn); //关闭连接
