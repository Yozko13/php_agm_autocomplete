<?php
include_once('../Controllers/MarkersController.php');

header('Access-Control-Allow-Origin: *', 'Content-Type: application/json'); 

$markers = new MarkersController();

echo $markers->getMarkers();