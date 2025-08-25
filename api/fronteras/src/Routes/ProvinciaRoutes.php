<?php

$app->group('/provincia', function() use ($app) {
    $app->get('/traer-todas',   \Fronteras\Controllers\ProvinciaController::class . ':traerTodasActivas');
});