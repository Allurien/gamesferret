<?php
require_once('../../config/newdb.php');
$conn = mysqli_connect($db_cred['host'], $db_cred['user'], $db_cred['password'], $db_cred['database']);
if(!$conn) {
    $output['error'] = 'error connect to DB: '. mysqli_error();
    print(json_encode($output));
}

?>