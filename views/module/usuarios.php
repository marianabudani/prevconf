<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="far fa-clone"></i>
            </div>
            <div>Alta de usuarios
              <div class="page-title-subheading">Podrás dar de alta usuarios administradores o super administradores.
              </div>
            </div>
        </div>
        <!-- <div class="page-title-actions">
            <button type="button" data-toggle="tooltip" title="Ejemplo de "tooltip"" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                <i class="fa fa-star"></i>
            </button>

        </div>-->
    </div>
</div>

<div class = "card">
    <div class="tab-content">
        <div class="row">
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h4 class="card-title">Registro </h4>
                        <form class="" autocomplete="off">
                            <div class="position-relative form-group">
                                <label for="nombreup" class="">Nombre Completo</label>
                                    <input name="nombreup" value="" id="nombreup" onchange="checkValidUser()"  placeholder="ingrese nombre" type="text" class="form-control" autocomplete="off">
                                    <p class="help-block" id="statusName">  </p>
                            </div>

                            <div class="position-relative form-group">
                                <label for="newemail" class="">Mail</label>
                                    <input name="email" value="" id="newemail" onchange="validarMail()" placeholder="ejemplo@mininterior.gob.ar" type="email" class="form-control" autocomplete="off">
                                    <p class="help-block" id="statusEmail">  </p>
                            </div>
                            <div class="position-relative form-group">
                                <label for="pass1" class="">Contraseña</label>
                                <div class="position-relative input-group">
                                    <input name="pass1" value="" id="pass1" onchange="checkValidPassword()"  placeholder="ingrese contraseña" type="password" class="form-control" autocomplete="off">
                                    <button class="btn btn-outline-secondary" type="button" id="button-view-primeracontra"><i id="viewerPassAltaPrimera" class="fas fa-eye" aria-hidden="true"></i></button>
                                </div>
                            </div>

                            <div class="position-relative form-group">
                                <label for="pass2" class="">Repetir Contraseña</label>
                                <div class="position-relative input-group">
                                    <input name="pass2" value="" id="pass2" onchange="checkValidPassword()" placeholder="repetir contraseña" type="password" class="form-control" autocomplete="off">
                                    <button class="btn btn-outline-secondary" type="button" id="button-view-segundacontra"><i id="viewerPassAltaRepetida" class="fas fa-eye" aria-hidden="true"></i></button>
                                        <p class="help-block" id="statusSecondPassword">  </p>
                                </div>
                            </div>

                            <?php
                            if (($_SESSION["OWNER"]=="1" && $_SESSION["PROFILE"]=="0") || ($_SESSION["OWNER"]=="0" && $_SESSION["PROFILE"]=="0")) {
                                echo '<div class="form-group">'.
                                        '<label for="perfil" class="">Perfil</label>'.
                                        '<select id="perfil" class="form-control">'.
                                            '<option value="0">Administrador</option>'.
                                            '<option value="1">Escribano</option>'.
                                            '<option value="2">Abogado</option>'.
                                        '</select>'.
                                    '</div>';
                            }
                            ?>

                            <?php
                            if ($_SESSION["OWNER"]=="1" && $_SESSION["PROFILE"]=="0") {
                                echo '<div class="form-check" id="form-checkbox-container">'.
                                        '<input type="checkbox" class="form-check-input" id="adminconfirmation">'.
                                        '<label class="form-check-label" for="#adminconfirmation">¿Es administrador?</label>'.
                                    '</div>';
                            }
                            ?>
                            <br>
                            <a class="btn btn-primary" href="javascript:altaUsuarios()" role="button" id="boton-registro">Registrarse</a>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Top 5 de la lista de usuarios -->
            <!-- El boton editar es un modal que está en views/modals/modal.php --->
            <div class="col-lg-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h4 class="card-title">Últimos registros </h4>
                        <ul class="list-group" id="usuarioscontainer"></ul>
                    </div>
                    <div>
                    <button class="mb-2 mr-2 border-0 btn-transition btn btn-outline-alternate" id="botonDeVerTodos" data-toggle="modal" data-target="#verUsuario" onclick="escribir()">Ver más</button>
                    <button class="mb-2 mr-2 border-0 btn-transition btn btn-outline-alternate" id="botonDeVerTodos2" data-toggle="modal" data-target="#recuperarUsuario" onclick="recuperar()">Historial de Usuarios</button>
                    </div>
                </div>
            </div>
            <style>
                label{
                    font-weight:500;
                }
                #inputejemplo{
                    border:#DC3545 1px solid;
                }
                li{
                    list-style: none;
                }
            </style>
        </div>
    </div>
</div>
