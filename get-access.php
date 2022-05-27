<?php
	$name= $_POST['name'];
	$visitor_email= $_POST['email'];

	
	
	$email_from='info@officialpmcservices.com';
	$email_subject='New Email Submission';
	
	$email_body="User Name: $name.\n".
				"User Email: $visitor_email.\n".
				
$to= 'offehfai@gmail.com';

$headers= "From $email_from \r\n";

$headers .="Reply to $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html");
	




?>