<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$details = $_POST['details'];

mail('philipsevene@gmail.com', $name, $phone, $email, $details);
?>