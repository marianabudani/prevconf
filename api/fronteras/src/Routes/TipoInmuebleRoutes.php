<?php

$app->group('/tipo-inmueble', function() use ($app) {
    $app->get('/traer-todos',   \Fronteras\Controllers\TipoInmuebleController::class . ':traerTodos');
});