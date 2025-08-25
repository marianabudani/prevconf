<?php

$app->group('/perfil', function() use ($app) {
    $app->get('/traer-todos',   \Fronteras\Controllers\PerfilController::class . ':traerTodos');
});