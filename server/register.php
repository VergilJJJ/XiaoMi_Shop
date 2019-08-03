<?php
// 连接数据库---表
$con = mysqli_connect("127.0.0.1","root","","xiaomi_shop");
// 把数据注入数据库中
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];

$sql = "INSERT INTO `user` (`username`, `password`) VALUES ('$username', '$password')";
// echo $sql;
$result = mysqli_query($con,$sql);

$login = array("status"=>"","msg"=>"");
//数据库里username设定成唯一,如果有相同就报错
if($result){
    $login["status"] = "success";
    $login["msg"] = "恭喜你，注册成功！点击确认后为你跳转至登陆页";
}else{
    $login["status"] = "error";
    $login["msg"] = "我觉得不行！这个手机已经有人用了!";
}
echo json_encode($login,true);
?>