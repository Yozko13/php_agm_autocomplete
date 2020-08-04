<?php
include_once('../Models/Markers.php');

header('Access-Control-Allow-Origin: *', 'Content-Type: application/json');

$request = $_POST;

if($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)) {
    $request = json_decode(file_get_contents('php://input'), true);
}

if(!empty($request)) {
    $markers = new Markers();
    echo $markers->addNewMarker($request['lat'], $request['lng']);
}

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    exit(0);
}