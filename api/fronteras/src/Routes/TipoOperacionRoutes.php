<?php

$app->group('/tipo-operacion', function() use ($app) {
    $app->get('/traer-todos',   \Fronteras\Controllers\TipoOperacionController::class . ':traerTodos');
});