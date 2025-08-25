// tabla abogado tramite finalizado
$(document).ready(function () {
  var url_base = $("#url_base").val();
  var id = $("#idUsuario").val();

  if (id === "no definido" || url_base === "") {
    // swal({ title: "¡Error!", text: "Los datos no fueron cargados, porque no esta definida la ruta.", icon: "error" })
    return false;
  }

  fetch(
    url_base + "api/fronteras/solicitud/traer-finalizadas?idAbogado=" + id,
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
        $("#abogtramitesfinalizados").DataTable({
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
                  "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariosabogfina" +
                  row.id_tipo_formulario +
                  "' onClick='getAbogFormFinalizado(\"" +
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
                  row.ubicacion.replace(/['"]+/g, "") +
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

function getAbogFormFinalizado(
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

    if ($("#nombreOperacionAboTraFin").val() == "3") {
      $("#nombreOperacionAboTraFin1").show();
    } else {
      $("#nombreOperacionAboTraFin1").hide();
    }

    var datos = archivos.split(",");

    for (var i = 0; i < datos.length; i++) {
      $("#nuevoArchivoAbogTraFin").append(
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
    $("#nombreSolicitudAboTraFinDos").val(nombre_solicitud);
    $("#nombreEscribanoAboTraFinDos").val(nombre_escribano);
    $("#nombreFechaAboTraFinDos").val(fecha);
    $("#nombreEstadoAboTraFinDos").val(id_estado);
    $("#nombreTramiteAboTraFinDos").val(id_tipo_tramite);
    $("#nombreExpedienteAboTraFinDos").val(nro_expediente);
    $("#nombreAbogadoAboTraFinDos").val(nombre_abogado);
    $("#nombreDestinoAboTraFinDos").val(destino);
    $("#nombreUbicacionAboTraFinDos").val(ubicacion);

    var datos = archivos.split(",");

    for (var i = 0; i < datos.length; i++) {
      $("#nuevoArchivoAbogTraFinDos").append(
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
