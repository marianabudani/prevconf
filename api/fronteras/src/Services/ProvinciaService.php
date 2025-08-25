<?php namespace Fronteras\Services;

use \Fronteras\Helpers\FetchHelper;

class ProvinciaService {

    public function __construct($db) {
        $this->db = $db;
    }   

    public function traerTodasActivas() {
        $sql = '
            SELECT * 
            FROM db_provincias 
            WHERE activo = 1';
        $query = $this->db->prepare($sql);

        return FetchHelper::FetchAll($query);
    }

}