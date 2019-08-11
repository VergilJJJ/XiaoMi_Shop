<?php
$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop");

$query = "set names utf8";
$result = $conn->query($query);

$json_string = file_get_contents("goodlist.json");
$data = json_decode($json_string, true);

for ($i = 0; $i < count($data); $i++) {
    $ID = $data[$i]["ID"];
    $imgurl = $data[$i]["imgUrl"];
    $p_info = $data[$i]["p_info"];
    $p_desc = $data[$i]["p_desc"];
    $price = $data[$i]["price"];

    $sql = "INSERT INTO `goodlist` (`ID`,`imgurl`,`p_info`,`p_desc`,`price`) VALUES ('$ID','$imgurl','$p_info','$p_desc','$price')";
    $result = mysqli_query($conn, $sql);
}
