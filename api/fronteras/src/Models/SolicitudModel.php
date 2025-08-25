<?php namespace Fronteras\Models;

class SolicitudModel {
    public $idSolicitud;
    public $nombre;
    public $idTipoInmueble;
    public $idTipoOperacion;
    public $idUsuario;
    public $idEstado;
    public $nroExpediente;
    public $idAbogado;
    public $destino;
    public $idTipoTramite;
    public $idTipoFormulario;
    public $archivos;
    public $ubicacion;
    public $descripcion;

    public function armarObjeto($body, $asignarId) {
        isset($body->idSolicitud) && $this->idSolicitud = $body->idSolicitud;
        isset($body->idEstado) && $this->idEstado = $body->idEstado;
        isset($body->idTipoTramite) && $this->idTipoTramite = $body->idTipoTramite;
        isset($body->nroExpediente) && $this->nroExpediente = $body->nroExpediente;
        isset($body->destino) &&  $this->destino = $body->destino;
        isset($body->idAbogado) && $this->idAbogado = $body->idAbogado;
        isset($body->nombre) && $this->nombre = $body->nombre;
        isset($body->idTipoInmueble) && $this->idTipoInmueble = $body->idTipoInmueble;
        isset($body->idTipoOperacion) && $this->idTipoOperacion = $body->idTipoOperacion;
        isset($body->idUsuario) && $this->idUsuario = $body->idUsuario;
        isset($body->idTipoFormulario) && $this->idTipoFormulario = $body->idTipoFormulario;
        isset($body->archivos) && $this->archivos = $body->archivos;
        isset($body->ubicacion) && $this->ubicacion = $body->ubicacion;
        isset($body->descripcion) && $this->descripcion = $body->descripcion;
        
        $asignarId && $this->idSolicitud = $body->idSolicitud;
    }
}