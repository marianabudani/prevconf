<?php

namespace Fronteras\Helpers;

class MiscHelper {

    public static function separarArchivos($array) {
        for($i = 0; $i < sizeof($array); $i++) {
            if(!is_null($array[$i]['archivos'])) {
                $array[$i]['archivos'] = explode(";", $array[$i]['archivos']);
            }
        }
        return $array;
    }

    public static function generarPasswordAleatorio($largo) {
        $cadena_base =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_,./<>?;:[]{}\|=+';
        $password = '';
        $limite = strlen($cadena_base) - 1;

        for ($i=0; $i < $largo; $i++) {
            $password .= $cadena_base[rand(0, $limite)];
        }

        return $password;
    }
}