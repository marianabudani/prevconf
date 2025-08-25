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

$app = new \Slim\Slim();

$app->get("/hola/:nombre",function($name){
    echo "Hola ".$name;
});

include('../../conection.php');

/*******************************************
 ****    TRAER TODOS LOS REGISTROS     ****
*******************************************/
$app->get("/",function() use ($db,$app){

    $query = $db->query("SELECT * FROM `db_setting` ");
    $db_setting = array();

    while($row=$query->fetch_assoc()){
        $db_setting[]=$row;
    }

    echo json_encode(array("status"=>0, "cantidad"=>count($db_setting), "content"=>$db_setting));

});

$app->get("/framework/all",function() use ($db,$app){

    $query = $db->query("SELECT * FROM `sp_framework` ");
    $db_setting = array();

    while($row=$query->fetch_assoc()){
        $db_setting[]=$row;
    }

    echo json_encode(array("status"=>0, "cantidad"=>count($db_setting), "content"=>$db_setting));

});

/*******************************************
*****     MODIFICAR PARAMETROS        ******
*******************************************/
$app->post("/modify",function() use ($db, $app){

    $resource = $app->request->post("resource");//Nombre físico la tabla.
    if(is_null($app->request->post("resource"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [resource] es obligatorio"));
        exit;
    } 

    $attribute = $app->request->post("attribute");//Nombre físico del atributo a modificar.
    if(is_null($app->request->post("attribute"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [attribute] es obligatorio"));
        exit;
    }
    
    $value = $app->request->post("value");//Nombre físico del atributo a modificar.
    if(is_null($app->request->post("value"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [value] es obligatorio"));
        exit;
    }     



    //echo json_encode(array("status"=>0,"messege"=>"UPDATE ".$resource." SET $attribute = '".$value."' WHERE id = '1' "));
    //exit;

    $query = $db->query("UPDATE ".$resource." SET $attribute = '".$value."' WHERE id = '1' ");
    if($query){
        $messege = 'Parámetro actualizado con éxito.';
        $status=0;
    }else{
        $status=1;
        $messege = $db->error;
    }

    echo json_encode(array("status"=>$status,"messege"=>$messege));
    exit;

});

/*******************************************
**********    PICTURE UPDATE     ***********
*******************************************/
$app->post("/picture",function() use ($db, $app){

    function generateRandom($longitud) {
        $key = '';
        $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
        $max = strlen($pattern)-1;
        for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
        return $key;
    }

    $id_image = $app->request->post("id_image");
    $base_url = $app->request->post("folder");
    $name = $_FILES['file']['name'];

    if(is_null($id_image)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [id_image] es obligatorio..."));
        exit;
    }
    if(empty($id_image)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [id_image] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }    

    if(is_null($base_url)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [base_url] es obligatorio"));
        exit;
    }
    if(empty($base_url)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [base_url] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    } 

    if(is_null($name)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [file] es obligatorio"));
        exit;
    }
    if(empty($name)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [file] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }

    $baseName =  basename($_FILES['file']['tmp_name']);
    $size =      $_FILES['file']['size'];
    $type =      $_FILES['file']['type'];
    $tmpName =   $_FILES['file']['tmp_name'];

    if($type != "image/png"){
        if($type != "image/jpeg"){
            if($type != "image/jpg"){
                echo json_encode(array("status"=>1,"messege"=>"Las imágenes soportadas por el momento son (JPG | JPEG | PNG). En su lugar estás enviando ".$type));
                exit;
            }
        }
    }

    $firts = substr($base_url, 0, 1);
    $last = substr($base_url, -1, 1);
    if($firts!="/"){
        echo json_encode(array("status"=>1,"messege"=>"Error en el formato. Debe comenzar con el siguiente símbolo: / y no con ".$firts));
        exit;
    }

    if($last!="/"){
        echo json_encode(array("status"=>1,"messege"=>"Error en el formato. Debe finalizar con el siguiente símbolo: / y no con ".$last ));
        exit;
    }

    /*=============================================
    DEFINIMOS LAS MEDIDAS
    =============================================*/
    list($ancho, $alto) = getimagesize($tmpName);	

    $nuevoAncho = 256;
    $nuevoAlto = 256;

    /*====================================================================
    CREAMOS EL DIRECTORIO DONDE VAMOS A GUARDAR LA FOTO DE LA MULTIMEDIA
    ====================================================================*/
    $directorio=$_SERVER['DOCUMENT_ROOT'].$base_url;

    /*=============================================
    PRIMERO PREGUNTAMOS SI EXISTE UN DIRECTORIO DE MULTIMEDIA CON ESTA RUTA
    =============================================*/
    if (!file_exists($directorio)){
        mkdir($directorio, 0755);
    }

    /*=============================================
    DE ACUERDO AL TIPO DE IMAGEN APLICAMOS LAS FUNCIONES POR DEFECTO DE PHP
    =============================================*/
    $img_original = imagecreatefromstring(
        file_get_contents($tmpName)
    );
    if ($img_original === false) {
        die('Formato de imagen no soportado');
    }
    
    $prefix=generateRandom(3);
    $finfix=generateRandom(2);
    $info = new SplFileInfo($name);
    $ext=$info->getExtension();
    
    
    if($id_image=="ico-file"){
        $max_ancho = 97;
        $max_alto = 23;
        $rutaMultimedia = $directorio."logo-inverse.png";
    }else{
        $max_ancho = 1600;
        $max_alto = 2400;
        $rutaMultimedia = $directorio.$prefix."_profile_".$finfix.".".$ext;
    }
    

    list($ancho, $alto) = getimagesize($tmpName);
    $x_ratio = $max_ancho / $ancho;
    $y_ratio = $max_alto / $alto;
    $ancho_final = $max_ancho;
    $alto_final = $max_alto;

    /* Creamos la imagen de destino */
    $tmp = imagecreatetruecolor($ancho_final, $alto_final);
    /* Alojamos el color de fondo y rellenamos con él la imagen */
    $fondo = imagecolorallocate($tmp, 255, 255, 255);
    imagefill($tmp, 0, 0, $fondo);
    /* Con "true" forzamos la mezcla de la imagen usando la transparencia */
    imagealphablending($tmp, true);
    /* Copiamos la imagen con mezcla de transparencia */
    imagecopyresampled(
    $tmp, $img_original,
    0, 0, 0, 0,
    $ancho_final,
    $alto_final,
    $ancho,
    $alto
    );

    /* Damos salida a la imagen en formato JPEG (100% implica pérdida de calidad)
    Cuidado con $rutaCompleta que podría contener una extensión errónea */
    $calidad = 100;
    //imagejpeg($tmp, $rutaMultimedia, $calidad);
    /* O podemos dar salida a la imagen en formato PNG (sin pérdida de calidad) */
    if(imagepng($tmp, $rutaMultimedia)){
        
        $info = new SplFileInfo($name);
        $ext=$info->getExtension();
        if($id_image=="ico-file"){
            $url_profile = $base_url."logo-inverse.png";
        }else{
            $url_profile = $base_url.$prefix."_profile_".$finfix.".".$ext;
        }
        

        if($id_image=="ico-file"){
            $orden = 4;
        }else if($id_image=="one-file"){
            $orden = 1;
        }else if($id_image=="two-file"){
            $orden = 2;
        }else{
            $orden = 3;
        }

        $query = $db->query("UPDATE `db_pictures` SET url_image = '".$url_profile."' WHERE orden='".$orden."' ");

        if($query){
            $messege = 'Imagen cargada con éxito.';
            $status=0;
        }else{
            $status=1;
            $messege = $db->error;
        }

        echo json_encode( array("status"=>$status, "messege"=>$messege, "data"=>$url_profile) );
        exit;
    
    }else{
        echo json_encode( array("status"=>1, "messege"=>"Existió un error al cargar la imágen. Revise los parámetros y vuelve a intentar.","data"=>$url_profile) );
        exit;     
    }
 
});


/*******************************************
*****     MODIFICAR PARAMETROS        ******
*******************************************/
$app->post("/modify/text",function() use ($db, $app){

    $resource = $app->request->post("resource");//Nombre físico la tabla.
    if(is_null($app->request->post("resource"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [resource] es obligatorio"));
        exit;
    } 

    $attribute = $app->request->post("attribute");//Nombre físico del atributo a modificar.
    if(is_null($app->request->post("attribute"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [attribute] es obligatorio"));
        exit;
    }

    $valor = $app->request->post("valor");//Nombre físico del atributo a modificar.
    if(is_null($app->request->post("valor"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [valor] es obligatorio"));
        exit;
    }

    $orden = $app->request->post("orden");//Nombre físico del atributo a modificar.
    if(is_null($app->request->post("orden"))){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [orden] es obligatorio"));
        exit;
    }

    $query = $db->query("UPDATE ".$resource." SET $attribute = '".$valor."' WHERE orden = '".$orden."' ");
    if($query){
        $messege = 'Texto actualizado con éxito.';
        $status=0;
    }else{
        $status=1;
        $messege = $db->error;
    }

    echo json_encode(array("status"=>$status,"messege"=>$messege));
    exit;

});

$app->run();