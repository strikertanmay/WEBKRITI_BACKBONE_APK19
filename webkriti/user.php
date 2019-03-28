<html>
<head>
	<title>Ambulance Booking</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/v4-shims.css">
	<style>
          .backimage{
                      background-image:url("a.jpg");
                      height:100%;
                      background-position:center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      padding:0;
                      margin:0;  
                   }
         .username{
          	       border: 2px solid black;
                   padding: 10px;
                   margin-left:  10px;
                   border-radius: 5px;
                   width:290px;
                   }
            .user {
                  font-family: Helvetica;
                  font-size:  1.2vw;
                  }
           .heading{
                     font-family: Helvetica;
                     font-size: 3vw;
                   }
          .heading1{
                     font-family: Helvetica;
                     font-size: 2vw;
                     text-align:center;
                    }
            .submit{
            	   border: 2px solid black;
                   height:40px;
                   width:140px;
                   margin-left:  25px;
                   border-radius: 6px;
                   }
            .submit1{
            	   border: 2px solid black;
                   height:40px;
                   width:140px;
                   margin-left:  25px;
                   border-radius: 6px;
                   float:left;
                   }
            .reset{
            	   border: 2px solid black;
                   height:40px;
                   width:140px;
                   margin-left:  25px;
                   border-radius: 6px;
                   float:right;
                   }
            .container{
                        position:relative;
                        border:4px solid black;
                        text-align:left;
                        top:5px;
                        left:800px;
                        width: 360px;
                        height: 570px;
                        border-radius: 10px;
                        padding: 30px;
                        background-color:rgba(190,190,190,0.7);
                      }
    </style>
  </head>
<body>
<?php 
    include('connection2.php');
	$name = $_POST["user"];
	$email = $_POST["mail"];
    $pass = $_POST["passcode"];
	$query = "SELECT * from users where username = '$name' AND password = '$pass' ";
	 
	$result = mysqli_query($conn , $query);
	if(mysqli_num_rows( $result ) == 1)
	{
		$user = mysqli_fetch_assoc($result);
		$name =  $user['username'];
	}
	else
	{
		echo 'User is not Valid';
	}
?>
<div class = "backimage">
<form class = "container">
	<legend class = "heading">Welcome to IIIT-A Healthcentre</legend>
	<br><br>
	<label class = "username">Username : <?= $name ?></label>
	<br><br>
</form>
</div>
</body>
</html>