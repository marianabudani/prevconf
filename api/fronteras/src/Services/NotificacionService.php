<?php namespace Fronteras\Services;

use \Fronteras\Helpers\FetchHelper;

class NotificacionService {

    public function __construct($db) {
        $this->db = $db;
    }   

    public function insertar($notificacion) {
        $sql = '
            INSERT INTO db_notificaciones (id_solicitud, id_usuario, descripcion, leido, id_usuario_emisor) 
            VALUES (?, ?, ?, 0, ?)';

        $query = $this->db->prepare($sql);
        
        $query && $query->bind_param('iisi', 
        $notificacion->idSolicitud, 
        $notificacion->idUsuario, 
        $notificacion->descripcion,
        $notificacion->idUsuarioEmisor);

        $query->execute();
        return $query->affected_rows > 0 
            ? $this->db->insert_id 
            : false;
    }



    public function traerPorUsuario($idUsuario) {
        $sql = '
        SELECT profile FROM db_usuarios WHERE id=?';
        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $idUsuario);

    $profile = FetchHelper::FetchAll($query);
    
    switch ($profile[0]['profile']) {
        case 0:
            $sql = '
            SELECT *,u.nombre as solicitante ,n.id_solicitud as pepe,(SELECT nombre
            FROM db_notificaciones n
            inner join db_usuarios u on u.id = n.id_usuario_emisor
            where id_solicitud = pepe
            ORDER BY id_notificacion desc
            LIMIT 1, 1) as solicitante
            FROM db_notificaciones n
            INNER JOIN db_usuarios u ON u.id = n.id_usuario_emisor
            WHERE u.profile <> 0 
  ';
                

        $query = $this->db->prepare($sql);
        

    return FetchHelper::FetchAll($query);
            break;
        case 1:
            $sql = '
            SELECT n.*, s.nombre,du.nombre as solicitante 
            FROM db_notificaciones n
            JOIN db_solicitudes s ON s.id_solicitud = n.id_solicitud
            INNER JOIN db_usuarios du on du.id = n.id_usuario_emisor
            WHERE  n.id_usuario_emisor != "'.$idUsuario.'" and n.id_usuario = "'.$idUsuario.'"';

            $query = $this->db->prepare($sql);
            //$query && $query->bind_param('i', $idUsuario);

        return FetchHelper::FetchAll($query); 
            break;
        case 2:
            $sql = '
            SELECT n.*, s.nombre,du.nombre as solicitante 
            FROM db_notificaciones n
            JOIN db_solicitudes s ON s.id_solicitud = n.id_solicitud
            INNER JOIN db_usuarios du on du.id = n.id_usuario_emisor
            WHERE s.id_abogado = ?';

            $query = $this->db->prepare($sql);
            $query && $query->bind_param('i', $idUsuario);

        return FetchHelper::FetchAll($query);
            break;
    }
    }


    public function traerPorAdmin() {
        $sql = '
            SELECT n.*, s.nombre
            FROM db_notificaciones n
            JOIN db_solicitudes s ON s.id_solicitud = n.id_solicitud';
            

            $query = $this->db->prepare($sql);
            

        return FetchHelper::FetchAll($query);
    }

    public function traerPorSolicitud($idSolicitud) {
        // $sql = '
        //     SELECT n.*, s.nombre
        //     FROM db_notificaciones n
        //     JOIN db_solicitudes s ON s.id_solicitud = n.id_solicitud
        //     WHERE n.id_solicitud = ?';

        $sql = '
            SELECT n.id_notificacion, n.id_solicitud, n.id_usuario, n.descripcion, n.fecha, n.leido, s.nombre
            FROM db_notificaciones n
            JOIN db_solicitudes s ON s.id_solicitud = n.id_solicitud
            WHERE n.id_solicitud = ?';

            $query = $this->db->prepare($sql);
            $query && $query->bind_param('i', $idSolicitud);

        return FetchHelper::FetchAll($query);
    }

    public function marcarLeida($notificacion) {
        
        $sql = '
        UPDATE db_notificaciones 
        SET leido = (case when leido = 1 Then 0 Else 1 End)  
        WHERE id_notificacion = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $notificacion->idNotificacion);
        //$query && $query->bind_param('i', $idNotificacion);
        $query->execute();

        return $query->affected_rows > 0 ? true : false;
    }

    // public function marcarLeida($idNotificacion) {
        
    //     $sql = '
    //     UPDATE db_notificaciones 
    //     SET leido = (case when leido = 1 Then 0 Else 1 End)  
    //     WHERE id_notificacion = ?';

    //     $query = $this->db->prepare($sql);
    //     //$query && $query->bind_param('i', $notificacion->idNotificacion);
    //     $query && $query->bind_param('i', $idNotificacion);
    //     $query->execute();

    //     return $query->affected_rows > 0 ? true : false;
    // }
    
    // public function marcarLeida($notificacion) {
    //     $sql = '
    //     UPDATE db_notificaciones 
    //     SET leido = ? 
    //     WHERE id_notificacion = ?';


    //     //(case when leido = 1 Then 0 Else 1 End) 
    //     $query = $this->db->prepare($sql);
    //     $query && $query->bind_param('ii', $notificacion->leido, $notificacion->idNotificacion);
    //     $query->execute();

    //     return $query->affected_rows > 0 ? true : false;
    // }

}