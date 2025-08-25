<?php

class routerClass{

	/*=============================================
	ROUTE FRONT-END
	=============================================*/	

	static public function getRouterFront(){

		$data = parse_ini_file('config.ini');

		if($_SERVER['SERVER_NAME'] == $data["db.config.server"]){

			return $data["db.config.route"];

		}else{

			return $data["db.configRemote.route"];

		}		
	
	}
	
	static public function getRouterImage(){

		$data = parse_ini_file('config.ini');

		if($_SERVER['SERVER_NAME'] == $data["db.config.server"]){

			return $data["db.config.absolute"];

		}else{

			return $data["db.config.absolute"];

		}		
	
    }	
    
}    