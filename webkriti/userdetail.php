<html>
<body>
	Your First name is  <?php print( $_POST["firstname"]) ?><br><br>
	Your email is  <?php echo $_POST ["mail"] ?><br><br>
	Your Date of Birth is  <?php echo $_POST["dob"] ?><br><br>
	Your Gender is  <?php echo $_POST["gender"] ?><br><br>
	Your Mobile Number is   <?php echo $_POST["number"] ?><br><br>
	Your Password is  <?php echo $_POST["passcode"] ?><br><br><br><br><br>
</body>
</html>
<?php
include('connection2.php');
$username = $_POST["firstname"];
$email = $_POST ["mail"];
$dob = $_POST["dob"];
$gender = $_POST["gender"];
$number = $_POST["number"];
$pass = $_POST["passcode"];
$query = "INSERT into h_user VALUES ('$username','$email','$dob','$gender', '$number' ,'$pass') ";

if(mysqli_query($conn, $query))
{
	echo "New Record Successfully Added";
}
else
{
	echo "error: ".$sql. "<br>".mysqli_error($conn);
}

?>