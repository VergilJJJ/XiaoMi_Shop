<?php

// echo "test";

// header("Content-type:text/html;charset=utf-8");

$servername = "127.0.0.1"; //MySQL默认为localhost，端口号3306
$username = "root";
$password = "";
$dbname = "xiaomi_shop";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
$query = "set names utf8";
$result = $conn->query($query);

$sql = "SELECT * FROM `nav-list` WHERE ID % 100000 =0";

$result = mysqli_query($conn, $sql);

print_r(json_encode(mysqli_fetch_all($result)));
