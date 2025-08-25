<?php

namespace Fronteras\Services;

use \Fronteras\Helpers\FetchHelper;

class UsuarioService
{


    public function __construct($db)
    {
        $this->db = $db;
    }

    public function traerPorTipo($perfiles)
    {

        $sql = "
            SELECT u.id, u.nombre, d.direccion, d.cp, d.id_provincia, p.nombre nombre_provincia,
            u.email, d.activo, u.profile, pe.nombre nombre_perfil, d.archivos
            FROM db_usuarios u
            LEFT JOIN db_datosusuario d ON d.id_usuario = u.id 
            LEFT JOIN db_provincias p ON p.id_provincia = d.id_provincia
            LEFT JOIN db_perfiles pe ON pe.id_perfil = u.profile
            WHERE u.profile IN (" . implode(',', $perfiles) . ")
        ";
        $query = $this->db->prepare($sql);

        return FetchHelper::FetchAll($query);
    }

    public function traerEscribanos($perfiles)
    {


        $sql = "

        SELECT u.id, u.nombre, d.direccion, d.cp, d.id_provincia, p.nombre nombre_provincia,
            u.email, d.activo, u.profile, pe.nombre nombre_perfil, d.archivos, u.pass clave
            from db_usuarios u
            LEFT JOIN db_datosusuario d ON d.id_usuario = u.id 
            LEFT JOIN db_provincias p ON p.id_provincia = d.id_provincia
            LEFT JOIN db_perfiles pe ON pe.id_perfil = u.profile
            where u.PROFILE = 1
						ORDER BY  d.activo ASC,u.fec_ult_act asc
          
        ";

        $query = $this->db->prepare($sql);

        return FetchHelper::FetchAll($query);
    }

    public function traerUno($idUsuario)
    {
        $sql = '
            SELECT u.id, u.email, u.nombre, d.cambio_clave, 
            d.direccion, d.cp, d.id_provincia, p.nombre nombre_provincia, 
            u.profile, pe.nombre nombre_perfil, d.activo, u.pass clave 
            FROM db_usuarios u
            LEFT JOIN db_datosusuario d ON d.id_usuario = u.id 
            LEFT JOIN db_provincias p ON p.id_provincia = d.id_provincia
            LEFT JOIN db_perfiles pe ON pe.id_perfil = u.profile
            WHERE u.id = ?';
        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $idUsuario);

        return FetchHelper::FetchOne($query);
    }

    public function traerAbogadosActivos()
    {
        $sql = '
            SELECT u.id, u.nombre
            FROM db_usuarios u
            JOIN db_datosusuario d ON d.id_usuario = u.id 
            WHERE u.profile = 2 AND d.activo = 1';
        $query = $this->db->prepare($sql);

        return FetchHelper::FetchAll($query);
    }

    public function verificarCambioClave($idUsuario)
    {
        $sql = '
            SELECT d.cambio_clave
            FROM db_usuarios u
            JOIN db_datosusuario d ON d.id_usuario = u.id 
            WHERE u.id = ?';
        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $idUsuario);

        return FetchHelper::FetchOne($query);
    }

    public function cambiarClave($idUsuario, $clave)
    {

        $sql = '
            UPDATE db_usuarios
            SET pass = ?
            WHERE id = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param('si', $clave, $idUsuario);
        $query->execute();

        return $query->affected_rows > 0 ? true : false;
    }

    public function marcarCambioClave($idUsuario)
    {

        $sql = '
            UPDATE db_datosusuario
            SET cambio_clave = 1
            WHERE id_usuario = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param('i', $idUsuario);
        $query->execute();

        return $query->affected_rows > 0 ? true : false;
    }

    public function editar($usuario)
    {

        // Edito tabla usuarios
        $sql = '
            UPDATE db_usuarios SET
            email       = ?,
            nombre      = ?,
            profile     = ?,
            pass        = ?
            WHERE id    = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param(
            'ssisi',
            $usuario->email,
            $usuario->nombre,
            $usuario->profile,
            $usuario->clave,
            $usuario->idUsuario
        );

        $query->execute();
        $resulUsuario = $query->affected_rows > 0 ? true : false;

        // Edito tabla datosusuario
        $sql = '
            UPDATE db_datosusuario SET
            direccion           = ?,
            cp                  = ?,
            id_provincia        = ?,
            activo              = ?
            WHERE id_usuario    = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param(
            'ssiii',
            $usuario->direccion,
            $usuario->cp,
            $usuario->idProvincia,
            $usuario->activo,
            $usuario->idUsuario
        );

        $query->execute();
        $resulDatos = $query->affected_rows > 0 ? true : false;

        return $resulUsuario || $resulDatos;
    }

    public function eliminarEscribano($usuario)
    {

        // Edito tabla usuarios
        $sql = '
            update db_usuarios set profile = 3
            WHERE id = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param(
            's',
            $usuario->idUsuario
        );

        $query->execute();
        $resulUsuario = $query->affected_rows > 0 ? true : false;

        /*
        // Edito tabla datosusuario
        $sql = '
            update db_datosusuario set activo = 0
            WHERE id_usuario = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param('ssiii', 
        $usuario->idUsuario);

        $query->execute();
        $resulDatos = $query->affected_rows > 0 ? true : false;
*/
        return $resulUsuario;
    }


    public function editarEscribano($usuario)
    {

        // Edito tabla usuarios
        $sql = '
            UPDATE db_usuarios SET
            email       = ?,
            nombre      = ?,
            profile     = ?
            WHERE id    = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param(
            'ssii',
            $usuario->email,
            $usuario->nombre,
            $usuario->profile,
            $usuario->idUsuario
        );

        $query->execute();
        $resulUsuario = $query->affected_rows > 0 ? true : false;

        // Edito tabla datosusuario
        $sql = '
            UPDATE db_datosusuario SET
            direccion           = ?,
            cp                  = ?,
            id_provincia        = ?,
            activo              = ?
            WHERE id_usuario    = ?';

        $query = $this->db->prepare($sql);
        $query && $query->bind_param(
            'ssiii',
            $usuario->direccion,
            $usuario->cp,
            $usuario->idProvincia,
            $usuario->activo,
            $usuario->idUsuario
        );

        $query->execute();
        $resulDatos = $query->affected_rows > 0 ? true : false;

        return $resulUsuario || $resulDatos;
    }






    public function insertar($usuario)
    {

        $queryExiste = $this->db->query("SELECT * FROM db_usuarios u WHERE u.email = '" . $usuario->email . "' LIMIT 1");

        $rowExiste = $queryExiste->fetch_assoc();

        if (empty($rowExiste) != 0) {

            $hashed = password_hash($usuario->password, PASSWORD_DEFAULT);

            // Inserto en tabla usuarios
            $sql = '
            INSERT INTO db_usuarios (email, pass, nombre, hash_session, owner, profile) 
            VALUES (?, ?, ?, ?, 0, ?)';

            $query = $this->db->prepare($sql);
            $query && $query->bind_param(
                'ssssi',
                $usuario->email,
                $hashed,
                $usuario->nombre,
                $usuario->hashSession,
                $usuario->profile
            );


            $query->execute();
            $resulUsuario = $query->affected_rows > 0 ? true : false;

            if ($resulUsuario) {
                $usuario->idUsuario = $this->db->insert_id;

                // Inserto en tabla datosusuario

                if ($usuario->profile != 1) {
                    $sql = '
                INSERT INTO db_datosusuario (id_usuario, direccion, cp, id_provincia, archivos, activo)
                VALUES (?, ?, ?, ?, ?, ?)';

                    $query = $this->db->prepare($sql);
                    $query && $query->bind_param(
                        'issisi',
                        $usuario->idUsuario,
                        $usuario->direccion,
                        $usuario->cp,
                        $usuario->idProvincia,
                        $usuario->archivos,
                        $usuario->activo
                    );
                } else {

                    $sql = '
                INSERT INTO db_datosusuario (id_usuario, cambio_clave, direccion, cp, id_provincia, archivos, activo)
                VALUES (?, 1, ?, ?, ?, ?, ?)';

                    $query = $this->db->prepare($sql);
                    $query && $query->bind_param(
                        'issisi',
                        $usuario->idUsuario,
                        $usuario->direccion,
                        $usuario->cp,
                        $usuario->idProvincia,
                        $usuario->archivos,
                        $usuario->activo
                    );
                }

                $query->execute();
                $resulDatos = $query->affected_rows > 0 ? true : false;

                return $resulDatos;
            }
        } else {
            return false;
        }

        return false;
    }
}
