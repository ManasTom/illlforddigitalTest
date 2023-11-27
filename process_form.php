<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "contact@illforddigital.com, illforddigital@gmail.com"; // Your email address
    $subject = "New form submission";
    $headers = "From: $email";

    $email_body = "You have received a new message from $name.\n".
                  "Email address: $email\n".
                  "Mobile Number: $phone\n".
                  "Message:\n $message";

    // Use mail() function to send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
