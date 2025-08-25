<?php

$app->group('/notificacion', function() use ($app) {
    $app->get('/traer-por-usuario',     \Fronteras\Controllers\NotificacionController::class . ':traerPorUsuario');
    $app->get('/traer-por-solicitud',   \Fronteras\Controllers\NotificacionController::class . ':traerPorSolicitud');
    $app->put('/marcar-leida',          \Fronteras\Controllers\NotificacionController::class . ':marcarLeida');
});