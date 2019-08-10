<?php

$Sid =  $_REQUEST["id"];
$Bid = $Sid + 100000;
$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop");

$query = "set names utf8";
$result = $conn->query($query);

$sql = "SELECT * FROM `nav-list` WHERE ID >= $Sid and ID < $Bid";

$result = mysqli_query($conn, $sql);

print_r(json_encode(mysqli_fetch_all($result)));
