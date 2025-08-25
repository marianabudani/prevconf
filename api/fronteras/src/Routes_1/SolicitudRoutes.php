<?php

$app->group('/solicitud', function() use ($app) {
    $app->get('/traer-por-escribano',   \Fronteras\Controllers\SolicitudController::class . ':traerPorIdEscribano');
    $app->post('/insertar',             \Fronteras\Controllers\SolicitudController::class . ':insertarSolicitud');
    $app->put('/editar',                \Fronteras\Controllers\SolicitudController::class . ':editarSolicitud');
    $app->post('/cargar-documentacion', \Fronteras\Controllers\SolicitudController::class . ':adjuntarDocumentacion');
    $app->get('/traer-nuevas',          \Fronteras\Controllers\SolicitudController::class . ':traerSolicitudesNuevas');
    $app->get('/traer-en-proceso',      \Fronteras\Controllers\SolicitudController::class . ':traerSolicitudesEnProceso');
    $app->get('/traer-finalizadas',     \Fronteras\Controllers\SolicitudController::class . ':traerSolicitudesFinalizadas');
});