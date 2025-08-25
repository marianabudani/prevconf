<?php namespace Fronteras\Utils;

class DataUpload {

    private static $extPermitidas = array("pdf", "jpg", "jpeg", "png");

    static function subirArchivos($archivos, $ruta) {

        $archivos = self::armarArrayArchivos($archivos);

        for($i = 0; $i < count($archivos); $i++) {
            $respuesta = self::validarArchivo($archivos[$i]);

            if(!$respuesta['ok']) {
                return $respuesta;
            }   
        }

        $respuesta = array(
            "ok" => true,
            "rutas"=> array()
        );
        $directorio= __DIR__ . "/../../../../archivos/" . $ruta;
        //$directorio = $_SERVER['DOCUMENT_ROOT'] . "/archivos/" . $ruta;
        //$directorio = "../../archivos/" . $ruta;
        $directorio_visual = "archivos/" . $ruta;

        // Si el directorio no existe lo creo
        if(!file_exists($directorio)) {
                mkdir($directorio, 0755, true);
        }

        for($i = 0; $i < count($archivos); $i++) {
            $extension = strtolower(pathinfo(basename($archivos[$i]["name"]), PATHINFO_EXTENSION));
            $name = uniqid(rand(), true).$i;
            $name = date("Y_m_d_H_i_s").$name;
            
            
            $rutaNueva = $directorio . $name .'.'. $extension;
            //Se agrega el siguiente:            
            $rutaNueva_visual = $directorio_visual . $name .'.'. $extension;

            if(move_uploaded_file($archivos[$i]["tmp_name"], $rutaNueva)){
                //array_push($respuesta["rutas"], $rutaNueva);
                array_push($respuesta["rutas"], $rutaNueva_visual);                
            }
        }

        return $respuesta;
    }

    static function armarArrayArchivos($archivos) {
        $files = array();

        if(is_array($archivos['name'])) {
            $cantArchivos =  count($archivos['name']);
            for($i = 0; $i < $cantArchivos; $i++) {
                $file = array(
                    "name" => $archivos['name'][$i],
                    "type" => $archivos['type'][$i],
                    "size" => $archivos['size'][$i],
                    "tmp_name" => $archivos['tmp_name'][$i]
                );
                array_push($files, $file);
            }
        } else {
            $file = array(
                "name" => $archivos['name'],
                "type" => $archivos['type'],
                "size" => $archivos['size'],
                "tmp_name" => $archivos['tmp_name']
            );
            array_push($files, $file);
        }
        return $files;
    }

    static function validarArchivo($archivo) {
        $respuesta = array(
            "ok" => false,
            "err" => ""
        );
        
        // Validación de formato
        $extension = strtolower(pathinfo(basename($archivo["name"]), PATHINFO_EXTENSION));
        if(!in_array($extension, self::$extPermitidas)) {
            $respuesta["err"] = "Las extensiones permitidas son PDF, JPG, JPEG y PNG";
            return $respuesta;
        }

        // Valido tamaño (hasta 1 mega)
        if ($archivo["size"] > 10000000) {
            $respuesta["err"] = "El archivo es demasiado grande";
            return $respuesta;
        }

        $respuesta['ok'] = true;
        return $respuesta;
    }

    static function eliminarArchivo($ruta) {
        $directorio = $_SERVER['DOCUMENT_ROOT'] . "/fronteras/archivos/" . $ruta;
      
        array_map('unlink', glob("$directorio/*.*"));
        rmdir($directorio);
    }
}