<?php

class Conexion{

	static public function conectar(){
	    $ini = parse_ini_file('./config.ini');
	    
		if($_SERVER['SERVER_NAME'] == $ini['db.config.server']){

		    $link = new PDO("mysql:host=".$ini['db.config.host'].";dbname=".$ini['db.config.dbname']."",
		    $ini['db.config.username'],
		    $ini['db.config.password'],
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				  PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
			);

		}else{

		    $link = new PDO("mysql:host=".$ini['db.configRemote.host'].";dbname=".$ini['db.configRemote.dbname']."",
		        $ini['db.configRemote.username'],
		        $ini['db.configRemote.password'],
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				  PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
			);			

		}

		return $link;

	}


}