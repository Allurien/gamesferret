<?php
header('Access-Control-Allow-Origin: *');

require_once('mysql_connect.php');

$output = [
    'success' => false
];

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'];

switch($method) {
    case 'GET': 
          include "get/$action.php";      
          break;
    case 'POST': 
          include "post/$action.php";
          break;
//     case 'PUT': 
//           $output['msg'] = 'PUT used';
//           break;
// for future use with user logins
          
    default: 
          $output['error'] ="unknown request method: $method";
}

    $output_json = json_encode($output);
    print($output_json);
?>