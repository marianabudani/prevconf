<!DOCTYPE html>
<html lang="en">
<?php
ini_set('session.cookie_httponly', 1);

// Solo establecer "Secure" si está usando HTTPS
if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
    ini_set('session.cookie_secure', 1);
}
session_start();
$front = routerClass::getRouterFront();
$urlForImage = routerClass::getRouterImage();

$config = parse_ini_file('config.ini');

$settingImages = ControllerLogin::ctrGetSettingImages();
$one_url = $settingImages[0]["url_image"];
$one_title = $settingImages[0]["title"];
$one_desc = $settingImages[0]["description"];

$two_url = $settingImages[1]["url_image"];
$two_title = $settingImages[1]["title"];
$two_desc = $settingImages[1]["description"];

$three_url = $settingImages[2]["url_image"];
$three_title = $settingImages[2]["title"];
$three_desc = $settingImages[2]["description"];

$ico_logo = $settingImages[3]["url_image"];

?>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

<head>
    <?php
    include_once('module/template/head/header.php');
    ?>
    <link href="<?php echo $front . "views/assets/css/main.css"; ?>" rel="stylesheet">
    <link href="<?php echo $front . "views/assets/css/zoomist.min.css"; ?>" rel="stylesheet">
    <!-- DataTables -->
    <link href="<?php echo $front . "views/datatables/datatables.css"; ?>" rel="stylesheet">

    <style>
        #loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            z-index: 9999;
            display: none;
            /* Oculto por defecto */
        }

        .spinner {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 60px;
            margin: -30px 0 0 -30px;
            border: 6px solid #ccc;
            border-top-color: #1d72b8;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    </style>

</head>

<body>
    <div id="loading-overlay">
        <div class="spinner"></div>
    </div>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header bg-white">

        <?php
        if (!isset($_SESSION["LOGIN"]) || !$_SESSION["LOGIN"] == "Ok") {
            $rutas = array();
            $rutas = explode("/", $_GET["ruta"]);
            $valor =  $rutas[2];

            if ($valor == "recovery") {
                include('module/template/' . $rutas[2] . '.php');
            } else {
                include('module/login/pages-login.php');
            }
            // include "module/login/pages-login.php";
        } else {
            $settingFramework = ControllerLogin::ctrGetSetting('sp_framework');
            include_once('module/template/head/head.php');

            if ($settingFramework["config_button"] == "1" && $_SESSION["OWNER"] == "1") {
                include_once('module/template/setting.php');
            }
            echo '<div class="app-main">';
            include_once('module/template/menu/menu.php');
            echo '<div class="app-main__outer">
                <div class="app-main__inner">';
            $rutas = array();

            if (isset($_GET["ruta"])) {
                $rutas = explode("/", $_GET["ruta"]);
                $valor =  $rutas[0];

                if (
                    $valor == "nuevo-formulario" ||
                    $valor == "formulario-cinco-seis" ||
                    $valor == "adjuntar-documentacion" ||
                    $valor == "consulta" ||
                    $valor == "notificaciones" ||
                    $valor == "tramites-nuevos" ||
                    $valor == "tramites-proceso" ||
                    $valor == "tramites-finalizados" ||
                    $valor == "escribano" ||
                    $valor == "usuarios-admin" ||
                    $valor == "usuarios" ||
                    $valor == "abogado-tramites-nuevos" ||
                    $valor == "abogado-tramites-proceso" ||
                    $valor == "abogado-tramites-finalizados" ||
                    $valor == "setting-page" ||
                    $valor == "elements-buttons-standard" ||
                    $valor == "elements-dropdowns" ||
                    $valor == "elements-icons" ||
                    $valor == "elements-badges-labels" ||
                    $valor == "elements-cards" ||
                    $valor == "elements-list-group" ||
                    $valor == "elements-navigation" ||
                    $valor == "elements-utilities" ||
                    $valor == "components-tabs" ||
                    $valor == "components-accordions" ||
                    $valor == "components-notifications" ||
                    $valor == "components-modals" ||
                    $valor == "components-progress-bar" ||
                    $valor == "components-tooltips-popovers" ||
                    $valor == "components-carousel" ||
                    $valor == "components-calendar" ||
                    $valor == "components-pagination" ||
                    $valor == "components-scrollable-elements" ||
                    $valor == "components-scrollable-elements" ||
                    $valor == "components-maps" ||
                    $valor == "tables-regular" ||
                    $valor == "dashboard-boxes" ||
                    $valor == "forms-controls" ||
                    $valor == "forms-layouts" ||
                    $valor == "forms-validation" ||
                    $valor == "pages-template" ||
                    $valor == "logout" ||
                    $valor == "tables-dinamic" ||
                    $valor == "equipos" ||
                    $valor == "charts-chartjs"
                    && $_SESSION["OWNER"] == "1"
                ) {
                    include("module/" . $rutas[0] . ".php");

                    //Agregar lo que corresponda a las vistas del usuario.
                } else if ($valor == "usuarios" || $valor == "setting-page" && $_SESSION["OWNER"] == "0") {
                    include('module/template/started.php');
                } else {
                    include("module/error404.php"); //Me falta agregar una vista #404
                }
            } else {
                if ($_SESSION["OWNER"] == "0") {
                    include('module/pages-template.php');
                } else {
                    include('module/template/started.php');
                }
            }


        ?>
    </div>

    </div>
    <script src="https://maps.google.com/maps/api/js?sensor=true"></script>
    </div>
    </div>

<?php
        }
?>

<?php
include_once('module/modals/modal.php');
include_once('module/modals/modal-vista.php');
?>
<?php include_once('module/template/footer/footer.php'); ?>
<!-- HIDEN -->
<input type="hidden" value="<?php echo $front; ?>" id="url_base">
<input type="hidden" value="<?php echo $config["db.config.mail"]; ?>" id="configmail">
<input type="hidden" value="<?php if (isset($_SESSION["IDENTITY"])) {
                                echo $_SESSION["IDENTITY"];
                            } else {
                                echo 'no definido';
                            } ?>" id="idUsuario">
<input type="hidden" id="id_perfil_usuario" value="<?php echo $_SESSION['PROFILE']; ?>">


<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/jquery.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/main.js"; ?>"></script>
<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/sessions.js"; ?>"></script>
<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/sweetalert.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/setting.js"; ?>"></script>
<!-- <script type="text/javascript" src="<?php //echo $front."views/assets/scripts/datatables.js";
                                            ?>"></script>  -->

<!-- DataTables -->
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.0/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.0/js/buttons.html5.min.js"></script>



<link href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" rel="stylesheet" />
<link href="https://cdn.datatables.net/buttons/1.6.0/css/buttons.dataTables.min.css" rel="stylesheet" />

<!-- fronteras -->
<?php
if (isset($_SESSION["LOGIN"]) && $_SESSION["LOGIN"] == "Ok") {
    if ($_SESSION["OWNER"] == "1") {
        echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/usuarios.js"></script>';
    }
    echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/fronteras.js"></script>';

    if (isset($_GET["ruta"])) {
        $rutas = explode("/", $_GET["ruta"]);
        $valor =  $rutas[0];

        switch ($valor) {
            case 'adjuntar-documentacion':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/adjuntar-documentacion.js"></script>';
                break;
            case 'usuarios-admin':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/usuarios-admin.js"></script>';
                break;
            case 'consulta':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/consulta.js"></script>';
                break;
            case 'notificaciones':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/notificaciones.js"></script>';
                break;
            case 'tramites-nuevos':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/tramites-nuevos.js"></script>';
                break;
            case 'tramites-proceso':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/tramites-proceso.js"></script>';
                break;
            case 'tramites-finalizados':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/tramites-finalizados.js"></script>';
                break;
            case 'escribano':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/escribano.js"></script>';
                break;
            case 'abogado-tramites-nuevo':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/abogado-tramites-nuevo.js"></script>';
                break;
            case 'abogado-tramites-procesos':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/abogado-tramites-procesos.js"></script>';
                break;
            case 'abogado-tramites-finalizados':
                echo '<script type="text/javascript" src="' . $front . 'views/assets/scripts/modulos/abogado-tramites-finalizados.js"></script>';
                break;
        }
    }
}
?>

<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/zoomist.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo $front . "views/assets/scripts/argentina.js"; ?>"></script>

</body>

<?php //include_once('module/modals/modal.php'); 
?>

</html>