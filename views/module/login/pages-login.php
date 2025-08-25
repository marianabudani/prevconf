<?php
$settingLogin = ControllerLogin::ctrGetSetting('db_setting');

$usa_alta_user = $settingLogin["usa_alta_user"];
$usa_recovery_user = $settingLogin["usa_recovery_user"];

//JB-Obtengo la ruta absoluta desde el config.ini 
$config = parse_ini_file('config.ini');
//echo $config["db.config.absolute"];
$base_url = $config["db.config.absolute"];
?>
<header class="bk-min">
    <nav class="navbar navbar-top navbar-default bk-min p-md-0 border-bottom-amarillo" role="navigation">
        <div class="container">
            <div class="navbar justify-content-between align-content-center p-lg-0 w-100">
                <a class="navbar-brand m-lg-0" href="https://www.argentina.gob.ar/" aria-label="Argentina.gob.ar Presidencia de la Nación" target="_blank"> <img alt="Argentina.gob.ar" src="views/assets/images/argentinagob-2.svg" height="50" /> </a>
                <div class="d-none">
                    <div class="input-group m-lg-0 p-lg-0">
                        <input id="buscar" type="text" class="form-control input-search" aria-label="Buscar trámites, servicios o áreas" placeholder="Buscar trámites, servicios o áreas ..." />
                        <span class="input-group-btn">
                            <button class="btn bg-white" type="button" aria-label="Buscar" id="ejecutar"><i class="fa fa-search text-primary"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<div class="pb-5" id="log">
    <div class="col-md-12 py-2 bk-min text-center">
        <p class="title-top">Vicejefatura de Gabinete del Interior</p>
    </div>
    <div class="container mt-3">

        <?php
        if ($usa_carrousel_ini == "1") { ?>
            <div class="d-none d-lg-block col-lg-4">
                <div class="slider-light">
                    <div class="slick-slider portadaPicture">
                        <div>
                            <div class="position-relative h-100 d-flex justify-content-center align-items-center" tabindex="-1">
                                <div class="slide-img-bg" style="background-image: url('<?php echo $urlForImage . $one_url; ?>');"></div>
                                <?php if ($usa_carrusel_txt == "1") { ?>
                                    <div class="slider-content">
                                        <h3><?php echo $one_title; ?></h3>
                                        <p><?php echo $one_desc; ?></p>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <div>
                            <div class="position-relative h-100 d-flex justify-content-center align-items-center" tabindex="-1">
                                <div class="slide-img-bg" style="background-image: url('<?php echo $urlForImage . $two_url; ?>');"></div>
                                <?php if ($usa_carrusel_txt == "1") { ?>
                                    <div class="slider-content">
                                        <h3><?php echo $two_title; ?></h3>
                                        <p><?php echo $two_desc; ?></p>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <div>
                            <div class="position-relative h-100 d-flex justify-content-center align-items-center" tabindex="-1">
                                <div class="slide-img-bg" style="background-image: url('<?php echo $urlForImage . $three_url; ?>');"></div>
                                <?php if ($usa_carrusel_txt == "1") { ?>
                                    <div class="slider-content">
                                        <h3><?php echo $three_title; ?></h3>
                                        <p><?php echo $three_desc; ?></p>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">


            <?php
        } else {
            echo '<div class="row">';
        }
            ?>

            <div class="col-md-12 mt-3">
                <h1>Solicitud Previa Conformidad</h1>
                <p>La <strong>Solicitud de Previa Conformidad</strong> es un trámite administrativo que deberán realizar quienes, en el marco de la Resolución <a href="https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-166-2009-151041" target="_blank"><span>Ministerial Nº 166/09</span></a>, tengan que:</p>
                <ul>
                    <li>Cambiar la <strong>titularidad de dominio</strong> de los inmuebles rurales y urbanos ubicados en Zonas de Seguridad de Fronteras.</li>
                    <li>Registrar <strong>operaciones inmobiliarias</strong> relacionadas con la transmisión de dominio, arrendamiento o locaciones o cualquier otra forma de derechos reales o personales sobre bienes, en virtud de las cuales deba entregarse la posesión o tenencia de inmuebles en Zonas de Seguridad. </li>
                    <li>Realizar <strong>transferencias de derechos de acciones o modificaciones de la estructura societaria</strong> de aquellas sociedades que sean titulares de dominio o posean derechos reales o personales sobre bienes ubicados en dichas zonas. </li>
                </ul>
                <p>El Acto Administrativo se materializa a través de Resolución de la Secretaría de Interior.</p>

            </div>
            <div class="col-md-12 mt-4">

                <input type="hidden" id="base_url" value="<?php echo $base_url; ?>">
                <input type="hidden" id="server_name" value="<?php echo $_SERVER['SERVER_NAME']; ?>">
                <!-- VISTA LOGIN -->
                <div class="modulo-login">

                    <h4 class="mb-0">
                        <span>Ingresá a tu cuenta.</span>
                    </h4>

                    <?php if ($usa_alta_user == "1") { ?>
                        <h6 class="mt-3">¿Sos escribano? <a href="javascript:getSignUp();" class="text-primary">Registrate</a></h6>
                    <?php } ?>
                    <?php if ($usa_recovery_user == "1") { ?>
                        <h6 class="mt-0">¿Olvidaste tu contraseña? <a href="javascript:getRecovery();" class="text-primary">Recuperar clave</a></h6>
                    <?php } ?>

                    <div class="divider row"></div>

                    <div>
                        <form class="">
                            <div class="form-row">

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="emailin" class="">Correo electrónico</label>
                                        <input name="email" id="emailin" placeholder="Correo electrónico aquí..." type="email" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="emailin" class="">Contraseña</label>
                                        <div class="input-group">
                                            <input class="form-control" type="password" placeholder="Contraseña aquí..." id="passin" name="login-password" aria-label="Password" aria-describedby="Password" autocomplete="off" onkeypress="if (event.which == 13) signInWhitEmailAndPassword();" required="">
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="button-view"><i id="viewerPass" class="fas fa-eye" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="position-relative form-check">
                                <input name="check" id="okCheck" type="checkbox" class="form-check-input">
                                <label for="exampleCheck" class="form-check-label">¿Mantener logueado?</label>
                            </div>
                            <div class="divider row"></div>
                            <div class="d-flex align-items-center">
                                <div class="ml-auto">
                                    <?php //if($usa_recovery_user == "1"){ 
                                    ?>
                                    <!-- <a href="javascript:getRecovery();" class="btn-lg btn btn-link">Recordar Contraseña</a> -->
                                    <?php //} 
                                    ?>
                                    <a href="#" onclick="generateLogin()" class="btn btn-primary btn-lg loginIn">Ingresar</a>
                                    <div id="vistaModalCC"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- ALTA DE USUARIO -->
                <div class="modulo-signup" style="display:none">
                    <!-- <div class="app-logo"> -->
                    <!-- <img src="https://sistemas.mininterior.gob.ar/add/genesis/views/assets/images/logo-inverse.png" alt="" /> -->
                    <img src="<? echo $base_url; ?>/views/assets/images/logo-inverse.png" alt="" />
                    <!-- </div> -->
                    <h4 class="mb-0">
                        <span class="d-block">Hola, vamos a pedirte unos pequeños datos</span>
                        <span>Por favor, ingresá y definí tus credenciales de acceso.</span>
                    </h4>
                    <h6 class="mt-3">¿Ya tenés una cuenta? <a href="javascript:getLogin();" class="text-primary">Ingresar</a></h6>
                    <div class="divider row"></div>

                    <div>
                        <form class="">
                            <div class="form-row">

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="nombreup" class="">Apellido y nombre/s</label>
                                        <input name="text" id="nombreup" placeholder="Nombre completo aquí..." type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="direccionup" class="">Dirección Postal</label>
                                        <input name="text" id="direccionup" placeholder="Dirección aquí..." type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="postalup" class="">Código postal</label>
                                        <input name="text" id="postalup" placeholder="Código postal aquí..." type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="provinciaup">Provincia</label>
                                        <select name="provinciaup" id="provinciaup" class="form-control">
                                            <option disabled="true" selected="true" value="0">Seleccionar una Provincia</option>
                                            <option value="1">BUENOS AIRES</option>
                                            <option value="2">CIUDAD AUTONOMA DE Bs As</option>
                                            <option value="3">CATAMARCA</option>
                                            <option value="4">CHACO</option>
                                            <option value="5">CHUBUT</option>
                                            <option value="6">CORDOBA</option>
                                            <option value="7">CORRIENTES</option>
                                            <option value="8">ENTRE RIOS</option>
                                            <option value="9">FORMOSA</option>
                                            <option value="10">JUJUY</option>
                                            <option value="11">LA PAMPA</option>
                                            <option value="12">LA RIOJA</option>
                                            <option value="13">MENDOZA</option>
                                            <option value="14">MISIONES</option>
                                            <option value="15">NEUQUEN</option>
                                            <option value="16">RIO NEGRO</option>
                                            <option value="17">SALTA</option>
                                            <option value="18">SAN JUAN</option>
                                            <option value="19">SAN LUIS</option>
                                            <option value="20">SANTA CRUZ</option>
                                            <option value="21">SANTA FE</option>
                                            <option value="22">SANTIAGO DEL ESTERO</option>
                                            <option value="23">TIERRA DEL FUEGO</option>
                                            <option value="24">TUCUMAN</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="emailup" class="">Correo electrónico</label>
                                        <input name="emailup" id="emailup" placeholder="Correo electrónico aquí..." type="email" class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="position-relative form-group">
                                        <label for="passup" class="">Contraseña</label>
                                        <div class="input-group">
                                            <input class="form-control" type="password" placeholder="Contraseña aquí..." id="passup" name="passup" aria-label="Password" aria-describedby="Password" autocomplete="off" required="">
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary" type="button" id="button-view-alta"><i id="viewerPassAlta" class="fas fa-eye" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input id="nombreArchivoup" placeholder="Adjuntar FORMULARIO N°8 – 2020 ..." type="text" class="form-control" disabled="disabled">
                                            <div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">
                                                <i class="fas fa-folder-open"></i>
                                                <span class="carga-archivo-input-title">Seleccionar archivo</span>
                                                <input type="file" class="input-file-preview-nup" id="input-file-preview-nup" accept=".pdf, .jpg, .jpeg, .png">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="divider row"></div>
                            <div class="d-flex align-items-center">
                                <div class="ml-auto">
                                    <?php
                                    // $config = parse_ini_file('config.ini');
                                    // $mail = $config["db.config.mail"];
                                    // echo '<a href="#" onclick="generateUser(\''.$mail.'\')" class="btn btn-primary btn-lg loginIn">Aceptar</a>';
                                    ?>
                                    <a href="#" onclick="generateUser();" class="btn btn-primary btn-lg loginIn">Aceptar</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- RECUPERO DE CONTRASEÑA -->
                <div class="modulo-recovery" style="display:none">
                    <!-- <div class="app-logo"> -->
                    <!-- <img src="https://sistemas.mininterior.gob.ar/add/genesis/views/assets/images/logo-inverse.png" alt="" /> -->
                    <img src="<?php echo $base_url; ?> /views/assets/images/logo-inverse.png" alt="" />
                    <!-- </div> -->
                    <h4 class="mb-0">
                        <span class="d-block">Hola, para recuperar la contraseña vamos a necesitar que ingreses tu correo electrónico </span>
                        <span>Por favor, debe ser el mismo con el que te registraste en el sistema</span>
                    </h4>
                    <h6 class="mt-3">¿Ya tenés una cuenta? <a href="javascript:getLogin();" class="text-primary">Ingresar</a></h6>
                    <div class="divider row"></div>

                    <div>
                        <form class="">
                            <div class="form-row">
                                <div class="col-md-12">
                                    <div class="position-relative form-group">
                                        <label for="emailrecovery" class="">Correo electrónico</label>
                                        <input name="emailrecovery" id="emailrecovery" placeholder="Correo electrónico aquí..." type="email" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="divider row"></div>
                            <div class="d-flex align-items-center">
                                <div class="ml-auto">
                                    <a href="#" onclick="recoveryPass()" class="btn btn-primary btn-lg loginIn">Recuperar contraseña</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            </div>
    </div>
</div>
</div>