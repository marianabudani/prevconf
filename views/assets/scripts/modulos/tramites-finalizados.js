$(document).ready(function () {
  var url_base = $("#url_base").val();
  var id = $("#idUsuario").val();

  fetch(url_base + "api/fronteras/solicitud/traer-finalizadas", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        if ($.fn.DataTable.isDataTable("#tramitesfinalizados")) {
          $("#tramitesfinalizados").DataTable().clear().destroy();
        }
        $("#tramitesfinalizados").DataTable({
          dom: "Bfrtip",
          buttons: ["pdfHtml5"],
          language: idioma_espanol,
          data: respObj.message,
          columnDefs: [
            { title: "Fecha", targets: 0 },
            { title: "Nombre", targets: 1 },
            { title: "Escribano", targets: 2 },
            { title: "Tipo", targets: 3 },
            { title: "Estado", targets: 4 },
            { title: "Tipo de trámite", targets: 5, searchable: true },
            { title: "Acciones", targets: 6, orderable: false },
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
                return (
                  "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariostrafina" +
                  row.id_tipo_formulario +
                  "' onClick='getAdmiFormFinalizado(\"" +
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
                  row.id_abogado +
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
          order: [[0, "desc"]],
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

function getAdmiFormFinalizado(
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
  id_abogado,
  nombre_abogado,
  destino,
  archivos,
  ubicacion,
  descripcion
) {
  var url_base = $("#url_base").val();

  if (id_tipo_formulario == 1) {
    // tabla de notificaciones dentro de formularios
    fetch(
      url_base +
        "api/fronteras/notificacion/traer-por-solicitud?idSolicitud=" +
        id_solicitud,
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
          if ($.fn.DataTable.isDataTable("#notificacionesAdmFinComun")) {
            $("#notificacionesAdmFinComun").DataTable().clear().destroy();
          }

          $("#notificacionesAdmFinComun").DataTable({
            language: idioma_espanol,
            data: respObj.message,
            columnDefs: [
              { title: "Fecha", targets: 0 },
              { title: "Descripción", targets: 1 },
              { title: "¿Leido?", targets: 2, orderable: false },
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
                },
              },
            ],
            order: [[0, "desc"]],
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

    if ($("#nombreOperacionAdmTraFin").val() == "3") {
      $("#nombreOperacionAdmTraFin1").show();
    } else {
      $("#nombreOperacionAdmTraFin1").hide();
    }

    // Traigo todo los abogados
    fetch(url_base + "api/fronteras/usuario/traer-abogados-activos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((respObj) => {
        if (respObj.status == 0) {
          var NomAbog = respObj.message;

          $("#nombreAbogadoAdmTraFin").append(
            '<option value="0">Elija una opción</option>'
          );
          for (var ia = 0; ia < NomAbog.length; ia++) {
            if (NomAbog[ia]["id"] == id_abogado) {
              $("#nombreAbogadoAdmTraFin").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '" selected>' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            } else {
              $("#nombreAbogadoAdmTraFin").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '">' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            }
          }
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
        swal("Algo salió mal!", error, "error");
      });

    // muestro todo los archivos.
    var datos = archivos.split(",");
    for (var i = 0; i < datos.length; i++) {
      $("#nuevoArchivoAdmTraFin").append(
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
    // tabla de notificaciones dentro de formularios
    fetch(
      url_base +
        "api/fronteras/notificacion/traer-por-solicitud?idSolicitud=" +
        id_solicitud,
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
          if ($.fn.DataTable.isDataTable("#notificacionesAdmFin5o6")) {
            $("#notificacionesAdmFin5o6").DataTable().clear().destroy();
          }
          $("#notificacionesAdmFin5o6").DataTable({
            language: idioma_espanol,
            data: respObj.message,
            columnDefs: [
              { title: "Fecha", targets: 0 },
              { title: "Descripción", targets: 1 },
              { title: "¿Leido?", targets: 2, orderable: false },
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
                },
              },
            ],
            order: [[0, "desc"]],
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
    fetch(url_base + "api/fronteras/usuario/traer-abogados-activos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((respObj) => {
        if (respObj.status == 0) {
          var NomAbog = respObj.message;

          $("#nombreAbogadoAdmTraFinDos").append(
            '<option value="0">Elija una opción</option>'
          );
          for (var ia = 0; ia < NomAbog.length; ia++) {
            if (NomAbog[ia]["id"] == id_abogado) {
              $("#nombreAbogadoAdmTraFinDos").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '" selected>' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            } else {
              $("#nombreAbogadoAdmTraFinDos").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '">' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            }
          }
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
        swal("Algo salió mal!", error, "error");
      });

    // muestro todo los archivos.
    var datos = archivos.split(",");
    for (var i = 0; i < datos.length; i++) {
      $("#nuevoArchivoAdmTraFinDos").append(
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
