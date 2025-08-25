<?php namespace Fronteras\Models;
class UsuarioModel {

    public $idUsuario;
    public $email;
    public $password;
    public $nombre;
    public $profile;
    public $hashSession;
    public $direccion;
    public $cp;
    public $idProvincia;
    public $activo;
    public $archivos;

    public function armarObjeto($body, $asignarId) {

        $this->email = $body->email;
        $this->nombre = $body->nombre;
        $this->direccion = $body->direccion;
        $this->cp = $body->cp;
        $this->idProvincia = $body->idProvincia;
        
        // Opcionales
        isset($body->activo) && $this->activo = $body->activo;
        isset($body->profile) && $this->profile = $body->profile;
        isset($body->password) && $this->password = $body->password;
        $asignarId && $this->idUsuario = $body->idUsuario;
    }
}