<?php
$servername = "localhost";
$database = "id9167525_register";
$username = "id9167525_root";
$password = "Daniyal@123";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";

$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
$password = mysqli_real_escape_string($conn, $_REQUEST['password']);
$password = md5($password);
$number = mysqli_real_escape_string($conn, $_REQUEST['number']);
$city = mysqli_real_escape_string($conn, $_REQUEST['city']);

 
$sql = "INSERT INTO registration (name, email, password, number, city) VALUES ('$name', '$email', 
'$password', '$number', '$city')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>