<?php
    //CONFIGURACION PARA LAS API
    $data = parse_ini_file('config.ini');

    if($_SERVER['HTTP_HOST']==$data["db.config.server"]){
        $db = new mysqli($data["db.config.host"], $data["db.config.username"], $data["db.config.password"], $data["db.config.dbname"]);
    }else{
        $db = new mysqli($data["db.configRemote.host"], $data["db.configRemote.username"], $data["db.configRemote.password"], $data["db.configRemote.dbname"]);
    }

?>