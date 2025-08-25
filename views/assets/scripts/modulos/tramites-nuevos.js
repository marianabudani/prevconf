$(document).ready(function () {
  // Quitar archivos nuevos
  $("#quitarcs").click(function () {
    $("#nuevoArchivocs .form-group").last().remove();
  });

  var url_base = $("#url_base").val();
  var id = $("#idUsuario").val();

  fetch(url_base + "api/fronteras/solicitud/traer-nuevas", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        if ($.fn.DataTable.isDataTable("#tramitenuevo")) {
          $("#tramitenuevo").DataTable().clear().destroy();
        }
        $("#tramitenuevo").DataTable({
          dom: "Bfrtip",
          buttons: ["pdfHtml5"],
          language: idioma_espanol,
          data: respObj.message,
          columnDefs: [
            { title: "Fecha", targets: 0 },
            { title: "Nombre", targets: 1 },
            { title: "Escribano", targets: 2 },
            { title: "Tipo", targets: 3 },
            { title: "Tipo de trámite", targets: 4, searchable: true },
            { title: "Acciones", targets: 5, orderable: false },
          ],
          columns: [
            { data: "fecha" },
            { data: "nombre_solicitud" },
            { data: "nombre_escribano" },
            { data: "nombre_tipo_operacion" },
            { data: "nombre_tipo_formulario" },
            {
              render: function (data, type, row) {
                return (
                  "<button class='btn btn-primary' data-toggle='modal' data-target='#verformulariostranuev" +
                  row.id_tipo_formulario +
                  "' onClick='getAdmiFormNuevo(\"" +
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

function descargarArchivos() {
  var id_solicitud = $("#idSolicitudAdmTraProc").val();
  if (id_solicitud == "") {
    id_solicitud = $("#idSolicitudAdmTraNueDos").val();
  }
  if (id_solicitud == "") {
    id_solicitud = $("#idSolicitudAdmTraNue").val();
  }
  if (id_solicitud == "") {
    id_solicitud = $("#idSolicitudAdmTraFin").val();
  }

  var nombreExpedienteAdmTraProc = $("#nombreExpedienteAdmTraProc").val();

  let xhr = new XMLHttpRequest(),
    self = this;
  window.location =
    "api/fronteras/src/Utils/DescargaController.php?id_solicitud=" +
    id_solicitud +
    "&nombreExpedienteAdmTraProc=" +
    nombreExpedienteAdmTraProc;
}

function getAdmiFormNuevo(
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
          if ($.fn.DataTable.isDataTable("#notificacionesAdmPenComun")) {
            $("#notificacionesAdmPenComun").DataTable().clear().destroy();
          }
          $("#notificacionesAdmPenComun").DataTable({
            destroy: true,
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

    if ($("#nombreOperacionAdmTraNue").val() == "3") {
      $("#nombreOperacionAdmTraNue1").show();
    } else {
      $("#nombreOperacionAdmTraNue1").hide();
    }

    if (destino === "null") {
      $("#nombreDestinoAdmTraNue").val("");
    } else {
      $("#nombreDestinoAdmTraNue").val(destino);
    }

    // Traigo todo los abogados
    fetch(url_base + "api/fronteras/usuario/traer-abogados-activos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((respObj) => {
        if (respObj.status == 0) {
          var NomAbog = respObj.message;

          $("#nombreAbogadoAdmTraNue").append(
            '<option value="0">Elija una opción</option>'
          );
          for (var ia = 0; ia < NomAbog.length; ia++) {
            if (NomAbog[ia]["id"] == id_abogado) {
              $("#nombreAbogadoAdmTraNue").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '" selected>' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            } else {
              $("#nombreAbogadoAdmTraNue").append(
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
      if (datos[i] != "null" && datos[i] != "") {
        $("#nuevoArchivoAdmTraNue").append(
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
          if ($.fn.DataTable.isDataTable("#notificacionesAdmPen5o6")) {
            $("#notificacionesAdmPen5o6").DataTable().clear().destroy();
          }
          $("#notificacionesAdmPen5o6").DataTable({
            destroy: true,
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
    fetch(url_base + "api/fronteras/usuario/traer-abogados-activos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((respObj) => {
        if (respObj.status == 0) {
          var NomAbog = respObj.message;

          $("#nombreAbogadoAdmTraNueDos").append(
            '<option value="0">Elija una opción</option>'
          );
          for (var ia = 0; ia < NomAbog.length; ia++) {
            if (NomAbog[ia]["id"] == id_abogado) {
              $("#nombreAbogadoAdmTraNueDos").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '" selected>' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            } else {
              $("#nombreAbogadoAdmTraNueDos").append(
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
      if (datos[i] != "null" && datos[i] != "") {
        $("#nuevoArchivoAdmTraNueDos").append(
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
}

function getAdmiFormProceso(
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
        if ($.fn.DataTable.isDataTable("#notificacionesAdmPen5o6")) {
          $("#notificacionesAdmPen5o6").DataTable().clear().destroy();
        }
        $("#notificacionesAdmPen5o6").DataTable({
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
          if ($.fn.DataTable.isDataTable("#notificacionesAdmProComun")) {
            $("#notificacionesAdmProComun").DataTable().clear().destroy();
          }
          $("#notificacionesAdmProComun").DataTable({
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

    if ($("#nombreOperacionAdmTraProc").val() == "3") {
      $("#nombreOperacionAdmTraProc1").show();
    } else {
      $("#nombreOperacionAdmTraProc1").hide();
    }

    // Traigo todo los abogados
    fetch(url_base + "api/fronteras/usuario/traer-abogados-activos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((respObj) => {
        if (respObj.status == 0) {
          var NomAbog = respObj.message;

          $("#nombreAbogadoAdmTraProc").append(
            '<option value="0">Elija una opción</option>'
          );
          for (var ia = 0; ia < NomAbog.length; ia++) {
            if (NomAbog[ia]["id"] == id_abogado) {
              $("#nombreAbogadoAdmTraProc").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '" selected>' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            } else {
              $("#nombreAbogadoAdmTraProc").append(
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
      if (datos[i] != "null" && datos[i] != "") {
        $("#nuevoArchivoAdmTraProc").append(
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
          if ($.fn.DataTable.isDataTable("#notificacionesAdmPro5o6")) {
            $("#notificacionesAdmPro5o6").DataTable().clear().destroy();
          }
          $("#notificacionesAdmPro5o6").DataTable({
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
    fetch(url_base + "api/fronteras/usuario/traer-abogados-activos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((respObj) => {
        if (respObj.status == 0) {
          var NomAbog = respObj.message;

          $("#nombreAbogadoAdmTraProcDos").append(
            '<option value="0">Elija una opción</option>'
          );
          for (var ia = 0; ia < NomAbog.length; ia++) {
            if (NomAbog[ia]["id"] == id_abogado) {
              $("#nombreAbogadoAdmTraProcDos").append(
                '<option value="' +
                  NomAbog[ia]["id"] +
                  '" selected>' +
                  NomAbog[ia]["nombre"] +
                  "</option>"
              );
            } else {
              $("#nombreAbogadoAdmTraProcDos").append(
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
      if (datos[i] != "null" && datos[i] != "") {
        $("#nuevoArchivoAdmTraProcDos").append(
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
}
