USE `c1dbfronteras`;

INSERT INTO db_estados(id_estado, nombre) VALUES
(13, "Exceptuado"),
(14, "Caducado"),
(15, "Paralizado");

 
 ALTER TABLE db_notificaciones ADD
`id_usuario_emisor` int(11) DEFAULT NULL


ALTER TABLE db_solicitudes ADD (
`ubicacion` varchar(255) NOT NULL,
`descripcion` varchar(255) NOT NULL);


INSERT INTO db_tiposoperaciones(id_tipo_operacion, nombre) VALUES
(3, "otros");

UPDATE `db_tiposformulario`
SET `nombre` = 'Solicitud de Previa Conformidad'
WHERE	(`nombre` = 'Común');