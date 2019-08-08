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

if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}


// $sql2 = "INSERT INTO `abc`(`username`) VALUES ('奥斯卡级盗汗')";
$sql = "SELECT ID,Name FROM `nav-list`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出数据
    while ($row = $result->fetch_assoc()) {
        // var_dump($row);
        // $a = "ID:" . $row["ID"] . ", Name:" . $row["Name"] . "\n";
        // // $b = array($row["ID"] . $row["Name"]);
        // // $b . push($a);
        // $data = array("ID" => $row["ID"], "Name" => $row["Name"]);
        // echo $data["ID"] . $data["Name"] . "\n";

        $a = array();
        $json = ($row["ID"] .",". $row["Name"] . "|");

        echo $json . "\n";
        // array_push($a, $json);
        // // print_r($a);
        // echo json_encode($json, true) . "\n";
        // var_dump($a);
    }
} else {
    echo "0 结果";
}
$conn->close();
