<?php

namespace Fronteras\Controllers;

use Fronteras\Controllers\BaseController;
use Fronteras\Models\ResponseModel;

class TipoTramiteController extends BaseController
{

    private $genericService;

    function __construct()
    {
        parent::__construct();
        $this->genericService = $this->container->services->genericService;
    }

    public function traerTodos()
    {
        $response = new ResponseModel();
        if (!isset($_SESSION["LOGIN"]) || $_SESSION["LOGIN"] !== "Ok") {
            // El usuario está logueado
            $response->status = 0;
            $response->message = "No autorizado";
            $this->response->setBody(json_encode($response));
            return $this->response;
        }
        $response->status = 0;
        $response->message = $this->genericService->traerTodos('db_tipostramites');

        $this->response->setBody(json_encode($response));
        return $this->response;
    }
}
