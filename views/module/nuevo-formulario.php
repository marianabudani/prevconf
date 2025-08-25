
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="fas fa-clipboard"></i>
            </div>
            <div>Nueva solicitud
                <div class="page-title-subheading">Aquí podrás cargar nuevas solicitudes.
                </div>
            </div>
        </div>
        <div class="page-title-actions">
            <button id="guardarnuevofn" class="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x btn btn-outline-primary"><i class="lnr lnr-enter"> </i>Guardar</button>
        </div>                           
    </div>
</div>            

<div class="row justify-content-around">
    <div class="card-body mb-3 card col-xl-9">
        <form class="">
            <div class="form-group">
                <label for="nombresolicitud">Nombre de Solicitud/Razón social</label>
                <input name="nombresolicitud" id="nombresolicitud" placeholder="Nombre de solicitud o razón social..." type="text" class="form-control">
            </div>

            <div class="form-group">
                <label for="tipoinmueble">Tipo de inmueble</label>
                <select name="tipoinmueble" id="tipoinmueble" class="form-control">
                    <option value="0">Elija una opción</option>
                    <option value="1">Rural</option>
                    <option value="2">Urbano</option>
                </select>
            </div>

            <div class="form-group">
                <label for="tipooperacion">Tipo de Operación</label>
                <select name="tipooperacion" id="tipooperacion" class="form-control" onchange="d1(this)">
                    <option value="0">Elija una opción</option>
                    <option value="1">Transferencia de Inmuebles</option>
                    <option value="2">Permisos, Concesiones, Licencias</option>
                    <option value="3">Otros</option>
                </select>
                <input type='text' id="descripcionn" name='descripcionn' placeholder="Especificar el tipo de operación..."   disabled="true" class="form-control" >
                <!-- <input name="id_input" id="id_input" placeholder="tipo de operación..." type="text" enabled class="form-control">' -->
               
               
                
            </div>
        
           <!--dm-->
            <div class="form-group">
                <label for="ubicacion">Ubicación</label>
                <input name="ubicacion" id="ubicacion" placeholder="Ubicación..." type="text" class="form-control">
            </div>
            <!--dm-->
           <div style="text-align: center">
                <p>Podrá descargar los formularios desde:</b><small> <br>
                <a href="https://www.argentina.gob.ar/interior/asuntos-tecnicos-de-fronteras" target="_blank" class="text-primary">Dirección Nacional de Asuntos Técnicos de Fronteras</a> <br>
                <a href="https://www.argentina.gob.ar/interior/asuntos-tecnicos-de-fronteras/solicitud-de-previa-conformidad" target="_blank" class="text-primary">Previa Conformidad</a> 
                </small></p>
            </div>

            <!-- <input type="hidden" value="<?php //echo 0; ?>" id="cantArchivofn"> -->
            <div class="card-body card">
                <div class="row">
                    <div class="col-12">
                        <label for="" class="form-control-label"><strong>Adjuntar archivos</strong></label>
                        <p><small>Tipo de archivos permitidos PDF, PNG, JPG. &nbsp; Tamaño máximo permitido por archivo 10 MB</small></p>
                    </div>
					<div class="col-12 text-center">
                        <div role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5">
                            <button type="button" class="btn btn-pill btn-outline-success" id="agregarfn"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfn"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                        </div>
                    </div>
                </div>
                <hr>
                <div id="nuevoArchivofn">
                </div>
            </div>
        </form>
    </div>
</div>