<?php
    // module/template/recovery.php
    $rutas = $_GET["ruta"];
    // var_dump($front);
    // var_dump($_SERVER["HTTP_HOST"]);
    // var_dump($_GET["ruta"]);
    // var_dump($_SERVER["REQUEST_URI"]);
    $rutas = array();
    $rutas = explode("/", $_GET["ruta"]);

    if(isset($rutas[0]) && isset($rutas[1]) && isset($rutas[2]) && isset($rutas[3])){
        session_destroy();
        // $hashResult = ControllerTemplate::ctrCheckAccessToken($rutas[1]);
        // if($hashResult["cantidad"]==1){
        if(1==1){
        echo '<div class="app-container app-theme-white body-tabs-shadow">
                <div class="app-container">
                    <div class="h-100 bg-animation">
                        <div class="d-flex h-100 justify-content-center align-items-center">
                            <div class="mx-auto app-login-box col-md-6">
                                <div class="modal-dialog w-100">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="h5 modal-title">Restablecer contraseña
                                                <h6 class="mt-1 mb-0 opacity-8">
                                                    <span>Complete los siguientes campos.</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="modal-body">
                                            <div>
                                                <form>
                                                    <div class="form-group">
                                                        <div class="input-group mb-3">
                                                            <input class="form-control" type="password" placeholder="Contraseña" id="login-passwordOne" name="login-passwordOne" aria-label="Password" aria-describedby="Password" autocomplete="off" required/>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-outline-secondary" type="button" id="button-viewRecovery1"><i id="viewerPass1" class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <div class="input-group mb-3">
                                                            <input class="form-control" type="password" placeholder="Repetir contraseña" id="login-passwordTwo" name="login-passwordTwo" aria-label="Password" aria-describedby="Password"  autocomplete="off" required/>
                                                            <div class="input-group-append">
                                                                <button class="btn btn-outline-secondary" type="button" id="button-viewRecovery2"><i id="viewerPass2" class="fas fa-eye"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>                                
                                                    
                                                    <small id="passwordHelpBlock" class="form-text text-muted">
                                                        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales o emoji.
                                                    </small>
                                                    <input type="hidden" id="hash_session" value="'.$rutas[3].'">
                                                </form>
                                            </div>
                                            <div class="divider"></div>
                                            <h6 class="mb-0">
                                                <a href="'.$front.'" class="text-primary">Iniciar sesión con una cuenta existente</a>
                                            </h6>
                                        </div>
                                        <div class="modal-footer clearfix">
                                            <div class="float-right">
                                                <button class="btn btn-lg btn-block btn-primary changepass" onclick="forgotPass()" role="button" type="button">
                                                    Modificar clave
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ';
        }else{
            include('error.php');  
        }
    }else{
        include('error.php');
    }
?>