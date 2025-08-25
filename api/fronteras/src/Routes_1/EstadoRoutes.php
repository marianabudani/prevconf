<?php

$app->group('/estado', function() use ($app) {
    $app->get('/traer-todos',   \Fronteras\Controllers\EstadoController::class . ':traerTodos');
});