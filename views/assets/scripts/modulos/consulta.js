
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