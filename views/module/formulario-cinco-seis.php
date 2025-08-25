
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="fas fa-copy"></i>
            </div>
            <div>Formulario 5 o 6
                <div class="page-title-subheading">Aquí podrás cargar solicitudes correspondientes a formularios 5 o 6.
                </div>
            </div>
        </div>
        <div class="page-title-actions">
            <button id="guardarnuevocs" class="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x btn btn-outline-primary"><i class="lnr lnr-enter"> </i>Guardar</button>
        </div>                           
    </div>
</div>            

<div class="row justify-content-around">
    <div class="card-body mb-3 card col-xl-9">
        <form class="">
            <div class="form-group">
                <label for="nombresolicitudcs">Nombre de Solicitud/Razón social</label>
                <input name="nombresolicitudcs" id="nombresolicitudcs" placeholder="Nombre de solicitud o razón social..." type="text" class="form-control">
            </div>

            <div class="form-group">
                <label for="ubicacioncs">Ubicación</label>
                <input name="ubicacioncs" id="ubicacioncs" placeholder="Ubicación..." type="text" class="form-control">
            </div>

            <div style="text-align: center">
                <p>Podrás descargar los formularios desde:</b><small> <br>
                <a href="https://www.argentina.gob.ar/interior/asuntos-tecnicos-de-fronteras" target="_blank" class="text-primary">Dirección Nacional de Asuntos Técnicos de Fronteras</a> <br>
                <a href="https://www.argentina.gob.ar/interior/asuntos-tecnicos-de-fronteras/solicitud-de-previa-conformidad" target="_blank" class="text-primary">Previa Conformidad</a> 
                </small></p>
            </div>

            <input type="hidden" value="<?php echo 0; ?>" id="cantArchivocs">
            <div class="card-body card">
                <div class="row">
                    <div class="col-12">
                        <label for="" class="form-control-label"><strong>Adjuntar archivos</strong></label>
                        <p><small>Tipo de archivos permitidos PDF, PNG, JPG. &nbsp; Tamaño máximo permitido por archivo 10 MB</small></p>
                    </div>
					<div class="col-12 text-center">
					 <div role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5">
                            <button type="button" class="btn btn-pill btn-outline-success" id="agregarcs"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcs"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                        </div>
					</div>
                </div>
                <hr>
                <div id="nuevoArchivocs">
                </div>
            </div>
        </form>
    </div>
</div>