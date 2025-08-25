<?php

namespace Fronteras\Controllers;

use Fronteras\Controllers\BaseController;
use Fronteras\Models\ResponseModel;
use Fronteras\Models\SolicitudModel;
use Fronteras\Utils\DataUpload;
use Fronteras\Utils\Mailing;
use Fronteras\Helpers\MiscHelper;

class SolicitudController extends BaseController
{

    private $solicitudService;
    private $usuarioService;

    function __construct()
    {
        parent::__construct();
        $this->solicitudService = $this->container->services->solicitudService;
        $this->usuarioService = $this->container->services->usuarioService;
    }

    public function traerPorIdEscribano()
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
        $idEscribano = $params['id'];
        $faltaDocumentacion = isset($params['faltaDocumentacion']) ? $params['faltaDocumentacion'] : null;

        $solicitudes = $this->solicitudService->traerPorIdEscribano($idEscribano, $faltaDocumentacion);
        $solicitudes = MiscHelper::separarArchivos($solicitudes);

        if (!empty($params['id'])) {
            $response->status = 0;
            $response->message = $solicitudes;
        } else {
            $response->status = 0;
            $response->message = 'El id no puede estar vacío';
        }

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function traerSolicitudesNuevas()
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
        $idAbogado = isset($params['idAbogado']) ? $params['idAbogado'] : null;

        $solicitudes = $this->solicitudService->traerSolicitudesNuevas($idAbogado);
        $solicitudes = MiscHelper::separarArchivos($solicitudes);

        $response->status = 0;
        $response->message = $solicitudes;

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function traerSolicitudesEnProceso()
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
        $idAbogado = isset($params['idAbogado']) ? $params['idAbogado'] : null;

        $solicitudes = $this->solicitudService->traerSolicitudesEnProceso($idAbogado);
        $solicitudes = MiscHelper::separarArchivos($solicitudes);

        $response->status = 0;
        $response->message = $solicitudes;

        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    public function traerSolicitudesFinalizadas()
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
        $idAbogado = isset($params['idAbogado']) ? $params['idAbogado'] : null;

        $solicitudes = $this->solicitudService->traerSolicitudesFinalizadas($idAbogado);
        $solicitudes = MiscHelper::separarArchivos($solicitudes);

        $response->status = 0;
        $response->message = $solicitudes;

        $this->response->setBody(json_encode($response));
        return $this->response;
    }




    public function insertarSolicitud()
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

        $archivos = $_FILES['archivos'];
        $response_validador = $this->solicitudService->validarchivo($archivos);

        if ($response_validador['ok'] == true) {



            $body = $this->request->post();
            $body = (object) $body;
            $solicitud = new SolicitudModel();
            $solicitud->armarObjeto($body, false);
            $solicitud->idEstado = 1;




            $idSolicitud = $this->solicitudService->insertarSolicitud($solicitud);


            if (!$idSolicitud) {
                $response->status = 0;
                $response->message = 'La solicitud no pudo ser insertada';
                $this->response->setBody(json_encode($response));
                return $this->response;
            }

            $dataUpload = DataUpload::subirArchivos($archivos, 'solicitudes/' . $idSolicitud . '/');

            if (!$dataUpload['ok']) {
                $this->solicitudService->eliminarSolicitud($idSolicitud);
                $response->status = 0;
                $response->message = $dataUpload['err'];
                $this->response->setBody(json_encode($response));
                return $this->response;
            }

            $solicitud->archivos = implode(';', $dataUpload['rutas']);

            if (!$this->solicitudService->editarArchivos($idSolicitud, $solicitud->archivos)) {
                DataUpload::eliminarArchivo('solicitudes/' . $idSolicitud . '/');
                $this->solicitudService->eliminarSolicitud($idSolicitud);
                $response->status = 0;
                $response->message = "No se pudo guardar la solicitud";
            } else {
                $response->status = 0;
                $response->message = 'Solicitud insertada con éxito';
            }

            $this->response->setBody(json_encode($response));
            return $this->response;
        } else {
            $response = new ResponseModel();

            $response->status = 0;
            $response->message = $response_validador["err"];
            $this->response->setBody(json_encode($response));
            return $this->response;
        }
    }

    /*public function editarSolicitud() {
        $body = json_decode($this->request->getBody());

        $solicitud = new SolicitudModel();
        $solicitud->armarObjeto($body, true);

        $response = new ResponseModel();

        if($this->solicitudService->editarSolicitud($solicitud)) {
            $solicitud = $this->solicitudService->traerUna($solicitud->idSolicitud);

            $template = file_get_contents(__DIR__ . '/../Assets/templates/template-new-user.html'); 
            $template = str_replace('{{asunto}}', 'Novedades en su solicitud', $template); 
            $template = str_replace('{{mensaje}}', 'Por favor ingrese al sistema para visualizar los cambios en su solicitud', $template); 

            if(Mailing::enviarMail($solicitud['emailEscribano'], 'Novedades en su solicitud', $template)) {
                $response->status = 0;
                $response->message = "Usuario insertado con éxito";
            } else {
                $response->status = 0;
                $response->message = "Usuario insertado, no se ha podido enviar el email al escribano";
            }
        } else {
            $response->status = 0;
            $response->message = 'No se pudo editar la solicitud'; 
        }

        $this->response->setBody(json_encode($response));
        return $this->response;       
    }*/

    //Siguiente funcion, funciona pero solo guarda archivo que se agrega en este momento, elimina todos los agregado anteriormente.
    public function editarSolicitud()
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

        $band = 0;

        try {
            if ($_FILES['archivos']) {
                $archivos = $_FILES['archivos'];
                $band = 1;
            }
        } catch (\Throwable $th) {
            $band = 0;
        }


        $body = $this->request->post();

        $solicitud = new SolicitudModel();
        $solicitud->idSolicitud = $body['idSolicitud'];
        $solicitud->nombre = $body['nombre'];
        $solicitud->idTipoInmueble = $body['idTipoInmueble'];
        $solicitud->idTipoOperacion = $body['idTipoOperacion'];
        $solicitud->idEstado = $body['idEstado'];
        $solicitud->nroExpediente = $body['nroExpediente'];
        $solicitud->idAbogado = $body['idAbogado'];
        $solicitud->destino = $body['destino'];
        $solicitud->idTipoTramite = $body['idTipoTramite'];
        $solicitud->ubicacion = $body['ubicacion'];
        $solicitud->descripcion = $body['descripcion'];

        //$solicitud->archivos = $body['archivos'];


        //if($_FILES['archivos']["name"][0] != ""){
        if ($band == 1) {

            $dataUpload = DataUpload::subirArchivos($archivos, 'solicitudes/' . $solicitud->idSolicitud . '/');

            if ($dataUpload['ok']) { //Si se insertaron correctamente los archivos

                $solicitud_c_arc = $this->solicitudService->traerUna($solicitud->idSolicitud);

                $urlArchivosSubidos = $dataUpload['rutas'];
                $solicitudArchivos = $solicitud_c_arc['archivos'];

                for ($i = 0; $i < count($urlArchivosSubidos); $i++) {
                    if (strlen($solicitudArchivos) !== 0) {
                        $solicitudArchivos .= ';';
                    }
                    $solicitudArchivos .= $urlArchivosSubidos[$i];
                }
                $solicitud->archivos = $solicitudArchivos;

                //$solicitud->archivos = implode(';', $dataUpload['rutas']);               

                if ($this->solicitudService->editarSolicitud($solicitud)) {
                    $response->status = 0;
                    $response->message = 'Solicitud editada con Éxito';
                } else {
                    $response->status = 0;
                    $response->message = 'No se pudo editar la solicitud';
                }
            } else { //si no fue bueno el insertar de archivos
                $response->status = 0;
                $response->message = 'Hubo un error al querer subir los archivos';
            } //Fin si no fue bueno el insertar de archivos

        } else {

            $solicitud_c_arc = $this->solicitudService->traerUna($solicitud->idSolicitud);
            $solicitudArchivos = $solicitud_c_arc['archivos'];
            $solicitud->archivos = $solicitudArchivos;

            if ($this->solicitudService->editarSolicitud($solicitud)) {
                $response->status = 0;
                $response->message = 'Solicitud editada con Éxito';
            } else {
                $response->status = 0;
                $response->message = 'No se pudo editar la solicitud';
            }
        } //Fin si no existen archivos
        $this->response->setBody(json_encode($response));
        return $this->response;
    }

    /*public function editarSolicitud() {

        $archivos = $_FILES['archivos'];
        $body = $this->request->post();
        
        $solicitud = new SolicitudModel();
        $solicitud->idSolicitud = $body['idSolicitud'];
        $solicitud->idEstado = $body['idEstado'];
        $solicitud->nroExpediente = $body['nroExpediente'];
        $solicitud->idAbogado = $body['idAbogado'];
        $solicitud->destino = $body['destino'];
        $solicitud->idTipoTramite = $body['idTipoTramite'];        

        $response = new ResponseModel();
        
        if($_FILES['archivos']["name"][0] != ""){
            //$body = $this->request->get();
            //$archivos = $_FILES['archivos'];
        
            $solicitud_Una = $this->solicitudService->traerUna($body['idSolicitud']);
            $ruta = $solicitud_Una['emailEscribano'] .'/solicitudes/';
        
            if($this->guardarArchivos($solicitud_Una, $archivos, $ruta)){
    
                if($this->solicitudService->editarSolicitud($solicitud)) {
                    $response->status = 0;
                    $response->message = 'Solicitud e imagenes editada con Éxito '; 
                } else {
                    $response->status = 0;
                    $response->message = 'No se pudo editar la solicitud'; 
                }

            } else{ //si no fue bueno el insertar de archivos
                $response->status = 0;
                $response->message = 'Hubo un error al querer subir los archivos';     
            }//Fin si no fue bueno el insertar de archivos

        }else{
            if($this->solicitudService->editarSolicitud($solicitud)) {
                $response->status = 0;
                $response->message = 'Solicitud editada con Éxito'; 
            } else {
                $response->status = 0;
                $response->message = 'No se pudo editar la solicitud'; 
            }
        } //Fin si no existen archivos
        $this->response->setBody(json_encode($response));
        return $this->response;            
    }*/





    public function adjuntarDocumentacion()
    {
        $body = $this->request->get();
        $archivos = $_FILES['archivos'];

        $solicitud = $this->solicitudService->traerUna($body['idSolicitud']);
        //$ruta = $solicitud['emailEscribano'] .'/solicitudes/';
        $ruta =  'solicitudes/' . $body['idSolicitud'] . '/';

        $this->guardarArchivos($solicitud, $archivos, $ruta);
    }

    public function guardarArchivos($solicitud, $archivos, $ruta)
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


        $dataUpload = DataUpload::subirArchivos($archivos, $ruta);

        if (!$dataUpload['ok']) {
            $response->status = 0;
            $response->message = $dataUpload['err'];
            $this->response->setBody(json_encode($response));
            return $response;
        }

        $urlArchivosSubidos =  $dataUpload['rutas'];
        $solicitudArchivos = $solicitud['archivos'];

        for ($i = 0; $i < count($urlArchivosSubidos); $i++) {
            if (strlen($solicitudArchivos) !== 0) {
                $solicitudArchivos .= ';';
            }
            $solicitudArchivos .= $urlArchivosSubidos[$i];
        }

        if ($this->solicitudService->editarArchivos($solicitud['id_solicitud'], $solicitudArchivos)) {
            $response->status = 0;
            $response->message = explode(';', $solicitudArchivos);
        } else {
            $response->status = 0;
            $response->message = 'No se pudo cargar la documentación';
        }

        $this->response->setBody(json_encode($response));
        return $response;
    }
}
