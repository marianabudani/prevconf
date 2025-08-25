<?php

function checkStatusURL($url){

    if(!filter_var($url, FILTER_VALIDATE_URL)){

        return 2;

    }

    $cl = curl_init($url);
    curl_setopt($cl,CURLOPT_CONNECTTIMEOUT,10);
    curl_setopt($cl,CURLOPT_HEADER,true);
    curl_setopt($cl,CURLOPT_NOBODY,true);
    curl_setopt($cl,CURLOPT_RETURNTRANSFER,true);

    $response= curl_exec($cl);
    curl_close($cl);
    if ($response){

        return 0;

    }else{

        return 1;

    } 

}
function getParams(){

    return array("localhost","u772658009_point","DemoPoint2018","u772658009_point");

}
/* Datos de conexión */
$host = "localhost";
$user = "u772658009_point";
$pass = "DemoPoint2018";
$base = "u772658009_point";
