<?php
use Fronteras\Services\UsuarioService;
use Fronteras\Services\NotificacionService;
use Fronteras\Services\ProvinciaService;
use Fronteras\Services\GenericService;
use Fronteras\Services\SolicitudService;

include(__DIR__ . "./../../../../conection.php");

$app->services = function() use ($db) {
    return (object) [
        "usuarioService" => new UsuarioService($db),
        "notificacionService" => new NotificacionService($db),
        "provinciaService " => new ProvinciaService($db),
        "genericService" => new GenericService($db),
        "solicitudService" => new SolicitudService($db)
    ];
};