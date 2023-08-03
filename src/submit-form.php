<?php
// Retrieve form data from the request
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Define the recipient email address
$recipientEmail = 'recipient@example.com'; // Replace with the actual recipient email address

// // Email subject
// $subject = 'New Contact Form Submission';

// Email content
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n";
$body .= "Message: $message\n";

// Send the email
if (mail($recipientEmail, $subject, $body)) {
  http_response_code(200); // Return HTTP 200 status code for successful email sending
} else {
  http_response_code(500); // Return HTTP 500 status code for email sending error
}
?>
