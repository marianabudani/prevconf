<?php

namespace Fronteras\Controllers;

use Fronteras\Controllers\BaseController;
use Fronteras\Models\ResponseModel;

class ProvinciaController extends BaseController
{

    private $provinciaService;

    function __construct()
    {
        parent::__construct();
        $this->provinciaService = $this->container->services->provinciaService;
    }

    public function traerTodasActivas()
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
        $response->message = $this->provinciaService->traerTodasActivas();

        $this->response->setBody(json_encode($response));
        return $this->response;
    }
}
