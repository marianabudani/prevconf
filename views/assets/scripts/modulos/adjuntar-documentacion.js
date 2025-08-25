// tabla de adjuntar documentación trámites ya iniciados
$(document).ready(function () {
  var url_base = $("#url_base").val();
  var id = $("#idUsuario").val();

  if (id === "no definido" || url_base === "") {
    return false;
  }

  fetch(
    url_base +
      "api/fronteras/solicitud/traer-por-escribano?id=" +
      id +
      "&faltaDocumentacion=true",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }
  )
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        $("#registroformulario").DataTable({
          language: idioma_espanol,
          data: respObj.message,
          columnDefs: [
            { title: "Nombre", targets: 0 },
            { title: "Escribano", targets: 1 },
            { title: "Fecha", targets: 2 },
            { title: "Tipo", targets: 3 },
            { title: "Estado", targets: 4 },
            { title: "Tipo de trámite", targets: 5, searchable: true },
            { title: "Acciones", targets: 6, orderable: false },
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
                return (
                  "<button class='btn btn-primary' data-toggle='modal' data-target='#verformularios" +
                  row.id_tipo_formulario +
                  "' onClick='getFormularioAdjDoc(\"" +
                  row.id_usuario +
                  '","' +
                  row.id_solicitud +
                  '","' +
                  row.id_tipo_formulario +
                  '","' +
                  row.nombre_solicitud.replace(/['"]+/g, "") +
                  '","' +
                  row.nombre_escribano +
                  '","' +
                  row.id_tipo_inmueble +
                  '","' +
                  row.fecha +
                  '","' +
                  row.id_tipo_operacion +
                  '","' +
                  row.id_estado +
                  '","' +
                  row.id_tipo_tramite +
                  '","' +
                  row.nro_expediente.replace(/['"]+/g, "") +
                  '","' +
                  row.nombre_abogado +
                  '","' +
                  row.destino.replace(/['"]+/g, "") +
                  '","' +
                  row.archivos +
                  '","' +
                  row.ubicacion.replace(/['"]+/g, "").replace(/['"]+/g, "") +
                  '","' +
                  row.descripcion +
                  "\");'>Visualizar</button>"
                );
              },
            },
          ],
        });
      } else {
        swal({
          title: "¡Algo salió mal!",
          text: respObj.message,
          icon: "error",
          button: "Aceptar",
        }).then(function () {
          location.reload();
        });
      }
    })
    .catch((error) => {
      swal({ title: "¡Error!", text: error, icon: "error" });
    });
});

function getFormularioAdjDoc(
  id_usuario,
  id_solicitud,
  id_tipo_formulario,
  nombre_solicitud,
  nombre_escribano,
  id_tipo_inmueble,
  fecha,
  id_tipo_operacion,
  id_estado,
  id_tipo_tramite,
  nro_expediente,
  nombre_abogado,
  destino,
  archivos,
  ubicacion,
  descripcion
) {
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

    if ($("#nombreOperacionEscAdjDoc").val() == "3") {
      $("#nombreOperacionEscAdjDoc1").show();
    } else {
      $("#nombreOperacionEscAdjDoc1").hide();
    }

    var datos = archivos.split(",");

    for (var i = 0; i < datos.length; i++) {
      $("#nuevoArchivofn").append(
        '<div class="form-group">' +
          '<div class="input-group">' +
          '<a href="' +
          datos[i] +
          '" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
          '<input id="nombreArchivofn' +
          parseInt(i + 1) +
          '" value="' +
          datos[i] +
          '" placeholder="" type="text" class="form-control" disabled="disabled">' +
          '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
          '<i class="fas fa-folder-open"></i>' +
          '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
          '<input type="file" class="input-file-preview-nfn' +
          parseInt(i + 1) +
          '" id="input-file-preview-nfn' +
          parseInt(i + 1) +
          '" disabled="disabled">' +
          "</div>" +
          "</div>" +
          "</div>"
      );
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

    var datos = archivos.split(",");

    for (var i = 0; i < datos.length; i++) {
      $("#nuevoArchivocs").append(
        '<div class="form-group">' +
          '<div class="input-group">' +
          '<a href="' +
          datos[i] +
          '" class="btn btn-default border" download><i class="fa fa-download"></i></a>' +
          '<input id="nombreArchivocs' +
          parseInt(i + 1) +
          '" value="' +
          datos[i] +
          '" placeholder="" type="text" class="form-control" disabled="disabled">' +
          '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
          '<i class="fas fa-folder-open"></i>' +
          '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
          '<input type="file" class="input-file-preview-ncs' +
          parseInt(i + 1) +
          '" id="input-file-preview-ncs' +
          parseInt(i + 1) +
          '" disabled="disabled">' +
          "</div>" +
          "</div>" +
          "</div>"
      );
    }
  }
}
