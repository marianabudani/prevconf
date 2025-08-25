<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="fas fa-table"></i>
            </div>
            <div>Panel de control
                <div class="page-title-subheading">Vas a poder configurar el comportamiento del framework
                </div>
            </div>
        </div>

    </div>
</div>

<div class="tab-content">
    
    <span class="action"></span>

    <!-- CHECK SETTING --> 
    <div class="row">
        <div class="col-lg-6">

            <div class="main-card mb-3 card">
                <div class="card-body">
                    <h5 class="card-title">Parámetros Generales</h5>
                    
                    <form class="">
                        <div class="position-relative form-check">
                            <label class="form-check-label"> 
                                <input type="checkbox" id="usa_carrousel_ini" resource="db_setting" name="usa_carrousel_ini" class="form-check-input checkbox"> ¿Usa imagénes en el carousel en el login?
                            </label>
                        </div>

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="usa_carrusel_txt" resource="db_setting" name="usa_carrusel_txt" class="form-check-input checkbox"> ¿Usa texto en el carousel en el login?
                            </label>
                        </div>

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="usa_alta_user" resource="db_setting" name="usa_alta_user" class="form-check-input checkbox"> ¿Permite crear usuarios?
                            </label>
                        </div>

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="usa_recovery_user" resource="db_setting" name="usa_recovery_user" class="form-check-input checkbox"> ¿Permite recuperar contraseña?
                            </label>
                        </div>
                        
                    </form>
                </div>
            </div>

        </div>

        <div class="col-lg-6">
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">Parámetros de Framework</h5>
                    <form class="">

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="header" resource="sp_framework" name="header" class="form-check-input checkbox"> ¿Header visible?
                            </label>
                        </div>

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="menu" resource="sp_framework" name="menu" class="form-check-input checkbox"> ¿Menú visible?
                            </label>
                        </div>

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="footer" resource="sp_framework" name="footer" class="form-check-input checkbox"> ¿Footer visible?
                            </label>
                        </div>

                        <div class="position-relative form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="config_button" resource="sp_framework" name="config_button" class="form-check-input checkbox"> ¿Botón de configuración visible?
                            </label>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- SECTION IMAGE  -->
    <!--<div class="mb-2 mr-2 badge badge-success">Activo</div>
    <div class="mb-2 mr-2 badge badge-danger">Desactivado</div>-->
    <div class="row">
        <!-- IMAGE ONE -->
        <div class="col-md-4">
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">Primera imagen</h5>
                    <img id="one-file-preview" src="<?php echo $urlForImage.$one_url; ?>" width="100%" height="650px">
                    <hr>
                    <form class="">
                        <div class="position-relative form-group">
                            <label for="title_1" class="">Título</label>
                            <input name="title_1" id="title_1" placeholder="Perfect Balance" type="text" class="form-control updateTxt" resource="db_pictures" attribute="title" orden="1" value="<?php echo $one_title;?>">
                        </div>

                        <div class="position-relative form-group">
                            <label for="descripcion_1" class="">Descripción</label>
                            <textarea name="text" id="descripcion_1" class="form-control updateTxt" resource="db_pictures" attribute="description" orden="1" row="5"><?php echo $one_desc;?></textarea>
                        </div>

                        <div class="position-relative form-group">
                            <label for="one-file" class="">Imagen</label>
                            <input name="file" id="one-file" type="file" class="form-control-file">
                            <small class="form-text text-muted">La imágen debe ser de alta calidad. Medidas: 1600px de ancho y 2400px de alto. Si es superior, el sistema lo recortará. Si es inferior, el sistema forzará la imagen a las medidas recomendadas.</small>
                        </div>
                        <!--<button class="mt-1 btn btn-primary">Actualizar</button>-->
                    </form>
                </div>
            </div>
        </div>

        <!--  IMAGE TWO -->
        <div class="col-md-4">
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">Segunda imagen</h5>
                    <img id="two-file-preview" src="<?php echo $urlForImage.$two_url; ?>" width="100%" height="650px">
                    <hr>
                    <form class="">
                        <div class="position-relative form-group">
                            <label for="title_1" class="">Título</label>
                            <input name="title_1" id="title_1" placeholder="Perfect Balance" type="text" class="form-control updateTxt" resource="db_pictures" attribute="title" orden="2" value="<?php echo $two_title;?>">
                        </div>

                        <div class="position-relative form-group">
                            <label for="descripcion_1" class="">Descripción</label>
                            <textarea name="text" id="descripcion_1" class="form-control updateTxt" resource="db_pictures" attribute="description" orden="2" row="5"><?php echo $two_desc;?></textarea>
                        </div>

                        <div class="position-relative form-group">
                            <label for="two-file" class="">Imagen</label>
                            <input name="file" id="two-file" type="file" class="form-control-file">
                            <small class="form-text text-muted">La imágen debe ser de alta calidad. Medidas: 1600px de ancho y 2400px de alto. Si es superior, el sistema lo recortará. Si es inferior, el sistema forzará la imagen a las medidas recomendadas.</small>
                        </div>
                        <!--<button class="mt-1 btn btn-primary">Actualizar</button>-->
                    </form>
                </div>
            </div>
        </div>

        <!--  IMAGE THREE -->
        <div class="col-md-4">
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">Tercera imagen </h5>
                    <img id="three-file-preview" src="<?php echo $urlForImage.$three_url; ?>" width="100%" height="650px">
                    <hr>
                    <form class="">
                        <div class="position-relative form-group">
                            <label for="title_1" class="">Título</label>
                            <input name="title_1" id="title_1" placeholder="Perfect Balance" type="text" class="form-control updateTxt" resource="db_pictures" attribute="title" orden="3" value="<?php echo $three_title;?>">
                        </div>

                        <div class="position-relative form-group">
                            <label for="descripcion_1" class="">Descripción</label>
                            <textarea name="text" id="descripcion_1" class="form-control updateTxt" resource="db_pictures" attribute="description" orden="3" row="5"><?php echo $three_desc;?></textarea>
                        </div>

                        <div class="position-relative form-group">
                            <label for="three-file" class="">Imagen</label>
                            <input name="file" id="three-file" type="file" class="form-control-file">
                            <small class="form-text text-muted">La imágen debe ser de alta calidad. Medidas: 1600px de ancho y 2400px de alto. Si es superior, el sistema lo recortará. Si es inferior, el sistema forzará la imagen a las medidas recomendadas.</small>
                        </div>
                        <!--<button class="mt-1 btn btn-primary">Actualizar</button>-->
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">Icono principal </h5>
                    <img id="ico-file-preview" src="<?php echo $urlForImage.$ico_logo; ?>" width="97px" height="23px">
                    <hr>
                    <form class="">
                        <div class="position-relative form-group">
                            <label for="ico-file" class="">Imagen</label>
                            <input name="file" id="ico-file" type="file" class="form-control-file">
                            <small class="form-text text-muted">La imágen debe ser de alta calidad. Medidas: 97px de ancho y 23px de alto. Si es superior, el sistema lo recortará. Si es inferior, el sistema forzará la imagen a las medidas recomendadas.</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>    
</div>