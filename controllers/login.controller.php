<?php

class ControllerLogin{

    /*=============================================
	GET PARAMETROS
	=============================================*/
	static public function ctrGetSetting($origen){

		$respuesta = ModelLogin::mdlGetSetting($origen);

		return $respuesta;

	}
	
    /*=============================================
	GET PARAMETROS IMAGES
	=============================================*/
	static public function ctrGetSettingImages(){
		$tabla = "db_pictures";
		$respuesta = ModelLogin::mdlGetSettingImages($tabla);

		return $respuesta;

    }	
    
}