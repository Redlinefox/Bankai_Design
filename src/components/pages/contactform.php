<?php

  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "aric@bankaidesign.com";
  $headers = "From: ".$mailFrom;
  $email_body = "Bankai Designs recieved an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $email_body, $headers);
  header("Location: index.html");

?>