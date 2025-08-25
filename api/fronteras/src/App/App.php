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

require __DIR__ . "./../../../lib/vendor/autoload.php";

// use \Psr\Http\Message\ServerRequestInterface as Request;
// use \Psr\Http\Message\ResponseInterface as Response;
// use Slim\Http\UploadedFile;


// require_once(__DIR__ . "./../../../lib/tools/functions.php");

//Archivos para el envio de mail.
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require __DIR__ . "./../../../configMail/PHPMailer/PHPMailer.php";
// require __DIR__ . "./../../../configMail/PHPMailer/Exception.php";
// require __DIR__ . "./../../../configMail/PHPMailer/SMTP.php";

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

include(__DIR__ . "./../../../../conection.php");



require __DIR__ . "/Services.php";
require __DIR__ . "/Routes.php";


$app->run();