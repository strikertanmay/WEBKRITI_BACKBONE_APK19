<html>
<head>
	<title>Ambulance Booking</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/v4-shims.css">
	<style>
           .backimage{
                      background-image:url("laptop.jpg");
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
                   width:220px;
                   }
            .user {
                  font-family: Helvetica;
                  font-size:  1.2vw;
                  }
           .heading{
                     font-family: Helvetica;
                     font-size: 1.8vw;
                   }
            .submit{
            	   border: 2px solid black;
                   height:40px;
                   width:180px;
                   margin-left:  25px;
                   border-radius: 6px;
                   }
            .container{
                        position:relative;
                        border:4px solid black;
                        text-align:left;
                        top:100px;
                        left:450px;
                        width: 350px;
                        height: 300px; 
                        border-radius: 20px;
                        padding: 30px;
                        background-color:rgba(190,190,190,0.7);
                      }
    </style>
<body>
<?php 
    include('connection1.php');
	$email = $_POST["mail"];
	$query = "SELECT * from h_staff where mail = '$email' ";
	 
	$result = mysqli_query($conn , $query);
	if(mysqli_num_rows( $result ) == 1)
	{
	  $user = mysqli_fetch_assoc($result);	
	  $mail_id = $user['mail'];
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
	<label><?= $mail_id ?></label>
</form>
</div>
</body>
</html>