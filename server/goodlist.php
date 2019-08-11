<?php


$Sid = $_REQUEST["goodlistID"] * 1000;
$Bid = $Sid + 1000;

$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop");

$query = "set names utf8";
$result = $conn->query($query);

$sql = "SELECT * FROM `goodlist` WHERE ID >= $Sid and ID < $Bid";

$result = mysqli_query($conn, $sql);

print_r(json_encode(mysqli_fetch_all($result)));
