<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Fetch data from the API
$response = file_get_contents('https://jsonplaceholder.typicode.com/comments?postId=3');
$comments = json_decode($response, true);

echo json_encode($comments);
