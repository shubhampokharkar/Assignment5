<?php
include 'connection.php';


$sql = "SELECT * FROM participants";
$query=mysqli_query($conn,$sql);
$num = mysqli_num_rows($query);

$dance_arr = array();

if ($num > 0) {
    while($dance = mysqli_fetch_assoc($query)) {
        $dance_arr[]= $dance;
    }
}

$json_data = json_encode($dance_arr);
file_put_contents('data.json',$json_data)
?>
