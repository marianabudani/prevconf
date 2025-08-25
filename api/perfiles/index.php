<?php
date_default_timezone_set('America/Argentina/Buenos_Aires');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
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

$app->get("/hola/:nombre", function ($name) {
    echo "Hola " . $name;
});

include('../../conection.php');

/*
******************************************
*********  TRAER TODOS LOS LOCALES   *****
******************************************
*/
$app->get("/", function () use ($db, $app) {

    $query = $db->query("SELECT * FROM `db_usuarios` ");
    $usuarios = array();
    while ($row = $query->fetch_assoc()) {
        $usuarios[] = $row;
    }
    echo json_encode($usuarios);
});


/*******************************************
 ************       LOGIN     ***************
 *******************************************/
$app->post("/login", function () use ($db, $app) {
    function is_valid_email($str)
    {
        return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
    }

    $userDataCreate = [(string) $app->request->post("user"), (string) $app->request->post("pass")];
    $userDataCreateLabel = ["user", "pass"];
    $userDataCreateTipo = ["string", "string"];

    for ($i = 0; $i < count($userDataCreate); $i++) {

        if (is_null($userDataCreate[$i])) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] es obligatorio"));
            exit;
        }

        if (empty($userDataCreate[$i])) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] es obligatorio y debe tener un valor. Revise el tipo de dato."));
            exit;
        }

        if (gettype($userDataCreate[$i]) != $userDataCreateTipo[$i]) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] no es del tipo de datos esperado. Se esparaba " . $userDataCreateTipo[$i] . " y se recibió " . gettype($userDataCreate[$i])));
            exit;
        }
    }

    $userLogin = $user = $app->request->post("user");
    $passLogin = $pass = $app->request->post("pass");

    if (!is_valid_email($userLogin)) {
        echo json_encode(array("status" => 1, "messege" => "El formato de correo electrónico no es correcto."));
        exit;
    }

    $query = $db->query("SELECT * FROM `db_usuarios` where email = '" . $userLogin . "'");

    $row = $query->fetch_assoc();

    if (empty($row) == 0) {
        if (!password_verify($passLogin, $row['pass'])) {
            echo json_encode(array("status" => 1, "messege" => "No existe usuario para las credenciales ingresadas."));
            exit;
        }

        $queryActivo = $db->query("SELECT B.activo  FROM db_usuarios A JOIN db_datosusuario B on B.id_usuario = A.id
        WHERE A.email = '" . $userLogin . "'");

        $rowActivo = $queryActivo->fetch_assoc();

        if ($rowActivo["activo"] == 1) {
            $query2 = $db->query("SELECT B.cambio_clave, A.id  FROM db_usuarios A JOIN db_datosusuario B on B.id_usuario = A.id
                            WHERE B.activo = 1 AND A.email = '" . $userLogin . "'");

            $row2 = $query2->fetch_assoc();

            if ($row2["cambio_clave"] == 1) {

                $hash = md5(date("Y/m/d h:i:sa"));
                $query = $db->query("UPDATE `db_usuarios` SET hash_session='" . $hash . "' where email = '" . $userLogin . "' ");
                if ($query) {
                    ini_set('session.cookie_httponly', 1);

                    // Solo establecer "Secure" si está usando HTTPS
                    if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
                        ini_set('session.cookie_secure', 1);
                    }

                    session_start();
                    $_SESSION["LOGIN"] = "Ok";
                    $_SESSION["IDENTITY"] = $row["id"];
                    $_SESSION["EMAIL"] = $row["email"];
                    $_SESSION["NAME"] = $row["nombre"];
                    $_SESSION["OWNER"] = $row["owner"];
                    $_SESSION["PROFILE"] = $row["profile"];


                    echo json_encode(
                        array(
                            "status" => 0,
                            "messege" => "Login exitoso",
                            "id" => $row["id"],
                            "email" => $row["email"],
                            "nombre" => $row["nombre"],
                            "hash" => $hash
                        )
                    );
                } else {
                    echo json_encode(array("status" => 1, "messege" => $db->error));
                }
            } else {
                //echo json_encode( array("status"=>0 , "messege"=>"cambiar") );
                echo json_encode(array("status" => 0, "messege" => "cambiar", "id" => $row2["id"]));
            }
        } else {
            echo json_encode(array("status" => 1, "messege" => "El usuario se encuentra inactivo, comuníquese con un Administrador"));
        }
    } else {
        echo json_encode(array("status" => 1, "messege" => "No existe usuario para las credenciales ingresadas."));
    }
});

/*******************************************
 ************  CREAR  COMERCIO   ************
 *******************************************/
$app->post("/create", function () use ($db, $app) {

    function generateRandom($longitud)
    {
        $key = '';
        $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
        $max = strlen($pattern) - 1;
        for ($i = 0; $i < $longitud; $i++) $key .= $pattern{
            mt_rand(0, $max)};
        return $key;
    }

    function is_valido_email($str)
    {
        return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
    }

    function validateDate($date, $format = 'Y-m-d')
    {
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) == $date;
    }

    $name = $_FILES['url_fotos']['name'];

    /*if(is_null($name)){
        echo json_encode(array("status"=>1,"messege"=>"El atributo [url_fotos] es obligatorio"));
        exit;
    }*/
    if (empty($name) || is_null($name)) {
        //echo json_encode(array("status"=>1,"messege"=>"El atributo [url_fotos] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        //exit;
        $url_profile = "images/default.png";
    } else {

        $baseName =  basename($_FILES['url_fotos']['tmp_name']);
        $size =      $_FILES['url_fotos']['size'];
        $type =      $_FILES['url_fotos']['type'];
        $tmpName =   $_FILES['url_fotos']['tmp_name'];

        if ($type != "image/png") {
            if ($type != "image/jpeg") {
                if ($type != "image/jpg") {
                    echo json_encode(array("status" => 1, "messege" => "Las imágenes soportadas por el momento son (JPG | JPEG | PNG). En su lugar estás enviando " . $type));
                    exit;
                }
            }
        }

        /*=============================================
        DEFINIMOS LAS MEDIDAS
        =============================================*/
        list($ancho, $alto) = getimagesize($tmpName);

        $nuevoAncho = 900;
        $nuevoAlto = 600;

        /*====================================================================
        CREAMOS EL DIRECTORIO DONDE VAMOS A GUARDAR LA FOTO DE LA MULTIMEDIA
        ====================================================================*/
        $url_entorno = $app->request->post("url_entorno");
        if (is_null($url_entorno)) {
            echo json_encode(array("status" => 1, "messege" => "El atributo url_entorno es obligatorio."));
            exit;
        }

        if (empty($url_entorno)) {
            echo json_encode(array("status" => 1, "messege" => "El atributo url_entorno es obligatorio y debe tener un valor. Revise el tipo de dato."));
            exit;
        }

        $directorio = $_SERVER['DOCUMENT_ROOT'] . '/' . $url_entorno;

        /*=============================================
        PRIMERO PREGUNTAMOS SI EXISTE UN DIRECTORIO DE MULTIMEDIA CON ESTA RUTA
        =============================================*/
        if (!file_exists($directorio)) {
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

        $prefix = generateRandom(3);
        $finfix = generateRandom(2);
        $info = new SplFileInfo($name);
        $ext = $info->getExtension();
        $rutaMultimedia = $directorio . $prefix . "_profile_" . $finfix . "." . $ext;
        $max_ancho = 900;
        $max_alto = 600;
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
            $tmp,
            $img_original,
            0,
            0,
            0,
            0,
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
        if (imagepng($tmp, $rutaMultimedia)) {

            $info = new SplFileInfo($name);
            $ext = $info->getExtension();
            $url_profile = 'images/' . $prefix . "_profile_" . $finfix . "." . $ext;
        }
    }

    if (!is_valido_email($app->request->post("email"))) {
        echo json_encode(array("status" => 1, "messege" => "El formato de correo electrónico no es correcto."));
        exit;
    }

    if (!validateDate($app->request->post("fec_venc"), 'Y-m-d')) {
        echo json_encode(array("status" => 1, "messege" => "El formato de fec_venc no es correcto."));
        exit;
    }

    $userDataCreate =
        [
            $app->request->post("nombre"), //0
            $app->request->post("apellido"), //1
            $app->request->post("socio"), //2
            $app->request->post("cat_socio"), //3
            $app->request->post("email"), //4
            $app->request->post("namecommerce"), //6
            $app->request->post("cuit_cuil"), //7
            $app->request->post("rubro"), //8
            $app->request->post("canal"), //9
            $app->request->post("descuento"), //10
            $app->request->post("presentacion"), //11
            $app->request->post("fec_venc"), //12
            $app->request->post("PreLong"), //13
            $app->request->post("terminos"), //14
            $app->request->post("terminos"), //15
            $app->request->post("provincia"), //16
            $app->request->post("localidad"), //17
            $app->request->post("owner"), //19
        ];

    $userDataCreateLabel =
        [
            "nombre",
            "apellido",
            "socio",
            "cat_socio",
            "email",
            "namecommerce",
            "cuit_cuil",
            "rubro",
            "canal",
            "descuento",
            "presentacion",
            "fec_venc",
            "PreLong",
            "terminos",
            "terminos",
            "provincia",
            "localidad",
            "owner"
        ];

    for ($i = 0; $i < count($userDataCreate); $i++) {

        //Excepciones
        if ($userDataCreateLabel[$i] == "socio" || $userDataCreateLabel[$i] == "cat_socio") {
            continue;
        }
        if (is_null($userDataCreate[$i])) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] es obligatorio"));
            exit;
        }

        if (empty($userDataCreate[$i])) {
            if ($userDataCreate[$i] == 0 && $userDataCreateLabel[$i] == "provincia") {
                continue;
            } else {
                echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] es obligatorio, se recibió (" . $userDataCreate[$i] . ") y debe tener un valor. Revise el tipo de dato."));
                exit;
            }
        }
    }

    $nombre = $app->request->post("nombre"); //0
    $apellido = $app->request->post("apellido"); //1
    $socio = $app->request->post("socio"); //2
    $cat_socio = $app->request->post("cat_socio"); //3
    $email = $app->request->post("email"); //4
    $telefono = $app->request->post("telefono"); //5
    $namecommerce = $app->request->post("namecommerce"); //6
    $cuit_cuil = $app->request->post("cuit_cuil"); //7
    $rubro = $app->request->post("rubro"); //8
    $canal = $app->request->post("canal"); //9
    $descuento = $app->request->post("descuento"); //10
    $presentacion = $app->request->post("presentacion"); //11
    $fec_venc = $app->request->post("fec_venc"); //12
    $PreLong = $app->request->post("PreLong"); //13
    $terminos = $app->request->post("terminos"); //14
    $provincia = $app->request->post("provincia"); //17
    $localidad = $app->request->post("localidad"); //18
    $web = $app->request->post("web"); //19
    $owner = $app->request->post("owner"); //20
    $textObser = $app->request->post("textObser");
    $address = $app->request->post("address");
    $partido = $app->request->post("partido");
    $latitud = $app->request->post("latitud");
    $longitud = $app->request->post("longitud");

    /* VALIDAR EL DUEÑO DEL DATOS */
    $query = $db->query("SELECT count(id) as cantidad FROM `bj_codigo` where code = '" . $owner . "' and estado = '0' ");

    $row = $query->fetch_assoc();

    if ($row["cantidad"] == 0) {

        $query = $db->query("INSERT INTO `bj_bad_code` (code) values ('" . $owner . "') ");

        echo json_encode(array("status" => 1, "messege" => "No pudimos validar el origen de tu formulario, por favor activá o reactivá tu formulario mediante el código que te facilitó tu referente. El dato no fue guardado."));
        exit;
    }

    $query = $db->query("INSERT INTO `bj_locales` (
        nombre, 
        apellido, 
        socio, 
        cat_socio,
        email,
        telefono,
        namecommerce,
        cuit_cuil,
        rubro,
        canal,
        descuento,
        presentacion,
        fec_venc,
        prelong,
        terminos,
        url_fotos,
        provincia,
        localidad,
        web,
        obs_general,
        owner,
        address,
        partido,
        latitud,
        longitud
        ) values (
        '" . $nombre . "',
        '" . $apellido . "',
        '" . $socio . "',
        '" . $cat_socio . "',
        '" . $email . "',
        '" . $telefono . "',
        '" . $namecommerce . "',
        '" . $cuit_cuil . "',
        '" . $rubro . "',
        '" . $canal . "',
        '" . $descuento . "',
        '" . $presentacion . "',
        '" . $fec_venc . "',
        '" . $PreLong . "',
        '" . $terminos . "',
        '" . $url_profile . "',
        '" . $provincia . "',
        '" . $localidad . "',
        '" . $web . "',
        '" . $textObser . "',
        '" . $owner . "',
        '" . $address . "',
        '" . $partido . "',
        '" . $latitud . "',
        '" . $longitud . "'
        )");

    if ($query) {
        $messege = 'Comercio creado con éxito';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

/*******************************************
 ************       VALIDAR     *************
 *******************************************/
$app->post("/validate", function () use ($db, $app) {

    $idcodmiembro = $app->request->post("idcodmiembro");
    if (is_null($app->request->post("idcodmiembro"))) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [idcodmiembro] es obligatorio"));
        exit;
    }
    if (empty($idcodmiembro)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [idcodmiembro] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }

    $query = $db->query("SELECT count(id) as cantidad FROM `bj_codigo` where code = '" . $idcodmiembro . "' and estado = '0' ");

    $row = $query->fetch_assoc();

    if ($row["cantidad"] == 0) {
        echo json_encode(array("status" => 1, "messege" => "El código ingresado no es correcto. Solicite autorizacion a su referente. No podrás cargar comercios hasta no validar el código de miembro"));
        exit;
    }

    $query = $db->query("UPDATE `bj_codigo` SET usado= '1' WHERE code = '" . $idcodmiembro . "' ");
    if ($query) {
        $messege = 'A partir de ahora tu formulario está validado.';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

/*******************************************
 ************   MAILING   *******************
 *******************************************/
$app->post("/mailing", function () use ($db, $app) {
    function is_valid_emailo($str)
    {
        return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
    }

    $emailadd = $app->request->post("emailadd");
    if (is_null($app->request->post("emailadd"))) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [emailadd] es obligatorio"));
        exit;
    }
    if (empty($emailadd)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [emailadd] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }

    if (!is_valid_emailo($emailadd)) {
        echo json_encode(array("status" => 1, "messege" => "El formato de correo electrónico no es correcto."));
        exit;
    }

    $query = $db->query("SELECT count(id) as cantidad FROM `bj_email` where email = '" . $emailadd . "' ");

    $row = $query->fetch_assoc();

    if ($row["cantidad"] > 0) {
        echo json_encode(array("status" => 1, "messege" => "El correo electrónico ingresado ya está registrado."));
        exit;
    }

    $query = $db->query("INSERT INTO `bj_email` (email) values ('" . $emailadd . "') ");

    if ($query) {
        $messege = 'Email ingreso con éxito. Ahora formás parte de la red más grande de descuento del país.';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

/*******************************************
 ************    PROVINCIAS     *************
 *******************************************/
$app->get("/provincias", function () use ($db, $app) {

    $query = $db->query("SELECT * FROM `sp_provincias` ");
    $provincias = array();
    while ($row = $query->fetch_assoc()) {
        $provincias[] = $row;
    }

    echo json_encode(array("status" => 0, "messege" => json_encode($provincias)));
    exit;
});

/*******************************************
 ************    PARTIDOS     *************
 *******************************************/
$app->get("/partidos/(:id)", function ($id) use ($db, $app) {

    $query = $db->query("SELECT * FROM `sp_partidos` WHERE fk_sp_provincias='" . $id . "' ");
    $partidos = array();
    while ($row = $query->fetch_assoc()) {
        $partidos[] = $row;
    }

    echo json_encode(array("status" => 0, "messege" => json_encode($partidos)));
    exit;
});

/*******************************************
 ************    LOCALIDAD     *************
 *******************************************/
$app->get("/localidades/(:id)", function ($id) use ($db, $app) {

    $query = $db->query("SELECT * FROM `sp_localidades` WHERE fk_sp_partidos='" . $id . "' ");
    $localidades = array();
    while ($row = $query->fetch_assoc()) {
        $localidades[] = $row;
    }

    echo json_encode(array("status" => 0, "messege" => json_encode($localidades)));
    exit;
});

/*******************************************
 ************      CREATE vieja    ***************
 *******************************************/
// $app->post("/create",function() use ($db, $app){
//     function validar_clave($clave,&$error_clave){
//         if(strlen($clave) < 8){
//            $error_clave = "La clave debe tener al menos 8 caracteres";
//            return false;
//         }
//         if(strlen($clave) > 20){
//            $error_clave = "La clave no puede tener más de 20 caracteres";
//            return false;
//         }
//         if (!preg_match('`[a-z]`',$clave)){
//            $error_clave = "La clave debe tener al menos una letra minúscula";
//            return false;
//         }
//         if (!preg_match('`[A-Z]`',$clave)){
//            $error_clave = "La clave debe tener al menos una letra mayúscula";
//            return false;
//         }
//         if (!preg_match('`[0-9]`',$clave)){
//            $error_clave = "La clave debe tener al menos un caracter numérico";
//            return false;
//         }
//         if (!preg_match('`[a-zA-Z0-9]`',$clave)){
//             $error_clave = "Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales o emoji.";
//             return false;
//         }

//         $error_clave = "";
//         return true;
//     }

//     function is_valid_email($str){
//       return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
//     }

//     function generarCodigo($longitud){
//         $key = '';
//         $pattern = '1234567890';
//         $max = strlen($pattern)-1;
//         for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
//         return $key;
//     }

//     $userDataCreate = [(string) $app->request->post("user"), (string) $app->request->post("pass")];
//     $userDataCreateLabel = ["user","pass"];
//     $userDataCreateTipo = ["string","string"];

//     for($i=0;$i<count($userDataCreate);$i++){

//         if(is_null($userDataCreate[$i])){
//             echo json_encode(array("status"=>1,"messege"=>"El atributo [".$userDataCreateLabel[$i]."] es obligatorio"));
//             exit;
//         }

//         if(empty($userDataCreate[$i])){
//             echo json_encode(array("status"=>1,"messege"=>"El atributo [".$userDataCreateLabel[$i]."] es obligatorio y debe tener un valor. Revise el tipo de dato."));
//             exit;
//         }

//         if(gettype($userDataCreate[$i]) != $userDataCreateTipo[$i]){
//             echo json_encode(array("status"=>1,"messege"=>"El atributo [".$userDataCreateLabel[$i]."] no es del tipo de datos esperado. Se esparaba ".$userDataCreateTipo[$i]." y se recibió ".gettype($userDataCreate[$i])));
//             exit;
//         }

//     }

//     $userCreate = $user=$app->request->post("user");
//     $passCreate = $pass=$app->request->post("pass");

//     if(!is_valid_email($userCreate)){
//         echo json_encode(array("status"=>1,"messege"=>"El formato de email no es correcto."));
//         exit;        
//     }

//     $error_encontrado="";
//     if(!validar_clave($passCreate,$error_encontrado)){
//         echo json_encode(array("status"=>1,"messege"=>$error_encontrado));
//         exit;        
//     }

//     //VALIDO SI ES UN ALTA MEDIANTE UN REFERIDO
//     $name_team = $app->request->post("name_team");
//     if(is_null($name_team) || empty($name_team) || $name_team=="undefined" ){
//         $name_team = generarCodigo(14);
//         $fk_tm_owner=1;
//     }else{
//         $query = $db->query("SELECT count(id) as existe FROM `tm_directors` WHERE name_team = '".$name_team."' ");
//         $row=$query->fetch_array();
//         if($row["existe"]==0){
//             echo json_encode(array("status"=>1,"messege"=>"Error en la validación del código referido.".$name_team ));
//             exit;
//         }
//         $fk_tm_owner=2;
//     }

//     //VALIDAR REPETIDO
//     $query = $db->query("SELECT count(id) as existe FROM `tm_directors` WHERE email = '".$userCreate."' ");
//     $row=$query->fetch_array();

//     if($row["existe"]>0){
//         echo json_encode(array("status"=>1,"messege"=>"El usuario ya está registrado. Deberías iniciar sesión o reestablecer tu contraseña."));
//         exit;
//     }
//     $hash_session = md5(date("Y/m/d h:i:sa"));

//     $query = $db->query("INSERT INTO `tm_directors` (email, pass, name_team, fk_tm_owner, hash_session) values ('".$userCreate."','".$passCreate ."','".$name_team ."','".$fk_tm_owner ."','".$hash_session ."') ");
//     if($query){
//         $messege = 'Cuenta creada con éxito';
//         $status=0;
//     }else{
//         $status=1;
//         $messege = $db->error;
//     }

//     echo json_encode(array("status"=>$status,"messege"=>$messege));
//     exit;

// });

/*******************************************
 ************      CREATE     ***************
 *******************************************/
$app->post("/createup", function () use ($db, $app) {
    function validar_clave($clave, &$error_clave)
    {
        if (strlen($clave) < 8) {
            $error_clave = "La clave debe tener al menos 8 caracteres";
            return false;
        }
        if (strlen($clave) > 20) {
            $error_clave = "La clave no puede tener más de 20 caracteres";
            return false;
        }
        if (!preg_match('`[a-z]`', $clave)) {
            $error_clave = "La clave debe tener al menos una letra minúscula";
            return false;
        }
        if (!preg_match('`[A-Z]`', $clave)) {
            $error_clave = "La clave debe tener al menos una letra mayúscula";
            return false;
        }
        if (!preg_match('`[0-9]`', $clave)) {
            $error_clave = "La clave debe tener al menos un caracter numérico";
            return false;
        }
        if (!preg_match('`[a-zA-Z0-9]`', $clave)) {
            $error_clave = "Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales o emoji.";
            return false;
        }

        $error_clave = "";
        return true;
    }

    function is_valido_email1($str)
    {
        return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
    }

    function generarCodigo($longitud)
    {
        $key = '';
        $pattern = '1234567890';
        $max = strlen($pattern) - 1;
        for ($i = 0; $i < $longitud; $i++) $key .= $pattern{
            mt_rand(0, $max)};
        return $key;
    }

    $userDataCreate = [(string) $app->request->post("first_name"), (string) $app->request->post("user"), (string) $app->request->post("pass")];
    $userDataCreateLabel = ["first_name", "user", "pass"];
    $userDataCreateTipo = ["string", "string", "string"];
    for ($i = 0; $i < count($userDataCreate); $i++) {

        if (is_null($userDataCreate[$i])) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] es obligatorio"));
            exit;
        }

        if (empty($userDataCreate[$i])) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] es obligatorio y debe tener un valor. Revise el tipo de dato."));
            exit;
        }

        if (gettype($userDataCreate[$i]) != $userDataCreateTipo[$i]) {
            echo json_encode(array("status" => 1, "messege" => "El atributo [" . $userDataCreateLabel[$i] . "] no es del tipo de datos esperado. Se esparaba " . $userDataCreateTipo[$i] . " y se recibió " . gettype($userDataCreate[$i])));
            exit;
        }
    }
    $nameCreate = $name = $app->request->post("first_name");
    $userCreate = $user = $app->request->post("user");
    $passCreate = $pass = $app->request->post("pass");


    if (!is_valid_email1($userCreate)) {
        echo json_encode(array("status" => 1, "messege" => "El formato de correo electrónico no es correcto."));
        exit;
    }

    $error_encontrado = "";
    if (!validar_clave($passCreate, $error_encontrado)) {
        echo json_encode(array("status" => 1, "messege" => $error_encontrado));
        exit;
    }

    //VALIDAR REPETIDO
    $query = $db->query("SELECT count(id) as existe FROM db_usuarios WHERE email = '" . $userCreate . "' ");
    $row = $query->fetch_array();

    if ($row["existe"] > 0) {
        echo json_encode(array("status" => 1, "messege" => "El usuario ya está registrado. Deberías iniciar sesión o reestablecer tu contraseña."));
        exit;
    }
    $hash_session = md5(date("Y/m/d h:i:sa"));
    $url = "/thematrix/views/assets/avatars/1.jpg";

    $query = $db->query("INSERT INTO db_usuarios (email, pass, nombre, hash_session) values ('" . $userCreate . "','" . $passCreate . "','" . $nameCreate . "','" . $hash_session . "') ");

    if ($query) {
        $messege = 'Cuenta creada con éxito ';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

/*******************************************
 ************      RECOVERY EMAIL    ********
 *******************************************/
$app->post("/recovery", function () use ($db, $app) {
    $email = $app->request->post("email");
    if (empty($email)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [correo electrónico] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }
    $base_url = $app->request->post("base_url");

    //JB-Valido que el mail exista en la base de datos
    $query = $db->query("SELECT count(id) as existe FROM db_usuarios WHERE email = '" . $email . "' ");
    $row = $query->fetch_array();
    if ($row["existe"] == 0) {
        echo json_encode(array("status" => 1, "messege" => "El correo electrónico ingresado no figura en nuestro sistema, por favor inténtelo de nuevo."));
        exit;
    }

    $hash = md5(date("Y/m/d h:i:sa"));
    $query = $db->query("UPDATE db_usuarios SET hash_session='" . $hash . "' where email = '" . $email . "' ");
    if (!$query) {
        echo json_encode(array("status" => 1, "messege" => $db->error));
        exit;
    }

    $hoy = date("d-m-Y");



    try {

        set_time_limit(0); // remove a time limit if not in safe mode
        set_time_limit(120); // set the time limit to 120 seconds



        $mail = new PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->From = 'no-reply@mininterior.gob.ar';
        $mail->Host = 'smtp.office365.com';
        $mail->Username   = 'no-reply@mininterior.gob.ar'; // SMTP account username
        $mail->Password   = 'MinisterioNR.';
        $mail->Port = 587;
        $mail->SMTPAutoTLS = true;
        $mail->authentication = 'login';
        $mail->Timeout       =   60; // set the timeout (seconds)
        $mail->SMTPKeepAlive = true; // don't close the connection between messages
        $mail->SetFrom('no-reply@mininterior.gob.ar', 'Previa Conformidad');
        $mail->AddAddress($email);

        $mail->Subject = 'Convenio Suscripto';
        $mail->IsHTML(true);

        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        if (!$mail->smtpConnect()) {
            $messege = 'Ocurrió un error al enviar mensaje';
            $status = 1;

            echo json_encode(array("status" => $status, "messege" => $messege));
            exit;
        }

        //este mail le llegó a felix
        $mail->Subject = 'Recuperar la contraseña.';

        //Cuerpo del mail
        $mail->Body  = '<head>';
        $mail->Body .= '</head>';
        $mail->Body .= '<body>';
        $mail->Body .= '    <table width="100%" cellspacing="0" cellpadding="0">';
        $mail->Body .= '        <tbody class="ui-droppable">';
        $mail->Body .= '            <tr class="ui-draggable">';
        $mail->Body .= '                <td class="esd-block-text es-p20b es-m-txt-c esd-frame esd-hover esdev-disable-select esd-draggable esd-block"';
        $mail->Body .= '                    align="left" esd-handler-name="textElementHandler">';
        $mail->Body .= '                    <div class="esd-block-btn ">';
        $mail->Body .= '                        <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>';
        $mail->Body .= '                        <div class="esd-move ui-draggable-handle" title="Mover">';
        $mail->Body .= '                            <a><span class="es-icon-move"></span></a>';
        $mail->Body .= '                        </div>';
        $mail->Body .= '                        <div class="esd-copy ui-draggable-handle" title="Copiar">';
        $mail->Body .= '                            <a><span class="es-icon-copy"></span></a>';
        $mail->Body .= '                        </div>';
        $mail->Body .= '                        <div class="esd-delete" title="Eliminar">';
        $mail->Body .= '                            <a><span class="es-icon-delete"></span></a>';
        $mail->Body .= '                        </div>';
        $mail->Body .= '                    </div>';
        $mail->Body .= '                    <h1 style="text-align: center;">Recuperar contraseña</h1>';
        $mail->Body .= '                </td>';
        $mail->Body .= '            </tr>';
        $mail->Body .= '            <tr class="ui-draggable">';
        $mail->Body .= '                <td align="left"';
        $mail->Body .= '                    class="esd-block-text es-m-txt-c esd-frame esd-hover esdev-disable-select esd-draggable esd-block"';
        $mail->Body .= '                    esd-handler-name="textElementHandler">';
        $mail->Body .= '                    <h3 style="text-align: center;"><b>Vamos a recuperar rápidamente tu acceso al sistema. Solo necesitás hacer click <a href="' . $base_url . 'module/template/recovery/' . $hash . '" target="_blank" style="color:#309bc3; text-decoration:none">en el siguiente enlace</a></h3>';
        $mail->Body .= '                </td>';
        $mail->Body .= '            </tr>';
        $mail->Body .= '            <tr class="ui-draggable">';
        $mail->Body .= '                <td align="center" class="esd-block-button es-p20t esd-frame esd-hover esdev-disable-select esd-draggable esd-block"';
        $mail->Body .= '                    esd-handler-name="btnBlockHandler">';
        $mail->Body .= '                </td>';
        $mail->Body .= '            </tr><tr><td><br></td></tr>';
        $mail->Body .= '        </tbody>';
        $mail->Body .= '    </table>';
        $mail->Body .= '</body>';

        if ($mail->Send()) {
            $mail->SmtpClose(); // close the connection since it was left open.
            $messege = '¡El mensaje se envió correctamente!';
            $status = 0;
        } else {
            $messege = 'Ocurrió un error al enviar mensaje';
            $status = 1;
            // http_response_code(500);
        }
    } catch (phpmailerException $e) {

        $messege = 'Ocurrió un error al enviar mensaje';
        $status = 1;
    }

    //Respuesta
    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

/*******************************************
 **********   RECOVERY UPDATE   *************
 *******************************************/
$app->put("/recovery/update", function () use ($db, $app) {

    function validar_clave1($clave, &$error_clave)
    {
        if (strlen($clave) < 8) {
            $error_clave = "La clave debe tener al menos 8 caracteres";
            return false;
        }
        if (strlen($clave) > 20) {
            $error_clave = "La clave no puede tener más de 20 caracteres";
            return false;
        }
        if (!preg_match('`[a-z]`', $clave)) {
            $error_clave = "La clave debe tener al menos una letra minúscula";
            return false;
        }
        if (!preg_match('`[A-Z]`', $clave)) {
            $error_clave = "La clave debe tener al menos una letra mayúscula";
            return false;
        }
        if (!preg_match('`[0-9]`', $clave)) {
            $error_clave = "La clave debe tener al menos un caracter numérico";
            return false;
        }
        if (!preg_match('`[a-zA-Z0-9]`', $clave)) {
            $error_clave = "Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales o emoji.";
            return false;
        }

        $error_clave = "";
        return true;
    }

    $newpass = $app->request->put("newpass");
    if (is_null($app->request->put("newpass"))) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [newpass] es obligatorio"));
        exit;
    }
    if (empty($newpass)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [newpass] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }
    $error_encontrado = "";
    if (!validar_clave1($newpass, $error_encontrado)) {
        echo json_encode(array("status" => 1, "messege" => $error_encontrado));
        exit;
    }

    $hash_session = $app->request->put("hash_session");
    if (is_null($app->request->put("hash_session"))) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [hash_session] es obligatorio"));
        exit;
    }
    if (empty($hash_session)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [hash_session] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }

    //VALIDAR HASH
    $query = $db->query("SELECT count(id) as existe FROM db_usuarios WHERE hash_session = '" . $hash_session . "' ");
    $row = $query->fetch_array();
    if ($row["existe"] == 0) {
        echo json_encode(array("status" => 1, "messege" => "Aparentemente existe un error en los datos enviados. Revise el hash de seguridad."));
        exit;
    }

    $hashed = password_hash($newpass, PASSWORD_DEFAULT);

    $query = $db->query("UPDATE db_usuarios SET pass= '" . $hashed . "' WHERE hash_session = '" . $hash_session . "' ");
    if ($query) {
        $hash = md5(date("Y/m/d h:i:sa"));
        $query = $db->query("UPDATE db_usuarios SET hash_session='" . $hash . "' where hash_session = '" . $hash_session . "' ");
        if (!$query) {
            echo json_encode(array("status" => 1, "messege" => $db->error));
            exit;
        }
        $messege = 'Contraseña actualizada con éxito';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});


/*******************************************
 ************    VALIDAR ALTA   *************
 *******************************************/
$app->post("/validateuser", function () use ($db, $app) {

    $check = $app->request->post("checkdeladmin");
    $nameCreate = $app->request->post("first_name");
    $usercreate = $app->request->post("user");
    $passCreate = $app->request->post("pass");

    //1. Que tenga formato de email.

    function is_valid_email1($str)
    {
        return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
    }

    if (!is_valid_email1($usercreate)) {
        echo json_encode(array("status" => 1, "messege" => "El formato de email no es correcto."));
        exit;
    }


    //VALIDAR REPETIDO
    $query = $db->query("SELECT count(id) as existe FROM `db_usuarios` WHERE email = '" . $usercreate . "' ");
    $row = $query->fetch_array();

    if ($row["existe"] > 0) {
        echo json_encode(array("status" => 1, "messege" => "El usuario ya está registrado."));
        exit;
    } else {
        //    //  echo json_encode(array("status"=>0,"messege"=>"El usuario está disponible."));
        //     // exit;

        $hash_session = md5(date("Y/m/d h:i:sa"));
        $query = $db->query("INSERT INTO db_usuarios (email, pass, nombre, hash_session, owner) values ('" . $usercreate . "','" . $passCreate . "','" . $nameCreate . "','" . $hash_session . "','" . $check . "')");
        if ($query) {
            $messege = 'Cuenta creada con éxito';
            $status = 0;
        } else {
            $status = 1;
            $messege = $db->error;
        }
        echo json_encode(array("status" => $status, "messege" => $messege));
        exit;
    }
});

/************************************************
 ************ TRAER LOS ULTIMOS 10 USUARIOS  *****
 *************************************************/
$app->get("/traerUsuarios", function () use ($db, $app) {

    session_start();

    if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
        // El usuario está logueado
        echo json_encode(array("status" => 1, "mensaje" => "No autorizado"));
        exit;
    }

    $query = $db->query("SELECT * FROM `db_usuarios` ORDER BY id DESC LIMIT 5");
    $db_usuarios = array();

    while ($row = $query->fetch_assoc()) {
        $db_usuarios[] = $row;
    }

    echo json_encode(array("status" => 0, "cantidad" => count($db_usuarios), "content" => $db_usuarios));
});

/************************************************
 ************ TRAER TODOS LOS USUARIOS  *****
 *************************************************/
$app->get("/traerTodos", function () use ($db, $app) {

    session_start();

    if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
        // El usuario está logueado
        echo json_encode(array("status" => 1, "mensaje" => "No autorizado"));
        exit;
    }

    $query = $db->query("SELECT * FROM `db_usuarios` ORDER BY id DESC");
    $db_usuarios = array();

    while ($row = $query->fetch_assoc()) {
        $db_usuarios[] = $row;
    }

    echo json_encode(array("status" => 0, "cantidad" => count($db_usuarios), "content" => $db_usuarios));
});

/*******************************************
 **********    GET USUARIOS/open editar*****
 *******************************************/

$app->get("/usuario/(:id)", function ($id) use ($db, $app) {
    session_start();

    if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
        // El usuario está logueado
        echo json_encode(array("status" => 1, "mensaje" => "No autorizado"));
        exit;
    }

    //si no existe el id
    if (is_null($id)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [id] no existe"));
        exit;
    }
    //Si existe que me traiga los campos  

    $query = $db->query("SELECT * FROM `db_usuarios` where id='" . $id . "' ");
    $row = $query->fetch_assoc();

    $id = $row["id"];
    $name = $row["nombre"];
    $mail = $row["email"];
    $check = $row["owner"];

    $usuario = array(
        "id" => $id,
        "nombre" => $name,
        "email" => $mail,
        "owner" => $check

    );

    echo json_encode(array("status" => 0, "messege" => $usuario));
    exit;
});


/*******************************************
 **********     UPDATE USUARIO    **********
 *******************************************/
$app->put("/updateUsuario", function () use ($db, $app) {
    session_start();

    if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
        // El usuario está logueado
        echo json_encode(array("status" => 1, "mensaje" => "No autorizado"));
        exit;
    }

    $checkUpdate = $app->request->put("owner");
    $nameUpdate = $app->request->put("nombre");
    $userUpdate = $app->request->put("email");
    $newpass = $app->request->put("pass");
    $id = $app->request->put("id");

    //1. valido que pass exista en la base de datos.
    //2. valido que el campo de newPass no esté vacio
    //3. inserto el dato en la <base href="">    

    if (is_null($newpass)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [newpass] es obligatorio"));
        exit;
    }
    if (empty($newpass)) {
        echo json_encode(array("status" => 1, "messege" => "El atributo [newpass] es obligatorio y debe tener un valor. Revise el tipo de dato."));
        exit;
    }

    //1. Que tenga formato de email.

    // function is_valid_email($str){
    //     return (false !== filter_var($str, FILTER_VALIDATE_EMAIL));
    // }

    // if(!is_valid_email($userUpdate)){
    //     echo json_encode(array("status"=>1,"messege"=>"El formato de email no es correcto."));
    //     exit;        
    // }

    // //VALIDAR REPETIDO
    // $query1 = $db->query("SELECT count(id) as existe FROM `db_usuarios` WHERE email = '".$userUpdate."' ");
    // $row=$query1->fetch_array();

    //    if($row["existe"]>0){
    //     echo json_encode(array("status"=>1,"messege"=>"El usuario ya está registrado."));
    //     exit;

    //   }else{

    $query = $db->query("UPDATE `db_usuarios` SET nombre='" . $nameUpdate . "', email='" . $userUpdate . "', pass='" . $newpass . "', owner='" . $checkUpdate . "' WHERE id='" . $id . "'");


    if ($query) {
        $messege = 'Usuario actualizado con éxito';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
    // }
});

/*******************************************
 **********     DELETE USUARIO    **********
 *******************************************/
$app->delete("/deleteUsuario", function () use ($db, $app) {
    session_start();

    if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
        // El usuario está logueado
        echo json_encode(array("status" => 1, "mensaje" => "No autorizado"));
        exit;
    }

    $id = $app->request->delete("id");
    // var_dump('este es el id de la api: ' . $id);
    // exit;
    $query1 = $db->query("SELECT count(id) as existe FROM `db_usuarios` WHERE id = '" . $id . "' ");
    $row = $query1->fetch_array();

    if ($row["existe"] == 0) {
        echo json_encode(array("status" => 1, "messege" => "El usuario no existe en la base de datos."));
        exit;
    }
    $query2 = $db->query("INSERT INTO db_historialusuarios (email, pass, nombre, hash_session, id_original) SELECT email, pass, nombre, hash_session, id FROM db_usuarios WHERE id= '" . $id . "'");

    if (!$query2) {
        echo json_encode(array("status" => 1, "messege" => "No se pudo almacenar el registro en la tabla del historial de usuario."));
        exit;
    }

    $query3 = $db->query("DELETE FROM `db_usuarios` WHERE id='" . $id . "'");


    if ($query3) {
        $messege = 'Usuario eliminado con éxito';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

/************************************************
 ***TRAER LOS ULTIMOS 10 USUARIOS ELIMINADOS *****
 *************************************************/
$app->get("/traerHistorial", function () use ($db, $app) {
    session_start();

    if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
        // El usuario está logueado
        echo json_encode(array("status" => 1, "mensaje" => "No autorizado"));
        exit;
    }
    $query = $db->query("SELECT * FROM `db_historialusuarios` ORDER BY id DESC");
    $db_usuarios = array();

    while ($row = $query->fetch_assoc()) {
        $db_usuarios[] = $row;
    }

    echo json_encode(array("status" => 0, "cantidad" => count($db_usuarios), "content" => $db_usuarios));
});

/*******************************************
 **********  RECUPERAR USUARIO    **********
 *******************************************/
$app->delete("/recuperarUsuario", function () use ($db, $app) {

    $id = $app->request->delete("id");

    $query1 = $db->query("SELECT count(id) as existe FROM `db_historialusuarios` WHERE id = '" . $id . "' ");
    $row = $query1->fetch_array();

    if ($row["existe"] == 0) {
        echo json_encode(array("status" => 1, "messege" => "El usuario no existe en la base de datos db_historialusuarios."));
        exit;
    }
    $query2 = $db->query("INSERT INTO db_usuarios (email, pass, nombre, hash_session, id) SELECT email, pass, nombre, hash_session, id_original FROM db_historialusuarios WHERE id= '" . $id . "'");

    if (!$query2) {
        echo json_encode(array("status" => 1, "messege" => "No se pudo restablecer el registro en la tabla usuario."));
        exit;
    }

    $query3 = $db->query("DELETE FROM `db_historialusuarios` WHERE id='" . $id . "'");


    if ($query3) {
        $messege = 'Usuario restablecido con éxito';
        $status = 0;
    } else {
        $status = 1;
        $messege = $db->error;
    }

    echo json_encode(array("status" => $status, "messege" => $messege));
    exit;
});

$app->run();
