<?php namespace Fronteras\Controllers;

class BaseController {
    
    protected $container;
    protected $request;
    protected $response;

    function __construct() {
        global $app;
        
        $this->container = $app;
        $this->request = $app->request;
        $this->response = $app->response;

        $this->response->headers->set('Content-Type', 'application/json;charset=utf-8');
    }
}
