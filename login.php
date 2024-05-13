<?php

// Define your usernames and passwords here
$users = [
    'user1' => 'password1',
    'user2' => 'password2',
    // Add more usernames and passwords as needed
];

// Retrieve submitted username and password
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Check if the submitted username exists and if the password matches
if (array_key_exists($username, $users) && $users[$username] === $password) {
    // Authentication successful
    echo '<h2>Welcome, ' . htmlspecialchars($username) . '!</h2>';
} else {
    // Authentication failed
    echo '<h2>Invalid username or password.</h2>';
}

?>