
/*************************************
*********IDIOMA DE LAS TABLAS*********
*************************************/
 $("#descripcionn").hide();  

var idioma_espanol = {
    "processing": "Procesando...",
    "lengthMenu": "Mostrar _MENU_ registros",
    "zeroRecords": "No se encontraron resultados",
    "emptyTable": "Ningún dato disponible en esta tabla",
    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "search": "Buscar:",
    "infoThousands": ",",
    "loadingRecords": "Cargando...",
    "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
    },
    "aria": {
        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad",
        "collection": "Colección",
        "colvisRestore": "Restaurar visibilidad",
        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
        "copySuccess": {
            "1": "Copiada 1 fila al portapapeles",
            "_": "Copiadas %d fila al portapapeles"
        },
        "copyTitle": "Copiar al portapapeles",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "-1": "Mostrar todas las filas",
            "1": "Mostrar 1 fila",
            "_": "Mostrar %d filas"
        },
        "pdf": "PDF",
        "print": "Imprimir"
    },
    "autoFill": {
        "cancel": "Cancelar",
        "fill": "Rellene todas las celdas con <i>%d<\/i>",
        "fillHorizontal": "Rellenar celdas horizontalmente",
        "fillVertical": "Rellenar celdas verticalmentemente"
    },
    "decimal": ",",
    "searchBuilder": {
        "add": "Añadir condición",
        "button": {
            "0": "Constructor de búsqueda",
            "_": "Constructor de búsqueda (%d)"
        },
        "clearAll": "Borrar todo",
        "condition": "Condición",
        "conditions": {
            "date": {
                "after": "Despues",
                "before": "Antes",
                "between": "Entre",
                "empty": "Vacío",
                "equals": "Igual a",
                "notBetween": "No entre",
                "notEmpty": "No Vacio",
                "not": "Diferente de"
            },
            "number": {
                "between": "Entre",
                "empty": "Vacio",
                "equals": "Igual a",
                "gt": "Mayor a",
                "gte": "Mayor o igual a",
                "lt": "Menor que",
                "lte": "Menor o igual que",
                "notBetween": "No entre",
                "notEmpty": "No vacío",
                "not": "Diferente de"
            },
            "string": {
                "contains": "Contiene",
                "empty": "Vacío",
                "endsWith": "Termina en",
                "equals": "Igual a",
                "notEmpty": "No Vacio",
                "startsWith": "Empieza con",
                "not": "Diferente de"
            },
            "array": {
                "not": "Diferente de",
                "equals": "Igual",
                "empty": "Vacío",
                "contains": "Contiene",
                "notEmpty": "No Vacío",
                "without": "Sin"
            }
        },
        "data": "Data",
        "deleteTitle": "Eliminar regla de filtrado",
        "leftTitle": "Criterios anulados",
        "logicAnd": "Y",
        "logicOr": "O",
        "rightTitle": "Criterios de sangría",
        "title": {
            "0": "Constructor de búsqueda",
            "_": "Constructor de búsqueda (%d)"
        },
        "value": "Valor"
    },
    "searchPanes": {
        "clearMessage": "Borrar todo",
        "collapse": {
            "0": "Paneles de búsqueda",
            "_": "Paneles de búsqueda (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Sin paneles de búsqueda",
        "loadMessage": "Cargando paneles de búsqueda",
        "title": "Filtros Activos - %d"
    },
    "select": {
        "1": "%d fila seleccionada",
        "_": "%d filas seleccionadas",
        "cells": {
            "1": "1 celda seleccionada",
            "_": "$d celdas seleccionadas"
        },
        "columns": {
            "1": "1 columna seleccionada",
            "_": "%d columnas seleccionadas"
        }
    },
    "thousands": ".",
    "datetime": {
        "previous": "Anterior",
        "next": "Proximo",
        "hours": "Horas",
        "minutes": "Minutos",
        "seconds": "Segundos",
        "unknown": "-",
        "amPm": [
            "am",
            "pm"
        ]
    },
    "editor": {
        "close": "Cerrar",
        "create": {
            "button": "Nuevo",
            "title": "Crear Nuevo Registro",
            "submit": "Crear"
        },
        "edit": {
            "button": "Editar",
            "title": "Editar Registro",
            "submit": "Actualizar"
        },
        "remove": {
            "button": "Eliminar",
            "title": "Eliminar Registro",
            "submit": "Eliminar",
            "confirm": {
                "_": "¿Está seguro que desea eliminar %d filas?",
                "1": "¿Está seguro que desea eliminar 1 fila?"
            }
        },
        "error": {
            "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\/a&gt;).<\/a>"
        },
        "multi": {
            "title": "Múltiples Valores",
            "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
            "restore": "Deshacer Cambios",
            "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
        }
    },
    "info": "Mostrando de _START_ a _END_ de _TOTAL_ registros"
}

function d1(selectTag){
    if(selectTag.value == '3'){
   document.getElementById('descripcionn').disabled = false;
   $("#descripcionn").show();
    }else{
    $("#descripcionn").hide();   
    document.getElementById('descripcionn').disabled = true;
    }
   }

   function d2(selectTag){
    if(selectTag.value == '3'){
   document.getElementById('nombreOperacionAdmTraNue1').disabled = false;
   $("#nombreOperacionAdmTraNue1").show();
    }else{
    $("#nombreOperacionAdmTraNue1").hide();   
    document.getElementById('nombreOperacionAdmTraNue1').disabled = true;
    }
   }

   function d3(selectTag){
    if(selectTag.value == '3'){
   document.getElementById('nombreOperacionAdmTraProc1').disabled = false;
   $("#nombreOperacionAdmTraProc1").show();
    }else{
    $("#nombreOperacionAdmTraProc1").hide();   
    document.getElementById('nombreOperacionAdmTraProc1').disabled = true;
    }
   }

   function d4(selectTag){
    if(selectTag.value == '3'){
   document.getElementById('nombreOperacionAdmTraFin1').disabled = false;
   $("#nombreOperacionAdmTraFin1").show();
    }else{
    $("#nombreOperacionAdmTraFin1").hide();   
    document.getElementById('nombreOperacionAdmTraFin1').disabled = true;
    }
   }
   


/*************************************
*************ESCRIBANO****************
*************************************/

// tabla de adjuntar documentación trámites ya iniciados
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    if (id === "no definido" || url_base === "") {
        return false;
    }

 

    fetch(url_base + 'api/fronteras/solicitud/traer-por-escribano?id=' + id + '&faltaDocumentacion=true', {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#registroformulario').DataTable({
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Nombre", "targets": 0 },
                    { title: "Escribano", "targets": 1 },
                    { title: "Fecha", "targets": 2 },
                    { title: "Tipo", "targets": 3 },
                    { title: "Estado", "targets": 4 },
                    { title: "Tipo de trámite", "targets": 5, searchable: true },
                    { title: "Acciones", "targets": 6, "orderable": false }
                ],
                columns: [
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },
                    { data: "fecha" },
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformularios"+ row.id_tipo_formulario +"' onClick='getFormularioAdjDoc(\"" +
                            row.id_usuario + "\",\"" + row.id_solicitud + "\",\"" + row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" + row.id_tipo_tramite + "\",\"" +
                                row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '').replace(/['"]+/g, '')  + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });
});

function getFormularioAdjDoc(id_usuario,id_solicitud,id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,nombre_abogado,destino,archivos,ubicacion,descripcion) {

    if (id_tipo_formulario == 1) {
        $("#idUsuAdmTraNue").val(id_usuario);
        $("#id_solicitudEscAdjDoc").val(id_solicitud);
        $("#nombreSolicitudEscAdjDoc").val(nombre_solicitud);
        $("#nombreEscribanoEscAdjDoc").val(nombre_escribano);
        $("#nombreInmuebleEscAdjDoc").val(id_tipo_inmueble);
        $("#nombreFechaEscAdjDoc").val(fecha);
        $("#nombreOperacionEscAdjDoc").val(id_tipo_operacion);
        $("#nombreEstadoEscAdjDoc").val(id_estado);
        $("#nombreTramiteEscAdjDoc").val(id_tipo_tramite);
        $("#nombreExpedienteEscAdjDoc").val(nro_expediente);
        // $("#nombreAbogadoEscAdjDoc").val(nombre_abogado);
        $("#nombreDestinoEscAdjDoc").val(destino);
        $("#nombreUbicacionEscAdjDoc").val(ubicacion);
        $("#nombreOperacionEscAdjDoc1").val(descripcion);

        if( $("#nombreOperacionEscAdjDoc").val() == '3'){
      
            $("#nombreOperacionEscAdjDoc1").show();
        }else{
            $("#nombreOperacionEscAdjDoc1").hide();   
        
        }

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivofn").append('<div class="form-group">' +
                                            '<div class="input-group">' +
                                                '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                    '<i class="fas fa-folder-open"></i>' +
                                                    '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                    '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>');
        }
    } else {
        
        $("#idUsuAdmTraNue").val(id_usuario);
        $("#id_solicitudEscAdjDocDos").val(id_solicitud);
        $("#nombreSolicitudEscAdjDocDos").val(nombre_solicitud);
        $("#nombreEscribanoEscAdjDocDos").val(nombre_escribano);
        $("#nombreFechaEscAdjDocDos").val(fecha);
        $("#nombreEstadoEscAdjDocDos").val(id_estado);
        $("#nombreTramiteEscAdjDocDos").val(id_tipo_tramite);
        $("#nombreExpedienteEscAdjDocDos").val(nro_expediente);
        // $("#nombreAbogadoEscAdjDocDos").val(nombre_abogado);
        $("#nombreDestinoEscAdjDocDos").val(destino);
        $("#nombreUbicacionEscAdjDocDos").val(ubicacion);

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivocs").append('<div class="form-group">' +
                                            '<div class="input-group">' +
                                                '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                    '<i class="fas fa-folder-open"></i>' +
                                                    '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                    '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>');
        }
    }
}

// tabla de consulta
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    if (id === "no definido" || url_base === "") {
        return false;
    }

    fetch(url_base + 'api/fronteras/solicitud/traer-por-escribano?id=' + id, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#consulta').DataTable({
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Nombre", "targets": 1 },                    
                    { title: "Tipo", "targets": 2 },
                    { title: "Estado", "targets": 3 },
                    { title: "Tipo de trámite", "targets": 4 , searchable: true },
                    { title: "Acciones", "targets": 5, "orderable": false }
                ],
                columns: [
                    { data: "fecha" },
                    { data: "nombre_solicitud" },
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariosConsulta"+ row.id_tipo_formulario +"' onClick='getFormularioConsulta(\"" +
                                row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.id_tipo_formulario + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.id_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ],
                "order": [[ 0, "desc" ]]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });
});

function getFormularioConsulta(nombre_solicitud,id_tipo_formulario,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,id_abogado,destino,archivos,ubicacion,descripcion) {

    var url_base = $("#url_base").val(); 

    if((id_tipo_tramite == null) || (id_tipo_tramite == "") || (id_tipo_tramite == undefined)){
        id_tipo_tramite = 0;
    }

    if((id_abogado == null) || (id_abogado == "") || (id_abogado == undefined)){
        id_abogado = 0;
    }
    
    if (id_tipo_formulario == 1){
        $("#nombreSolicitudEscConsulta").val(nombre_solicitud);
        $("#nombreEscribanoEscConsulta").val(nombre_escribano);
        $("#nombreInmuebleEscConsulta").val(id_tipo_inmueble);
        $("#nombreFechaEscConsulta").val(fecha);
        $("#nombreOperacionEscConsulta").val(id_tipo_operacion);
        $("#nombreEstadoEscConsulta").val(id_estado);
        $("#nombreTramiteEscConsulta").val(id_tipo_tramite);
        $("#nombreExpedienteEscConsulta").val(nro_expediente);
        // $("#nombreAbogadoEscConsulta").val(id_abogado);
        $("#nombreDestinoEscConsulta").val(destino);
        $("#nombreUbicacionEscConsulta").val(ubicacion);
        $("#nombreOperacionEscConsulta1").val(descripcion);

        if( $("#nombreOperacionEscConsulta").val() == '3'){
      
            $("#nombreOperacionEscConsulta1").show();
        }else{
            $("#nombreOperacionEscConsulta1").hide();   
        
        }
       
        console.log($("#nombreOperacionEscConsulta").val());
        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
        .then(resp => resp.json())
        .then(respObj => {
            if (respObj.status == 0) {
                var NomAbog = respObj.message;
                console.log(NomAbog);
                $("#nombreAbogadoEscConsulta").append('<option value="0">Elija una opción</option>');
                for (var ia = 0; ia < NomAbog.length; ia++) {
                    if (NomAbog[ia]["id"] == id_abogado) {
                        $("#nombreAbogadoEscConsulta").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                    } else {
                        $("#nombreAbogadoEscConsulta").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                    }
                }
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });


        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivofnConsulta").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {
        $("#nombreSolicitudEscConsultaDos").val(nombre_solicitud);
        $("#nombreEscribanoEscConsultaDos").val(nombre_escribano);
        $("#nombreFechaEscConsultaDos").val(fecha);
        $("#nombreEstadoEscConsultaDos").val(id_estado);
        $("#nombreTramiteEscConsultaDos").val(id_tipo_tramite);
        $("#nombreExpedienteEscConsultaDos").val(nro_expediente);
        // $("#nombreAbogadoEscConsultaDos").val(id_abogado);
        $("#nombreDestinoEscConsultaDos").val(destino);
        $("#nombreUbicacionEscConsultaDos").val(ubicacion);

        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
            method: "GET",
            })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;
    
                    $("#nombreAbogadoEscConsultaDos").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoEscConsultaDos").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoEscConsultaDos").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });



        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivocsConsultaDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}

// tabla de notificación
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();
    var id_perfil = $("#id_perfil_usuario").val();

   
    if (id === "no definido" || url_base === "") {
        return false;
    }

    fetch(url_base + 'api/fronteras/notificacion/traer-por-usuario?idUsuario=' + id, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            if(id_perfil == 2){

                $('#notificaciones').DataTable({
                "language": idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Nombre", "targets": 1 },                    
                    { title: "Descripción", "targets": 2 },
                    { title: "Solicitante", "targets": 3 },
                ],
                columns: [
                    { data: "fecha" },
                    { data: "nombre" },                    
                    { data: "descripcion" },
                    { data: "solicitante" },
                    
                ],
                "order": [[ 0, "desc" ]]
            });

            }
            else{
                $('#notificaciones').DataTable({
                "language": idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Nombre", "targets": 1 },                   
                    { title: "Descripción", "targets": 2 },
                    { title: "Solicitante", "targets": 3 },     
                    { title: "¿Leido?", "targets": 4 , "orderable": false}
                ],
                columns: [
                    { data: "fecha" },
                    { data: "nombre" },
                    { data: "descripcion" },
                    { data: "solicitante" },                    
                    
                    {
                        render: function (data, type, row) {
                            if (row.leido == 1) {
                                return "<input type='checkbox' onchange = 'cambioEscLeido(\"" + row.id_notificacion + "\");' data-toggle='toggle' data-size='mini' style='width: 52px;' checked>";
                            } else {
                                return "<input type='checkbox' onchange = 'cambioEscLeido(\"" + row.id_notificacion + "\");' data-toggle='toggle' data-size='mini' style='width: 52px;'>";
                            }
                        }
                    }
                ],
                "order": [[ 0, "desc" ]]
            });

            }
            

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });    
});

function cambioEscLeido(id_notificacion) {
    var url_base = $("#url_base").val();
    // console.log($("#idleido").val());
    // if ($("#idleido").prop("checked") == true) {
    //     var valorcke = 1;
    // } else {
    //     var valorcke = 0;
    // }

    // console.log(valorcke);

    var fdnot = new FormData();
    fdnot.append('idNotificacion', id_notificacion);
    // fdnot.append('leido', valorcke);

    fetch(url_base + 'api/fronteras/notificacion/marcar-leida', {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: fdnot
        // body: JSON.stringify({ idNotificacion: id_notificacion })
    })
        .then(resp => resp.json())
        .then(respObj => {
            console.log(respObj.status);
            if (respObj.status == 0) {
                swal({title: "¡Excelente!", text: respObj.message, icon: "success", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });
}


/*************************************
*************ADMINISTRADOR************
*************************************/

// tabla de trámite nuevo
$(document).ready(function () { 

var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    fetch(url_base + 'api/fronteras/solicitud/traer-nuevas', {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#tramitenuevo').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'pdfHtml5'
                ],
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Nombre", "targets": 1 },
                    { title: "Escribano", "targets": 2 },                   
                    { title: "Tipo", "targets": 3 },
                    { title: "Tipo de trámite", "targets": 4 , searchable: true },
                    { title: "Acciones", "targets": 5, "orderable": false }
                ],
                columns: [
                    { data: "fecha" },
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },                    
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {


                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariostranuev" + row.id_tipo_formulario + "' onClick='getAdmiFormNuevo(\"" +
                                row.id_usuario + "\",\"" + row.id_solicitud + "\",\"" + row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.id_abogado + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ],
                "order": [[ 0, "desc" ]]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });





});


function descargarArchivos(){



         
         var id_solicitud = $("#idSolicitudAdmTraProc").val();
         if(id_solicitud == ""){
            id_solicitud = $("#idSolicitudAdmTraNueDos").val();   
         }
         if(id_solicitud == ""){
            id_solicitud = $("#idSolicitudAdmTraNue").val();   
         }
         if(id_solicitud == ""){
            id_solicitud = $("#idSolicitudAdmTraFin").val();   
         }
         
         var nombreExpedienteAdmTraProc = $("#nombreExpedienteAdmTraProc").val();
         
         let xhr = new XMLHttpRequest(),  self = this;
         window.location = 'api/fronteras/src/Utils/DescargaController.php?id_solicitud='+id_solicitud+'&nombreExpedienteAdmTraProc='+nombreExpedienteAdmTraProc;
           
            

}



function getAdmiFormNuevo(id_usuario,id_solicitud,id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,id_abogado,nombre_abogado,destino,archivos,ubicacion,descripcion) {
    
    var url_base = $("#url_base").val();    

    // tabla de notificaciones dentro de formularios
    //var id_solicitud = 16;
    
    /*fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
    //fetch('http://localhost/fronteras/api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })    
    .then( resp => resp.json() )
    .then(respObj => {
        if (respObj.status == 0) {            
            $('#notificacionesAdm').DataTable({
                "language": idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 1 },
                    { title: "Descripcion", "targets": 2 },
                    { title: "Leido?", "targets": 3 , "orderable": false}
                ],
                columns: [
                    { data: "fecha" },
                    { data: "descripcion" },
                    { data: "leido" }
                ]
            });
        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });*/

    if (id_tipo_formulario == 1) {

        // tabla de notificaciones dentro de formularios   
        fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })    
        .then( resp => resp.json() )
        .then(respObj => {
            if (respObj.status == 0) {            
                $('#notificacionesAdmPenComun').DataTable({
                    destroy: true,
                    "language": idioma_espanol,
                    data: respObj.message,
                    columnDefs: [
                        { title: "Fecha", "targets": 0 },
                        { title: "Descripción", "targets": 1 },
                        { title: "¿Leido?", "targets": 2 , "orderable": false}
                    ],
                    columns: [
                        { data: "fecha" },
                        { data: "descripcion" },
                        // { data: "leido" }                        
                        {
                            render: function (data, type, row) {
                                if (row.leido == 1) {
                                    return "Si";
                                } else {
                                    return "No";
                                }
                            }
                        }
                    ]
                    ,
                    "order": [[ 0, "desc" ]]
                });
            } else {
                
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
            .catch(error => {
            swal({title: "¡Error!", text: error, icon: "error"})
        });

        $("#idUsuAdmTraNue").val(id_usuario);
        $("#idSolicitudAdmTraNue").val(id_solicitud);
        $("#nombreSolicitudAdmTraNue").val(nombre_solicitud);
        $("#nombreEscribanoAdmTraNue").val(nombre_escribano);
        $("#nombreInmuebleAdmTraNue").val(id_tipo_inmueble);
        $("#nombreFechaAdmTraNue").val(fecha);
        $("#nombreOperacionAdmTraNue").val(id_tipo_operacion);
        $("#nombreEstadoAdmTraNue").val(id_estado);
        $("#nombreTramiteAdmTraNue").val(id_tipo_tramite);
        $("#nombreExpedienteAdmTraNue").val(nro_expediente); 
        $("#nombreUbicacionAdmTraNue").val(ubicacion);   
        $("#nombreOperacionAdmTraNue1").val(descripcion);   

        if( $("#nombreOperacionAdmTraNue").val() == '3'){
      
            $("#nombreOperacionAdmTraNue1").show();
        }else{
            $("#nombreOperacionAdmTraNue1").hide();   
        
        }

        if (destino === "null") {
            $("#nombreDestinoAdmTraNue").val("");
        } else {
            $("#nombreDestinoAdmTraNue").val(destino);
        }
      
        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;

                    $("#nombreAbogadoAdmTraNue").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoAdmTraNue").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoAdmTraNue").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });

        // muestro todo los archivos.
        var datos = archivos.split(',');
        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAdmTraNue").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {

        // tabla de notificaciones dentro de formularios   
        fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })    
        .then( resp => resp.json() )
        .then(respObj => {
            if (respObj.status == 0) {            
                $('#notificacionesAdmPen5o6').DataTable({
                    destroy: true,
                    "language": idioma_espanol,
                    data: respObj.message,
                    columnDefs: [
                        { title: "Fecha", "targets": 0 },
                        { title: "Descripción", "targets": 1 },
                        { title: "¿Leido?", "targets": 2 , "orderable": false}
                    ],
                    columns: [
                        { data: "fecha" },
                        { data: "descripcion" },
                        // { data: "leido" }
                        {
                            render: function (data, type, row) {
                                if (row.leido == 1) {
                                    return "Si";
                                } else {
                                    return "No";
                                }
                            }
                        }
                    ],
                    "order": [[ 0, "desc" ]]
                });
            } else {
                
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
            .catch(error => {
            swal({title: "¡Error!", text: error, icon: "error"})
        });

        $("#idUsuAdmTraNueDos").val(id_usuario);
        $("#idSolicitudAdmTraNueDos").val(id_solicitud);
        $("#nombreSolicitudAdmTraNueDos").val(nombre_solicitud);
        $("#nombreEscribanoAdmTraNueDos").val(nombre_escribano);
        $("#nombreFechaAdmTraNueDos").val(fecha);
        $("#nombreEstadoAdmTraNueDos").val(id_estado);
        $("#nombreTramiteAdmTraNueDos").val(id_tipo_tramite);
        $("#nombreExpedienteAdmTraNueDos").val(nro_expediente);
        $("#nombreUbicacionAdmTraNueDos").val(ubicacion);
        if (destino === "null") {
            $("#nombreDestinoAdmTraNueDos").val("");    
        } else {
            $("#nombreDestinoAdmTraNueDos").val(destino);
        }

        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;

                    $("#nombreAbogadoAdmTraNueDos").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoAdmTraNueDos").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoAdmTraNueDos").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });

        // muestro todo los archivos.
        var datos = archivos.split(',');
        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAdmTraNueDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}

// tabla de trámite de proceso
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    fetch(url_base + 'api/fronteras/solicitud/traer-en-proceso', {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#tramitesproceso').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'pdfHtml5'
                ],
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Nombre", "targets": 1 },
                    { title: "Escribano", "targets": 2 },                    
                    { title: "Tipo", "targets": 3 },
                    { title: "Estado", "targets": 4 },
                    { title: "Tipo de trámite", "targets": 5 , searchable: true },
                    { title: "Acciones", "targets": 6, "orderable": false }
                ],
                columns: [
                    { data: "fecha" },
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },                    
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariostraproc" + row.id_tipo_formulario + "' onClick='getAdmiFormProceso(\"" +
                                row.id_usuario + "\",\"" + row.id_solicitud + "\",\"" + row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.id_abogado + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ],
                "order": [[ 0, "desc" ]]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });
});

function getAdmiFormProceso(id_usuario,id_solicitud,id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,id_abogado,nombre_abogado,destino,archivos,ubicacion,descripcion) {
    
    var url_base = $("#url_base").val();    
    
    // tabla de notificaciones dentro de formularios
   
    fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })    
    .then( resp => resp.json() )
    .then(respObj => {
        if (respObj.status == 0) {            
            $('#notificacionesAdmPen5o6').DataTable({
                "language": idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Descripción", "targets": 1 },
                    { title: "¿Leido?", "targets": 2 , "orderable": false}
                ],
                columns: [
                    { data: "fecha" },
                    { data: "descripcion" },
                    // { data: "leido" }
                    {
                        render: function (data, type, row) {
                            if (row.leido == 1) {
                                return "Si";
                            } else {
                                return "No";
                            }
                        }
                    }
                ],
                "order": [[ 0, "desc" ]]
            });
        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });


    if (id_tipo_formulario == 1) {

        // tabla de notificaciones dentro de formularios   
        fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })    
        .then( resp => resp.json() )
        .then(respObj => {
            if (respObj.status == 0) {            
                $('#notificacionesAdmProComun').DataTable({
                    "language": idioma_espanol,
                    data: respObj.message,
                    columnDefs: [
                        { title: "Fecha", "targets": 0 },
                        { title: "Descripción", "targets": 1 },
                        { title: "¿Leido?", "targets": 2 , "orderable": false}
                    ],
                    columns: [
                        { data: "fecha" },
                        { data: "descripcion" },
                        // { data: "leido" }
                        {
                            render: function (data, type, row) {
                                if (row.leido == 1) {
                                    return "Si";
                                } else {
                                    return "No";
                                }
                            }
                        }
                    ],
                    "order": [[ 0, "desc" ]]
                });
            } else {
                
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
            .catch(error => {
            swal({title: "¡Error!", text: error, icon: "error"})
        });


        $("#idUsuAdmTraProc").val(id_usuario);
        $("#idSolicitudAdmTraProc").val(id_solicitud);
        $("#nombreSolicitudAdmTraProc").val(nombre_solicitud);
        $("#nombreEscribanoAdmTraProc").val(nombre_escribano);
        $("#nombreInmuebleAdmTraProc").val(id_tipo_inmueble);
        $("#nombreFechaAdmTraProc").val(fecha);
        $("#nombreOperacionAdmTraProc").val(id_tipo_operacion);
        $("#nombreEstadoAdmTraProc").val(id_estado);
        $("#nombreTramiteAdmTraProc").val(id_tipo_tramite);
        $("#nombreExpedienteAdmTraProc").val(nro_expediente);
        $("#nombreUbicacionAdmTraProc").val(ubicacion);
        $("#nombreOperacionAdmTraProc1").val(descripcion);
        if (destino === "null") {
            $("#nombreDestinoAdmTraProc").val("");
        } else {
            $("#nombreDestinoAdmTraProc").val(destino);
        }



        if( $("#nombreOperacionAdmTraProc").val() == '3'){
      
                $("#nombreOperacionAdmTraProc1").show();
            }else{
                $("#nombreOperacionAdmTraProc1").hide();   
            
            }
    
        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;

                    $("#nombreAbogadoAdmTraProc").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoAdmTraProc").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoAdmTraProc").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });
        
        // muestro todo los archivos.
        var datos = archivos.split(',');
        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAdmTraProc").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {

        // tabla de notificaciones dentro de formularios   
        fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })    
        .then( resp => resp.json() )
        .then(respObj => {
            if (respObj.status == 0) {            
                $('#notificacionesAdmPro5o6').DataTable({
                    "language": idioma_espanol,
                    data: respObj.message,
                    columnDefs: [
                        { title: "Fecha", "targets": 0 },
                        { title: "Descripción", "targets": 1 },
                        { title: "¿Leido?", "targets": 2 , "orderable": false}
                    ],
                    columns: [
                        { data: "fecha" },
                        { data: "descripcion" },
                        // { data: "leido" }
                        {
                            render: function (data, type, row) {
                                if (row.leido == 1) {
                                    return "Si";
                                } else {
                                    return "No";
                                }
                            }
                        }
                    ],
                    "order": [[ 0, "desc" ]]
                });
            } else {
                
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
            .catch(error => {
            swal({title: "¡Error!", text: error, icon: "error"})
        });

        $("#idUsuAdmTraProcDos").val(id_usuario);
        $("#idSolicitudAdmTraProcDos").val(id_solicitud);
        $("#nombreSolicitudAdmTraProcDos").val(nombre_solicitud);
        $("#nombreEscribanoAdmTraProcDos").val(nombre_escribano);
        $("#nombreFechaAdmTraProcDos").val(fecha);
        $("#nombreEstadoAdmTraProcDos").val(id_estado);
        $("#nombreTramiteAdmTraProcDos").val(id_tipo_tramite);
        $("#nombreExpedienteAdmTraProcDos").val(nro_expediente);
        $("#nombreUbicacionAdmTraProcDos").val(ubicacion);
        if (destino === "null") {
            $("#nombreDestinoAdmTraProcDos").val("");
        } else {
            $("#nombreDestinoAdmTraProcDos").val(destino);
        }

        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;

                    $("#nombreAbogadoAdmTraProcDos").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoAdmTraProcDos").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoAdmTraProcDos").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });

        // muestro todo los archivos.
        var datos = archivos.split(',');
        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAdmTraProcDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}




// tabla de trámite finalizados
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    fetch(url_base + 'api/fronteras/solicitud/traer-finalizadas', {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
             $('#tramitesfinalizados').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'pdfHtml5'
                ],
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Fecha", "targets": 0 },
                    { title: "Nombre", "targets": 1 },
                    { title: "Escribano", "targets": 2 },                    
                    { title: "Tipo", "targets": 3 },
                    { title: "Estado", "targets": 4 },
                    { title: "Tipo de trámite", "targets": 5 , searchable: true },
                    { title: "Acciones", "targets": 6, "orderable": false }
                ],
                columns: [
                    { data: "fecha" },
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },                    
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariostrafina" + row.id_tipo_formulario + "' onClick='getAdmiFormFinalizado(\"" +
                                row.id_usuario + "\",\"" + row.id_solicitud + "\",\"" + row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.id_abogado + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ],
                "order": [[ 0, "desc" ]]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });






});








function getAdmiFormFinalizado(id_usuario,id_solicitud,id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,id_abogado,nombre_abogado,destino,archivos,ubicacion,descripcion) {
    var url_base = $("#url_base").val();    

    if (id_tipo_formulario == 1) {

        // tabla de notificaciones dentro de formularios   
        fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })    
        .then( resp => resp.json() )
        .then(respObj => {
            if (respObj.status == 0) {            
                $('#notificacionesAdmFinComun').DataTable({
                    "language": idioma_espanol,
                    data: respObj.message,
                    columnDefs: [
                        { title: "Fecha", "targets": 0 },
                        { title: "Descripción", "targets": 1 },
                        { title: "¿Leido?", "targets": 2 , "orderable": false}
                    ],
                    columns: [
                        { data: "fecha" },
                        { data: "descripcion" },
                        // { data: "leido" }
                        {
                            render: function (data, type, row) {
                                if (row.leido == 1) {
                                    return "Si";
                                } else {
                                    return "No";
                                }
                            }
                        }
                        
                    ],
                    "order": [[ 0, "desc" ]]
                });
            } else {
                
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
            .catch(error => {
            swal({title: "¡Error!", text: error, icon: "error"})
        });


        $("#idUsuAdmTraFin").val(id_usuario);
        $("#idSolicitudAdmTraFin").val(id_solicitud);
        $("#nombreSolicitudAdmTraFin").val(nombre_solicitud);
        $("#nombreEscribanoAdmTraFin").val(nombre_escribano);
        $("#nombreInmuebleAdmTraFin").val(id_tipo_inmueble);
        $("#nombreFechaAdmTraFin").val(fecha);
        $("#nombreOperacionAdmTraFin").val(id_tipo_operacion);
        $("#nombreEstadoAdmTraFin").val(id_estado);
        $("#nombreTramiteAdmTraFin").val(id_tipo_tramite);
        $("#nombreExpedienteAdmTraFin").val(nro_expediente);
        $("#nombreUbicacionAdmTraFin").val(ubicacion);
        $("#nombreOperacionAdmTraFin1").val(descripcion);
        if (destino === "null") {
            $("#nombreDestinoAdmTraFin").val("");
        } else {
            $("#nombreDestinoAdmTraFin").val(destino);
        }

        if( $("#nombreOperacionAdmTraFin").val() == '3'){
      
            $("#nombreOperacionAdmTraFin1").show();
        }else{
            $("#nombreOperacionAdmTraFin1").hide();   
        
        }


        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;

                    $("#nombreAbogadoAdmTraFin").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoAdmTraFin").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoAdmTraFin").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });

        // muestro todo los archivos.
        var datos = archivos.split(',');
        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAdmTraFin").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {

        // tabla de notificaciones dentro de formularios   
        fetch(url_base + 'api/fronteras/notificacion/traer-por-solicitud?idSolicitud=' + id_solicitud, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        })    
        .then( resp => resp.json() )
        .then(respObj => {
            if (respObj.status == 0) {            
                $('#notificacionesAdmFin5o6').DataTable({
                    "language": idioma_espanol,
                    data: respObj.message,
                    columnDefs: [
                        { title: "Fecha", "targets": 0 },
                        { title: "Descripción", "targets": 1 },
                        { title: "¿Leido?", "targets": 2 , "orderable": false}
                    ],
                    columns: [
                        { data: "fecha" },
                        { data: "descripcion" },
                        // { data: "leido" }
                        {
                            render: function (data, type, row) {
                                if (row.leido == 1) {
                                    return "Si";
                                } else {
                                    return "No";
                                }
                            }
                        }
                    ],
                    "order": [[ 0, "desc" ]]
                });
            } else {
                
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
            .catch(error => {
            swal({title: "¡Error!", text: error, icon: "error"})
        });



        $("#idUsuAdmTraFinDos").val(id_usuario);
        $("#idSolicitudAdmTraFinDos").val(id_solicitud);
        $("#nombreSolicitudAdmTraFinDos").val(nombre_solicitud);
        $("#nombreEscribanoAdmTraFinDos").val(nombre_escribano);
        $("#nombreFechaAdmTraFinDos").val(fecha);
        $("#nombreEstadoAdmTraFinDos").val(id_estado);
        $("#nombreTramiteAdmTraFinDos").val(id_tipo_tramite);
        $("#nombreExpedienteAdmTraFinDos").val(nro_expediente);
        $("#nombreUbicacionAdmTraFinDos").val(ubicacion);
        if (destino === "null") {
            $("#nombreDestinoAdmTraFinDos").val("");
        } else {
            $("#nombreDestinoAdmTraFinDos").val(destino);
        }

        // Traigo todo los abogados
        fetch(url_base + 'api/fronteras/usuario/traer-abogados-activos', {
        method: "GET",
        })
            .then(resp => resp.json())
            .then(respObj => {
                if (respObj.status == 0) {
                    var NomAbog = respObj.message;

                    $("#nombreAbogadoAdmTraFinDos").append('<option value="0">Elija una opción</option>');
                    for (var ia = 0; ia < NomAbog.length; ia++) {
                        if (NomAbog[ia]["id"] == id_abogado) {
                            $("#nombreAbogadoAdmTraFinDos").append('<option value="' + NomAbog[ia]["id"] + '" selected>' + NomAbog[ia]["nombre"] + '</option>');
                        } else {
                            $("#nombreAbogadoAdmTraFinDos").append('<option value="' + NomAbog[ia]["id"] + '">' + NomAbog[ia]["nombre"] + '</option>');
                        }
                    }
                } else {
                    swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                        location.reload();
                    });
                }
            })
            .catch(error => {
                swal("Algo salió mal!", error, "error");
            });

        // muestro todo los archivos.
        var datos = archivos.split(',');
        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAdmTraFinDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}

// tabla escribano
$(document).ready(function () {
    var url_base = $("#url_base").val();

    fetch(url_base + 'api/fronteras/usuario/traer-escribanos?perfiles=1', {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#escribano').DataTable({
                aaSorting: [],
                dom: 'Bfrtip',
                buttons: [
                    'pdfHtml5'
                ],
                language: idioma_espanol,
                data: respObj.message,
                                columnDefs: [
                    { title: "Escribano", "targets": 0 },
                    { title: "Correo electrónico", "targets": 1 },
                    { title: "¿Activo?", "targets": 2 },
                    { title: "Acciones", "targets": 3, "orderable": false }
                ],
                columns: [
                    { data: "nombre" },
                    { data: "email" },
                    {                
                        render: function (data, type, row) {
                            if (row.activo == 1) {
                                return "Si"
                            } else {
                                return "No"
                            };
                        }
                    },
                    {                
                        render: function (data, type, row) {
                            return "<button id='' class='btn btn-primary' data-toggle='modal' data-target='#verescribano' onClick='getVisiualizarEscribano(\"" +
                                row.id + "\",\"" + row.nombre + "\",\"" + row.email + "\",\"" +
                                row.direccion + "\",\"" + row.cp + "\",\"" + row.id_provincia + "\",\"" +
                                row.activo + "\",\"" + row.archivos + "\");'>Visualizar</button>";
                        }
                    }
                ]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });    
});

function getVisiualizarEscribano(id, nombre, email, direccion, cp, id_provincia, activo, archivos) {
    
    $("#CodEsc").val(id);
    $("#escribanonombre").val(nombre);
    $("#escribanodirpostal").val(direccion);
    $("#escribanocodigopostal").val(cp);
    $("#escribanoprovincia").val(id_provincia);
    $("#escribanomail").val(email);
    if (activo == 1) {
        $("#escribanoactivo").prop("checked", true);
    } else {
        $("#escribanoactivo").prop("checked", false);
    }

    // muestro todo los archivos.
    var datos = archivos.split(',');
    for (var i = 0; i < datos.length; i++) {
        $("#nuevoArchivoEscribano").append('<div class="form-group">' +
                                                '<div class="input-group">' +
                                                    '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                    '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                    '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                        '<i class="fas fa-folder-open"></i>' +
                                                        '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                        '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>');
    }
}

// tabla usuarios
$(document).ready(function () {

    var url_base = $("#url_base").val();

    fetch(url_base + 'api/fronteras/usuario/traer-por-tipo?perfiles=0,2', {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#usuariosadmin').DataTable({
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Escribano", "targets": 0 },
                    { title: "Correo electrónico", "targets": 1 },
                    { title: "Perfil", "targets": 2 },
                    { title: "¿Activo?", "targets": 3 },
                    { title: "Acciones", "targets": 4, "orderable": false }
                ],
                columns: [
                    { data: "nombre" },
                    { data: "email" },
                    {                
                        render: function (data, type, row) {
                            if (row.profile == 0) {
                                return "Administrador"
                            } else {
                                return "Abogado"
                            };
                        }
                    },
                    {                
                        render: function (data, type, row) {
                            if (row.activo == 1) {
                                return "Si"
                            } else {
                                return "No"
                            };
                        }
                    },
                    {                
                        render: function (data, type, row) {
                            return "<button id='' class='btn btn-primary' data-toggle='modal' data-target='#usuariover' onClick='getVisiualizarUsuarios(\"" +
                                row.id + "\",\"" + row.nombre + "\",\"" + row.email + "\",\"" +
                                row.direccion + "\",\"" + row.cp + "\",\"" + row.id_provincia + "\",\"" +
                                row.activo + "\",\"" + row.clave + "\",\"" + row.profile + "\");'>Visualizar</button>";
                        }
                    }
                ]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });    
});




function getVisiualizarUsuarios(id, nombre, email, direccion, cp, id_provincia, activo, clave, profile) {
    
    $("#CodUsu").val(id);
    $("#usuariosnombre").val(nombre);
    $("#usuariosdirpostal").val(direccion);
    $("#usuarioscodigopostal").val(cp);
    $("#usuariosprovincia").val(id_provincia);
    $("#usuariosmail").val(email);
    $("#usuariosperfil").val(profile);
    $("#usuariosclave").val(clave);
    if (activo == 1) {
        $("#usuariosactivo").prop("checked", true);
    } else {
        $("#usuariosactivo").prop("checked", false);
    }
    // if (activo == 1) {
    //     $("#escribanoactivo").prop("checked", true);
    // } else {
    //     $("#escribanoactivo").prop("checked", false);
    // }

    // muestro todo los archivos.
    // var datos = archivos.split(',');
    // for (var i = 0; i < datos.length; i++) {
    //     $("#nuevoArchivoEscribano").append('<div class="form-group">' +
    //                                             '<div class="input-group">' +
    //                                                 '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
    //                                                 '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
    //                                                 '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
    //                                                     '<i class="fas fa-folder-open"></i>' +
    //                                                     '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
    //                                                     '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
    //                                                 '</div>' +
    //                                             '</div>' +
    //                                         '</div>');
    // }
}


/*************************************
**************ABOGADO*****************
*************************************/

// tabla abogado tramite nuevo
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    if (id === "no definido" || url_base === "") {
        // swal({ title: "¡Error!", text: "Los datos no fueron cargados, porque no esta definida la ruta.", icon: "error" })
        return false;
    }

    fetch(url_base + 'api/fronteras/solicitud/traer-nuevas?idAbogado=' + id, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
            $('#abogtramitenuevo').DataTable({
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Nombre", "targets": 0 },
                    { title: "Escribano", "targets": 1 },
                    { title: "Fecha", "targets": 2 },
                    { title: "Tipo", "targets": 3 },
                    { title: "Estado", "targets": 4 },
                    { title: "Tipo de trámite", "targets": 5 , searchable: true },
                    { title: "Acciones", "targets": 6, "orderable": false }
                ],
                columns: [
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },
                    { data: "fecha" },
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariosabognuev" + row.id_tipo_formulario + "' onClick='getAbogFormNuevo(\"" +
                                row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });
});

function getAbogFormNuevo(id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,nombre_abogado,destino,archivos,ubicacion,descripcion) {
    
    if (id_tipo_formulario == 1) {
        $("#nombreSolicitudAboTraNue").val(nombre_solicitud);
        $("#nombreEscribanoAboTraNue").val(nombre_escribano);
        $("#nombreInmuebleAboTraNue").val(id_tipo_inmueble);
        $("#nombreFechaAboTraNue").val(fecha);
        $("#nombreOperacionAboTraNue").val(id_tipo_operacion);
        $("#nombreEstadoAboTraNue").val(id_estado);
        $("#nombreTramiteAboTraNue").val(id_tipo_tramite);
        $("#nombreExpedienteAboTraNue").val(nro_expediente);
        $("#nombreAbogadoAboTraNue").val(nombre_abogado);
        $("#nombreDestinoAboTraNue").val(destino);
        $("#nombreUbicacionAboTraNue").val(ubicacion);
        $("#nombreOperacionAboTraNue1").val(descripcion);

        if( $("#nombreOperacionAboTraNue").val() == '3'){
      
            $("#nombreOperacionAboTraNue1").show();
        }else{
            $("#nombreOperacionAboTraNue1").hide();   
        
        }

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAbogTraNue").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {
        $("#nombreSolicitudAboTraNueDos").val(nombre_solicitud);
        $("#nombreEscribanoAboTraNueDos").val(nombre_escribano);
        $("#nombreFechaAboTraNueDos").val(fecha);
        $("#nombreOperacionAboTraNueDos").val(id_tipo_operacion);
        $("#nombreEstadoAboTraNueDos").val(id_estado);
        $("#nombreTramiteAboTraNueDos").val(id_tipo_tramite);
        $("#nombreExpedienteAboTraNueDos").val(nro_expediente);
        $("#nombreAbogadoAboTraNueDos").val(nombre_abogado);
        $("#nombreDestinoAboTraNueDos").val(destino);
        $("#nombreUbicacionAboTraNueDos").val(ubicacion);

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAbogTraNueDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}

// tabla abogado tramite en proceso
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    if (id === "no definido" || url_base === "") {
        // swal({ title: "¡Error!", text: "Los datos no fueron cargados, porque no esta definida la ruta.", icon: "error" })
        return false;
    }

    fetch(url_base + 'api/fronteras/solicitud/traer-en-proceso?idAbogado=' + id, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
             $('#abogtramitesproceso').DataTable({
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Nombre", "targets": 0 },
                    { title: "Escribano", "targets": 1 },
                    { title: "Fecha", "targets": 2 },
                    { title: "Tipo", "targets": 3 },
                    { title: "Estado", "targets": 4 },
                    { title: "Tipo de trámite", "targets": 5 , searchable: true },
                    { title: "Acciones", "targets": 6, "orderable": false }
                ],
                columns: [
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },
                    { data: "fecha" },
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariosabogproc" + row.id_tipo_formulario + "' onClick='getAbogFormProceso(\"" +
                                row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });
});

function getAbogFormProceso(id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,nombre_abogado,destino,archivos,ubicacion,descripcion) {
    
    if (id_tipo_formulario == 1) {
        $("#nombreSolicitudAboTraProc").val(nombre_solicitud);
        $("#nombreEscribanoAboTraProc").val(nombre_escribano);
        $("#nombreInmuebleAboTraProc").val(id_tipo_inmueble);
        $("#nombreFechaAboTraProc").val(fecha);
        $("#nombreOperacionAboTraProc").val(id_tipo_operacion);
        $("#nombreEstadoAboTraProc").val(id_estado);
        $("#nombreTramiteAboTraProc").val(id_tipo_tramite);
        $("#nombreExpedienteAboTraProc").val(nro_expediente);
        $("#nombreAbogadoAboTraProc").val(nombre_abogado);
        $("#nombreDestinoAboTraProc").val(destino);
        $("#nombreUbicacionAboTraProc").val(ubicacion);
        $("#nombreOperacionAboTraProc1").val(descripcion);

        if( $("#nombreOperacionAboTraProc").val() == '3'){
      
            $("#nombreOperacionAboTraProc1").show();
        }else{
            $("#nombreOperacionAboTraProc1").hide();   
        
        }

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAbogTraProc").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {
        $("#nombreSolicitudAboTraProcDos").val(nombre_solicitud);
        $("#nombreEscribanoAboTraProcDos").val(nombre_escribano);
        $("#nombreFechaAboTraProcDos").val(fecha);
        $("#nombreEstadoAboTraProcDos").val(id_estado);
        $("#nombreTramiteAboTraProcDos").val(id_tipo_tramite);
        $("#nombreExpedienteAboTraProcDos").val(nro_expediente);
        $("#nombreAbogadoAboTraProcDos").val(nombre_abogado);
        $("#nombreDestinoAboTraProcDos").val(destino);
        $("#nombreUbicacionAboTraProcDos").val(ubicacion);

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAbogTraProcDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}

// tabla abogado tramite finalizado
$(document).ready(function () {

    var url_base = $("#url_base").val();
    var id = $("#idUsuario").val();

    if (id === "no definido" || url_base === "") {
        // swal({ title: "¡Error!", text: "Los datos no fueron cargados, porque no esta definida la ruta.", icon: "error" })
        return false;
    }

    fetch(url_base + 'api/fronteras/solicitud/traer-finalizadas?idAbogado=' + id, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    })
    
    .then( resp => resp.json() )
    .then(respObj => {

        if (respObj.status == 0) {
            
             $('#abogtramitesfinalizados').DataTable({
                language: idioma_espanol,
                data: respObj.message,
                columnDefs: [
                    { title: "Nombre", "targets": 0 },
                    { title: "Escribano", "targets": 1 },
                    { title: "Fecha", "targets": 2 },
                    { title: "Tipo", "targets": 3 },
                    { title: "Estado", "targets": 4 },
                    { title: "Tipo de trámite", "targets": 5, searchable: true },
                    { title: "Acciones", "targets": 6, "orderable": false }
                ],
                columns: [
                    { data: "nombre_solicitud" },
                    { data: "nombre_escribano" },
                    { data: "fecha" },
                    { data: "nombre_tipo_operacion" },
                    { data: "nombre_estado" },
                    { data: "nombre_tipo_formulario" },
                    {                
                        render: function (data, type, row) {
                            return "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariosabogfina" + row.id_tipo_formulario + "' onClick='getAbogFormFinalizado(\"" +
                                row.id_tipo_formulario + "\",\"" + row.nombre_solicitud.replace(/['"]+/g, '') + "\",\"" + row.nombre_escribano + "\",\"" + row.id_tipo_inmueble + "\",\"" +
                                row.fecha + "\",\"" + row.id_tipo_operacion + "\",\"" + row.id_estado + "\",\"" +
                                row.id_tipo_tramite + "\",\"" + row.nro_expediente.replace(/['"]+/g, '') + "\",\"" + row.nombre_abogado + "\",\"" + row.destino.replace(/['"]+/g, '') + "\",\"" + row.archivos + "\",\"" + row.ubicacion.replace(/['"]+/g, '') + "\",\"" + row.descripcion + "\");'>Visualizar</button>";
                        }
                    }
                ]
            });

        } else {
            
            swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                location.reload();
            });
        }
    })
        .catch(error => {
        swal({title: "¡Error!", text: error, icon: "error"})
    });
});

function getAbogFormFinalizado(id_tipo_formulario,nombre_solicitud,nombre_escribano,id_tipo_inmueble,fecha,id_tipo_operacion,id_estado,id_tipo_tramite,nro_expediente,nombre_abogado,destino,archivos,ubicacion,descripcion) {
    
    if (id_tipo_formulario == 1) {
        $("#nombreSolicitudAboTraFin").val(nombre_solicitud);
        $("#nombreEscribanoAboTraFin").val(nombre_escribano);
        $("#nombreInmuebleAboTraFin").val(id_tipo_inmueble);
        $("#nombreFechaAboTraFin").val(fecha);
        $("#nombreOperacionAboTraFin").val(id_tipo_operacion);
        $("#nombreEstadoAboTraFin").val(id_estado);
        $("#nombreTramiteAboTraFin").val(id_tipo_tramite);
        $("#nombreExpedienteAboTraFin").val(nro_expediente);
        $("#nombreAbogadoAboTraFin").val(nombre_abogado);
        $("#nombreDestinoAboTraFin").val(destino);
        $("#nombreUbicacionAboTraFin").val(ubicacion);
        $("#nombreOperacionAboTraFin1").val(descripcion);

        if( $("#nombreOperacionAboTraFin").val() == '3'){
      
            $("#nombreOperacionAboTraFin1").show();
        }else{
            $("#nombreOperacionAboTraFin1").hide();   
        
        }

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAbogTraFin").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivofn' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-nfn' + parseInt(i+1) + '" id="input-file-preview-nfn' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    } else {
        $("#nombreSolicitudAboTraFinDos").val(nombre_solicitud);
        $("#nombreEscribanoAboTraFinDos").val(nombre_escribano);
        $("#nombreFechaAboTraFinDos").val(fecha);
        $("#nombreEstadoAboTraFinDos").val(id_estado);
        $("#nombreTramiteAboTraFinDos").val(id_tipo_tramite);
        $("#nombreExpedienteAboTraFinDos").val(nro_expediente);
        $("#nombreAbogadoAboTraFinDos").val(nombre_abogado);
        $("#nombreDestinoAboTraFinDos").val(destino);
        $("#nombreUbicacionAboTraFinDos").val(ubicacion);

        var datos = archivos.split(',');

        for (var i = 0; i < datos.length; i++) {
            $("#nuevoArchivoAbogTraFinDos").append('<div class="form-group">' +
                                                    '<div class="input-group">' +
                                                        '<a href="'+ datos[i] +'" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
                                                        '<input id="nombreArchivocs' + parseInt(i+1) + '" value="'+ datos[i] +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                                            '<i class="fas fa-folder-open"></i>' +
                                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                                            '<input type="file" class="input-file-preview-ncs' + parseInt(i+1) + '" id="input-file-preview-ncs' + parseInt(i+1) + '" disabled="disabled">' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>');
        }
    }
}


/*************************************************
***********ESCRIBANO > NUEVO FORMULARIO***********
*************************************************/

// Agregar archivos nuevos
// var contador = 0;
$("#agregarfn").click(function () {
    // var contador = parseInt($("#cantArchivofn").val());
    var contador = parseInt($("#nuevoArchivofn .form-group").length);
    contador += 1;
    $("#nuevoArchivofn").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivofn'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input accept=".pdf, .jpg, .jpeg, .png" type="file" class="input-file-preview-nfn'+ contador +'" id="input-file-preview-nfn'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-nfn"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivofn"+i).val(filename);
            });        
        }
    });
    // $("#cantArchivofn").val(contador);
});

// Quitar archivos nuevos
$("#quitarfn").click(function () {
    $("#nuevoArchivofn .form-group").last().remove();
    // var valor = $("#cantArchivofn").val() - 1;
    // $("#cantArchivofn").val(valor);
});



// Escribano > Menú principal > Nuevo > Boton guardar.
$("#guardarnuevofn").click(function () {
    $('#guardarnuevofn').prop('disabled', true);

    

    var url_base = $("#url_base").val();
    var idUsuario = $("#idUsuario").val();
    var nombresolicitud = $("#nombresolicitud").val();
    var tipoinmueble = $("#tipoinmueble").val();
    var tipooperacion = $("#tipooperacion").val();
    var nombreArchivofn1 = $("#nombreArchivofn1").val();
    var ubicacion = $("#ubicacion").val();
    var descripcionn = $("#descripcionn").val();

    if (nombresolicitud == '') {
        $("#nombresolicitud").addClass("is-invalid");
        $('#guardarnuevofn').prop('disabled', false);
        swal("¡Algo salió mal!", "El campo 'Nombre de solicitud' no puede estar vacío.", "error");
        return false;
    }

    if (tipoinmueble == 0) {
        $("#tipoinmueble").addClass("is-invalid");
        $('#guardarnuevofn').prop('disabled', false);
        swal("¡Algo salió mal!", "El campo 'Tipo de inmueble' no puede estar vacío.", "error");
        return false;
    }

    if (tipooperacion == 0) {
        $("#tipooperacion").addClass("is-invalid");
         $('#guardarnuevofn').prop('disabled', false);
        swal("¡Algo salió mal!", "El campo 'Tipo de operación' no puede estar vacío.", "error");
        return false;
    }
    if (ubicacion == 0) {
        $("#tipooperacion").addClass("is-invalid");
        $('#guardarnuevofn').prop('disabled', false);
        swal("¡Algo salió mal!", "El campo 'Ubicación' no puede estar vacío.", "error");
        return false;
    }

    

    if (nombreArchivofn1 == '' || nombreArchivofn1 == null || nombreArchivofn1 == undefined) {
        $("#nombreArchivofn1").addClass("is-invalid");
        swal("¡Algo salió mal!", "No hay archivo adjunto.", "error");
        $('#guardarnuevofn').prop('disabled', false);
        return false;
    }

    var fd = new FormData();
    fd.append('idUsuario', idUsuario);
    fd.append('nombre', nombresolicitud);
    fd.append('idTipoInmueble', tipoinmueble);
    fd.append('idTipoOperacion', tipooperacion);
    fd.append('ubicacion', ubicacion);
    fd.append('descripcion', descripcionn);
    fd.append('idTipoFormulario', 1);

    var max = parseInt($("#nuevoArchivofn .form-group").length);
    for (let i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-nfn"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/insertar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {
            if (respObj.status == 0) {
                swal({title: "¡Excelente!", text: respObj.message, icon: "success", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            $('#guardarnuevofn').prop('disabled', false);
            swal("Algo salió mal!", error, "error");
        });
});

// Editar, guardar y cerrar
$("#editarfn").click(function () {
    $("#botonesfn").css('visibility', 'visible');
    $("#nuevoArchivofn").css('display', 'block');
    $("#editarfn").css('display', 'none');
    $("#guardarfn").css('display', 'block');
});

$("#guardarfn").click(function () {
    $('#guardarfn').prop('disabled', true);
    var url_base = $("#url_base").val();
    var id_solicitud = $("#id_solicitudEscAdjDoc").val();

    var fd = new FormData();
    var max = parseInt($("#nuevoArchivofn .form-group").length);
    for (let i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-nfn"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/cargar-documentacion?idSolicitud=' + id_solicitud, {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {            
            if (respObj.status == 0) {

                swal({title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar",}).then(function(){
                    $("#cerrarfn").trigger("click");
///agregamos para envio
                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraNue1").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");

                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });

                        $("#guardarEnvNot").click(function () {
                            $('#guardarEnvNot').prop('disabled', true);
                            var idUsuAdmTraNue = $("#idUsuAdmTraNue").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();
                            // if (descripcionEnvNot == '') {
                            //     swal("¡Algo salió mal!", "El campo descripcion no puede quedar vacío.", "error");
                            //     return false;
                            // }

                            var fdn = new FormData();
                            fdn.append('idSolicitud', id_solicitud);
                            fdn.append('idUsuario', idUsuAdmTraNue);
                            fdn.append('descripcion', descripcionEnvNot);
                            fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    $('#guardarEnvNot').prop('disabled', false);
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
                    
               
            } else {
                swal({title: "¡Algo salió mal!", text: "No se pudo hacer los cambios.", icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        
        })
       
        .catch(error => {
             $('#guardarfn').prop('disabled', false);
            swal("Algo salió mal!", error, "error");
        });
       
});

function cerrarVentanafn() {
    $("#botonesfn").css('visibility', 'hidden');
    $("#editarfn").css('display', 'block');
    $("#guardarfn").css('display', 'none');

    // Escribano
    $("#nuevoArchivofn .form-group").remove();
    $("#nuevoArchivofnConsulta .form-group").remove();

    // // Admin
    // $("#nuevoArchivoAdmTraNue .form-group").remove();
    // $("#nuevoArchivoAdmTraProc .form-group").remove();
    // $("#nuevoArchivoAdmTraFin .form-group").remove();

    // Abogado
    $("#nuevoArchivoAbogTraNue .form-group").remove();
    $("#nuevoArchivoAbogTraProc .form-group").remove();
    $("#nuevoArchivoAbogTraFin .form-group").remove();
}


/*************************************************
***********ESCRIBANO > FORMULARIO 5 y 6***********
*************************************************/

// var contadorcs = 0;
$("#agregarcs").click(function () {
    var contadorcs = parseInt($("#nuevoArchivocs .form-group").length);
    contadorcs += 1;
    $("#nuevoArchivocs").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivocs'+ contadorcs +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs'+ contadorcs +'" id="input-file-preview-ncs'+ contadorcs +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let ics = 1; ics <= contadorcs; ics++) {
            $(document).on("change", ".input-file-preview-ncs"+ics, function () {
                filename = this.files[0].name;
                // console.log(filename);
                // console.log($("#input-file-preview-ncs1")[0].files[0]);
                $("#nombreArchivocs"+ics).val(filename);
            });        
        }
    });
    // $("#cantArchivocs").val(contadorcs);
});

// Quitar archivos nuevos
$("#quitarcs").click(function () {
    $("#nuevoArchivocs .form-group").last().remove();
});

// Escribano > Menú principal > formulario 5 o 6 > Boton guardar.
$("#guardarnuevocs").click(function () {
    $('#guardarnuevocs').prop('disabled', true);

    var url_base = $("#url_base").val();
    var idUsuario = $("#idUsuario").val();
    var nombresolicitudcs = $("#nombresolicitudcs").val();
    var ubicacioncs = $("#ubicacioncs").val();
    var nombreArchivocs1 = $("#nombreArchivocs1").val();

    if (nombresolicitudcs == '') {
        $("#nombresolicitud").addClass("is-invalid");
        $('#guardarnuevocs').prop('disabled', false);
        swal("¡Algo salió mal!", "El campo 'Nombre de solicitud' no puede estar vacío.", "error");
        return false;
    }

    if (ubicacioncs == 0) {
        $("#tipooperacion").addClass("is-invalid");
        $('#guardarnuevocs').prop('disabled', false);
        swal("¡Algo salió mal!", "El campo 'Ubicación' no puede estar vacío.", "error");
        return false;
    }


    if (nombreArchivocs1 == '' || nombreArchivocs1 == null || nombreArchivocs1 == undefined) {
        $("#nombreArchivocs1").addClass("is-invalid");
        $('#guardarnuevocs').prop('disabled', false);
        swal("¡Algo salió mal!", "No hay archivo adjunto.", "error");
        return false;
    }

    var fd = new FormData();
    fd.append('idUsuario', idUsuario);
    fd.append('nombre', nombresolicitudcs);
    fd.append('ubicacion', ubicacioncs);
    fd.append('idTipoInmueble', 0);
    fd.append('idTipoOperacion', 0);
    fd.append('descripcion', 0);
    fd.append('idTipoFormulario', 2);

    var max = parseInt($("#nuevoArchivocs .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-ncs"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/insertar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {
            if (respObj.status == 0) { //Cambiar el tipo de status
                swal({title: "¡Excelente!", text: respObj.message, icon: "success", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            $('#guardarnuevocs').prop('disabled', false);
            swal("Algo salió mal!", error, "error");
        });
});

// Editar, guardar y cerrar
$("#editarcs").click(function () {
    $("#botonescs").css('visibility', 'visible');
    $("#nuevoArchivocs").css('display', 'block');
    $("#editarcs").css('display', 'none');
    $("#guardarcs").css('display', 'block');   
});

function cerrarVentanacs() {
    $("#botonescs").css('visibility', 'hidden');
    $("#editarcs").css('display', 'block');
    $("#guardarcs").css('display', 'none');
    
    // Escribano
    $("#nuevoArchivocs .form-group").remove();
    $("#nuevoArchivocsConsultaDos .form-group").remove();

    // // Admin
    // $("#nuevoArchivoAdmTraNueDos .form-group").remove();
    // $("#nuevoArchivoAdmTraProcDos .form-group").remove();
    // $("#nuevoArchivoAdmTraFinDos .form-group").remove();

    // Abogado
    $("#nuevoArchivoAbogTraNueDos .form-group").remove();
    $("#nuevoArchivoAbogTraProcDos .form-group").remove();
    $("#nuevoArchivoAbogTraFinDos .form-group").remove();
}


/*************************************************
********ESCRIBANO > ADJUNTAR DOCUMENTACION********
*************************************************/

$("#guardarcs").click(function () {
    var url_base = $("#url_base").val();
    var idSolicitud = $("#id_solicitudEscAdjDocDos").val();

    if (idSolicitud == '') {
        swal("¡Algo salió mal!", "No existe la solicitud que lo relaciona.", "error");
        return false;
    }

    var fd = new FormData();

    var max = parseInt($("#nuevoArchivocs .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-ncs"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/cargar-documentacion?idSolicitud=' + idSolicitud, {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar",}).then(function(){
                    $("#cerrarcs").trigger("click");
                    ///agregamos para envio
                                        // Enviar notificación
                                        $(document).ready(function () {
                                            $("#EnvNotAdmTraNueDos").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                                            $("#ejecutarModalEnvNot").trigger("click");
                    
                                            $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                                                alert("Esta accion se ejecuta al cerrar el modal")
                                            });
                    
                                            $("#guardarEnvNot").click(function () {
                    
                                                var idUsuAdmTraNue = $("#idUsuAdmTraNue").val();
                                                var descripcionEnvNot = $("#descripcionEnvNot").val();
                                                var idUsuarioEmisor = $("#idUsuarioprueba").val();
                                                // if (descripcionEnvNot == '') {
                                                //     swal("¡Algo salió mal!", "El campo descripcion no puede quedar vacío.", "error");
                                                //     return false;
                                                // }
                    
                                                var fdn = new FormData();
                                                fdn.append('idSolicitud', idSolicitud);
                                                fdn.append('idUsuario', idUsuAdmTraNue);
                                                fdn.append('descripcion', descripcionEnvNot);
                                                fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                                                fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                                    method: "POST",
                                                    body: fdn
                                                })
                                                    .then(resp => resp.json())
                                                    .then(respObj => {
                    
                                                        if (respObj.status == 0) {
                                                            swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                                                location.reload();
                                                            });
                                                        } else {
                                                            swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                                                location.reload();
                                                            });
                                                        }
                                                    })
                                                    .catch(error => {
                                                        swal("Algo salió mal!", error, "error");
                                                    });
                                            });
                                        });
                                        // location.reload();
                                    });
                   
            } else {
                swal({title: "¡Algo salió mal!", text: "Los cambios no efectuaron bien, por favor intenté de nuevo.", icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });
});


/*************************************************
***********ADMIN > TRÁMITE NUEVO******************
*************************************************/

/***************FORMULARIO NUEVO*****************/

function cerrarVentanafnAdmTraNue() {
    $("#botonesfnAdmTraNue").css('visibility', 'hidden');
    $("#editarfnAdmTraNue").css('display', 'block');
    $("#guardarfnAdmTraNue").css('display', 'none');

    // trámite nuevo
    $("#nombreAbogadoAdmTraNue option").remove();
    $("#nuevoArchivoAdmTraNue .form-group").remove();
    $('#nombreSolicitudAdmTraNue').attr('disabled', 'disabled');
    $('#nombreInmuebleAdmTraNue').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraNue').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraNue').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraNue').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraNue').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraNue').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraNue').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraNue').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraNue1').attr('disabled', 'disabled');

    location.reload();
}

// Agregar archivos nuevos
$("#agregarfnAdmTraNue").click(function () {
    var contador = parseInt($("#nuevoArchivoAdmTraNue .form-group").length);
    contador += 1;
    $("#nuevoArchivoAdmTraNue").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivofn'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn'+ contador +'" id="input-file-preview-nfn'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-nfn"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivofn"+i).val(filename);
            });        
        }
    });
});

// Quitar archivos nuevos.
$("#quitarfnAdmTraNue").click(function () {
    $("#nuevoArchivoAdmTraNue .form-group").last().remove();
});

//Botones dinamico de la vista modal.
$("#editarfnAdmTraNue").click(function () {
    // Botones de la vista modal.
    $("#botonesfnAdmTraNue").css('visibility', 'visible');
    $("#editarfnAdmTraNue").css('display', 'none');
    $("#guardarfnAdmTraNue").css('display', 'block');

    // Campos de la vista modal.
    $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
    $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
    $('#nombreOperacionAdmTraNue').removeAttr('disabled');
    $('#nombreEstadoAdmTraNue').removeAttr('disabled');
    $('#nombreTramiteAdmTraNue').removeAttr('disabled');
    $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
    $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
    $('#nombreDestinoAdmTraNue').removeAttr('disabled');
    $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
    $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#guardarfnAdmTraNue").click(function () {
    $('#guardarfnAdmTraNue').prop('disabled', true);
    // Campos habilitados para editar.
    $('#nombreSolicitudAdmTraNue').attr('disabled', 'disabled');
    $('#nombreInmuebleAdmTraNue').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraNue').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraNue').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraNue').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraNue').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraNue').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraNue').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraNue').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraNue1').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var idSolicitudAdmTraNue = $("#idSolicitudAdmTraNue").val();
    var nombreSolicitudAdmTraNue = $('#nombreSolicitudAdmTraNue').val();
    var nombreInmuebleAdmTraNue = $('#nombreInmuebleAdmTraNue').val();
    var nombreOperacionAdmTraNue = $('#nombreOperacionAdmTraNue').val();
    var nombreEstadoAdmTraNue = $('#nombreEstadoAdmTraNue').val();
    var nombreTramiteAdmTraNue = $('#nombreTramiteAdmTraNue').val();
    var nombreExpedienteAdmTraNue = $('#nombreExpedienteAdmTraNue').val();
    var nombreAbogadoAdmTraNue = $('#nombreAbogadoAdmTraNue').val();
    var nombreDestinoAdmTraNue = $('#nombreDestinoAdmTraNue').val();
    var nombreUbicacionAdmTraNue = $('#nombreUbicacionAdmTraNue').val();
    var nombreOperacionAdmTraNue1 = $('#nombreOperacionAdmTraNue1').val();

    if (idSolicitudAdmTraNue == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
        $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue').removeAttr('disabled');
        $('#nombreEstadoAdmTraNue').removeAttr('disabled');
        $('#nombreTramiteAdmTraNue').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
        $('#nombreDestinoAdmTraNue').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
        $('#guardarfnAdmTraNue').prop('disabled', false);
        return false;
    }

    if (nombreEstadoAdmTraNue == 0) {
        swal("¡Algo salió mal!", "El campo estado no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
        $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue').removeAttr('disabled');
        $('#nombreEstadoAdmTraNue').removeAttr('disabled');
        $('#nombreTramiteAdmTraNue').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
        $('#nombreDestinoAdmTraNue').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
        $('#guardarfnAdmTraNue').prop('disabled', false);
        return false;
    }


     




    if (nombreTramiteAdmTraNue == 0) {
        swal("¡Algo salió mal!", "El campo trámite no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
        $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue').removeAttr('disabled');
        $('#nombreEstadoAdmTraNue').removeAttr('disabled');
        $('#nombreTramiteAdmTraNue').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
        $('#nombreDestinoAdmTraNue').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
        $('#guardarfnAdmTraNue').prop('disabled', false);
        return false;
    }

        

        if ($('#nombreEstadoAdmTraNue').val() >= 3) {

        
                       
                if (nombreExpedienteAdmTraNue == '') {
                    swal("¡Algo salió mal!", "El campo número de expediente no puede quedar vacío.", "error");
                    $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
                    $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
                    $('#nombreOperacionAdmTraNue').removeAttr('disabled');
                    $('#nombreEstadoAdmTraNue').removeAttr('disabled');
                    $('#nombreTramiteAdmTraNue').removeAttr('disabled');
                    $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
                    $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
                    $('#nombreDestinoAdmTraNue').removeAttr('disabled');
                    $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
                    $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
                    $('#guardarfnAdmTraNue').prop('disabled', false);
                    return false;
                }

    }

if ($('#nombreEstadoAdmTraNue').val() >= 3) {

    if($('#nombreAbogadoAdmTraNue').find('option:selected').val() == "0"){

    
                swal("¡Algo salió mal!", "El campo abogado no puede quedar vacío.", "error");
                $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
                $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
                $('#nombreOperacionAdmTraNue').removeAttr('disabled');
                $('#nombreEstadoAdmTraNue').removeAttr('disabled');
                $('#nombreTramiteAdmTraNue').removeAttr('disabled');
                $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
                $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
                $('#nombreDestinoAdmTraNue').removeAttr('disabled');
                $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
                $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
                $('#guardarfnAdmTraNue').prop('disabled', false);
                return false;
           

     }
       
}
    if (nombreDestinoAdmTraNue == '') {
        swal("¡Algo salió mal!", "El campo destino no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraNue').removeAttr('disabled');
        $('#nombreInmuebleAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue').removeAttr('disabled');
        $('#nombreEstadoAdmTraNue').removeAttr('disabled');
        $('#nombreTramiteAdmTraNue').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNue').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNue').removeAttr('disabled');
        $('#nombreDestinoAdmTraNue').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNue').removeAttr('disabled');
        $('#nombreOperacionAdmTraNue1').removeAttr('disabled');
        $('#guardarfnAdmTraNue').prop('disabled', false);
        return false;
    }


    var fd = new FormData();
    fd.append('idSolicitud', idSolicitudAdmTraNue);
    fd.append('nombre', nombreSolicitudAdmTraNue);
    fd.append('idTipoInmueble', nombreInmuebleAdmTraNue);
    fd.append('idTipoOperacion', nombreOperacionAdmTraNue);
    fd.append('idEstado', nombreEstadoAdmTraNue);
    fd.append('idTipoTramite', nombreTramiteAdmTraNue);
    fd.append('nroExpediente', nombreExpedienteAdmTraNue);
    fd.append('idAbogado', nombreAbogadoAdmTraNue);
    fd.append('destino', nombreDestinoAdmTraNue);
    fd.append('ubicacion', nombreUbicacionAdmTraNue);
    fd.append('descripcion', nombreOperacionAdmTraNue1);

   
    var max = parseInt($("#nuevoArchivoAdmTraNue .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-nfn"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Boton cerrar de la vista modal.
                    $("#cerrarfnAdmTraNueOculto").trigger("click");
                    $('#guardarfnAdmTraNue').prop('disabled', false);

                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraNue").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");

                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });

                        $("#guardarEnvNot").click(function () {
                            $('#guardarEnvNot').prop('disabled', false);
                            var idUsuAdmTraNue = $("#idUsuAdmTraNue").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();
                    
                            
                            // if (descripcionEnvNot == '') {
                            //     swal("¡Algo salió mal!", "El campo descripcion no puede quedar vacío.", "error");
                            //     return false;
                            // }

                            var fdn = new FormData();
                            fdn.append('idSolicitud', idSolicitudAdmTraNue);
                            fdn.append('idUsuario', idUsuAdmTraNue);
                            fdn.append('descripcion', descripcionEnvNot);
                            fdn.append('idUsuarioEmisor', idUsuarioEmisor);

                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            $('#guardarEnvNot').prop('disabled', false);
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            $('#guardarEnvNot').prop('disabled', false);
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    $('#guardarEnvNot').prop('disabled', false);
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
            } else {
                 $('#guardarfnAdmTraNue').prop('disabled', false);
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
             $('#guardarfnAdmTraNue').prop('disabled', false);
            swal("Algo salió mal!", error, "error");
        });
});

/***************FORMULARIO 5 o 6*****************/

function cerrarVentanacsAdmTraNue() {
    $("#botonescsAdmTraNueDos").css('visibility', 'hidden');
    $("#editarcsAdmTraNueDos").css('display', 'block');
    $("#guardarcsAdmTraNueDos").css('display', 'none');

    // trámite nuevo
    $("#nombreDestinoAdmTraNueDos option").remove();
    $("#nuevoArchivoAdmTraNueDos .form-group").remove();
    $('#nombreSolicitudAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraNueDos').attr('disabled', 'disabled');

    location.reload();
}

// Agregar archivos nuevos
$("#agregarcsAdmTraNueDos").click(function () {
    var contador = parseInt($("#nuevoArchivoAdmTraNueDos .form-group").length);
    contador += 1;
    $("#nuevoArchivoAdmTraNueDos").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivocs'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs'+ contador +'" id="input-file-preview-ncs'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-ncs"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivocs"+i).val(filename);
            });        
        }
    });
});

// Quitar archivos nuevos.
$("#quitarcsAdmTraNueDos").click(function () {
    $("#nuevoArchivoAdmTraNueDos .form-group").last().remove();
});


//Botones dinamico de la vista modal.
$("#editarcsAdmTraNueDos").click(function () {
    // Botones de la vista modal.
    $("#botonescsAdmTraNueDos").css('visibility', 'visible');
    $("#editarcsAdmTraNueDos").css('display', 'none');
    $("#guardarcsAdmTraNueDos").css('display', 'block');

    // Campos de la vista modal.
    $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
    $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
    $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
    $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
    $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
    $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
    $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#guardarcsAdmTraNueDos").click(function () {
    // Campos habilitados para editar.
    $('#nombreSolicitudAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraNueDos').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraNueDos').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var idSolicitudAdmTraNueDos = $("#idSolicitudAdmTraNueDos").val();

    var nombreSolicitudAdmTraNueDos = $('#nombreSolicitudAdmTraNueDos').val();
   
    var nombreEstadoAdmTraNueDos = $('#nombreEstadoAdmTraNueDos').val();
    var nombreTramiteAdmTraNueDos = $('#nombreTramiteAdmTraNueDos').val();
    var nombreExpedienteAdmTraNueDos = $('#nombreExpedienteAdmTraNueDos').val();
    var nombreAbogadoAdmTraNueDos = $('#nombreAbogadoAdmTraNueDos').val();
    var nombreDestinoAdmTraNueDos = $('#nombreDestinoAdmTraNueDos').val();
    var nombreUbicacionAdmTraNueDos = $('#nombreUbicacionAdmTraNueDos').val();

    if (idSolicitudAdmTraNueDos == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
        return false;
    }

    if (nombreEstadoAdmTraNueDos == 0) {
        swal("¡Algo salió mal!", "El campo estado no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
        return false;
    }

    if (nombreTramiteAdmTraNueDos == 0) {
        swal("¡Algo salió mal!", "El campo trámite no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
        return false;
    }



if ($('#nombreEstadoAdmTraNueDos').val() >= 3) {


    if (nombreExpedienteAdmTraNueDos == '') {
        swal("¡Algo salió mal!", "El campo número de expediente no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
        return false;
    }
 }   

if ($('#nombreEstadoAdmTraNueDos').val() >= 3) {


    if($('#nombreAbogadoAdmTraNueDos').find('option:selected').val() == "0"){


        swal("¡Algo salió mal!", "El campo abogado no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
        return false;
    }

}
    if (nombreDestinoAdmTraNueDos == '') {
        swal("¡Algo salió mal!", "El campo destino no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraNueDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraNueDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraNueDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraNueDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraNueDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraNueDos').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idSolicitud', idSolicitudAdmTraNueDos);
    fd.append('nombre', nombreSolicitudAdmTraNueDos);
    fd.append('idEstado', nombreEstadoAdmTraNueDos);
    fd.append('idTipoTramite', nombreTramiteAdmTraNueDos);
    fd.append('nroExpediente', nombreExpedienteAdmTraNueDos);
    fd.append('idAbogado', nombreAbogadoAdmTraNueDos);
    fd.append('destino', nombreDestinoAdmTraNueDos);
    fd.append('ubicacion', nombreUbicacionAdmTraNueDos);
    fd.append('idTipoInmueble', 0);
    fd.append('idTipoOperacion', 0);
    fd.append('descripcion', 0);

    var max = parseInt($("#nuevoArchivoAdmTraNueDos .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-ncs"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                   // Boton cerrar de la vista modal.
                    $("#cerrarcsAdmTraNueDosOculto").trigger("click");

                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraNueDos").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");

                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });


                        $("#guardarEnvNot").click(function () {
                            var idUsuAdmTraNueDos = $("#idUsuAdmTraNueDos").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();


                            var fdn = new FormData();
                            fdn.append('idSolicitud', idSolicitudAdmTraNueDos);
                            fdn.append('idUsuario', idUsuAdmTraNueDos);
                            fdn.append('descripcion', descripcionEnvNot);
                            fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });    
});


/*************************************************
*********ADMIN > TRÁMITE EN PROCESO***************
*************************************************/

/***************FORMULARIO NUEVO*****************/

function cerrarVentanafnAdmTraProc() {
    $("#botonesfnAdmTraProc").css('visibility', 'hidden');
    $("#editarfnAdmTraProc").css('display', 'block');
    $("#guardarfnAdmTraProc").css('display', 'none');

    // trámite proceso
    $("#nombreAbogadoAdmTraProc option").remove();
    $("#nuevoArchivoAdmTraProc .form-group").remove();
    $('#nombreSolicitudAdmTraProc').attr('disabled', 'disabled');
    $('#nombreInmuebleAdmTraProc').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraProc').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraProc').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraProc').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraProc').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraProc').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraProc').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraProc').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraProc1').attr('disabled', 'disabled');

    location.reload();
}

// Agregar archivos nuevos
$("#agregarfnAdmTraProc").click(function () {
    var contador = parseInt($("#nuevoArchivoAdmTraProc .form-group").length);
    contador += 1;
    $("#nuevoArchivoAdmTraProc").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivofn'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn'+ contador +'" id="input-file-preview-nfn'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-nfn"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivofn"+i).val(filename);
            });        
        }
    });
});

// Quitar archivos nuevos.
$("#quitarfnAdmTraProc").click(function () {
    $("#nuevoArchivoAdmTraProc .form-group").last().remove();
});
$("#faltadocumentacion").click(function () {
    var url_base = $("#url_base").val();
    var idSolicitudAdmTraProc = $("#idSolicitudAdmTraProc").val();
    swal({
        title: "¿Está seguro? Solicitará Documentación",
        text: "",
        icon: "warning",
        buttons: [
          'NO',
          'SI'
        ],
       
      }).then(function(isConfirm) {
        if (isConfirm) {
            $("#cerrarfnAdmTraProcOculto").trigger("click");
            $("#EnvNotAdmTraProc").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
            $("#ejecutarModalEnvNot").trigger("click");


            $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                alert("Esta accion se ejecuta al cerrar el modal")
            });

            $("#guardarEnvNot").click(function () {
                var idUsuAdmTraProc = $("#idUsuAdmTraProc").val();
                var descripcionEnvNot = $("#descripcionEnvNot").val();
                var idUsuarioEmisor = $("#idUsuarioprueba").val();
               console.log(url_base);
               
                var fdn = new FormData();
                fdn.append('idSolicitud', idSolicitudAdmTraProc);
                fdn.append('idUsuario', idUsuAdmTraProc);
                fdn.append('descripcion', descripcionEnvNot);
                 fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                    method: "POST",
                    body: fdn
                })
                    .then(resp => resp.json())
                    .then(respObj => {

                        if (respObj.status == 0) {
                            swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                location.reload();
                            });
                        } else {
                            swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                location.reload();
                            });
                        }
                    })
                    .catch(error => {
                        swal("Algo salió mal!", error, "error");
                    });
            });
        
        // location.reload();
    
        } else {
            swal.close()

        }
      });
});
//Botones dinamico de la vista modal.
$("#editarfnAdmTraProc").click(function () {
    // Botones de la vista modal.
    $("#botonesfnAdmTraProc").css('visibility', 'visible');
    $("#editarfnAdmTraProc").css('display', 'none');
    $("#guardarfnAdmTraProc").css('display', 'block');

    // Campos de la vista modal.
    $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
    $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
    $('#nombreOperacionAdmTraProc').removeAttr('disabled');
    $('#nombreEstadoAdmTraProc').removeAttr('disabled');
    $('#nombreTramiteAdmTraProc').removeAttr('disabled');
    $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
    $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
    $('#nombreDestinoAdmTraProc').removeAttr('disabled');
    $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
    $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#guardarfnAdmTraProc").click(function () {
    // Campos habilitados para editar.
    $('#nombreSolicitudAdmTraProc').attr('disabled', 'disabled');
    $('#nombreInmuebleAdmTraProc').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraProc').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraProc').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraProc').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraProc').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraProc').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraProc').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraProc').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraProc1').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var idSolicitudAdmTraProc = $("#idSolicitudAdmTraProc").val();
    var nombreSolicitudAdmTraProc = $('#nombreSolicitudAdmTraProc').val();
    var nombreInmuebleAdmTraProc = $('#nombreInmuebleAdmTraProc').val();
    var nombreOperacionAdmTraProc = $('#nombreOperacionAdmTraProc').val();
    var nombreEstadoAdmTraProc = $('#nombreEstadoAdmTraProc').val();
    var nombreTramiteAdmTraProc = $('#nombreTramiteAdmTraProc').val();
    var nombreExpedienteAdmTraProc = $('#nombreExpedienteAdmTraProc').val();
    var nombreAbogadoAdmTraProc = $('#nombreAbogadoAdmTraProc').val();
    var nombreDestinoAdmTraProc = $('#nombreDestinoAdmTraProc').val();
    var nombreUbicacionAdmTraProc = $('#nombreUbicacionAdmTraProc').val();
    var nombreOperacionAdmTraProc1 = $('#nombreOperacionAdmTraProc1').val();

    if (idSolicitudAdmTraProc == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
        $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc').removeAttr('disabled');
        $('#nombreEstadoAdmTraProc').removeAttr('disabled');
        $('#nombreTramiteAdmTraProc').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
        $('#nombreDestinoAdmTraProc').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
        return false;
    }

    if (nombreEstadoAdmTraProc == 0) {
        swal("¡Algo salió mal!", "El campo estado no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
        $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc').removeAttr('disabled');
        $('#nombreEstadoAdmTraProc').removeAttr('disabled');
        $('#nombreTramiteAdmTraProc').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
        $('#nombreDestinoAdmTraProc').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
        return false;
    }

    if (nombreTramiteAdmTraProc == 0) {
        swal("¡Algo salió mal!", "El campo trámite no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
        $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc').removeAttr('disabled');
        $('#nombreEstadoAdmTraProc').removeAttr('disabled');
        $('#nombreTramiteAdmTraProc').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
        $('#nombreDestinoAdmTraProc').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
        return false;
    }

if ($('#nombreEstadoAdmTraProc').val() >= 3) {

        
                       
     if (nombreExpedienteAdmTraProc == '') {
        

        swal("¡Algo salió mal!", "El campo número de expediente no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
        $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc').removeAttr('disabled');
        $('#nombreEstadoAdmTraProc').removeAttr('disabled');
        $('#nombreTramiteAdmTraProc').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
        $('#nombreDestinoAdmTraProc').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
        return false;
    }

}

if ($('#nombreEstadoAdmTraProc').val() >= 3) {

    if($('#nombreAbogadoAdmTraProc').find('option:selected').val() == "0"){

        swal("¡Algo salió mal!", "El campo abogado no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
        $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc').removeAttr('disabled');
        $('#nombreEstadoAdmTraProc').removeAttr('disabled');
        $('#nombreTramiteAdmTraProc').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
        $('#nombreDestinoAdmTraProc').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
        return false;
    }
}

    if (nombreDestinoAdmTraProc == '') {
        swal("¡Algo salió mal!", "El campo destino no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraProc').removeAttr('disabled');
        $('#nombreInmuebleAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc').removeAttr('disabled');
        $('#nombreEstadoAdmTraProc').removeAttr('disabled');
        $('#nombreTramiteAdmTraProc').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProc').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProc').removeAttr('disabled');
        $('#nombreDestinoAdmTraProc').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProc').removeAttr('disabled');
        $('#nombreOperacionAdmTraProc1').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idSolicitud', idSolicitudAdmTraProc);
    fd.append('nombre', nombreSolicitudAdmTraProc);
    fd.append('idTipoInmueble', nombreInmuebleAdmTraProc);
    fd.append('idTipoOperacion', nombreOperacionAdmTraProc);
    fd.append('idEstado', nombreEstadoAdmTraProc);
    fd.append('idTipoTramite', nombreTramiteAdmTraProc);
    fd.append('nroExpediente', nombreExpedienteAdmTraProc);
    fd.append('idAbogado', nombreAbogadoAdmTraProc);
    fd.append('destino', nombreDestinoAdmTraProc);
    fd.append('ubicacion', nombreUbicacionAdmTraProc);
    fd.append('descripcion', nombreOperacionAdmTraProc1);

    var max = parseInt($("#nuevoArchivoAdmTraProc .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-nfn"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Boton cerrar de la vista modal.
                    $("#cerrarfnAdmTraProcOculto").trigger("click");

                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraProc").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");


                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });

                        $("#guardarEnvNot").click(function () {
                            var idUsuAdmTraProc = $("#idUsuAdmTraProc").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();

                            var fdn = new FormData();
                            fdn.append('idSolicitud', idSolicitudAdmTraProc);
                            fdn.append('idUsuario', idUsuAdmTraProc);
                            fdn.append('descripcion', descripcionEnvNot);
                             fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });    
});

/***************FORMULARIO 5 o 6*****************/

function cerrarVentanacsAdmTraProc() {
    $("#botonescsAdmTraProcDos").css('visibility', 'hidden');
    $("#editarcsAdmTraProcDos").css('display', 'block');
    $("#guardarcsAdmTraProcDos").css('display', 'none');

    // trámite proceso
    $("#nombreAbogadoAdmTraProcDos option").remove();
    $("#nuevoArchivoAdmTraProcDos .form-group").remove();
    $('#nombreSolicitudAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraProcDos').attr('disabled', 'disabled');

    location.reload();
}

// Agregar archivos nuevos
$("#agregarcsAdmTraProcDos").click(function () {
    var contador = parseInt($("#nuevoArchivoAdmTraProcDos .form-group").length);
    contador += 1;
    $("#nuevoArchivoAdmTraProcDos").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivocs'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs'+ contador +'" id="input-file-preview-ncs'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-ncs"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivocs"+i).val(filename);
            });        
        }
    });
});

// Quitar archivos nuevos.
$("#quitarcsAdmTraProcDos").click(function () {
    $("#nuevoArchivoAdmTraProcDos .form-group").last().remove();
});

$("#faltadocumentacionDos").click(function () {
    var url_base = $("#url_base").val();
    var idSolicitudAdmTraProcDos = $("#idSolicitudAdmTraProcDos").val();
    swal({
        title: "¿Estas seguro?",
        text: "Solicitará Documentación",
        icon: "warning",

        buttons: [
          'NO',
          'SI'
        ],
       
      }).then(function(isConfirm) {
        if (isConfirm) {
            $("#cerrarcsAdmTraProcDosOculto").trigger("click");

            // Enviar notificación
           
                $("#EnvNotAdmTraProcDos").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                $("#ejecutarModalEnvNot").trigger("click");

                $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                    alert("Esta accion se ejecuta al cerrar el modal")
                });

                $("#guardarEnvNot").click(function () {
                    var idUsuAdmTraProcDos = $("#idUsuAdmTraProcDos").val();
                    var descripcionEnvNot = $("#descripcionEnvNot").val();
                    var idUsuarioEmisor = $("#idUsuarioprueba").val();

                    var fdn = new FormData();
                    fdn.append('idSolicitud', idSolicitudAdmTraProcDos);
                    fdn.append('idUsuario', idUsuAdmTraProcDos);
                    fdn.append('descripcion', descripcionEnvNot);
                    fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                    fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                        method: "POST",
                        body: fdn
                    })
                        .then(resp => resp.json())
                        .then(respObj => {

                            if (respObj.status == 0) {
                                swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                    location.reload();
                                });
                            } else {
                                swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                    location.reload();
                                });
                            }
                        })
                        .catch(error => {
                            swal("Algo salió mal!", error, "error");
                        });
                });
            
            // location.reload();
        
        } else {
            swal.close()

        }
      });
});

//Botones dinamico de la vista modal.
$("#editarcsAdmTraProcDos").click(function () {
    // Botones de la vista modal.
    $("#botonescsAdmTraProcDos").css('visibility', 'visible');
    $("#editarcsAdmTraProcDos").css('display', 'none');
    $("#guardarcsAdmTraProcDos").css('display', 'block');

    // Campos de la vista modal.
    $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
    $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
    $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
    $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
    $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
    $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
    $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#guardarcsAdmTraProcDos").click(function () {
    // Campos habilitados para editar.
    $('#nombreSolicitudAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraProcDos').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraProcDos').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var idSolicitudAdmTraProcDos = $("#idSolicitudAdmTraProcDos").val();
    var nombreSolicitudAdmTraProcDos = $('#nombreSolicitudAdmTraProcDos').val();
    var nombreEstadoAdmTraProcDos = $('#nombreEstadoAdmTraProcDos').val();
    var nombreTramiteAdmTraProcDos = $('#nombreTramiteAdmTraProcDos').val();
    var nombreExpedienteAdmTraProcDos = $('#nombreExpedienteAdmTraProcDos').val();
    var nombreAbogadoAdmTraProcDos = $('#nombreAbogadoAdmTraProcDos').val();
    var nombreDestinoAdmTraProcDos = $('#nombreDestinoAdmTraProcDos').val();
    var nombreUbicacionAdmTraProcDos = $('#nombreUbicacionAdmTraProcDos').val();

    if (idSolicitudAdmTraProcDos == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
        return false;
    }

    if (nombreEstadoAdmTraProcDos == 0) {
        swal("¡Algo salió mal!", "El campo estado no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
        return false;
    }

    if (nombreTramiteAdmTraProcDos == 0) {
        swal("¡Algo salió mal!", "El campo trámite no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
        return false;
    }

   
if ($('#nombreEstadoAdmTraProcDos').val() >= 3) {

        
                       
     if (nombreExpedienteAdmTraProcDos == '') {
        

        swal("¡Algo salió mal!", "El campo número de expediente no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
        return false;
    }

}


if ($('#nombreEstadoAdmTraProcDos').val() >= 3) {

    if($('#nombreAbogadoAdmTraProcDos').find('option:selected').val() == "0"){

       swal("¡Algo salió mal!", "El campo abogado no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
        return false;
    }

}    

    if (nombreDestinoAdmTraProcDos == '') {
        swal("¡Algo salió mal!", "El campo destino no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraProcDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraProcDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraProcDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraProcDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraProcDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraProcDos').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idSolicitud', idSolicitudAdmTraProcDos);
    fd.append('nombre', nombreSolicitudAdmTraProcDos);
    fd.append('idEstado', nombreEstadoAdmTraProcDos);
    fd.append('idTipoTramite', nombreTramiteAdmTraProcDos);
    fd.append('nroExpediente', nombreExpedienteAdmTraProcDos);
    fd.append('idAbogado', nombreAbogadoAdmTraProcDos);
    fd.append('destino', nombreDestinoAdmTraProcDos);
    fd.append('ubicacion', nombreUbicacionAdmTraProcDos);
    fd.append('idTipoInmueble', 0);
    fd.append('idTipoOperacion', 0);
    fd.append('descripcion', 0);

    var max = parseInt($("#nuevoArchivoAdmTraProcDos .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-ncs"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {
            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Boton cerrar de la vista modal.
                    $("#cerrarcsAdmTraProcDosOculto").trigger("click");

                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraProcDos").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");

                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });

                        $("#guardarEnvNot").click(function () {
                            var idUsuAdmTraProcDos = $("#idUsuAdmTraProcDos").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();

                            var fdn = new FormData();
                            fdn.append('idSolicitud', idSolicitudAdmTraProcDos);
                            fdn.append('idUsuario', idUsuAdmTraProcDos);
                            fdn.append('descripcion', descripcionEnvNot);
                            fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
            } else {
               
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
               });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });    
});


/*************************************************
*********ADMIN > TRÁMITE FINALIZADO***************
*************************************************/

/***************FORMULARIO NUEVO*****************/

function cerrarVentanafnAdmTraFin() {
    $("#botonesfnAdmTraFin").css('visibility', 'hidden');
    $("#editarfnAdmTraFin").css('display', 'block');
    $("#guardarfnAdmTraFin").css('display', 'none');

    // trámite finalizado
    $("#nombreAbogadoAdmTraFin option").remove();
    $("#nuevoArchivoAdmTraFin .form-group").remove();
    $('#nombreSolicitudAdmTraFin').attr('disabled', 'disabled');
    $('#nombreInmuebleAdmTraFin').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraFin').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraFin').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraFin').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraFin').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraFin').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraFin').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraFin').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraFin1').attr('disabled', 'disabled');

    location.reload();
}

// Agregar archivos nuevos
$("#agregarfnAdmTraFin").click(function () {
    var contador = parseInt($("#nuevoArchivoAdmTraFin .form-group").length);
    contador += 1;
    $("#nuevoArchivoAdmTraFin").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivofn'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn'+ contador +'" id="input-file-preview-nfn'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-nfn"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivofn"+i).val(filename);
            });        
        }
    });
});

// Quitar archivos nuevos.
$("#quitarfnAdmTraFin").click(function () {
    $("#nuevoArchivoAdmTraFin .form-group").last().remove();
});

//Botones dinamico de la vista modal.
$("#editarfnAdmTraFin").click(function () {
    // Botones de la vista modal.
    $("#botonesfnAdmTraFin").css('visibility', 'visible');
    $("#editarfnAdmTraFin").css('display', 'none');
    $("#guardarfnAdmTraFin").css('display', 'block');

    // Campos de la vista modal.
    $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
    $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
    $('#nombreOperacionAdmTraFin').removeAttr('disabled');
    $('#nombreEstadoAdmTraFin').removeAttr('disabled');
    $('#nombreTramiteAdmTraFin').removeAttr('disabled');
    $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
    $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
    $('#nombreDestinoAdmTraFin').removeAttr('disabled');
    $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
    $('#nombreOperacionAdmTraFin1').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#guardarfnAdmTraFin").click(function () {
    // Campos habilitados para editar.
    $('#nombreSolicitudAdmTraFin').attr('disabled', 'disabled');
    $('#nombreInmuebleAdmTraFin').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraFin').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraFin').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraFin').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraFin').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraFin').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraFin').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraFin').attr('disabled', 'disabled');
    $('#nombreOperacionAdmTraFin1').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var idSolicitudAdmTraFin = $("#idSolicitudAdmTraFin").val();
    var nombreSolicitudAdmTraFin = $('#nombreSolicitudAdmTraFin').val();
    var nombreInmuebleAdmTraFin = $('#nombreInmuebleAdmTraFin').val();
    var nombreOperacionAdmTraFin = $('#nombreOperacionAdmTraFin').val();
    var nombreEstadoAdmTraFin = $('#nombreEstadoAdmTraFin').val();
    var nombreTramiteAdmTraFin = $('#nombreTramiteAdmTraFin').val();
    var nombreExpedienteAdmTraFin = $('#nombreExpedienteAdmTraFin').val();
    var nombreAbogadoAdmTraFin = $('#nombreAbogadoAdmTraFin').val();
    var nombreDestinoAdmTraFin = $('#nombreDestinoAdmTraFin').val();
    var nombreUbicacionAdmTraFin = $('#nombreUbicacionAdmTraFin').val();
    var nombreOperacionAdmTraFin1 = $('#nombreOperacionAdmTraFin1').val();

    if (idSolicitudAdmTraFin == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
        $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin').removeAttr('disabled');
        $('#nombreEstadoAdmTraFin').removeAttr('disabled');
        $('#nombreTramiteAdmTraFin').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
        $('#nombreDestinoAdmTraFin').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin1').removeAttr('disabled');
        return false;
    }

    if (nombreEstadoAdmTraFin == 0) {
        swal("¡Algo salió mal!", "El campo estado no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
        $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin').removeAttr('disabled');
        $('#nombreEstadoAdmTraFin').removeAttr('disabled');
        $('#nombreTramiteAdmTraFin').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
        $('#nombreDestinoAdmTraFin').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin1').removeAttr('disabled');
        return false;
    }

    if (nombreTramiteAdmTraFin == 0) {
        swal("¡Algo salió mal!", "El campo trámite no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
        $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin').removeAttr('disabled');
        $('#nombreEstadoAdmTraFin').removeAttr('disabled');
        $('#nombreTramiteAdmTraFin').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
        $('#nombreDestinoAdmTraFin').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin1').removeAttr('disabled');

        return false;
    }

    if (nombreExpedienteAdmTraFin == '') {
        swal("¡Algo salió mal!", "El campo número de expediente no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
        $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin').removeAttr('disabled');
        $('#nombreEstadoAdmTraFin').removeAttr('disabled');
        $('#nombreTramiteAdmTraFin').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
        $('#nombreDestinoAdmTraFin').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin1').removeAttr('disabled');
        return false;
    }

    if (nombreAbogadoAdmTraFin == '') {
        swal("¡Algo salió mal!", "El campo abogado no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
        $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin').removeAttr('disabled');
        $('#nombreEstadoAdmTraFin').removeAttr('disabled');
        $('#nombreTramiteAdmTraFin').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
        $('#nombreDestinoAdmTraFin').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin1').removeAttr('disabled');
        return false;
    }

    if (nombreDestinoAdmTraFin == '') {
        swal("¡Algo salió mal!", "El campo destino no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraFin').removeAttr('disabled');
        $('#nombreInmuebleAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin').removeAttr('disabled');
        $('#nombreEstadoAdmTraFin').removeAttr('disabled');
        $('#nombreTramiteAdmTraFin').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFin').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFin').removeAttr('disabled');
        $('#nombreDestinoAdmTraFin').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFin').removeAttr('disabled');
        $('#nombreOperacionAdmTraFin1').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idSolicitud', idSolicitudAdmTraFin);
    fd.append('nombre', nombreSolicitudAdmTraFin);
    fd.append('idTipoInmueble', nombreInmuebleAdmTraFin);
    fd.append('idTipoOperacion', nombreOperacionAdmTraFin);
    fd.append('idEstado', nombreEstadoAdmTraFin);
    fd.append('idTipoTramite', nombreTramiteAdmTraFin);
    fd.append('nroExpediente', nombreExpedienteAdmTraFin);
    fd.append('idAbogado', nombreAbogadoAdmTraFin);
    fd.append('destino', nombreDestinoAdmTraFin);
    fd.append('ubicacion', nombreUbicacionAdmTraFin);
    fd.append('descripcion', nombreOperacionAdmTraFin1);

    var max = parseInt($("#nuevoArchivoAdmTraFin .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-nfn"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Boton cerrar de la vista modal.
                    $("#cerrarfnAdmTraFinOculto").trigger("click");

                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraFin").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");

                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });

                        $("#guardarEnvNot").click(function () {
                            var idUsuAdmTraFin = $("#idUsuAdmTraFin").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();

                            var fdn = new FormData();
                            fdn.append('idSolicitud', idSolicitudAdmTraFin);
                            fdn.append('idUsuario', idUsuAdmTraFin);
                            fdn.append('descripcion', descripcionEnvNot);
                            fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });    
});

/***************FORMULARIO 5 o 6*****************/

function cerrarVentanacsAdmTraFin() {
    $("#botonescsAdmTraFinDos").css('visibility', 'hidden');
    $("#editarcsAdmTraFinDos").css('display', 'block');
    $("#guardarcsAdmTraFinDos").css('display', 'none');

    // trámite Finalizado
    $("#nombreAbogadoAdmTraFinDos option").remove();
    $("#nuevoArchivoAdmTraFinDos .form-group").remove();
    $('#nombreSolicitudAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraFinDos').attr('disabled', 'disabled');

    location.reload();
}

// Agregar archivos nuevos
$("#agregarcsAdmTraFinDos").click(function () {
    var contador = parseInt($("#nuevoArchivoAdmTraFinDos .form-group").length);
    contador += 1;
    $("#nuevoArchivoAdmTraFinDos").append('<div class="form-group">' +
                                    '<div class="input-group">' +
                                        '<input id="nombreArchivocs'+ contador +'" placeholder="" type="text" class="form-control" disabled="disabled">' +
                                        '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
                                            '<i class="fas fa-folder-open"></i>' +
                                            '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
                                            '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs'+ contador +'" id="input-file-preview-ncs'+ contador +'">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>');
    
    // Creo de forma dinámica los eventos para asignar en el los input de la vista.
    $(document).ready(function () {
        for (let i = 1; i <= contador; i++) {
            $(document).on("change", ".input-file-preview-ncs"+i, function () {
                filename = this.files[0].name;
                $("#nombreArchivocs"+i).val(filename);
            });        
        }
    });
});

// Quitar archivos nuevos.
$("#quitarcsAdmTraFinDos").click(function () {
    $("#nuevoArchivoAdmTraFinDos .form-group").last().remove();
});

//Botones dinamico de la vista modal.
$("#editarcsAdmTraFinDos").click(function () {
    // Botones de la vista modal.
    $("#botonescsAdmTraFinDos").css('visibility', 'visible');
    $("#editarcsAdmTraFinDos").css('display', 'none');
    $("#guardarcsAdmTraFinDos").css('display', 'block');

    // Campos de la vista modal.
    $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
    $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
    $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
    $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
    $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
    $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
    $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#guardarcsAdmTraFinDos").click(function () {
    // Campos habilitados para editar.
    $('#nombreSolicitudAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreEstadoAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreTramiteAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreExpedienteAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreAbogadoAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreDestinoAdmTraFinDos').attr('disabled', 'disabled');
    $('#nombreUbicacionAdmTraFinDos').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var idSolicitudAdmTraFinDos = $("#idSolicitudAdmTraFinDos").val();
    var nombreSolicitudAdmTraFinDos = $('#nombreSolicitudAdmTraFinDos').val();
    var nombreEstadoAdmTraFinDos = $('#nombreEstadoAdmTraFinDos').val();
    var nombreTramiteAdmTraFinDos = $('#nombreTramiteAdmTraFinDos').val();
    var nombreExpedienteAdmTraFinDos = $('#nombreExpedienteAdmTraFinDos').val();
    var nombreAbogadoAdmTraFinDos = $('#nombreAbogadoAdmTraFinDos').val();
    var nombreDestinoAdmTraFinDos = $('#nombreDestinoAdmTraFinDos').val();
    var nombreUbicacionAdmTraFinDos = $('#nombreUbicacionAdmTraFinDos').val();

    if (idSolicitudAdmTraFinDos == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
        return false;
    }

    if (nombreEstadoAdmTraFinDos == 0) {
        swal("¡Algo salió mal!", "El campo estado no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
        return false;
    }

    if (nombreTramiteAdmTraFinDos == 0) {
        swal("¡Algo salió mal!", "El campo trámite no puede quedar sin Opción, elija una.", "error");
        $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
        return false;
    }

    if (nombreExpedienteAdmTraFinDos == '') {
        swal("¡Algo salió mal!", "El campo número de expediente no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
        return false;
    }

    if (nombreAbogadoAdmTraFinDos == '') {
        swal("¡Algo salió mal!", "El campo abogado no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
        return false;
    }

    if (nombreDestinoAdmTraFinDos == '') {
        swal("¡Algo salió mal!", "El campo destino no puede quedar vacío.", "error");
        $('#nombreSolicitudAdmTraFinDos').removeAttr('disabled');
        $('#nombreEstadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreTramiteAdmTraFinDos').removeAttr('disabled');
        $('#nombreExpedienteAdmTraFinDos').removeAttr('disabled');
        $('#nombreAbogadoAdmTraFinDos').removeAttr('disabled');
        $('#nombreDestinoAdmTraFinDos').removeAttr('disabled');
        $('#nombreUbicacionAdmTraFinDos').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idSolicitud', idSolicitudAdmTraFinDos);
    fd.append('nombre', nombreSolicitudAdmTraFinDos);
    fd.append('idEstado', nombreEstadoAdmTraFinDos);
    fd.append('idTipoTramite', nombreTramiteAdmTraFinDos);
    fd.append('nroExpediente', nombreExpedienteAdmTraFinDos);
    fd.append('idAbogado', nombreAbogadoAdmTraFinDos);
    fd.append('destino', nombreDestinoAdmTraFinDos);
    fd.append('ubicacion', nombreUbicacionAdmTraFinDos);
    fd.append('idTipoInmueble', 0);
    fd.append('idTipoOperacion', 0);
    fd.append('descripcion', 0);

    var max = parseInt($("#nuevoArchivoAdmTraFinDos .form-group").length);
    for (var i = 1; i <= max; i++) {
        fd.append('archivos[]',$("#input-file-preview-ncs"+i)[0].files[0]);
    }

    fetch(url_base + 'api/fronteras/solicitud/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Boton cerrar de la vista modal.
                    $("#cerrarcsAdmTraFinDosOculto").trigger("click");

                    // Enviar notificación
                    $(document).ready(function () {
                        $("#EnvNotAdmTraFinDos").append('<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>');
                        $("#ejecutarModalEnvNot").trigger("click");

                        $("#EnviarNotificacion").on('hidden.bs.modal', function () {
                            alert("Esta accion se ejecuta al cerrar el modal")
                        });

                        $("#guardarEnvNot").click(function () {
                            var idUsuAdmTraFinDos = $("#idUsuAdmTraFinDos").val();
                            var descripcionEnvNot = $("#descripcionEnvNot").val();
                            var idUsuarioEmisor = $("#idUsuarioprueba").val();

                            var fdn = new FormData();
                            fdn.append('idSolicitud', idSolicitudAdmTraFinDos);
                            fdn.append('idUsuario', idUsuAdmTraFinDos);
                            fdn.append('descripcion', descripcionEnvNot);
                            fdn.append('idUsuarioEmisor', idUsuarioEmisor);
                            fetch(url_base + 'api/fronteras/notificacion/insertar-notificacion', {
                                method: "POST",
                                body: fdn
                            })
                                .then(resp => resp.json())
                                .then(respObj => {

                                    if (respObj.status == 0) {
                                        swal({ title: "¡Excelente!", text: "La notificación se guardo con éxito.", icon: "success", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    } else {
                                        swal({ title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar", }).then(function () {
                                            location.reload();
                                        });
                                    }
                                })
                                .catch(error => {
                                    swal("Algo salió mal!", error, "error");
                                });
                        });
                    });
                    // location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });    
});


/*********************************************
***************ADMIN > ESCRIBANO**************
*********************************************/

function cerrarVentanaEscribano() {
    $("#escribanoeditarfn").css('display', 'block');
    $("#escribanoguardarfn").css('display', 'none');

    $("#nuevoArchivoEscribano .form-group").remove();
    $('#escribanonombre').attr('disabled', 'disabled');
    $('#escribanodirpostal').attr('disabled', 'disabled');
    $('#escribanocodigopostal').attr('disabled', 'disabled');
    $('#escribanoprovincia').attr('disabled', 'disabled');
    $('#escribanoactivo').attr('disabled', 'disabled');
}

//Botones dinamico de la vista modal.
$("#escribanoeditarfn").click(function () {
    // Botones de la vista modal.
    $("#escribanoeditarfn").css('display', 'none');
    $("#escribanoguardarfn").css('display', 'block');

    // Campos de la vista modal.
    $('#escribanonombre').removeAttr('disabled');
    $('#escribanodirpostal').removeAttr('disabled');
    $('#escribanocodigopostal').removeAttr('disabled');
    $('#escribanoprovincia').removeAttr('disabled');
    $('#escribanoactivo').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#escribanoguardarfn").click(function () {
    // Campos habilitados para editar.
    $('#escribanonombre').attr('disabled', 'disabled');
    $('#escribanodirpostal').attr('disabled', 'disabled');
    $('#escribanocodigopostal').attr('disabled', 'disabled');
    $('#escribanoprovincia').attr('disabled', 'disabled');
    $('#escribanoactivo').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var CodEsc = $("#CodEsc").val();
    var escribanonombre = $('#escribanonombre').val();
    var escribanomail = $('#escribanomail').val();
    var escribanodirpostal = $('#escribanodirpostal').val();
    var escribanocodigopostal = $('#escribanocodigopostal').val();
    var escribanoprovincia = $('#escribanoprovincia').val();
    var escribanoactivo = $('#escribanoactivo').prop('checked')? 1 : 0;
    var escribanoprovincia = $('#escribanoprovincia').val();

    if (CodEsc == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#escribanonombre').removeAttr('disabled');
        $('#escribanodirpostal').removeAttr('disabled');
        $('#escribanocodigopostal').removeAttr('disabled');
        $('#escribanoprovincia').removeAttr('disabled');
        $('#escribanoactivo').removeAttr('disabled');
        return false;
    }

    if (escribanonombre == '') {
        swal("¡Algo salió mal!", "El campo nombre no puede quedar sin Opción, elija una.", "error");
        $('#escribanonombre').removeAttr('disabled');
        $('#escribanodirpostal').removeAttr('disabled');
        $('#escribanocodigopostal').removeAttr('disabled');
        $('#escribanoprovincia').removeAttr('disabled');
        $('#escribanoactivo').removeAttr('disabled');
        return false;
    }

    if (escribanodirpostal == '') {
        swal("¡Algo salió mal!", "El campo dirección no puede quedar sin Opción, elija una.", "error");
        $('#escribanonombre').removeAttr('disabled');
        $('#escribanodirpostal').removeAttr('disabled');
        $('#escribanocodigopostal').removeAttr('disabled');
        $('#escribanoprovincia').removeAttr('disabled');
        $('#escribanoactivo').removeAttr('disabled');
        return false;
    }

    if (escribanocodigopostal == '') {
        swal("¡Algo salió mal!", "El campo postal no puede quedar vacío.", "error");
        $('#escribanonombre').removeAttr('disabled');
        $('#escribanodirpostal').removeAttr('disabled');
        $('#escribanocodigopostal').removeAttr('disabled');
        $('#escribanoprovincia').removeAttr('disabled');
        $('#escribanoactivo').removeAttr('disabled');
        return false;
    }

    if (escribanoprovincia == 0) {
        swal("¡Algo salió mal!", "El campo provincia no puede quedar vacío.", "error");
        $('#escribanonombre').removeAttr('disabled');
        $('#escribanodirpostal').removeAttr('disabled');
        $('#escribanocodigopostal').removeAttr('disabled');
        $('#escribanoprovincia').removeAttr('disabled');
        $('#escribanoactivo').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idUsuario', CodEsc);
    fd.append('nombre', escribanonombre);
    fd.append('email', escribanomail);
    fd.append('direccion', escribanodirpostal);
    fd.append('cp', escribanocodigopostal);
    fd.append('idProvincia', escribanoprovincia);
    fd.append('activo', escribanoactivo);
    fd.append('profile', 1);

    // fetch(url_base + 'api/fronteras/usuario/editar', {
    fetch(url_base + 'api/fronteras/usuario/editarEscribano', {        
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Botones que pasa a su estado normal para editar y se refresca la pagina.
                    $("#escribanoeditarfn").css('display', 'block');
                    $("#escribanoguardarfn").css('display', 'none');
                    location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });
});





$("#eliminarescribanofn").click(function () {


    var url_base = $("#url_base").val();
    var CodEsc = $("#CodEsc").val();

    swal({
        title: "¡Atención!",
        text: "¿Está seguro de eliminar la solicitud del escribano?",
        icon: "warning",
        buttons: [
          'NO',
          'SI'
        ],
       
      }).then(function(isConfirm) {
        if (isConfirm) {

            var fd = new FormData();
            fd.append('idUsuario', CodEsc);
            
    
            fetch(url_base + 'api/fronteras/usuario/eliminarEscribano', {        
                method: "POST",
                body: fd
            })
                .then(resp => resp.json())
                .then(respObj => {
    
                    
                    if (respObj.status == 0) {
                        swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                            // Botones que pasa a su estado normal para editar y se refresca la pagina.
                            $("#escribanoeditarfn").css('display', 'block');
                            $("#escribanoguardarfn").css('display', 'none');
                            location.reload();
                        });
                    } else {
                        swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                            location.reload();
                        });
                    }
                })
                .catch(error => {
                    swal("Algo salió mal!", error, "error");
                });
        
    
        } else {
            swal.close()

        }
      });
  

   
    
  

    
});







/*********************************************
***************ADMIN > USUARIOS***************
*********************************************/

function cerrarVentanaUsuarios() {
    $("#usuarioseditarfn").css('display', 'block');
    $("#usuariosguardarfn").css('display', 'none');

    $('#usuariosnombre').attr('disabled', 'disabled');
    $('#usuariosdirpostal').attr('disabled', 'disabled');
    $('#usuarioscodigopostal').attr('disabled', 'disabled');
    $('#usuariosprovincia').attr('disabled', 'disabled');
    $('#usuariosperfil').attr('disabled', 'disabled');
    $('#usuariosclave').attr('disabled', 'disabled');
    $('#usuariosactivo').attr('disabled', 'disabled');
}

//Botones dinamico de la vista modal.
$("#usuarioseditarfn").click(function () {
    // Botones de la vista modal.
    $("#usuarioseditarfn").css('display', 'none');
    $("#usuariosguardarfn").css('display', 'block');

    // Campos de la vista modal.
    $('#usuariosnombre').removeAttr('disabled');
    $('#usuariosdirpostal').removeAttr('disabled');
    $('#usuarioscodigopostal').removeAttr('disabled');
    $('#usuariosprovincia').removeAttr('disabled');
    $('#usuariosperfil').removeAttr('disabled');
    $('#usuariosclave').removeAttr('disabled');
    $('#usuariosactivo').removeAttr('disabled');
});

// Guarda los cambios de los tramites nuevos.
$("#usuariosguardarfn").click(function () {
    // Campos habilitados para editar.
    $('#usuariosnombre').attr('disabled', 'disabled');
    $('#usuariosdirpostal').attr('disabled', 'disabled');
    $('#usuarioscodigopostal').attr('disabled', 'disabled');
    $('#usuariosprovincia').attr('disabled', 'disabled');
    $('#usuariosperfil').attr('disabled', 'disabled');
    $('#usuariosclave').attr('disabled', 'disabled');
    $('#usuariosactivo').attr('disabled', 'disabled');

    var url_base = $("#url_base").val();
    var CodUsu = $("#CodUsu").val();
    var usuariosnombre = $('#usuariosnombre').val();
    var usuariosmail = $('#usuariosmail').val();
    var usuariosdirpostal = $('#usuariosdirpostal').val();
    var usuarioscodigopostal = $('#usuarioscodigopostal').val();
    var usuariosprovincia = $('#usuariosprovincia').val();
    var usuariosperfil = $('#usuariosperfil').val();
    var usuariosclave = $('#usuariosclave').val();
    var usuariosactivo = $('#usuariosactivo').prop('checked')? 1 : 0;

    if (CodEsc == '') {
        swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
        $('#usuariosnombre').removeAttr('disabled');
        $('#usuariosdirpostal').removeAttr('disabled');
        $('#usuarioscodigopostal').removeAttr('disabled');
        $('#usuariosprovincia').removeAttr('disabled');
        $('#usuariosperfil').removeAttr('disabled');
        $('#usuariosclave').removeAttr('disabled');
        $('#usuariosactivo').removeAttr('disabled');
        return false;
    }

    if (usuariosnombre == '') {
        swal("¡Algo salió mal!", "El campo nombre no puede quedar sin Opción, elija una.", "error");
        $('#usuariosnombre').removeAttr('disabled');
        $('#usuariosdirpostal').removeAttr('disabled');
        $('#usuarioscodigopostal').removeAttr('disabled');
        $('#usuariosprovincia').removeAttr('disabled');
        $('#usuariosperfil').removeAttr('disabled');
        $('#usuariosclave').removeAttr('disabled');
        $('#usuariosactivo').removeAttr('disabled');
        return false;
    }

    if (usuariosdirpostal == '') {
        swal("¡Algo salió mal!", "El campo dirección no puede quedar sin Opción, elija una.", "error");
        $('#usuariosnombre').removeAttr('disabled');
        $('#usuariosdirpostal').removeAttr('disabled');
        $('#usuarioscodigopostal').removeAttr('disabled');
        $('#usuariosprovincia').removeAttr('disabled');
        $('#usuariosperfil').removeAttr('disabled');
        $('#usuariosclave').removeAttr('disabled');
        $('#usuariosactivo').removeAttr('disabled');
        return false;
    }

    if (usuarioscodigopostal == '') {
        swal("¡Algo salió mal!", "El campo postal no puede quedar vacío.", "error");
        $('#usuariosnombre').removeAttr('disabled');
        $('#usuariosdirpostal').removeAttr('disabled');
        $('#usuarioscodigopostal').removeAttr('disabled');
        $('#usuariosprovincia').removeAttr('disabled');
        $('#usuariosperfil').removeAttr('disabled');
        $('#usuariosclave').removeAttr('disabled');
        $('#usuariosactivo').removeAttr('disabled');
        return false;
    }

    if (usuariosprovincia == 0) {
        swal("¡Algo salió mal!", "El campo provincia no puede quedar vacío.", "error");
        $('#usuariosnombre').removeAttr('disabled');
        $('#usuariosdirpostal').removeAttr('disabled');
        $('#usuarioscodigopostal').removeAttr('disabled');
        $('#usuariosprovincia').removeAttr('disabled');
        $('#usuariosperfil').removeAttr('disabled');
        $('#usuariosclave').removeAttr('disabled');
        $('#usuariosactivo').removeAttr('disabled');
        return false;
    }


    var fd = new FormData();
    fd.append('idUsuario', CodUsu);
    fd.append('nombre', usuariosnombre);
    fd.append('email', usuariosmail);
    fd.append('direccion', usuariosdirpostal);
    fd.append('cp', usuarioscodigopostal);
    fd.append('idProvincia', usuariosprovincia);
    fd.append('profile', usuariosperfil);
    fd.append('clave', usuariosclave);
    fd.append('activo', usuariosactivo);

    fetch(url_base + 'api/fronteras/usuario/editar', {
        method: "POST",
        body: fd
    })
        .then(resp => resp.json())
        .then(respObj => {

            if (respObj.status == 0) {
                swal({ title: "¡Excelente!", text: "El cambio ha sido exitoso.", icon: "success", button: "Aceptar", }).then(function () {
                    // Botones que pasa a su estado normal para editar y se refresca la pagina.
                    $("#usuarioseditarfn").css('display', 'block');
                    $("#usuariosguardarfn").css('display', 'none');
                    location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });
});

// Admin > Menú principal > Usuarios > Boton insertar nuevo usuario.
$("#guardarInsUsuario").click(function () {
    var url_base = $("#url_base").val();
    var NueUsuarionombre = $("#NueUsuarionombre").val();
    var NueUsuariodirpostal = $("#NueUsuariodirpostal").val();
    var NueUsuariocodigopostal = $("#NueUsuariocodigopostal").val();
    var NueUsuarioprovincia = $("#NueUsuarioprovincia").val();
    var NueUsuariomail = $("#NueUsuariomail").val();
    var NueUsuarioclave = $("#NueUsuariosclave").val();
    var NueUsuarioperfil = $("#NueUsuarioperfil").val();

    if (NueUsuarionombre == '') {
        $("#nombresolicitud").addClass("is-invalid");
        swal("¡Algo salió mal!", "El campo 'Nombre y Apellido' no puede estar vacío.", "error");
        return false;
    }

    if (NueUsuariodirpostal == '') {
        $("#tipoinmueble").addClass("is-invalid");
        swal("¡Algo salió mal!", "El campo 'Dirección postal' no puede estar vacío.", "error");
        return false;
    }

    if (NueUsuariocodigopostal == '') {
        $("#tipooperacion").addClass("is-invalid");
        swal("¡Algo salió mal!", "El campo 'Código postal' no puede estar vacío.", "error");
        return false;
    }

    if (NueUsuarioprovincia == 0) {
        $("#nombresolicitud").addClass("is-invalid");
        swal("¡Algo salió mal!", "El campo 'Provincia' no puede estar vacío.", "error");
        return false;
    }

    if (NueUsuariomail == '') {
        $("#tipoinmueble").addClass("is-invalid");
        swal("¡Algo salió mal!", "El campo 'Mail' no puede estar vacío.", "error");
        return false;
    }
    if (NueUsuarioclave == '') {
        $("#tipoinmueble").addClass("is-invalid");
        swal("¡Algo salió mal!", "El campo 'Contraseña' no puede estar vacío.", "error");
        return false;
    }


    $('#guardarInsUsuario').attr('disabled', 'disabled');
    $('#cerrarAdmUsu').attr('disabled', 'disabled');    
    $('#imgCargando').attr('src', url_base + 'views/assets/images/loading-cargando.gif');

    // var fd = new FormData();
    // fd.append('nombre', NueUsuarionombre);
    // fd.append('email', NueUsuariomail);
    // fd.append('profile', NueUsuarioperfil);
    // fd.append('direccion', NueUsuariodirpostal);
    // fd.append('cp', NueUsuariocodigopostal);
    // fd.append('idProvincia', NueUsuarioprovincia);

    fetch(url_base + 'api/fronteras/usuario/insertar-usuario', {
        method: "POST",
        // body: fd
        body: JSON.stringify({ nombre: NueUsuarionombre, email: NueUsuariomail, profile: NueUsuarioperfil, direccion: NueUsuariodirpostal, cp: NueUsuariocodigopostal, idProvincia: NueUsuarioprovincia, password: NueUsuarioclave })
    })
        .then(resp => resp.json())
        .then(respObj => {
            if (respObj.status == 0) {
                swal({title: "¡Excelente!", text: respObj.message, icon: "success", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            } else {
                swal({title: "¡Algo salió mal!", text: respObj.message, icon: "error", button: "Aceptar",}).then(function(){
                    location.reload();
                });
            }
        })
        .catch(error => {
            swal("Algo salió mal!", error, "error");
        });
});


//MOSTRAR U OCULTAR CONTRASEÑA DEL ALTA DE USUARIOS
$("#button-view-claveUsu").click(function () {
    if ($("#viewerPassNueUsu").hasClass('fas fa-eye')) {
        $("#viewerPassNueUsu").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
        $("#NueUsuariosclave").attr('type', 'text');
    } else {
        $("#viewerPassNueUsu").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
        $("#NueUsuariosclave").attr('type', 'password');
    }
});

//MOSTRAR U OCULTAR CONTRASEÑA DEL ALTA DE USUARIOS
$("#button-view-claveusuvis").click(function () {
    if ($("#viewerPassUsu").hasClass('fas fa-eye')) {
        $("#viewerPassUsu").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
        $("#usuariosclave").attr('type', 'text');
    } else {
        $("#viewerPassUsu").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
        $("#usuariosclave").attr('type', 'password');
    }
});
