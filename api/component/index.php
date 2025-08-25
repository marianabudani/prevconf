<?php
date_default_timezone_set('America/Argentina/Buenos_Aires');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile;

require_once("../lib/vendor/autoload.php");
require_once("../lib/tools/functions.php");

//Archivos para el envio de mail.
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../configMail/PHPMailer/PHPMailer.php';
require '../configMail/PHPMailer/Exception.php';
require '../configMail/PHPMailer/SMTP.php';

$app = new \Slim\Slim();

$app->get("/hola/:nombre",function($name){
    echo "Hola ".$name;
});

include('../../conection.php');

/*
******************************************
*********  TRAER TODOS LOS LOCALES   *****
******************************************
*/
$app->get("/",function() use ($db,$app){

    $query = $db->query("SELECT * FROM `db_tables` ");
    $usuarios = array();
    while($row=$query->fetch_assoc()){
        $usuarios[]=$row;
    }
    echo json_encode($usuarios);

});

$app->run();