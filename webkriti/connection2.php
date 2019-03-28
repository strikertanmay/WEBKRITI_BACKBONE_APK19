<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $conn = mysqli_connect($servername , $username , $password);
    
    //Check Connection
    if(!$conn)
    {
    	die("Connection Failed: ". mysqli_connect_error());
    }
    $sql = mysqli_select_db($conn , "user");
?>