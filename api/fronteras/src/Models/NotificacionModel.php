<?php namespace Fronteras\Models;

class NotificacionModel {

    public $idNotificacion;
    public $idSolicitud;
    public $idUsuario;
    public $descripcion;
    public $fecha;
    public $leido;

    public function armarObjeto($body, $asignarId) {

        /*$this->idNotificacion = $body->idNotificacion;
        $this->idSolicitud = $body->idSolicitud;
        $this->idUsuario = $body->idUsuario;
        $this->descripcion = $body->descripcion;*/
        
        // Opcionales
        isset($body->idNotificacion) && $this->idNotificacion = $body->idNotificacion;
        isset($body->idSolicitud) && $this->idSolicitud = $body->idSolicitud;
        isset($body->idUsuario) && $this->idUsuario = $body->idUsuario;
        isset($body->descripcion) && $this->descripcion = $body->descripcion;
        isset($body->fecha) && $this->fecha = $body->fecha;
        isset($body->leido) && $this->leido = $body->leido;

        $asignarId && $this->idUsuario = $body->idUsuario;
    }
}