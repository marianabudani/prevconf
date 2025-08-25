

<!-------------------------------------------------- 
    Enviar notificación - FUNCIONALIDAD ADMINISTRADOR AL EDITAR SOLICITUD
--------------------------------------------------->
<div class="modal fade" id="EnviarNotificacion" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Notificación</h5>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            <div class="modal-body">
                <form>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="descripcionEnvNot">Descripción</label>
                            <!-- <input class="form-control" type="text" name="descripcionEnvNot" id="descripcionEnvNot" placeholder="Digite una notificación..."> -->
                            <textarea class="form-control" name="descripcionEnvNot" id="descripcionEnvNot" rows="10" placeholder="Digite una notificación..."></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarEnvNot">Guardar</button>
                <!-- <button type="button" class="btn btn-secondary" id="loguinCC" data-dismiss="modal">Cerrar</button> -->
            </div>
        </div>
    </div>
</div>

<!-------------------------------------------------- 
    Cambiar contraseña 
--------------------------------------------------->

<div class="modal fade" id="loguinCamCon" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Actualice su contraseña</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                <input type="hidden" id="LoguinIdUsu" value="">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="loginConNue">Contraseña nueva</label>
                            <input class="form-control" type="password" name="loginConNue" id="loginConNue" placeholder="Digite contraseña nueva...">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="loginRepConNue">Repita la contraseña nueva</label>
                            <input class="form-control" type="password" name="loginRepConNue" id="loginRepConNue" placeholder="Repetir contraseña nueva...">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="loguinCC" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" id="loguinGC">Guardar</button>
            </div>
        </div>
    </div>
</div>

                                                <!-------------------------------------------------- 
                                                                    ESCRIBANO
                                                --------------------------------------------------->


<!-------------------------------------------------- 
    Adjuntar documentación trámites ya Iniciados - FUNCIONALIDAD ESCRIBANO CUANDO TIENE TRAMITES CON ESTADO FALTA DOCUMENTACIÓN
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformularios1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <input type="hidden" id="idSolicitudAdmTraNue">
            <input type="hidden" id="idUsuAdmTraNue">
            <input type="hidden" id="idUsuarioprueba" value="<?php echo $_SESSION['IDENTITY'];?>">
            
            

                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!--
                <button type="button" class="close" onclick="cerrarVentanafn();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <input type="hidden" id="id_solicitudEscAdjDoc">
                        <input type="hidden" id="idUsuAdmTraNue">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudEscAdjDoc">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudEscAdjDoc" id="nombreSolicitudEscAdjDoc" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoEscAdjDoc">Nombre escribano</label>
                                <input name="nombreEscribanoEscAdjDoc" id="nombreEscribanoEscAdjDoc" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleEscAdjDoc">Tipo de inmueble</label>
                                <select name="nombreInmuebleEscAdjDoc" id="nombreInmuebleEscAdjDoc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaEscAdjDoc">Fecha</label>
                                <input name="nombreFechaEscAdjDoc" id="nombreFechaEscAdjDoc" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionEscAdjDoc">Tipo de Operación</label>
                                <select name="nombreOperacionEscAdjDoc" id="nombreOperacionEscAdjDoc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <input name="nombreOperacionEscAdjDoc1" id="nombreOperacionEscAdjDoc1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoEscAdjDoc">Estado</label>
                                <select name="nombreEstadoEscAdjDoc" id="nombreEstadoEscAdjDoc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteEscAdjDoc">Tipo de trámite</label>
                                <select name="nombreTramiteEscAdjDoc" id="nombreTramiteEscAdjDoc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteEscAdjDoc">Número de expediente</label>
                                <input name="nombreExpedienteEscAdjDoc" id="nombreExpedienteEscAdjDoc" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoEscAdjDoc">Abogado</label>
                                <input name="nombreAbogadoEscAdjDoc" id="nombreAbogadoEscAdjDoc" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoEscAdjDoc">Destino</label>
                                <input name="nombreDestinoEscAdjDoc" id="nombreDestinoEscAdjDoc" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionEscAdjDoc">Ubicación</label>
                                <input name="nombreUbicacionEscAdjDoc" id="nombreUbicacionEscAdjDoc" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>
                            <div id="botonesfn" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfn"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <!--<button type="button" class="btn btn-pill btn-outline-danger" id="quitarfn"><span class="lnr lnr-circle-minus"></span> Quitar</button> -->
                            </div>
                            <hr>
                            <div id="nuevoArchivofn"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
            <div id="EnvNotAdmTraNue1"></div>
                <button type="button" class="btn btn-primary" id="guardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfn">Editar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanafn();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformularios2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--
                <button type="button" class="close" onclick="cerrarVentanacs();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <input type="hidden" id="id_solicitudEscAdjDocDos">
                         <input type="hidden" id="idUsuAdmTraNue">
                         <input type="hidden" id="idUsuarioprueba" value="<?php echo $_SESSION['IDENTITY'];?>">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudEscAdjDocDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudEscAdjDocDos" id="nombreSolicitudEscAdjDocDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoEscAdjDocDos">Nombre escribano</label>
                                <input name="nombreEscribanoEscAdjDocDos" id="nombreEscribanoEscAdjDocDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaEscAdjDocDos">Fecha</label>
                                <input name="nombreFechaEscAdjDocDos" id="nombreFechaEscAdjDocDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoEscAdjDocDos">Estado</label>
                                <select name="nombreEstadoEscAdjDocDos" id="nombreEstadoEscAdjDocDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteEscAdjDocDos">Tipo de trámite</label>
                                <select name="nombreTramiteEscAdjDocDos" id="nombreTramiteEscAdjDocDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteEscAdjDocDos">Número de expediente</label>
                                <input name="nombreExpedienteEscAdjDocDos" id="nombreExpedienteEscAdjDocDos" placeholder="Número expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoEscAdjDocDos">Abogado</label>
                                <input name="nombreAbogadoEscAdjDocDos" id="nombreAbogadoEscAdjDocDos" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoEscAdjDocDos">Destino</label>
                                <input name="nombreDestinoEscAdjDocDos" id="nombreDestinoEscAdjDocDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionEscAdjDocDos">Ubicación</label>
                                <input name="nombreUbicacionEscAdjDocDos" id="nombreUbicacionEscAdjDocDos" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>
                            <div id="botonescs" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcs"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <!--<button type="button" class="btn btn-pill btn-outline-danger" id="quitarcs"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                                -->
                            </div>
                            <hr>
                            <div id="nuevoArchivocs"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
            <div id="EnvNotAdmTraNueDos"></div>
                <button type="button" class="btn btn-primary" id="guardarcs" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcs">Editar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcs" onclick="cerrarVentanacs();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


<!-------------------------------------------------- 
                    Consultas
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariosConsulta1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
               <!-- 
                <button type="button" class="close" onclick="cerrarVentanafn();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudEscConsulta">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudEscConsulta" id="nombreSolicitudEscConsulta" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoEscConsulta">Nombre escribano</label>
                                <input name="nombreEscribanoEscConsulta" id="nombreEscribanoEscConsulta" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleEscConsulta">Tipo de inmueble</label>
                                <select name="nombreInmuebleEscConsulta" id="nombreInmuebleEscConsulta" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaEscConsulta">Fecha</label>
                                <input name="nombreFechaEscConsulta" id="nombreFechaEscConsulta" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionEscConsulta">Tipo de Operación</label>
                                <select name="nombreOperacionEscConsulta" id="nombreOperacionEscConsulta" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <!-- <br><input type='text' id="nombreOperacionEscConsulta1" name='nombreOperacionEscConsulta1' placeholder="Especificar el tipo de operación..."   disabled="true" class="form-control"> -->
                                <input name="nombreOperacionEscConsulta1" id="nombreOperacionEscConsulta1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                       

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoEscConsulta">Estado</label>
                                <select name="nombreEstadoEscConsulta" id="nombreEstadoEscConsulta" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteEscConsulta">Tipo de trámite</label>
                                <select name="nombreTramiteEscConsulta" id="nombreTramiteEscConsulta" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteEscConsulta">Número de expediente</label>
                                <input name="nombreExpedienteEscConsulta" id="nombreExpedienteEscConsulta" placeholder="Expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <!-- <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoEscConsulta">Abogado</label>
                                <input name="nombreAbogadoEscConsulta" id="nombreAbogadoEscConsulta" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div> -->

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoEscConsulta">Abogado</label>
                                <input name="nombreAbogadoEscConsulta" id="nombreAbogadoEscConsulta" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoEscConsulta">Destino</label>
                                <input name="nombreDestinoEscConsulta" id="nombreDestinoEscConsulta" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <!--dm-->
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionEscConsulta">Ubicación</label>
                                <input name="nombreUbicacionEscConsulta" id="nombreUbicacionEscConsulta" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                    <!--dm-->

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>
                            <div id="botonesfn" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfn"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfn"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div>
                            <hr>
                            <div id="nuevoArchivofnConsulta"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-primary" id="guardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfn">Editar</button> -->
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanafn();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariosConsulta2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--

                <button type="button" class="close" onclick="cerrarVentanacs();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudEscConsultaDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudEscConsultaDos" id="nombreSolicitudEscConsultaDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoEscConsultaDos">Nombre escribano</label>
                                <input name="nombreEscribanoEscConsultaDos" id="nombreEscribanoEscConsultaDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaEscConsultaDos">Fecha</label>
                                <input name="nombreFechaEscConsultaDos" id="nombreFechaEscConsultaDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoEscConsultaDos">Estado</label>
                                <select name="nombreEstadoEscConsultaDos" id="nombreEstadoEscConsultaDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteEscConsultaDos">Tipo de trámite</label>
                                <select name="nombreTramiteEscConsultaDos" id="nombreTramiteEscConsultaDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteEscConsultaDos">Número de expediente</label>
                                <input name="nombreExpedienteEscConsultaDos" id="nombreExpedienteEscConsultaDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoEscConsultaDos">Abogado</label>
                                <input name="nombreAbogadoEscConsultaDos" id="nombreAbogadoEscConsultaDos" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoEscConsultaDos">Destino</label>
                                <input name="nombreDestinoEscConsultaDos" id="nombreDestinoEscConsultaDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionEscConsultaDos">Ubicación</label>
                                <input name="nombreUbicacionEscConsultaDos" id="nombreUbicacionEscConsultaDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div> 

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>
                            <div id="botonescs" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcs"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcs"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div>
                            <hr>
                            <div id="nuevoArchivocsConsultaDos"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-primary" id="guardarcs" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcs">Editar</button> -->
                <button type="button" class="btn btn-secondary" id ="cerrarcs" onclick="cerrarVentanacs();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


                                                    <!-------------------------------------------------- 
                                                                    ADMINISTRADOR
                                                    --------------------------------------------------->

<!-------------------------------------------------- 
                Trámites Nuevos 
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariostranuev1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!-- <button type="button" class="close" onclick="cerrarVentanafnAdmTraNue();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <input type="hidden" id="idSolicitudAdmTraNue">
                        <input type="hidden" id="idUsuAdmTraNue">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAdmTraNue">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAdmTraNue" id="nombreSolicitudAdmTraNue" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAdmTraNue">Nombre escribano</label>
                                <input name="nombreEscribanoAdmTraNue" id="nombreEscribanoAdmTraNue" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleAdmTraNue">Tipo de inmueble</label>
                                <select name="nombreInmuebleAdmTraNue" id="nombreInmuebleAdmTraNue" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAdmTraNue">Fecha</label>
                                <input name="nombreFechaAdmTraNue" id="nombreFechaAdmTraNue" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionAdmTraNue">Tipo de Operación</label>
                                <select name="nombreOperacionAdmTraNue" id="nombreOperacionAdmTraNue" class="form-control" disabled="disabled" onchange="d2(this)" >
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <input name="nombreOperacionAdmTraNue1" id="nombreOperacionAdmTraNue1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAdmTraNue">Estado</label>
                                <select name="nombreEstadoAdmTraNue" id="nombreEstadoAdmTraNue" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAdmTraNue">Tipo de trámite</label>
                                <select name="nombreTramiteAdmTraNue" id="nombreTramiteAdmTraNue" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAdmTraNue">Número de expediente</label>
                                <input name="nombreExpedienteAdmTraNue" id="nombreExpedienteAdmTraNue" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <!-- <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraNue">Abogado</label>
                                <input list="AbogadosAdmTraNue" name="nombreAbogadoAdmTraNue" id="nombreAbogadoAdmTraNue" placeholder="Abogados..." class="form-control" disabled="disabled">
                                <datalist id="AbogadosAdmTraNue"></datalist>
                            </div>
                        </div> -->

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraNue">Abogado</label>
                                <select name="nombreAbogadoAdmTraNue" id="nombreAbogadoAdmTraNue" class="form-control" onfocus="this.size=5;" onblur="this.size=1;" onchange="this.size=1; this.blur();" disabled="disabled">
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAdmTraNue">Destino</label>
                                <input name="nombreDestinoAdmTraNue" id="nombreDestinoAdmTraNue" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>


                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAdmTraNue">Ubicación</label>
                                <input name="nombreUbicacionAdmTraNue" id="nombreUbicacionAdmTraNue" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <br>
                        <div class="col">
                            <hr>
                            
                            <div align="center">
                                <label style="font-size: 150%">Archivos adjuntos</label> 
                                <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>  
                                <button type="button" class="btn btn-success" id="descarga_archivos" onclick="descargarArchivos();">Descargar todos los archivos</button>
                                                              
                                
                                <div id="botonesfnAdmTraNue" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                    <button type="button" class="btn btn-pill btn-outline-success" id="agregarfnAdmTraNue"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <!--
                                    <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfnAdmTraNue"><span class="lnr lnr-circle-minus"></span> Quitar</button>

                            --> 
                                </div>
                            </div>
                            <hr>
                            
                            <div id="nuevoArchivoAdmTraNue"></div>
                        </div>
                    </div>
                </from>

                <hr>               
                <div align="center">
                    <label style="font-size: 150%">Notificaciones</label>
                    <table id="notificacionesAdmPenComun" class="display" width="100%"></table>
                </div>

            </div>
            <div class="modal-footer">
                <div id="EnvNotAdmTraNue"></div>
                <button type="button" class="btn btn-primary" id="guardarfnAdmTraNue" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfnAdmTraNue">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfnAdmTraNue" onclick="cerrarVentanafnAdmTraNue();" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfnAdmTraNueOculto" data-dismiss="modal" style="visibility:hidden;"></button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariostranuev2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                
                <!--<button type="button" class="close" onclick="cerrarVentanacsAdmTraNue();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <input type="hidden" id="idSolicitudAdmTraNueDos">
                        <input type="hidden" id="idUsuAdmTraNueDos">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAdmTraNueDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAdmTraNueDos" id="nombreSolicitudAdmTraNueDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAdmTraNueDos">Nombre escribano</label>
                                <input name="nombreEscribanoAdmTraNueDos" id="nombreEscribanoAdmTraNueDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAdmTraNueDos">Fecha</label>
                                <input name="nombreFechaAdmTraNueDos" id="nombreFechaAdmTraNueDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAdmTraNueDos">Estado</label>
                                <select name="nombreEstadoAdmTraNueDos" id="nombreEstadoAdmTraNueDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAdmTraNueDos">Tipo de trámite</label>
                                <select name="nombreTramiteAdmTraNueDos" id="nombreTramiteAdmTraNueDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAdmTraNueDos">Número de expediente</label>
                                <input name="nombreExpedienteAdmTraNueDos" id="nombreExpedienteAdmTraNueDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraNueDos">Abogado</label>
                                <select name="nombreAbogadoAdmTraNueDos" id="nombreAbogadoAdmTraNueDos" placeholder="Abogados..." class="form-control" onfocus="this.size=5;" onblur="this.size=1;" onchange="this.size=1; this.blur();" disabled="disabled">
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAdmTraNueDos">Destino</label>
                                <input name="nombreDestinoAdmTraNueDos" id="nombreDestinoAdmTraNueDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAdmTraNueDos">Ubicación</label>
                                <input name="nombreUbicacionAdmTraNueDos" id="nombreUbicacionAdmTraNueDos" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div> 



                        <div class="col">
                            <hr>
                            <div align="center">
                                <label style="font-size: 150%">Archivos adjuntos</label> 
                                <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p> 
                                <button type="button" class="btn btn-success" id="descarga_archivos" onclick="descargarArchivos();">Descargar todos los archivos</button>
                

                                <div id="botonescsAdmTraNueDos" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                    <button type="button" class="btn btn-pill btn-outline-success" id="agregarcsAdmTraNueDos"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                    <!--<button type="button" class="btn btn-pill btn-outline-danger" id="quitarcsAdmTraNueDos"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                                    -->
                                </div>
                            </div>
                            <hr>
                        
                            <div id="nuevoArchivoAdmTraNueDos"></div>
                        </div>
                        </div>
                         
                </from>

                <hr>               
                <div align="center">
                    <label style="font-size: 150%">Notificaciones</label>
                    <table id="notificacionesAdmPen5o6" class="display" width="100%"></table>
                </div>

            </div>
            <div class="modal-footer">
                <div id="EnvNotAdmTraNueDos"></div>
                <button type="button" class="btn btn-primary" id="guardarcsAdmTraNueDos" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcsAdmTraNueDos">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcsAdmTraNueDos" onclick="cerrarVentanacsAdmTraNue();" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcsAdmTraNueDosOculto" data-dismiss="modal" style="visibility:hidden;"></button>
            </div>
        </div>
    </div>
</div>


<!-------------------------------------------------- 
                Trámites en proceso 
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariostraproc1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!-- <button type="button" class="close" onclick="cerrarVentanafnAdmTraProc();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <input type="hidden" id="idSolicitudAdmTraProc">
                        <input type="hidden" id="idUsuAdmTraProc">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAdmTraProc">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAdmTraProc" id="nombreSolicitudAdmTraProc" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAdmTraProc">Nombre escribano</label>
                                <input name="nombreEscribanoAdmTraProc" id="nombreEscribanoAdmTraProc" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleAdmTraProc">Tipo de inmueble</label>
                                <select name="nombreInmuebleAdmTraProc" id="nombreInmuebleAdmTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAdmTraProc">Fecha</label>
                                <input name="nombreFechaAdmTraProc" id="nombreFechaAdmTraProc" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionAdmTraProc">Tipo de Operación</label>
                                <select name="nombreOperacionAdmTraProc" id="nombreOperacionAdmTraProc" class="form-control" disabled="disabled" onchange="d3(this)">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <input name="nombreOperacionAdmTraProc1" id="nombreOperacionAdmTraProc1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAdmTraProc">Estado</label>
                                <select name="nombreEstadoAdmTraProc" id="nombreEstadoAdmTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAdmTraProc">Tipo de trámite</label>
                                <select name="nombreTramiteAdmTraProc" id="nombreTramiteAdmTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAdmTraProc">Número de expediente</label>
                                <input name="nombreExpedienteAdmTraProc" id="nombreExpedienteAdmTraProc" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraProc">Abogado</label>
                                <select name="nombreAbogadoAdmTraProc" id="nombreAbogadoAdmTraProc" placeholder="Abogados..." class="form-control" onfocus="this.size=5;" onblur="this.size=1;" onchange="this.size=1; this.blur();" disabled="disabled">
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAdmTraProc">Destino</label>
                                <input name="nombreDestinoAdmTraProc" id="nombreDestinoAdmTraProc" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAdmTraProc">Ubicación</label>
                                <input name="nombreUbicacionAdmTraProc" id="nombreUbicacionAdmTraProc" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>


                        <div class="col">
                            
                            <hr>
                            <div align="center">
                                <label style="font-size: 150%">Archivos adjuntos</label> 
                                <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>
                                <button type="button" class="btn btn-success" id="descarga_archivos" onclick="descargarArchivos();">Descargar todos los archivos</button>
                
                                <div id="botonesfnAdmTraProc" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                    <button type="button" class="btn btn-pill btn-outline-success" id="agregarfnAdmTraProc"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <!--        
                                    <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfnAdmTraProc"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            -->
                                </div>
                            </div>
                            
                            <hr>
                            <div id="nuevoArchivoAdmTraProc"></div>
                        </div>
                        <!-- <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <div id="botonesfnAdmTraProc" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfnAdmTraProc"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfnAdmTraProc"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div>
                            <hr>
                            <div id="nuevoArchivoAdmTraProc"></div>
                        </div> -->
                    </div>
                </from>

                <hr>               
                <div align="center">
                    <label style="font-size: 150%">Notificaciones</label>
                    <table id="notificacionesAdmProComun" class="display" width="100%"></table>
                </div>

            </div>
            <div class="modal-footer">
                <div id="EnvNotAdmTraProc"></div>
                <button type="button" class="btn btn-primary" id="guardarfnAdmTraProc" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="faltadocumentacion">Falta Documentación</button>
                <button type="button" class="btn btn-success" id="editarfnAdmTraProc">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfnAdmTraProc" onclick="cerrarVentanafnAdmTraProc();" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfnAdmTraProcOculto" data-dismiss="modal" style="visibility:hidden;"></button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariostraproc2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--<button type="button" class="close" onclick="cerrarVentanacsAdmTraProc();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <input type="hidden" id="idSolicitudAdmTraProcDos">
                        <input type="hidden" id="idUsuAdmTraProcDos">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAdmTraProcDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAdmTraProcDos" id="nombreSolicitudAdmTraProcDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAdmTraProcDos">Nombre escribano</label>
                                <input name="nombreEscribanoAdmTraProcDos" id="nombreEscribanoAdmTraProcDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAdmTraProcDos">Fecha</label>
                                <input name="nombreFechaAdmTraProcDos" id="nombreFechaAdmTraProcDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAdmTraProcDos">Estado</label>
                                <select name="nombreEstadoAdmTraProcDos" id="nombreEstadoAdmTraProcDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAdmTraProcDos">Tipo de trámite</label>
                                <select name="nombreTramiteAdmTraProcDos" id="nombreTramiteAdmTraProcDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAdmTraProcDos">Número de expediente</label>
                                <input name="nombreExpedienteAdmTraProcDos" id="nombreExpedienteAdmTraProcDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraProcDos">Abogado</label>
                                <select name="nombreAbogadoAdmTraProcDos" id="nombreAbogadoAdmTraProcDos" placeholder="Abogados..." class="form-control" onfocus="this.size=5;" onblur="this.size=1;" onchange="this.size=1; this.blur();" disabled="disabled">
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAdmTraProcDos">Destino</label>
                                <input name="nombreDestinoAdmTraProcDos" id="nombreDestinoAdmTraProcDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAdmTraProcDos">Ubicación</label>
                                <input name="nombreUbicacionAdmTraProcDos" id="nombreUbicacionAdmTraProcDos" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>


                        <div class="col">
                             <hr>
                            
                            <div align="center">
                                <label style="font-size: 150%">Archivos adjuntos</label> 
                                <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>                        
                                <div id="botonescsAdmTraProcDos" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                    <button type="button" class="btn btn-pill btn-outline-success" id="agregarcsAdmTraProcDos"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <!--
                                    <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcsAdmTraProcDos"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                        -->
                                </div>
                            </div>
                            <hr>
                        
                            <div id="nuevoArchivoAdmTraProcDos"></div>
                        </div>
                        <!-- <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <div id="botonescsAdmTraProcDos" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcsAdmTraProcDos"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcsAdmTraProcDos"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div>
                            <hr>
                            <div id="nuevoArchivoAdmTraProcDos"></div>
                        </div> -->
                    </div>
                </from>

                <hr>               
                <div align="center">
                    <label style="font-size: 150%">Notificaciones</label>
                    <table id="notificacionesAdmPro5o6" class="display" width="100%"></table>
                </div>

            </div>
            <div class="modal-footer">
                <div id="EnvNotAdmTraProcDos"></div>
                <button type="button" class="btn btn-primary" id="guardarcsAdmTraProcDos" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="faltadocumentacionDos">Falta Documentación</button>
                <button type="button" class="btn btn-success" id="editarcsAdmTraProcDos">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcsAdmTraProcDos" onclick="cerrarVentanacsAdmTraProc();" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcsAdmTraProcDosOculto" data-dismiss="modal"  style="visibility:hidden;"></button>
            </div>
        </div>
    </div>
</div>


<!-------------------------------------------------- 
                Trámites finalizados 
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariostrafina1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!-- <button type="button" class="close" onclick="cerrarVentanafnAdmTraFin();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <input type="hidden" id="idSolicitudAdmTraFin">
                        <input type="hidden" id="idUsuAdmTraFin">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAdmTraFin">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAdmTraFin" id="nombreSolicitudAdmTraFin" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAdmTraFin">Nombre escribano</label>
                                <input name="nombreEscribanoAdmTraFin" id="nombreEscribanoAdmTraFin" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleAdmTraFin">Tipo de inmueble</label>
                                <select name="nombreInmuebleAdmTraFin" id="nombreInmuebleAdmTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAdmTraFin">Fecha</label>
                                <input name="nombreFechaAdmTraFin" id="nombreFechaAdmTraFin" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionAdmTraFin">Tipo de Operación</label>
                                <select name="nombreOperacionAdmTraFin" id="nombreOperacionAdmTraFin" class="form-control" disabled="disabled" onchange="d4(this)">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <input name="nombreOperacionAdmTraFin1" id="nombreOperacionAdmTraFin1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAdmTraFin">Estado</label>
                                <select name="nombreEstadoAdmTraFin" id="nombreEstadoAdmTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAdmTraFin">Tipo de trámite</label>
                                <select name="nombreTramiteAdmTraFin" id="nombreTramiteAdmTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAdmTraFin">Número de expediente</label>
                                <input name="nombreExpedienteAdmTraFin" id="nombreExpedienteAdmTraFin" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraFin">Abogado</label>
                                <select name="nombreAbogadoAdmTraFin" id="nombreAbogadoAdmTraFin" placeholder="Abogados..." class="form-control" onfocus="this.size=5;" onblur="this.size=1;" onchange="this.size=1; this.blur();" disabled="disabled">
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAdmTraFin">Destino</label>
                                <input name="nombreDestinoAdmTraFin" id="nombreDestinoAdmTraFin" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAdmTraFin">Ubicación</label>
                                <input name="nombreUbicacionAdmTraFin" id="nombreUbicacionAdmTraFin" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>


                        <div class="col">
                            <hr>
                            
                            <div align="center">
                                <label style="font-size: 150%">Archivos adjuntos</label>
                                <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p> 
                                <button type="button" class="btn btn-success" id="descarga_archivos" onclick="descargarArchivos();">Descargar todos los archivos</button>
                
                                                        
                                <div id="botonesfnAdmTraFin" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                    <button type="button" class="btn btn-pill btn-outline-success" id="agregarfnAdmTraFin"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <!--
                                    <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfnAdmTraFin"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            -->
                                </div>
                            </div>
                            <hr>
                        
                            <div id="nuevoArchivoAdmTraFin"></div>
                        </div>
                        <!-- <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <div id="botonesfnAdmTraFin" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfnAdmTraFin"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfnAdmTraFin"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div>
                            <hr>
                            <div id="nuevoArchivoAdmTraFin"></div>
                        </div> -->

                    </div>
                </from>

                <hr>               
                <div align="center">
                    <label style="font-size: 150%">Notificaciones</label>
                    <table id="notificacionesAdmFinComun" class="display" width="100%"></table>
                </div>

            </div>
            <div class="modal-footer">
                <div id="EnvNotAdmTraFin"></div>
                <button type="button" class="btn btn-primary" id="guardarfnAdmTraFin" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfnAdmTraFin">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfnAdmTraFin" onclick="cerrarVentanafnAdmTraFin();" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfnAdmTraFinOculto" data-dismiss="modal" style="visibility:hidden;"></button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariostrafina2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--
                <button type="button" class="close" onclick="cerrarVentanacsAdmTraFin();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <input type="hidden" id="idSolicitudAdmTraFinDos">
                        <input type="hidden" id="idUsuAdmTraFinDos">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAdmTraFinDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAdmTraFinDos" id="nombreSolicitudAdmTraFinDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAdmTraFinDos">Nombre escribano</label>
                                <input name="nombreEscribanoAdmTraFinDos" id="nombreEscribanoAdmTraFinDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAdmTraFinDos">Fecha</label>
                                <input name="nombreFechaAdmTraFinDos" id="nombreFechaAdmTraFinDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAdmTraFinDos">Estado</label>
                                <select name="nombreEstadoAdmTraFinDos" id="nombreEstadoAdmTraFinDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAdmTraFinDos">Tipo de trámite</label>
                                <select name="nombreTramiteAdmTraFinDos" id="nombreTramiteAdmTraFinDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAdmTraFinDos">Número de expediente</label>
                                <input name="nombreExpedienteAdmTraFinDos" id="nombreExpedienteAdmTraFinDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAdmTraFinDos">Abogado</label>
                                <select name="nombreAbogadoAdmTraFinDos" id="nombreAbogadoAdmTraFinDos" placeholder="Abogados..." class="form-control" onfocus="this.size=5;" onblur="this.size=1;" onchange="this.size=1; this.blur();" disabled="disabled">
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAdmTraFinDos">Destino</label>
                                <input name="nombreDestinoAdmTraFinDos" id="nombreDestinoAdmTraFinDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAdmTraFinDos">Ubicación</label>
                                <input name="nombreUbicacionAdmTraFinDos" id="nombreUbicacionAdmTraFinDos" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <hr>
                            
                            <div align="center">
                                <label style="font-size: 150%">Archivos adjuntos</label> 
                                <p><small>tipo de archivos permitidos PDF, PNG, JPG<br>tamaño máximo permitido por archivo 10 MB</small></p>                        
                                <div id="botonescsAdmTraFinDos" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                    <button type="button" class="btn btn-pill btn-outline-success" id="agregarcsAdmTraFinDos"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                            <!--
                                    <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcsAdmTraFinDos"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            -->
                                </div>
                            </div>
                            <hr>
                        
                            <div id="nuevoArchivoAdmTraFinDos"></div>
                        </div>
                        <!-- <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <div id="botonescsAdmTraFinDos" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcsAdmTraFinDos"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcsAdmTraFinDos"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div>
                            <hr>
                            <div id="nuevoArchivoAdmTraFinDos"></div>
                        </div> -->

                    </div>
                </from>

                <hr>               
                <div align="center">
                    <label style="font-size: 150%">Notificaciones</label>
                    <table id="notificacionesAdmFin5o6" class="display" width="100%"></table>
                </div>

            </div>
            <div class="modal-footer">
                <div id="EnvNotAdmTraFinDos"></div>
                <button type="button" class="btn btn-primary" id="guardarcsAdmTraFinDos" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcsAdmTraFinDos">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcsAdmTraFinDos" onclick="cerrarVentanacsAdmTraFin();" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcsAdmTraFinDosOculto" data-dismiss="modal" style="visibility:hidden;"></button>
            </div>
        </div>
    </div>
</div>


<!-------------------------------------------------- 
                    Escribanos
--------------------------------------------------->

<!--- Ver usuario escribanos --->
<div class="modal fade" id="verescribano" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ESCRIBANO</h5>
                <!--
                <button type="button" class="close" onclick="cerrarVentanaEscribano();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formularioescribano">
                    <div class="row justify-content-around">
                        <input type="hidden" id="CodEsc">
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="escribanonombre">Apellido y Nombre/s</label>
                                <input name="escribanonombre" id="escribanonombre" placeholder="Apellido y Nombre/s..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="escribanodirpostal">Dirección postal</label>
                                <input name="escribanodirpostal" id="escribanodirpostal" placeholder="Dirección postal..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="escribanocodigopostal">Código postal</label>
                                <input name="escribanocodigopostal" id="escribanocodigopostal" placeholder="Código postal..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="position-relative form-group">
                                <label for="escribanoprovincia">Provincia</label>
                                <select name="escribanoprovincia" id="escribanoprovincia" class="form-control" disabled="disabled">
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
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="escribanomail">Correo electrónico</label>
                                <input name="escribanomail" id="escribanomail" placeholder="Correo electrónico..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-check">                                
                                <input type="checkbox" class="form-check-input" id="escribanoactivo" disabled="disabled">
                                <label class="form-check-label" for="escribanoactivo">Activo</label>
                            </div>
                        </div>
                        <br><br>
                        <div class="col">
                            <label for="" class="form-control-label">Archivo adjunto</label>
                            <hr>
                            <div id="nuevoArchivoEscribano"></div>
                        </div>
                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="escribanoguardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-danger" id="eliminarescribanofn" style='background-color:#eb3f3d'>Eliminar Escribano</button>     
                <button type="button" class="btn btn-success" id="escribanoeditarfn">Editar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanaEscribano();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


<!-------------------------------------------------- 
                Usuarios
--------------------------------------------------->

<!--- Editar usuarios --->
<div class="modal fade" id="usuariover" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">USUARIOS</h5>
                <button type="button" class="close" onclick="cerrarVentanaUsuarios();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id ="formulariousuarios">
                    <div class="row justify-content-around">
                        <input type="hidden" id="CodUsu">
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="usuariosnombre">Apellido y Nombre/s</label>
                                <input name="usuariosnombre" id="usuariosnombre" placeholder="Apellido y Nombre/s..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="usuariosdirpostal">Dirección postal</label>
                                <input name="usuariosdirpostal" id="usuariosdirpostal" placeholder="Dirección postal..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="usuarioscodigopostal">Código postal</label>
                                <input name="usuarioscodigopostal" id="usuarioscodigopostal" placeholder="Código postal..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="position-relative form-group">
                                <label for="usuariosprovincia">Provincia</label>
                                <select name="usuariosprovincia" id="usuariosprovincia" class="form-control" disabled="disabled">
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
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="usuariosmail">Correo electrónico</label>
                                <input name="usuariosmail" id="usuariosmail" placeholder="Correo electrónico..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="usuariosperfil">Perfil</label>
                                <select id="usuariosperfil" class="form-control" disabled="disabled">
                                    <option value="0">Administrador</option>
                                    <option value="2">Abogado</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="position-relative form-group">
                            <label for="usuariosclave" class="">Contraseña</label>
                                <div class="input-group">
                                    <input class="form-control" type="password" placeholder="Contraseña aquÍ..." id="usuariosclave" name="usuariosclave" aria-label="Password" aria-describedby="Password" autocomplete="off" required="" disabled="disabled">
                                    <div class="input-group-append">
                                        <button style="visibility:hidden" class="btn btn-outline-secondary" type="button" id="button-view-claveusuvis"><i id="viewerPassUsu" class="fas fa-eye" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-check">                                
                                <input type="checkbox" class="form-check-input" id="usuariosactivo" disabled="disabled">
                                <label class="form-check-label" for="usuariosactivo">Activo</label>
                            </div>
                        </div>
                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="usuariosguardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="usuarioseditarfn">Editar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanaUsuarios();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!--- Agregar un nuevo usuario --->
<div class="modal fade" id="usuarionuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">USUARIOS</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id ="formularioNueUsuario">
                    <div class="row justify-content-around">
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="NueUsuarionombre">Apellido y Nombre/s</label>
                                <input name="NueUsuarionombre" id="NueUsuarionombre" placeholder="Apellido y Nombre/s..." type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="NueUsuariodirpostal">Dirección postal</label>
                                <input name="NueUsuariodirpostal" id="NueUsuariodirpostal" placeholder="Dirección postal..." type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="NueUsuariocodigopostal">Código postal</label>
                                <input name="NueUsuariocodigopostal" id="NueUsuariocodigopostal" placeholder="Código postal..." type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="position-relative form-group">
                                <label for="NueUsuarioprovincia">Provincia</label>
                                <select name="NueUsuarioprovincia" id="NueUsuarioprovincia" class="form-control">
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
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="NueUsuariomail">Correo electrónico</label>
                                <input name="NueUsuariomail" id="NueUsuariomail" placeholder="Correo electrónico..." type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label for="NueUsuarioperfil" class="">Perfil</label>
                                <select id="NueUsuarioperfil" class="form-control">
                                    <option value="0">Administrador</option>
                                    <option value="2">Abogado</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="position-relative form-group">
                            <label for="NueUsuariosclave" class="">Contraseña</label>
                                <div class="input-group">
                                    <input class="form-control" type="password" placeholder="Contraseña aquÍ..." id="NueUsuariosclave" name="NueUsuariosclave" aria-label="Password" aria-describedby="Password" autocomplete="off" required="">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-view-claveUsu"><i id="viewerPassNueUsu" class="fas fa-eye" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarInsUsuario">Guardar</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


<!-------------------------------------------------- 
                Abogado trámites nuevo
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariosabognuev1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!--<button type="button" class="close" onclick="cerrarVentanafn();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAboTraNue">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAboTraNue" id="nombreSolicitudAboTraNue" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAboTraNue">Nombre escribano</label>
                                <input name="nombreEscribanoAboTraNue" id="nombreEscribanoAboTraNue" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleAboTraNue">Tipo de inmueble</label>
                                <select name="nombreInmuebleAboTraNue" id="nombreInmuebleAboTraNue" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAboTraNue">Fecha</label>
                                <input name="nombreFechaAboTraNue" id="nombreFechaAboTraNue" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionAboTraNue">Tipo de Operación</label>
                                <select name="nombreOperacionAboTraNue" id="nombreOperacionAboTraNue" class="form-control" disabled="disabled"> 
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                    <!-- <input type='text' id="otros" name='3' placeholder="Especificar el tipo de operación..."  value="<?php //echo "";?>" disabled="true" class="form-control" ><br /> -->   
                                </select>
                                <input name="nombreOperacionAboTraNue1" id="nombreOperacionAboTraNue1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAboTraNue">Estado</label>
                                <select name="nombreEstadoAboTraNue" id="nombreEstadoAboTraNue" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAboTraNue">Tipo de trámite</label>
                                <select name="nombreTramiteAboTraNue" id="nombreTramiteAboTraNue" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAboTraNue">Número de expediente</label>
                                <input name="nombreExpedienteAboTraNue" id="nombreExpedienteAboTraNue" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAboTraNue">Abogado</label>                                
                                <input name="nombreAbogadoAboTraNue" id="nombreAbogadoAboTraNue" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAboTraNue">Destino</label>
                                <input name="nombreDestinoAboTraNue" id="nombreDestinoAboTraNue" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAboTraNue">Ubicación</label>
                                <input name="nombreUbicacionAboTraNue" id="nombreUbicacionAboTraNue" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <!-- <div id="botonesfn" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfn"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfn"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div> -->
                            <hr>
                            <div id="nuevoArchivoAbogTraNue"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfn" style="display: none;">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanafn();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariosabognuev2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--<button type="button" class="close" onclick="cerrarVentanacs();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAboTraNueDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAboTraNueDos" id="nombreSolicitudAboTraNueDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAboTraNueDos">Nombre escribano</label>
                                <input name="nombreEscribanoAboTraNueDos" id="nombreEscribanoAboTraNueDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAboTraNueDos">Fecha</label>
                                <input name="nombreFechaAboTraNueDos" id="nombreFechaAboTraNueDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAboTraNueDos">Estado</label>
                                <select name="nombreEstadoAboTraNueDos" id="nombreEstadoAboTraNueDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para Analizar</option>
                                    <option value="4">Falta Documentación</option>
                                    <option value="5">Para Dictaminar</option>
                                    <option value="6">En Jurídicos</option>
                                    <option value="7">En Despacho</option>
                                    <option value="8">Para Corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAboTraNueDos">Tipo de trámite</label>
                                <select name="nombreTramiteAboTraNueDos" id="nombreTramiteAboTraNueDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAboTraNueDos">Número de expediente</label>
                                <input name="nombreExpedienteAboTraNueDos" id="nombreExpedienteAboTraNueDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAboTraNueDos">Abogado</label>
                                <input name="nombreAbogadoAboTraNueDos" id="nombreAbogadoAboTraNueDos" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAboTraNueDos">Destino</label>
                                <input name="nombreDestinoAboTraNueDos" id="nombreDestinoAboTraNueDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAboTraNue">Ubicación</label>
                                <input name="nombreUbicacionAboTraNue" id="nombreUbicacionAboTraNue" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <!-- <div id="botonescs" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcs"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcs"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div> -->
                            <hr>
                            <div id="nuevoArchivoAbogTraNueDos"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarcs" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcs" style="display: none;">Atender Solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcs" onclick="cerrarVentanacs();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!-------------------------------------------------- 
                Abogado trámites en proceso
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariosabogproc1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!--<button type="button" class="close" onclick="cerrarVentanafn();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAboTraProc">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAboTraProc" id="nombreSolicitudAboTraProc" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAboTraProc">Nombre escribano</label>
                                <input name="nombreEscribanoAboTraProc" id="nombreEscribanoAboTraProc" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleAboTraProc">Tipo de inmueble</label>
                                <select name="nombreInmuebleAboTraProc" id="nombreInmuebleAboTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAboTraProc">Fecha</label>
                                <input name="nombreFechaAboTraProc" id="nombreFechaAboTraProc" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionAboTraProc">Tipo de Operación</label>
                                <select name="nombreOperacionAboTraProc" id="nombreOperacionAboTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <input name="nombreOperacionAboTraProc1" id="nombreOperacionAboTraProc1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAboTraProc">Estado</label>
                                <select name="nombreEstadoAboTraProc" id="nombreEstadoAboTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para analizar</option>
                                    <option value="4">Falta documentación</option>
                                    <option value="5">Para dictaminar</option>
                                    <option value="6">En jurídicos</option>
                                    <option value="7">En despacho</option>
                                    <option value="8">Para corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAboTraProc">Tipo de trámite</label>
                                <select name="nombreTramiteAboTraProc" id="nombreTramiteAboTraProc" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAboTraProc">Número de expediente</label>
                                <input name="nombreExpedienteAboTraProc" id="nombreExpedienteAboTraProc" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAboTraProc">Abogado</label>
                                <input name="nombreAbogadoAboTraProc" id="nombreAbogadoAboTraProc" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAboTraProc">Destino</label>
                                <input name="nombreDestinoAboTraProc" id="nombreDestinoAboTraProc" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAboTraProc">Ubicación</label>
                                <input name="nombreUbicacionAboTraProc" id="nombreUbicacionAboTraProc" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <!-- <div id="botonesfn" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfn"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfn"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div> -->
                            <hr>
                            <div id="nuevoArchivoAbogTraProc"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfn" style="display: none;">Atender solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanafn();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariosabogproc2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--
                <button type="button" class="close" onclick="cerrarVentanacs();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAboTraProcDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAboTraProcDos" id="nombreSolicitudAboTraProcDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAboTraProcDos">Nombre escribano</label>
                                <input name="nombreEscribanoAboTraProcDos" id="nombreEscribanoAboTraProcDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAboTraProcDos">Fecha</label>
                                <input name="nombreFechaAboTraProcDos" id="nombreFechaAboTraProcDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAboTraProcDos">Estado</label>
                                <select name="nombreEstadoAboTraProcDos" id="nombreEstadoAboTraProcDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para analizar</option>
                                    <option value="4">Falta documentación</option>
                                    <option value="5">Para dictaminar</option>
                                    <option value="6">En jurídicos</option>
                                    <option value="7">En despacho</option>
                                    <option value="8">Para corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAboTraProcDos">Tipo de trámite</label>
                                <select name="nombreTramiteAboTraProcDos" id="nombreTramiteAboTraProcDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAboTraProcDos">Número de expediente</label>
                                <input name="nombreExpedienteAboTraProcDos" id="nombreExpedienteAboTraProcDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAboTraProcDos">Abogado</label>
                                <input name="nombreAbogadoAboTraProcDos" id="nombreAbogadoAboTraProcDos" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAboTraProcDos">Destino</label>
                                <input name="nombreDestinoAboTraProcDos" id="nombreDestinoAboTraProcDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAboTraProcDos">Ubicación</label>
                                <input name="nombreUbicacionAboTraProcDos" id="nombreUbicacionAboTraProcDos" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <!-- <div id="botonescs" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcs"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcs"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div> -->
                            <hr>
                            <div id="nuevoArchivoAbogTraProcDos"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarcs" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcs" style="display: none;">Atender solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcs" onclick="cerrarVentanacs();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!-------------------------------------------------- 
                Abogado trámites finalizados
--------------------------------------------------->

<!--- Ver formulario Común --->
<div class="modal fade" id="verformulariosabogfina1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Solicitud de Previa Conformidad</h5>
                <!--
                 <button type="button" class="close" onclick="cerrarVentanafn();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

            -->
            </div>
            <div class="modal-body">
                <form id ="formulariofn">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAboTraFin">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAboTraFin" id="nombreSolicitudAboTraFin" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAboTraFin">Nombre escribano</label>
                                <input name="nombreEscribanoAboTraFin" id="nombreEscribanoAboTraFin" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreInmuebleAboTraFin">Tipo de inmueble</label>
                                <select name="nombreInmuebleAboTraFin" id="nombreInmuebleAboTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Rural</option>
                                    <option value="2">Urbano</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAboTraFin">Fecha</label>
                                <input name="nombreFechaAboTraFin" id="nombreFechaAboTraFin" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreOperacionAboTraFin">Tipo de Operación</label>
                                <select name="nombreOperacionAboTraFin" id="nombreOperacionAboTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Transferencia de Inmuebles</option>
                                    <option value="2">Permisos, Concesiones, Licencias</option>
                                    <option value="3">Otros</option>
                                </select>
                                <input name="nombreOperacionAboTraFin1" id="nombreOperacionAboTraFin1" placeholder="Especificar el tipo de operación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAboTraFin">Estado</label>
                                <select name="nombreEstadoAboTraFin" id="nombreEstadoAboTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para analizar</option>
                                    <option value="4">Falta documentación</option>
                                    <option value="5">Para dictaminar</option>
                                    <option value="6">En jurídicos</option>
                                    <option value="7">En despacho</option>
                                    <option value="8">Para corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAboTraFin">Tipo de trámite</label>
                                <select name="nombreTramiteAboTraFin" id="nombreTramiteAboTraFin" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAboTraFin">Número de expediente</label>
                                <input name="nombreExpedienteAboTraFin" id="nombreExpedienteAboTraFin" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAboTraFin">Abogado</label>
                                <input name="nombreAbogadoAboTraFin" id="nombreAbogadoAboTraFin" placeholder="Abogado..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAboTraFin">Destino</label>
                                <input name="nombreDestinoAboTraFin" id="nombreDestinoAboTraFin" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAboTraFin">Ubicación</label>
                                <input name="nombreUbicacionAboTraFin" id="nombreUbicacionAboTraFin" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <!-- <div id="botonesfn" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarfn"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarfn"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div> -->
                            <hr>
                            <div id="nuevoArchivoAbogTraFin"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarfn" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarfn" style="display: none;">Atender solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarfn" onclick="cerrarVentanafn();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

<!--- Ver formularios 5 o 6--->
<div class="modal fade" id="verformulariosabogfina2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">FORMULARIO 5 o 6</h5>
                <!--
                <button type="button" class="close" onclick="cerrarVentanacs();" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            -->
            </div>
            <div class="modal-body">
                <form id ="formulariocs">
                    <div class="row justify-content-around">
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreSolicitudAboTraFinDos">Nombre de Solicitud/Razón social</label>
                                <input name="nombreSolicitudAboTraFinDos" id="nombreSolicitudAboTraFinDos" placeholder="Nombre de Solicitud/Razón social..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEscribanoAboTraFinDos">Nombre escribano</label>
                                <input name="nombreEscribanoAboTraFinDos" id="nombreEscribanoAboTraFinDos" placeholder="Nombre escribano..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreFechaAboTraFinDos">Fecha</label>
                                <input name="nombreFechaAboTraFinDos" id="nombreFechaAboTraFinDos" placeholder="Fecha..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreEstadoAboTraFinDos">Estado</label>
                                <select name="nombreEstadoAboTraFinDos" id="nombreEstadoAboTraFinDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Carátula</option>
                                    <option value="3">Para analizar</option>
                                    <option value="4">Falta documentación</option>
                                    <option value="5">Para dictaminar</option>
                                    <option value="6">En jurídicos</option>
                                    <option value="7">En despacho</option>
                                    <option value="8">Para corrección</option>
                                    <option value="9">Secretario</option>
                                    <option value="10">Archivado</option>
                                    <option value="11">Notificación</option>
                                    <option value="12">Autorización</option>
                                    <option value="13">Exceptuado</option>
                                    <option value="14">Caducado</option>
                                    <option value="15">Paralizado</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreTramiteAboTraFinDos">Tipo de trámite</label>
                                <select name="nombreTramiteAboTraFinDos" id="nombreTramiteAboTraFinDos" class="form-control" disabled="disabled">
                                    <option value="0">Elija una opción</option>
                                    <option value="1">Normal</option>
                                    <option value="2">Trámite Abreviado</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreExpedienteAboTraFinDos">Número de expediente</label>
                                <input name="nombreExpedienteAboTraFinDos" id="nombreExpedienteAboTraFinDos" placeholder="Número de expediente..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreAbogadoAboTraFinDos">Abogado</label>
                                <input name="nombreAbogadoAboTraFinDos" id="nombreAbogadoAboTraFinDos" placeholder="Abogado..." type="text" class="form-control" disabled="disabled"></select>
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreDestinoAboTraFinDos">Destino</label>
                                <input name="nombreDestinoAboTraFinDos" id="nombreDestinoAboTraFinDos" placeholder="Destino..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <div class="form-group">
                                <label for="nombreUbicacionAboTraFinDos">Ubicación</label>
                                <input name="nombreUbicacionAboTraFinDos" id="nombreUbicacionAboTraFinDos" placeholder="Ubicación..." type="text" class="form-control" disabled="disabled">
                            </div>
                        </div>

                        <div class="col">
                            <label for="" class="form-control-label">Archivos adjuntos</label>
                            <!-- <div id="botonescs" role="group" class="mb-12 btn-group-lg btn-group btn-group-toggle col-5" style="visibility: hidden;">
                                <button type="button" class="btn btn-pill btn-outline-success" id="agregarcs"><span class="lnr lnr-plus-circle"></span> Agregar</button>
                                <button type="button" class="btn btn-pill btn-outline-danger" id="quitarcs"><span class="lnr lnr-circle-minus"></span> Quitar</button>
                            </div> -->
                            <hr>
                            <div id="nuevoArchivoAbogTraFinDos"></div>
                        </div>

                    </div>
                </from>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="guardarcs" style="display: none;">Guardar</button>
                <button type="button" class="btn btn-success" id="editarcs" style="display: none;">Atender solicitud</button>
                <button type="button" class="btn btn-secondary" id ="cerrarcs" onclick="cerrarVentanacs();" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>


