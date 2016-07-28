<?php
// Temporarily sends email to me
if (isset($_POST['submit'])) {
	$to				= 'mkosare1@gmail.com'
	$email		= $_POST['email'];
	$contractor = $_POST['contractor'];
	$subject	= $email . '\'s review on ' . $contractor ;
	$message 	= 'Quality:' . $_POST['quality'] . '\r\n' . 
			'Additional information: ' . $POST['add-info'] . '\r\n';
	$headers 	= 'From: ' . $email . '\r\n' .
			'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $message, $headers);
	}
?>