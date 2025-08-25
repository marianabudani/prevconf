<?php
use Fronteras\Controllers\UsuarioController;

$app->group('/usuario', function() use ($app) {
    $app->get('/traer-por-tipo',            UsuarioController::class . ':traerPorTipo');
    $app->get('/traer-escribanos',            UsuarioController::class . ':traerEscribanos'); 
    $app->get('/traer-abogados-activos',    UsuarioController::class . ':traerAbogadosActivos');
    $app->get('/verificar-cambio-clave',    UsuarioController::class . ':verificarCambioClave');
    $app->post('/cambiar-clave',            UsuarioController::class . ':cambiarClave');
    $app->post('/editar',                   UsuarioController::class . ':editar');
    $app->post('/editarEscribano',          UsuarioController::class . ':editarEscribano');
    $app->post('/eliminarEscribano',          UsuarioController::class . ':eliminarEscribano');
    $app->post('/insertar-usuario',         UsuarioController::class . ':insertarUsuario');
    $app->post('/insertar-escribano',       UsuarioController::class . ':insertarEscribano');
});