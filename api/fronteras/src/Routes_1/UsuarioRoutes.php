<?php
use Fronteras\Controllers\UsuarioController;

$app->group('/usuario', function() use ($app) {
    // $app->get('/traer',                     UsuarioController::class . ':traerUno');
    $app->get('/traer-por-tipo',            UsuarioController::class . ':traerPorTipo');
    $app->get('/traer-escribanos',            UsuarioController::class . ':traerEscribanos'); 
    $app->get('/traer-abogados-activos',    UsuarioController::class . ':traerAbogadosActivos');
    $app->get('/verificar-cambio-clave',    UsuarioController::class . ':verificarCambioClave');
    $app->put('/cambiar-clave',             UsuarioController::class . ':cambiarClave');
    $app->put('/editar',                    UsuarioController::class . ':editar');
    $app->post('/insertar-usuario',         UsuarioController::class . ':insertarUsuario');
    $app->post('/insertar-escribano',       UsuarioController::class . ':insertarEscribano');
    // $app->post('/subir-archivo',            UsuarioController::class . ':subirFormulario');
});
