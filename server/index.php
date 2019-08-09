<?php
$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop");

$query = "set names utf8";
$result = $conn->query($query);

$sql = "SELECT * FROM `ShopList`";
$result = mysqli_query($conn, $sql);

// var_dump($result);
print_r(json_encode(mysqli_fetch_all($result)));
