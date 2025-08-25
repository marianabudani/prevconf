<?php

namespace Fronteras\Controllers;

use Fronteras\Models\ResponseModel;
use Fronteras\Controllers\BaseController;
use Fronteras\Models\UsuarioModel;
use Fronteras\Utils\DataUpload;
use Fronteras\Utils\Mailing;
use Fronteras\Helpers\MiscHelper;

class UsuarioController extends BaseController
{

    private $usuarioService;

    function __construct()
    {
        parent::__construct();
        $this->usuarioService = $this->container->services->usuarioService;
    }

    public function traerPorTipo()
    {
        session_start();
        $response = new ResponseModel();
        if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
            // El usuario está logueado
            $response->status = 0;
            $response->message = "No autorizado";
            $this->response->setBody(json_encode($response));
            return $this->response;
        }

        $params = $this->request->get();
        $perfiles = explode(",", $params['perfiles']);

        $usuarios = $this->usuarioService->traerPorTipo($perfiles);
        $usuarios = MiscHelper::separarArchivos($usuarios);


        $response->status = 0;
        $response->message = $usuarios;

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function traerEscribanos()
    {
        session_start();
        $response = new ResponseModel();
        if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
            // El usuario está logueado
            $response->status = 0;
            $response->message = "No autorizado";
            $this->response->setBody(json_encode($response));
            return $this->response;
        }

        $params = $this->request->get();
        $perfiles = explode(",", $params['perfiles']);

        $usuarios = $this->usuarioService->traerEscribanos($perfiles);
        $usuarios = MiscHelper::separarArchivos($usuarios);

        $response->status = 0;
        $response->message = $usuarios;

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function traerAbogadosActivos()
    {
        session_start();
        $response = new ResponseModel();
        if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
            // El usuario está logueado
            $response->status = 0;
            $response->message = "No autorizado";
            $this->response->setBody(json_encode($response));
            return $this->response;
        }

        $response->status = 0;
        $response->message = $this->usuarioService->traerAbogadosActivos();

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function verificarCambioClave()
    {
        $params = $this->request->get();
        $response = new ResponseModel();

        if (!empty($params['id'])) {
            $response->status = 0;
            $response->message = $this->usuarioService->verificarCambioClave($params['id']);
        } else {
            $response->status = 0;
            $response->message = 'El id no puede estar vacío';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    /*public function cambiarClave() {
        $body = json_decode($this->request->getBody());

        $response = new ResponseModel();
        
        if($this->usuarioService->cambiarClave($body->idUsuario, $body->clave)){
            $this->usuarioService->marcarCambioClave($body->idUsuario);

            $response->status = 0;
            $response->message = 'La clave se cambió con éxito';
        } else {
            $response->status = 0;
            $response->message = 'No se pudo cambiar la clave';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;        
    }*/

    public function cambiarClave()
    {

        $body = $this->request->post();

        $usuario = new UsuarioModel();
        $hashedPassword = password_hash($body['clave'], PASSWORD_DEFAULT);
        $usuario->idUsuario = $body['idUsuario'];

        $usuario->clave = $hashedPassword;

        $response = new ResponseModel();



        if ($this->usuarioService->cambiarClave($usuario->idUsuario, $hashedPassword)) {
            $this->usuarioService->marcarCambioClave($usuario->idUsuario);

            $response->status = 0;
            $response->message = 'La clave se cambió con éxito';
        } else {
            $response->status = 0;
            $response->message = 'No se pudo cambiar la clave, la misma no puede ser igual a la anterior.';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }


    /*public function editar() {
        $body = json_decode($this->request->getBody());
        $usuario = new UsuarioModel();
        $usuario->armarObjeto($body, true);

        $response = new ResponseModel();

        if($this->usuarioService->editar($usuario)) {
            $response->status = 0;
            $response->message = "Usuario editado con éxito";
        } else {
            $response->status = 0;
            $response->message = 'No se pudo editar al usuario';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;        
    }*/


    public function editar()
    {
        $body = $this->request->post();

        $hashed = password_hash($body['clave'], PASSWORD_DEFAULT);

        $usuario = new UsuarioModel();
        $usuario->idUsuario = $body['idUsuario'];
        $usuario->nombre = $body['nombre'];
        $usuario->email = $body['email'];
        $usuario->direccion = $body['direccion'];
        $usuario->cp = $body['cp'];
        $usuario->idProvincia = $body['idProvincia'];
        $usuario->activo = $body['activo'];
        $usuario->clave = $hashed;
        $usuario->profile = $body['profile'];


        $response = new ResponseModel();

        if ($this->usuarioService->editar($usuario)) {
            $response->status = 0;
            $response->message = 'Usuario Editado con éxito';
        } else {
            $response->status = 0;
            $response->message = 'No se Editó el Usuario, (Verifique que ha cambiado algo del mismo).';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function editarEscribano()
    {
        $body = $this->request->post();

        $usuario = new UsuarioModel();
        $usuario->idUsuario = $body['idUsuario'];
        $usuario->nombre = $body['nombre'];
        $usuario->email = $body['email'];
        $usuario->direccion = $body['direccion'];
        $usuario->cp = $body['cp'];
        $usuario->idProvincia = $body['idProvincia'];
        $usuario->activo = $body['activo'];
        $usuario->profile = $body['profile'];


        $response = new ResponseModel();

        if ($this->usuarioService->editarEscribano($usuario)) {
            $response->status = 0;
            $response->message = 'Usuario Editado con éxito';
        } else {
            $response->status = 0;
            $response->message = 'No se Editó el Usuario, (Verifique que ha cambiado algo del mismo).';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }



    public function eliminarEscribano()
    {
        $body = $this->request->post();

        $usuario = new UsuarioModel();
        $usuario->idUsuario = $body['idUsuario'];


        $response = new ResponseModel();

        if ($this->usuarioService->eliminarEscribano($usuario)) {
            $response->status = 0;
            $response->message = 'Usuario Editado con éxito';
        } else {
            $response->status = 0;
            $response->message = 'No se Editó el Usuario, (Verifique que ha cambiado algo del mismo).';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }


    public function insertarEscribano()
    {
        $archivos = $_FILES['archivos'];

        $body = $this->request->post();

        $usuario = new UsuarioModel();
        $usuario->nombre = addslashes($body['nombre']);
        $usuario->email = addslashes($body['email']);
        $usuario->profile = 1;
        $usuario->direccion = addslashes($body['direccion']);
        $usuario->cp = addslashes($body['cp']);
        $usuario->idProvincia = $body['idProvincia'];
        $usuario->password = password_hash($body['password'], PASSWORD_DEFAULT);
        $usuario->activo = 0;
        $usuario->hashSession = md5(date("Y/m/d h:i:sa"));



        $dataUpload = DataUpload::subirArchivos($archivos, 'escribanos/' . $usuario->email . '/');

        $response = new ResponseModel();

        if ($dataUpload['ok']) {
            $usuario->archivos = implode(';', $dataUpload['rutas']);

            if ($this->usuarioService->insertar($usuario)) {
                $response->status = 0;
                $response->message = 'Usuario insertado con éxito';
            } else {
                $response->status = 0;
                $response->message = 'El usuario no pudo ser insertado, es probable que ya esté registrado.';
            }
        } else {
            $response->status = 0;
            $response->message = $dataUpload['err'];
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function insertarUsuario()
    {
        try {
            $body = json_decode($this->request->getBody());

            $usuario = new UsuarioModel();
            $usuario->armarObjeto($body, false);

            //$usuario->password = MiscHelper::generarPasswordAleatorio(8);
            $usuario->hashSession = md5(date("Y/m/d h:i:sa"));
            $usuario->activo = 1;

            $response = new ResponseModel();

            if ($this->usuarioService->insertar($usuario)) {

                $response->status = 0;
                //$response->message = "Usuario insertado, no se ha podido enviar el email al usuario";
                $response->message = "Usuario insertado";
                // $template = file_get_contents(__DIR__ . '/../Assets/templates/template-new-user.html');
                // $template = str_replace('{{asunto}}', 'Datos de usuario', $template);
                // $template = str_replace('{{mensaje}}', 'Mail: ' . $usuario->email . ' Contraseña: ' . $usuario->password, $template);

                // if (Mailing::enviarMail($usuario->email, 'Nuevo usuario creado', $template)) {
                //     $response->status = 0;
                //     $response->message = "Usuario insertado con éxito";
                // } else {

                // }
            } else {
                $response->status = 1;
                $response->message = 'No se pudo insertar el usuario';
            }

            $this->response->setBody(json_encode($response));
            return $this->response;
        } catch (\Exception $th) {
            $response = new ResponseModel();
            $response->status = 1;
            $response->message = 'No se pudo insertar el usuario';
        }
    }
}
