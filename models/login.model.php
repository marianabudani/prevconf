<?php

require_once "conexion.php";

class ModelLogin{

	/*=============================================
	GET PARAMETROS
	=============================================*/
	static public function mdlGetSetting($origen){

		$stmt = Conexion::conectar()->prepare("SELECT * FROM $origen WHERE id = 1");

		$stmt -> execute();

		return $stmt -> fetch();

		$stmt -> close();

		$stmt = null;

	}
	
	/*=============================================
	GET PARAMETROS
	=============================================*/
	static public function mdlGetSettingImages($tabla){

		$stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla");

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt -> close();

		$stmt = null;

    }

}