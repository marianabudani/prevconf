<?php

$app->group('/tipo-tramite', function() use ($app) {
    $app->get('/traer-todos',   \Fronteras\Controllers\TipoTramiteController::class . ':traerTodos');
});