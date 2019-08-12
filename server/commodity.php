<?php

$id = $_REQUEST["gid"];


$conn = new mysqli("127.0.0.1", "root", "", "xiaomi_shop");

$query = "set names utf8";
$result = $conn->query($query);

$sql = "SELECT * FROM `commodity` WHERE ID=$id";

$result = mysqli_query($conn, $sql);

print_r(json_encode(mysqli_fetch_all($result)));