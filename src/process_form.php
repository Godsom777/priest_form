<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Access form data using $_POST
    $email = $_POST['email'];
    $firstName = $_POST['firstName'];
    $middleName = $_POST['middleName'];
    $homeAddress = $_POST['homeAddress'];
    $parishAddress = $_POST['parishAddress'];
    $phoneNumber = $_POST['phoneNumber'];
    $homeParish = $_POST['homeParish'];
    $LGA = $_POST['LGA'];

    // Process and validate the data 
    // ...

    // Handle successful processing (e.g., store data in a database, send an email)
    echo 'Form data processed successfully!';

    // Handle errors (e.g., send an error response)
} else {
    echo 'Invalid request method.';
}