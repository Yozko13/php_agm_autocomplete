<?php

//include 'config.php';

//$sel = mysqli_query($con,"select * from users");
$data = array('markers' => [
      ['lat' => 42.1199133, 'lng' => 24.7936975],
      ['lat' => 42.1299133, 'lng' => 24.7836975],
      ['lat' => 42.1399133, 'lng' => 24.7736975],
      ['lat' => 42.1499133, 'lng' => 24.7636975],
]);

echo json_encode($data);