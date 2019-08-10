<?php
$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop");

$query = "set names utf8";
$result = $conn->query($query);

$json_string = file_get_contents("nav-list.json");
$data = json_decode($json_string, true);

for ($i = 0; $i < count($data); $i++) {
    $ID = $data[$i]["ID"];
    $name = $data[$i]["name"];
    $imgurl = $data[$i]["imgUrl"];

    $sql = "INSERT INTO `nav-list` (`ID`, `name`, `imgURl`) VALUES ('$ID', '$name', '$imgurl')";

    $result = mysqli_query($conn, $sql);
}
