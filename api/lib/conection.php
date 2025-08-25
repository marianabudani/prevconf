<?php

    $data = parse_ini_file('config.ini');

    if($_SERVER['HTTP_HOST']=="192.168.64.2"){
        $db = new mysqli($data["db.config.host"], $data["db.config.username"], $data["db.config.password"], $data["db.config.dbname"]);
    }else{
        $db = new mysqli($data["db.configRemote.host"], $data["db.configRemote.username"], $data["db.configRemote.password"], $data["db.configRemote.dbname"]);
    }

?>