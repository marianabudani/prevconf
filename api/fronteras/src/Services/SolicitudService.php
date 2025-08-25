<?php namespace Fronteras\Services;

use \Fronteras\Helpers\FetchHelper;

class SolicitudService {

    public function __construct($db) {
        $this->db = $db;
    } 

    public function traerPorIdEscribano($idUsuario, $faltaDocumentacion) {
        $sql = '
        SELECT s.id_usuario, s.id_solicitud, s.nombre nombre_solicitud, u.nombre nombre_escribano, 
            s.id_tipo_inmueble, ti.nombre nombre_tipo_inmueble,
            s.id_tipo_operacion, top.nombre nombre_tipo_operacion,
            s.id_estado, e.nombre nombre_estado,
            s.id_tipo_tramite, tp.nombre nombre_tipo_tramite,
            s.id_abogado, uu.nombre nombre_abogado,
            s.fecha, s.nro_expediente, s.destino, s.archivos, s.id_tipo_formulario, s.ubicacion, s.descripcion, tf.nombre nombre_tipo_formulario
        FROM db_solicitudes s
        JOIN db_usuarios u ON u.id = s.id_usuario
        LEFT JOIN db_tiposinmuebles ti ON ti.id_tipo_inmueble = s.id_tipo_inmueble
        LEFT JOIN db_tiposoperaciones top ON top.id_tipo_operacion = s.id_tipo_operacion
        LEFT JOIN db_estados e ON e.id_estado = s.id_estado
        LEFT JOIN db_tipostramites tp ON tp.id_tipo_tramite = s.id_tipo_tramite
        LEFT JOIN db_usuarios uu ON uu.id = s.id_abogado
        LEFT JOIN db_tiposformulario tf ON tf.id_tipo_formulario = s.id_tipo_formulario
        WHERE id_usuario = ?';

        if($faltaDocumentacion) {
            $sql .= ' AND s.id_estado = 4';
        }

        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $idUsuario);

        return FetchHelper::FetchAll($query);
    }




 public function validarchivo($archivo){

        $respuesta = array(
            "ok" => false,
            "err" => ""
        );
        

        $errors     = array();
        $maxsize    = 10097152;
        $acceptable = array(
            'application/pdf',
            'image/jpeg',
            'image/jpg',
            'image/png'
        );

        
        if(($archivo['size'][0] >= $maxsize) || ($archivo["size"][0] == 0)) {
           $respuesta["err"] = "El archivo es demasiado grande";
            return $respuesta;
        }

        if((!in_array($archivo['type'][0], $acceptable)) && (!empty($archivo["type"][0]))) {
            $respuesta["err"] = "Las extensiones permitidas son PDF, JPG, JPEG y PNG";
            return $respuesta;

        }
        else{
           $respuesta['ok'] = true;
           return $respuesta;
        }

        
    }





    public function insertarSolicitud($solicitud) {

        $vacio = "";

        $sql = '
            INSERT INTO db_solicitudes (nombre, id_tipo_inmueble, id_tipo_operacion, id_usuario, 
                id_estado, id_tipo_formulario, ubicacion, descripcion, archivos, nro_expediente, destino, id_abogado) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)';

        $query = $this->db->prepare($sql);
        
        $query && $query->bind_param('siiiiisssss', 
        $solicitud->nombre, 
        $solicitud->idTipoInmueble, 
        $solicitud->idTipoOperacion, 
        $solicitud->idUsuario, 
        $solicitud->idEstado, 
        $solicitud->idTipoFormulario,
        $solicitud->ubicacion,
        $solicitud->descripcion,
        $solicitud->archivos,
        $vacio, $vacio);

        $query->execute();
        return $query->affected_rows > 0 
            ? $this->db->insert_id 
            : false;
    }

    /*public function editarSolicitud($solicitud) {
        $sql = '
            UPDATE db_solicitudes SET 
                id_estado = ?, 
                nro_expediente = ?, 
                id_abogado = ?, 
                destino = ?, 
                id_tipo_tramite = ?
            WHERE id_solicitud = ?';

        $query = $this->db->prepare($sql);
        
        $query && $query->bind_param('isisii',  
        $solicitud->idEstado, 
        $solicitud->nroExpediente, 
        $solicitud->idAbogado, 
        $solicitud->destino,
        $solicitud->idTipoTramite, 
        $solicitud->idSolicitud);

        $query->execute();
        return $query->affected_rows > 0 ? true : false;
    }*/

    public function editarSolicitud($solicitud) {

        if($solicitud->archivos){
            $sql = '
                UPDATE db_solicitudes SET 
                    nombre = ?,
                    id_tipo_inmueble = ?,
                    id_tipo_operacion = ?,
                    id_estado = ?, 
                    nro_expediente = ?, 
                    id_abogado = ?, 
                    destino = ?, 
                    id_tipo_tramite = ?,
                    archivos = ?,
                    ubicacion = ?,
                    descripcion = ?
                WHERE id_solicitud = ?';
           
            $query = $this->db->prepare($sql);
            
            $query && $query->bind_param('siiisisisssi',  
            $solicitud->nombre, 
            $solicitud->idTipoInmueble, 
            $solicitud->idTipoOperacion,
            $solicitud->idEstado, 
            $solicitud->nroExpediente, 
            $solicitud->idAbogado, 
            $solicitud->destino,
            $solicitud->idTipoTramite, 
            $solicitud->archivos,
            $solicitud->ubicacion,
            $solicitud->descripcion,
            $solicitud->idSolicitud);

            $query->execute();
            return $query->affected_rows > 0 ? true : false;
        }else{
            $sql = '
            UPDATE db_solicitudes SET 
                nombre = ?,
                id_estado = ?, 
                nro_expediente = ?, 
                id_abogado = ?, 
                destino = ?, 
                id_tipo_tramite = ?,
                ubicacion = ?,
                descripcion = ?
            WHERE id_solicitud = ?';

            $query = $this->db->prepare($sql);
            
            $query && $query->bind_param('sisisisi',   
            $solicitud->nombre, 
            //$solicitud->idTipoInmueble, 
            //$solicitud->idTipoOperacion,
            $solicitud->idEstado, 
            $solicitud->nroExpediente, 
            $solicitud->idAbogado, 
            $solicitud->destino,
            $solicitud->idTipoTramite,
            $solicitud->ubicacion, 
            //$solicitud->descripcion,
            $solicitud->idSolicitud);

            $query->execute();
            return $query->affected_rows > 0 ? true : false;
        }
    }




    public function traerUna($idSolicitud) {
        /*$sql = '
            SELECT s.*, u.email emailEscribano
            FROM db_solicitudes s
            JOIN db_usuarios u ON u.id = s.id_usuario
            WHERE s.id_solicitud = ?';*/
        $sql = '
            SELECT s.id_solicitud, s.nombre nombre_solicitud, s.id_tipo_inmueble, s.id_tipo_operacion, s.id_estado, 
            s.id_tipo_tramite, s.id_abogado, s.fecha, s.nro_expediente, s.destino, s.archivos, s.id_tipo_formulario, s.ubicacion, s.descripcion,  
            u.email emailEscribano
            FROM db_solicitudes s
            JOIN db_usuarios u ON u.id = s.id_usuario
            WHERE s.id_solicitud = ?';
        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $idSolicitud);

        return FetchHelper::FetchOne($query);
    }

    public function editarArchivos($idSolicitud, $archivos) {
        $sql = '
            UPDATE db_solicitudes 
            SET archivos = ?
            WHERE id_solicitud = ?';

        $query = $this->db->prepare($sql);
        
        $query && $query->bind_param('si', 
        $archivos,
        $idSolicitud);

        $query->execute();
        return $query->affected_rows > 0 ? true : false;
    }

    public function traerSolicitudesNuevas($idAbogado) {
        $sql = '
        SELECT s.id_solicitud, s.nombre nombre_solicitud, s.id_usuario, u.nombre nombre_escribano, 
            s.id_tipo_inmueble, ti.nombre nombre_tipo_inmueble,
            s.id_tipo_operacion, top.nombre nombre_tipo_operacion,
            s.id_estado, e.nombre nombre_estado,
            s.id_tipo_tramite, tp.nombre nombre_tipo_tramite,
            s.id_abogado, uu.nombre nombre_abogado,
            s.fecha, s.nro_expediente, s.destino, s.archivos, s.id_tipo_formulario, s.ubicacion, s.descripcion, tf.nombre nombre_tipo_formulario
        FROM db_solicitudes s
        JOIN db_usuarios u ON u.id = s.id_usuario
        LEFT JOIN db_tiposinmuebles ti ON ti.id_tipo_inmueble = s.id_tipo_inmueble
        LEFT JOIN db_tiposoperaciones top ON top.id_tipo_operacion = s.id_tipo_operacion
        LEFT JOIN db_estados e ON e.id_estado = s.id_estado
        LEFT JOIN db_tipostramites tp ON tp.id_tipo_tramite = s.id_tipo_tramite
        LEFT JOIN db_usuarios uu ON uu.id = s.id_abogado
        LEFT JOIN db_tiposformulario tf ON tf.id_tipo_formulario = s.id_tipo_formulario
        WHERE s.id_estado = 1';

        if($idAbogado) {
            $sql .= ' AND id_abogado = ' . $idAbogado;
        }
        $query = $this->db->prepare($sql);       

        return FetchHelper::FetchAll($query);
    }

    public function traerSolicitudesEnProceso($idAbogado) {
        $sql = '
        SELECT s.id_solicitud, s.nombre nombre_solicitud, s.id_usuario, u.nombre nombre_escribano, 
            s.id_tipo_inmueble, ti.nombre nombre_tipo_inmueble,
            s.id_tipo_operacion, top.nombre nombre_tipo_operacion,
            s.id_estado, e.nombre nombre_estado,
            s.id_tipo_tramite, tp.nombre nombre_tipo_tramite,
            s.id_abogado, uu.nombre nombre_abogado,
            s.fecha, s.nro_expediente, s.destino, s.archivos, s.id_tipo_formulario, s.ubicacion, s.descripcion, tf.nombre nombre_tipo_formulario
        FROM db_solicitudes s
        JOIN db_usuarios u ON u.id = s.id_usuario
        LEFT JOIN db_tiposinmuebles ti ON ti.id_tipo_inmueble = s.id_tipo_inmueble
        LEFT JOIN db_tiposoperaciones top ON top.id_tipo_operacion = s.id_tipo_operacion
        LEFT JOIN db_estados e ON e.id_estado = s.id_estado
        LEFT JOIN db_tipostramites tp ON tp.id_tipo_tramite = s.id_tipo_tramite
        LEFT JOIN db_usuarios uu ON uu.id = s.id_abogado
        LEFT JOIN db_tiposformulario tf ON tf.id_tipo_formulario = s.id_tipo_formulario
        WHERE s.id_estado NOT IN (1, 11, 12, 13, 14)';

        if($idAbogado) {
            $sql .= ' AND id_abogado = ' . $idAbogado;
        }
        $query = $this->db->prepare($sql);       

        return FetchHelper::FetchAll($query);
    }

    public function traerSolicitudesFinalizadas($idAbogado) {
        $sql = '
        SELECT s.id_solicitud, s.nombre nombre_solicitud, s.id_usuario, u.nombre nombre_escribano, 
            s.id_tipo_inmueble, ti.nombre nombre_tipo_inmueble,
            s.id_tipo_operacion, top.nombre nombre_tipo_operacion,
            s.id_estado, e.nombre nombre_estado,
            s.id_tipo_tramite, tp.nombre nombre_tipo_tramite,
            s.id_abogado, uu.nombre nombre_abogado,
            s.fecha, s.nro_expediente, s.destino, s.archivos, s.id_tipo_formulario, s.ubicacion, s.descripcion, tf.nombre nombre_tipo_formulario
        FROM db_solicitudes s
        JOIN db_usuarios u ON u.id = s.id_usuario
        LEFT JOIN db_tiposinmuebles ti ON ti.id_tipo_inmueble = s.id_tipo_inmueble
        LEFT JOIN db_tiposoperaciones top ON top.id_tipo_operacion = s.id_tipo_operacion
        LEFT JOIN db_estados e ON e.id_estado = s.id_estado
        LEFT JOIN db_tipostramites tp ON tp.id_tipo_tramite = s.id_tipo_tramite
        LEFT JOIN db_usuarios uu ON uu.id = s.id_abogado
        LEFT JOIN db_tiposformulario tf ON tf.id_tipo_formulario = s.id_tipo_formulario
        WHERE s.id_estado IN (11, 12, 13, 14)';

        if($idAbogado) {
            $sql .= ' AND id_abogado = ' . $idAbogado;
        }
        $query = $this->db->prepare($sql);       

        return FetchHelper::FetchAll($query);
    }

    public function eliminarSolicitud($idSolicitud) {
        $sql = '
            DELETE FROM db_solicitudes 
            WHERE id_solicitud = '.$idSolicitud;

        $query = $this->db->prepare($sql);
        $query->execute();
     
    }

}