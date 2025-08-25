DROP TABLE IF EXISTS db_provincias;
DROP TABLE IF EXISTS db_perfiles;
DROP TABLE IF EXISTS db_tiposinmuebles;
DROP TABLE IF EXISTS db_tiposoperaciones;
DROP TABLE IF EXISTS db_tipostramites;
DROP TABLE IF EXISTS db_tiposformulario;
DROP TABLE IF EXISTS db_estados;
DROP TABLE IF EXISTS db_datosusuario;
DROP TABLE IF EXISTS db_solicitudes;
DROP TABLE IF EXISTS db_notificaciones;

ALTER TABLE db_usuarios ADD profile int unsigned;

CREATE TABLE db_provincias (
    id_provincia        int unsigned auto_increment primary key,
    nombre              varchar(100)    not null,
    activo              bit             not null    DEFAULT 1
);

INSERT INTO db_provincias(nombre) VALUES
("Misiones"),
("San Luis"),
("San Juan"),
("Entre Ríos"),
("Santa Cruz"),
("Río Negro"),
("Chubut"),
("Córdoba"),
("Mendoza"),
("La Rioja"),
("Catamarca"),
("La Pampa"),
("Santiago del Estero"),
("Corrientes"),
("Santa Fe"),
("Tucumán"),
("Neuquén"),
("Salta"),
("Chaco"),
("Formosa"),
("Jujuy"),
("Ciudad Autónoma de Buenos Aires"),
("Buenos Aires"),
("Tierra del Fuego");

CREATE TABLE db_perfiles (
    id_perfil           int unsigned primary key,
    nombre              varchar(40)     not null
);

INSERT INTO db_perfiles(id_perfil, nombre) VALUES
(0, "Administrador"),
(1, "Escribano"),
(2, "Abogado");

CREATE TABLE db_tiposinmuebles (
    id_tipo_inmueble    int unsigned auto_increment primary key,
    nombre              varchar(40)     not null
);

INSERT INTO db_tiposinmuebles(nombre) VALUES
("Rural"),
("Urbano");

CREATE TABLE db_tiposoperaciones (
    id_tipo_operacion   int unsigned auto_increment primary key,
    nombre              varchar(40)     not null
);

INSERT INTO db_tiposoperaciones(nombre) VALUES
("Transferencia de inmuebles"),
("Permisos, concesiones, licencias");

CREATE TABLE db_tipostramites (
    id_tipo_tramite     int unsigned auto_increment primary key,
    nombre              varchar(40)     not null
);

INSERT INTO db_tipostramites(nombre) VALUES
("Normal"),
("Abreviado");

CREATE TABLE db_tiposformulario (
    id_tipo_formulario  int unsigned auto_increment primary key,
    nombre              varchar(40)     not null
);

INSERT INTO db_tiposformulario(nombre) VALUES
("Común"),
("Formulario 5 o 6");

CREATE TABLE db_estados (
    id_estado           int unsigned auto_increment primary key,
    nombre              varchar(100)     not null
);

INSERT INTO db_estados(id_estado, nombre) VALUES
(1, "Pendiente"),
(2, "Carátula"),
(3, "Para Analizar"),
(4, "Falta Documentación"),
(5, "Para Dictaminar"),
(6, "En Jurídicos"),
(7, "En Despacho"),
(8, "Para Corrección"),
(9, "Secretario"),
(10, "Autorización"),
(11, "Notificación"),
(12, "Finalizado");

CREATE TABLE db_datosusuario (
    id_datos_usuario   int unsigned auto_increment primary key,
    id_usuario         int              not null,
    cambio_clave       bit              not null    DEFAULT 0,
    direccion          varchar(255)     not null,
    cp                 varchar(20)      not null,
    id_provincia       int              not null,
    archivos           text,
    activo             bit              not null    DEFAULT 0
);

CREATE TABLE db_solicitudes (
    id_solicitud        int unsigned auto_increment primary key,
    fecha               timestamp       not null    DEFAULT now(),
    nombre              varchar(255)    not null,
    id_tipo_inmueble    int,
    id_tipo_operacion   int,
    archivos            text,
    id_usuario          int             not null,
    id_estado           int             not null    DEFAULT 1,
    nro_expediente      varchar(20),
    id_abogado          int,
    destino             varchar(255),
    id_tipo_tramite     int,
    id_tipo_formulario  int             not null           
);


CREATE TABLE db_notificaciones (
    id_notificacion     int unsigned auto_increment primary key,
    id_solicitud        int             not null,
    id_usuario          int             not null,
    descripcion         varchar(100)    not null,
    fecha               timestamp       not null    DEFAULT now(),
    leido               bit             not null    DEFAULT 0
);


-- USUARIOS
INSERT INTO db_usuarios (id, email, pass, nombre, hash_session, owner, profile) VALUES
(1001, 'admin@mininterior.gob.ar', '123456', 'Administrador', '3dab87a45b9ad732031651c22e2fc184', 0, 0),
(1002, 'escribano@mininterior.gob.ar', '123456', 'Escribano', 'dc326d01b43be5056a1ce39cd97f7af7', 0, 1),
(1003, 'abogado@mininterior.gob.ar', '123456', 'Abogado', '162c4d2149050ddd195629c149f5efcd', 0, 2);

-- DATOS USUARIOS
INSERT INTO db_datosusuario(id_usuario, direccion, cp, id_provincia, archivos, activo) VALUES
(1001, 'Segurola 123, CABA', '7119', 23, 'http://www.url.com/carpeta/foto_1.png;http://www.url.com/carpeta/documento_1.jpg', 1),
(1002, 'Juana Manso 750, CABA', '1106', 23, 'http://www.url.com/carpeta/foto_2.png;http://www.url.com/carpeta/documento_2.jpg', 1),
(1003, 'Hunter 1010, Adrogué', '1846', 23, 'http://www.url.com/carpeta/foto_3.png;http://www.url.com/carpeta/documento_3.jpg', 1);

INSERT INTO db_solicitudes(id_solicitud, nombre, id_tipo_inmueble, id_tipo_operacion, archivos, id_usuario, id_estado, nro_expediente, id_abogado, destino, id_tipo_tramite, id_tipo_formulario) VALUES
(1, 'Solicitud 1', 1, 1, 'http://www.url.com/carpeta/foto_1.png;http://www.url.com/carpeta/documento_1.jpg', 1002, 1, 'ABC123', 1003, 'Destino 1', 1, 1),
(2, 'Solicitud 2', 2, 2, 'http://www.url.com/carpeta/foto_2.png;http://www.url.com/carpeta/documento_2.jpg', 1002, 2, 'DFG456', 1003, 'Destino 2', 2, 2),
(3, 'Solicitud 3', 1, 2, 'http://www.url.com/carpeta/foto_3.png;http://www.url.com/carpeta/documento_3.jpg', 1002, 4, 'HIJ789', 1003, 'Destino 3', 1, 2),
(4, 'Solicitud 4', 1, 1, 'http://www.url.com/carpeta/foto_4.png;http://www.url.com/carpeta/documento_4.jpg', 1002, 1, 'POI456', NULL, 'Destino 4', 1, 1),
(5, 'Solicitud 5', 1, 1, 'http://www.url.com/carpeta/foto_5.png;http://www.url.com/carpeta/documento_5.jpg', 1002, 1, 'FRT582', 1003, 'Destino 5', 1, 1),
(6, 'Solicitud 6', 1, 1, 'http://www.url.com/carpeta/foto_6.png;http://www.url.com/carpeta/documento_6.jpg', 1002, 2, 'FRT682', 1003, 'Destino 6', 1, 1),
(7, 'Solicitud 7', 1, 1, 'http://www.url.com/carpeta/foto_7.png;http://www.url.com/carpeta/documento_7.jpg', 1002, 3, 'FRT782', NULL, 'Destino 7', 1, 1),
(8, 'Solicitud 8', 1, 1, 'http://www.url.com/carpeta/foto_8.png;http://www.url.com/carpeta/documento_8.jpg', 1002, 3, 'FRT882', 1003, 'Destino 8', 1, 1),
(9, 'Solicitud 9', 1, 1, 'http://www.url.com/carpeta/foto_9.png;http://www.url.com/carpeta/documento_9.jpg', 1002, 4, 'FRT982', 1003, 'Destino 9', 1, 1),
(10, 'Solicitud 10', 1, 1, 'http://www.url.com/carpeta/foto_10.png;http://www.url.com/carpeta/documento_10.jpg', 1002, 5, 'FRT10102', 1003, 'Destino 10', 1, 1),
(11, 'Solicitud 11', 1, 1, 'http://www.url.com/carpeta/foto_11.png;http://www.url.com/carpeta/documento_11.jpg', 1002, 5, 'FRT11112', NULL, 'Destino 11', 1, 1),
(12, 'Solicitud 12', 1, 1, 'http://www.url.com/carpeta/foto_12.png;http://www.url.com/carpeta/documento_12.jpg', 1202, 6, 'FRT12122', 1203, 'Destino 12', 1, 1),
(13, 'Solicitud 13', 1, 1, 'http://www.url.com/carpeta/foto_13.png;http://www.url.com/carpeta/documento_13.jpg', 1002, 6, 'FRT13132', 1003, 'Destino 13', 1, 1),
(14, 'Solicitud 14', 1, 1, 'http://www.url.com/carpeta/foto_14.png;http://www.url.com/carpeta/documento_14.jpg', 1002, 7, 'FRT14142', 1003, 'Destino 14', 1, 1),
(15, 'Solicitud 15', 1, 1, 'http://www.url.com/carpeta/foto_15.png;http://www.url.com/carpeta/documento_15.jpg', 1502, 7, 'FRT15152', NULL, 'Destino 15', 1, 1),
(16, 'Solicitud 16', 1, 1, 'http://www.url.com/carpeta/foto_16.png;http://www.url.com/carpeta/documento_16.jpg', 1002, 8, 'FRT16162', 1003, 'Destino 16', 1, 1),
(17, 'Solicitud 17', 1, 1, 'http://www.url.com/carpeta/foto_17.png;http://www.url.com/carpeta/documento_17.jpg', 1002, 8, 'FRT17172', 1003, 'Destino 17', 1, 1),
(18, 'Solicitud 18', 1, 1, 'http://www.url.com/carpeta/foto_18.png;http://www.url.com/carpeta/documento_18.jpg', 1802, 9, 'FRT18182', 1803, 'Destino 18', 1, 1),
(19, 'Solicitud 19', 1, 1, 'http://www.url.com/carpeta/foto_19.png;http://www.url.com/carpeta/documento_19.jpg', 1002, 9, 'FRT19192', 1003, 'Destino 19', 1, 1),
(20, 'Solicitud 20', 1, 1, 'http://www.url.com/carpeta/foto_20.png;http://www.url.com/carpeta/documento_20.jpg', 1002, 10, 'FRT20202', 1003, 'Destino 20', 1, 1),
(21, 'Solicitud 21', 1, 1, 'http://www.url.com/carpeta/foto_21.png;http://www.url.com/carpeta/documento_21.jpg', 2102, 10, 'FRT21212', NULL, 'Destino 21', 1, 1),
(22, 'Solicitud 22', 1, 1, 'http://www.url.com/carpeta/foto_22.png;http://www.url.com/carpeta/documento_22.jpg', 1002, 11, 'FRT22222', 1003, 'Destino 22', 1, 1),
(23, 'Solicitud 23', 1, 1, 'http://www.url.com/carpeta/foto_23.png;http://www.url.com/carpeta/documento_23.jpg', 1002, 11, 'FRT23232', 1003, 'Destino 23', 1, 1),
(24, 'Solicitud 24', 1, 1, 'http://www.url.com/carpeta/foto_24.png;http://www.url.com/carpeta/documento_24.jpg', 1002, 12, 'FRT24242', 1003, 'Destino 24', 1, 1),
(25, 'Solicitud 25', 1, 1, 'http://www.url.com/carpeta/foto_25.png;http://www.url.com/carpeta/documento_25.jpg', 1002, 12, 'FRT252', 1003, 'Destino 25', 1, 1);

INSERT INTO db_notificaciones(id_notificacion, id_solicitud, id_usuario, descripcion) VALUES 
(1, 2, 1002, "Su solicitud cambió de estado"),
(2, 3, 1002, "Debe adjuntar documentacion");


