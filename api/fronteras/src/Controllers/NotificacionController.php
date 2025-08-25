<?php

namespace Fronteras\Controllers;

use Fronteras\Controllers\BaseController;
use Fronteras\Models\ResponseModel;
use Fronteras\Models\NotificacionModel;

class NotificacionController extends BaseController
{

    private $notificacionService;

    function __construct()
    {
        parent::__construct();
        $this->notificacionService = $this->container->services->notificacionService;
    }

    public function traerPorUsuario()
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

        if (!empty($params['idUsuario'])) {
            $response->status = 0;
            $response->message = $this->notificacionService->traerPorUsuario($params['idUsuario']);
        } else {
            $response->status = 1;
            $response->message = 'El id no puede estar vacío';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    /*public function marcarLeida() {
        
        $body = json_decode($this->request->getBody());

        $response = new ResponseModel();

        if($this->notificacionService->marcarLeida($body->idNotificacion)) {
            $response->status = 0;
            $response->message = "La notificación se editó con éxito";
        } else {
            $response->status = 1;
            $response->message = 'No se pudo editar la notificación';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;        
    }*/

    // public function marcarLeida() {

    //     $body = $this->request->post();

    //     $notificacion = new NotificacionModel();
    //     $notificacion->idNotificacion = $body['idNotificacion'];
    //     $notificacion->leido = $body['leido'];

    //     $response = new ResponseModel();

    //     if($this->notificacionService->marcarLeida($notificacion)) {
    //         $response->status = 0;
    //         $response->message = "Notificación editada con éxito";            
    //     } else {
    //         $response->status = 1;
    //         $response->message = 'No se pudo Modificar Notificación'; 
    //     }

    //     $this->response->setBody(json_encode($response));
    //     return $this->response; 

    // }

    // public function marcarLeida() {

    //     $body = json_decode($this->request->getBody());

    //     $response = new ResponseModel();

    //     if($this->notificacionService->marcarLeida($body[0]->idNotificacion)) {
    //         $response->status = 0;
    //         $response->message = "La notificación se editó con éxito";
    //     } else {
    //         $response->status = 1;
    //         $response->message = 'No se pudo editar la notificación';
    //     }

    //     $this->response->setBody(json_encode($response));
    //     return $this->response;        
    // }

    public function marcarLeida()
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

        $body = $this->request->post();

        $notificacion = new NotificacionModel();
        $notificacion->idNotificacion = $body['idNotificacion'];

        if ($this->notificacionService->marcarLeida($notificacion)) {
            $response->status = 0;
            $response->message = "Notificación editada con éxito";
        } else {
            $response->status = 1;
            $response->message = 'No se pudo Modificar Notificación';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function traerPorSolicitud()
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

        if (!empty($params['idSolicitud'])) {
            $response->status = 0;
            $response->message = $this->notificacionService->traerPorSolicitud($params['idSolicitud']);
        } else {
            $response->status = 1;
            $response->message = 'El id no puede estar vacío';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    /*public function insertarNotificacion() {
        $body = json_decode($this->request->getBody());

        $notificacion = new NotificacionModel();
        $notificacion->armarObjeto($body, false);

        $response = new ResponseModel();

        if($this->notificacionService->insertar($notificacion)) {*/

    /*$template = file_get_contents(__DIR__ . '/../Assets/templates/template-new-user.html'); 
            $template = str_replace('{{asunto}}', 'Datos de usuario', $template); 
            $template = str_replace('{{mensaje}}', 'Mail: ' . $usuario->email . ' Contraseña: ' . $usuario->password, $template); 

            if(Mailing::enviarMail($usuario->email, 'Nueva notificación creada', $template)) {
                $response->status = 0;
                $response->message = "Usuario insertado con éxito";
            } else {
                $response->status = 0;
                $response->message = "Usuario insertado, no se ha podido enviar el email al usuario";
            }*/

    /* $response->status = 0;
            $response->message = "Notificación insertada con éxito";            

        } else {
            $response->status = 1;
            $response->message = 'No se pudo insertar Notificación'; 
        }

        $this->response->setBody(json_encode($response));
        return $this->response;           
    }*/

    public function insertarNotificacion()
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

        $body = $this->request->post();

        $notificacion = new NotificacionModel();
        $notificacion->idSolicitud = $body['idSolicitud'];
        $notificacion->idUsuario = $body['idUsuario'];
        $notificacion->descripcion = $body['descripcion'];
        $notificacion->idUsuarioEmisor = $body['idUsuarioEmisor'];


        if ($this->notificacionService->insertar($notificacion)) {
            $response->status = 0;
            $response->message = "Notificación insertada con éxito";
        } else {
            $response->status = 1;
            $response->message = 'No se pudo insertar Notificación';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }
}
