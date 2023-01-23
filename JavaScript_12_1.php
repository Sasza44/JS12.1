<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$details = $_POST['details'];

mail('atipikin@meta.ua', 'Замовлення піци', "$name $phone $email $details");
?>