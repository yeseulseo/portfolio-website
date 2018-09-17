<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];


  $email_from = 'yeseulseo24@gmail.com';

  $email_subject = "New Message Arrived";

  $email_body = "User Name: $name./n".
                    "User Email: $visitor_email./n".
                        "User Message: $message./n";

  $to = "yeseulseo24@gmail.com";

  $headers = "From: $email_from r/n/";

  $headers .= "Reply-To: $visitor_email r/n/";

  mail($to,$email_submect,$email_body,$headers);

  header("Location: index.html");
?>
