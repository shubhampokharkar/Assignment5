<?php
require "connection.php";

$Name= $_POST['Name'] ?? null;
$Email= $_POST['Email'] ?? null;
$Mobile_no= $_POST['Mobile_no'] ?? null;
$Age= $_POST['Age'] ?? null;
$Gender= $_POST['Gender'] ?? null;
$Performance= $_POST['Performance'] ?? null;
$No_of_members= $_POST['No_of_members'] ?? null;
$Type= $_POST['Type'] ?? null;
$Comment= $_POST['Comment'] ?? null;

$sql = "insert into participants(Name,Email,Mobile_no,Age,Gender,Performance,No_of_members,Type,Comment) values(?,?,?,?,?,?,?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssississ",$Name,$Email,$Mobile_no,$Age,$Gender,$Performance,$No_of_members,$Type,$Comment);

if($stmt->execute())
{
    header("location:index.php");
}
else{
    header("location:index.php");  
}
?>