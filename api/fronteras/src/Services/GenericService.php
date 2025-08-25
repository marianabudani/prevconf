<?php namespace Fronteras\Services;

use \Fronteras\Helpers\FetchHelper;

class GenericService {

    public function __construct($db) {
        $this->db = $db;
    }   

    public function traerTodos($entidad) {
        $sql = 'SELECT * FROM ' . $entidad;
        $query = $this->db->prepare($sql);

        return FetchHelper::FetchAll($query);
    }


    public function traerUno($entidad, $campoId, $id) {
        $sql = 'SELECT * FROM ' . $entidad . ' WHERE ' . $campoId ."= ". $id;

        var_dump($sql);

        $query = $this->db->prepare($sql);

        return FetchHelper::FetchAll($query);
    }

}