/*************************************
 *********IDIOMA DE LAS TABLAS*********
 *************************************/
$("#descripcionn").hide();

var idioma_espanol = {
  processing: "Procesando...",
  lengthMenu: "Mostrar _MENU_ registros",
  zeroRecords: "No se encontraron resultados",
  emptyTable: "Ningún dato disponible en esta tabla",
  infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
  infoFiltered: "(filtrado de un total de _MAX_ registros)",
  search: "Buscar:",
  infoThousands: ",",
  loadingRecords: "Cargando...",
  paginate: {
    first: "Primero",
    last: "Último",
    next: "Siguiente",
    previous: "Anterior",
  },
  aria: {
    sortAscending: ": Activar para ordenar la columna de manera ascendente",
    sortDescending: ": Activar para ordenar la columna de manera descendente",
  },
  buttons: {
    copy: "Copiar",
    colvis: "Visibilidad",
    collection: "Colección",
    colvisRestore: "Restaurar visibilidad",
    copyKeys:
      "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.",
    copySuccess: {
      1: "Copiada 1 fila al portapapeles",
      _: "Copiadas %d fila al portapapeles",
    },
    copyTitle: "Copiar al portapapeles",
    csv: "CSV",
    excel: "Excel",
    pageLength: {
      "-1": "Mostrar todas las filas",
      1: "Mostrar 1 fila",
      _: "Mostrar %d filas",
    },
    pdf: "PDF",
    print: "Imprimir",
  },
  autoFill: {
    cancel: "Cancelar",
    fill: "Rellene todas las celdas con <i>%d</i>",
    fillHorizontal: "Rellenar celdas horizontalmente",
    fillVertical: "Rellenar celdas verticalmentemente",
  },
  decimal: ",",
  searchBuilder: {
    add: "Añadir condición",
    button: {
      0: "Constructor de búsqueda",
      _: "Constructor de búsqueda (%d)",
    },
    clearAll: "Borrar todo",
    condition: "Condición",
    conditions: {
      date: {
        after: "Despues",
        before: "Antes",
        between: "Entre",
        empty: "Vacío",
        equals: "Igual a",
        notBetween: "No entre",
        notEmpty: "No Vacio",
        not: "Diferente de",
      },
      number: {
        between: "Entre",
        empty: "Vacio",
        equals: "Igual a",
        gt: "Mayor a",
        gte: "Mayor o igual a",
        lt: "Menor que",
        lte: "Menor o igual que",
        notBetween: "No entre",
        notEmpty: "No vacío",
        not: "Diferente de",
      },
      string: {
        contains: "Contiene",
        empty: "Vacío",
        endsWith: "Termina en",
        equals: "Igual a",
        notEmpty: "No Vacio",
        startsWith: "Empieza con",
        not: "Diferente de",
      },
      array: {
        not: "Diferente de",
        equals: "Igual",
        empty: "Vacío",
        contains: "Contiene",
        notEmpty: "No Vacío",
        without: "Sin",
      },
    },
    data: "Data",
    deleteTitle: "Eliminar regla de filtrado",
    leftTitle: "Criterios anulados",
    logicAnd: "Y",
    logicOr: "O",
    rightTitle: "Criterios de sangría",
    title: {
      0: "Constructor de búsqueda",
      _: "Constructor de búsqueda (%d)",
    },
    value: "Valor",
  },
  searchPanes: {
    clearMessage: "Borrar todo",
    collapse: {
      0: "Paneles de búsqueda",
      _: "Paneles de búsqueda (%d)",
    },
    count: "{total}",
    countFiltered: "{shown} ({total})",
    emptyPanes: "Sin paneles de búsqueda",
    loadMessage: "Cargando paneles de búsqueda",
    title: "Filtros Activos - %d",
  },
  select: {
    1: "%d fila seleccionada",
    _: "%d filas seleccionadas",
    cells: {
      1: "1 celda seleccionada",
      _: "$d celdas seleccionadas",
    },
    columns: {
      1: "1 columna seleccionada",
      _: "%d columnas seleccionadas",
    },
  },
  thousands: ".",
  datetime: {
    previous: "Anterior",
    next: "Proximo",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    unknown: "-",
    amPm: ["am", "pm"],
  },
  editor: {
    close: "Cerrar",
    create: {
      button: "Nuevo",
      title: "Crear Nuevo Registro",
      submit: "Crear",
    },
    edit: {
      button: "Editar",
      title: "Editar Registro",
      submit: "Actualizar",
    },
    remove: {
      button: "Eliminar",
      title: "Eliminar Registro",
      submit: "Eliminar",
      confirm: {
        _: "¿Está seguro que desea eliminar %d filas?",
        1: "¿Está seguro que desea eliminar 1 fila?",
      },
    },
    error: {
      system:
        'Ha ocurrido un error en el sistema (<a target="\\" rel="\\ nofollow" href="\\">Más información&lt;\\/a&gt;).</a>',
    },
    multi: {
      title: "Múltiples Valores",
      info: "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
      restore: "Deshacer Cambios",
      noMulti:
        "Este registro puede ser editado individualmente, pero no como parte de un grupo.",
    },
  },
  info: "Mostrando de _START_ a _END_ de _TOTAL_ registros",
};

function d1(selectTag) {
  if (selectTag.value == "3") {
    document.getElementById("descripcionn").disabled = false;
    $("#descripcionn").show();
  } else {
    $("#descripcionn").hide();
    document.getElementById("descripcionn").disabled = true;
  }
}

function d2(selectTag) {
  if (selectTag.value == "3") {
    document.getElementById("nombreOperacionAdmTraNue1").disabled = false;
    $("#nombreOperacionAdmTraNue1").show();
  } else {
    $("#nombreOperacionAdmTraNue1").hide();
    document.getElementById("nombreOperacionAdmTraNue1").disabled = true;
  }
}

function d3(selectTag) {
  if (selectTag.value == "3") {
    document.getElementById("nombreOperacionAdmTraProc1").disabled = false;
    $("#nombreOperacionAdmTraProc1").show();
  } else {
    $("#nombreOperacionAdmTraProc1").hide();
    document.getElementById("nombreOperacionAdmTraProc1").disabled = true;
  }
}

function d4(selectTag) {
  if (selectTag.value == "3") {
    document.getElementById("nombreOperacionAdmTraFin1").disabled = false;
    $("#nombreOperacionAdmTraFin1").show();
  } else {
    $("#nombreOperacionAdmTraFin1").hide();
    document.getElementById("nombreOperacionAdmTraFin1").disabled = true;
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
  $("#nuevoArchivofn").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivofn' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input accept=".pdf, .jpg, .jpeg, .png" type="file" class="input-file-preview-nfn' +
      contador +
      '" id="input-file-preview-nfn' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-nfn" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivofn" + i).val(filename);
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
  $("#guardarnuevofn").prop("disabled", true);

  var url_base = $("#url_base").val();
  var idUsuario = $("#idUsuario").val();
  var nombresolicitud = $("#nombresolicitud").val();
  var tipoinmueble = $("#tipoinmueble").val();
  var tipooperacion = $("#tipooperacion").val();
  var nombreArchivofn1 = $("#nombreArchivofn1").val();
  var ubicacion = $("#ubicacion").val();
  var descripcionn = $("#descripcionn").val();

  if (nombresolicitud == "") {
    $("#nombresolicitud").addClass("is-invalid");
    $("#guardarnuevofn").prop("disabled", false);
    swal(
      "¡Algo salió mal!",
      "El campo 'Nombre de solicitud' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (tipoinmueble == 0) {
    $("#tipoinmueble").addClass("is-invalid");
    $("#guardarnuevofn").prop("disabled", false);
    swal(
      "¡Algo salió mal!",
      "El campo 'Tipo de inmueble' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (tipooperacion == 0) {
    $("#tipooperacion").addClass("is-invalid");
    $("#guardarnuevofn").prop("disabled", false);
    swal(
      "¡Algo salió mal!",
      "El campo 'Tipo de operación' no puede estar vacío.",
      "error"
    );
    return false;
  }
  if (ubicacion == 0) {
    $("#tipooperacion").addClass("is-invalid");
    $("#guardarnuevofn").prop("disabled", false);
    swal(
      "¡Algo salió mal!",
      "El campo 'Ubicación' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (
    nombreArchivofn1 == "" ||
    nombreArchivofn1 == null ||
    nombreArchivofn1 == undefined
  ) {
    $("#nombreArchivofn1").addClass("is-invalid");
    swal("¡Algo salió mal!", "No hay archivo adjunto.", "error");
    $("#guardarnuevofn").prop("disabled", false);
    return false;
  }

  var fd = new FormData();
  fd.append("idUsuario", idUsuario);
  fd.append("nombre", nombresolicitud);
  fd.append("idTipoInmueble", tipoinmueble);
  fd.append("idTipoOperacion", tipooperacion);
  fd.append("ubicacion", ubicacion);
  fd.append("descripcion", descripcionn);
  fd.append("idTipoFormulario", 1);

  var max = parseInt($("#nuevoArchivofn .form-group").length);
  for (let i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-nfn" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/insertar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: respObj.message,
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          location.reload();
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
      $("#guardarnuevofn").prop("disabled", false);
      swal("Algo salió mal!", error, "error");
    });
});

// Editar, guardar y cerrar
$("#editarfn").click(function () {
  $("#botonesfn").css("visibility", "visible");
  $("#nuevoArchivofn").css("display", "block");
  $("#editarfn").css("display", "none");
  $("#guardarfn").css("display", "block");
});

$("#guardarfn").click(function () {
  $("#guardarfn").prop("disabled", true);
  var url_base = $("#url_base").val();
  var id_solicitud = $("#id_solicitudEscAdjDoc").val();

  var fd = new FormData();
  var max = parseInt($("#nuevoArchivofn .form-group").length);
  for (let i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-nfn" + i)[0].files[0]);
  }

  fetch(
    url_base +
      "api/fronteras/solicitud/cargar-documentacion?idSolicitud=" +
      id_solicitud,
    {
      method: "POST",
      body: fd,
    }
  )
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          $("#cerrarfn").trigger("click");
          ///agregamos para envio
          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraNue1").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              $("#guardarEnvNot").prop("disabled", true);
              var idUsuAdmTraNue = $("#idUsuAdmTraNue").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();
              // if (descripcionEnvNot == '') {
              //     swal("¡Algo salió mal!", "El campo descripcion no puede quedar vacío.", "error");
              //     return false;
              // }

              var fdn = new FormData();
              fdn.append("idSolicitud", id_solicitud);
              fdn.append("idUsuario", idUsuAdmTraNue);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  $("#guardarEnvNot").prop("disabled", false);
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
        });
      } else {
        swal({
          title: "¡Algo salió mal!",
          text: "No se pudo hacer los cambios.",
          icon: "error",
          button: "Aceptar",
        }).then(function () {
          location.reload();
        });
      }
    })

    .catch((error) => {
      $("#guardarfn").prop("disabled", false);
      swal("Algo salió mal!", error, "error");
    });
});

function cerrarVentanafn() {
  $("#botonesfn").css("visibility", "hidden");
  $("#editarfn").css("display", "block");
  $("#guardarfn").css("display", "none");

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
  $("#nuevoArchivocs").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivocs' +
      contadorcs +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs' +
      contadorcs +
      '" id="input-file-preview-ncs' +
      contadorcs +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let ics = 1; ics <= contadorcs; ics++) {
      $(document).on("change", ".input-file-preview-ncs" + ics, function () {
        filename = this.files[0].name;
        // console.log(filename);
        // console.log($("#input-file-preview-ncs1")[0].files[0]);
        $("#nombreArchivocs" + ics).val(filename);
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
  $("#guardarnuevocs").prop("disabled", true);

  var url_base = $("#url_base").val();
  var idUsuario = $("#idUsuario").val();
  var nombresolicitudcs = $("#nombresolicitudcs").val();
  var ubicacioncs = $("#ubicacioncs").val();
  var nombreArchivocs1 = $("#nombreArchivocs1").val();

  if (nombresolicitudcs == "") {
    $("#nombresolicitud").addClass("is-invalid");
    $("#guardarnuevocs").prop("disabled", false);
    swal(
      "¡Algo salió mal!",
      "El campo 'Nombre de solicitud' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (ubicacioncs == 0) {
    $("#tipooperacion").addClass("is-invalid");
    $("#guardarnuevocs").prop("disabled", false);
    swal(
      "¡Algo salió mal!",
      "El campo 'Ubicación' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (
    nombreArchivocs1 == "" ||
    nombreArchivocs1 == null ||
    nombreArchivocs1 == undefined
  ) {
    $("#nombreArchivocs1").addClass("is-invalid");
    $("#guardarnuevocs").prop("disabled", false);
    swal("¡Algo salió mal!", "No hay archivo adjunto.", "error");
    return false;
  }

  var fd = new FormData();
  fd.append("idUsuario", idUsuario);
  fd.append("nombre", nombresolicitudcs);
  fd.append("ubicacion", ubicacioncs);
  fd.append("idTipoInmueble", 0);
  fd.append("idTipoOperacion", 0);
  fd.append("descripcion", 0);
  fd.append("idTipoFormulario", 2);

  var max = parseInt($("#nuevoArchivocs .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-ncs" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/insertar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        //Cambiar el tipo de status
        swal({
          title: "¡Excelente!",
          text: respObj.message,
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          location.reload();
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
      $("#guardarnuevocs").prop("disabled", false);
      swal("Algo salió mal!", error, "error");
    });
});

// Editar, guardar y cerrar
$("#editarcs").click(function () {
  $("#botonescs").css("visibility", "visible");
  $("#nuevoArchivocs").css("display", "block");
  $("#editarcs").css("display", "none");
  $("#guardarcs").css("display", "block");
});

function cerrarVentanacs() {
  $("#botonescs").css("visibility", "hidden");
  $("#editarcs").css("display", "block");
  $("#guardarcs").css("display", "none");

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

  if (idSolicitud == "") {
    swal(
      "¡Algo salió mal!",
      "No existe la solicitud que lo relaciona.",
      "error"
    );
    return false;
  }

  var fd = new FormData();

  var max = parseInt($("#nuevoArchivocs .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-ncs" + i)[0].files[0]);
  }

  fetch(
    url_base +
      "api/fronteras/solicitud/cargar-documentacion?idSolicitud=" +
      idSolicitud,
    {
      method: "POST",
      body: fd,
    }
  )
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          $("#cerrarcs").trigger("click");
          ///agregamos para envio
          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraNueDos").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
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
              fdn.append("idSolicitud", idSolicitud);
              fdn.append("idUsuario", idUsuAdmTraNue);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
        });
      } else {
        swal({
          title: "¡Algo salió mal!",
          text: "Los cambios no efectuaron bien, por favor intenté de nuevo.",
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
});

/*************************************************
 ***********ADMIN > TRÁMITE NUEVO******************
 *************************************************/

/***************FORMULARIO NUEVO*****************/

function cerrarVentanafnAdmTraNue() {
  $("#botonesfnAdmTraNue").css("visibility", "hidden");
  $("#editarfnAdmTraNue").css("display", "block");
  $("#guardarfnAdmTraNue").css("display", "none");

  // trámite nuevo
  $("#nombreAbogadoAdmTraNue option").remove();
  $("#nuevoArchivoAdmTraNue .form-group").remove();
  $("#nombreSolicitudAdmTraNue").attr("disabled", "disabled");
  $("#nombreInmuebleAdmTraNue").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraNue").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraNue").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraNue").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraNue").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraNue").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraNue").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraNue").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraNue1").attr("disabled", "disabled");
}

// Agregar archivos nuevos
$("#agregarfnAdmTraNue").click(function () {
  var contador = parseInt($("#nuevoArchivoAdmTraNue .form-group").length);
  contador += 1;
  $("#nuevoArchivoAdmTraNue").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivofn' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn' +
      contador +
      '" id="input-file-preview-nfn' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-nfn" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivofn" + i).val(filename);
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
  $("#botonesfnAdmTraNue").css("visibility", "visible");
  $("#editarfnAdmTraNue").css("display", "none");
  $("#guardarfnAdmTraNue").css("display", "block");

  // Campos de la vista modal.
  $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
  $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
  $("#nombreOperacionAdmTraNue").removeAttr("disabled");
  $("#nombreEstadoAdmTraNue").removeAttr("disabled");
  $("#nombreTramiteAdmTraNue").removeAttr("disabled");
  $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
  $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
  $("#nombreDestinoAdmTraNue").removeAttr("disabled");
  $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
  $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#guardarfnAdmTraNue").click(function () {
  $("#guardarfnAdmTraNue").prop("disabled", true);
  // Campos habilitados para editar.
  $("#nombreSolicitudAdmTraNue").attr("disabled", "disabled");
  $("#nombreInmuebleAdmTraNue").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraNue").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraNue").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraNue").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraNue").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraNue").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraNue").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraNue").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraNue1").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var idSolicitudAdmTraNue = $("#idSolicitudAdmTraNue").val();
  var nombreSolicitudAdmTraNue = $("#nombreSolicitudAdmTraNue").val();
  var nombreInmuebleAdmTraNue = $("#nombreInmuebleAdmTraNue").val();
  var nombreOperacionAdmTraNue = $("#nombreOperacionAdmTraNue").val();
  var nombreEstadoAdmTraNue = $("#nombreEstadoAdmTraNue").val();
  var nombreTramiteAdmTraNue = $("#nombreTramiteAdmTraNue").val();
  var nombreExpedienteAdmTraNue = $("#nombreExpedienteAdmTraNue").val();
  var nombreAbogadoAdmTraNue = $("#nombreAbogadoAdmTraNue").val();
  var nombreDestinoAdmTraNue = $("#nombreDestinoAdmTraNue").val();
  var nombreUbicacionAdmTraNue = $("#nombreUbicacionAdmTraNue").val();
  var nombreOperacionAdmTraNue1 = $("#nombreOperacionAdmTraNue1").val();

  if (idSolicitudAdmTraNue == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
    $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue").removeAttr("disabled");
    $("#nombreEstadoAdmTraNue").removeAttr("disabled");
    $("#nombreTramiteAdmTraNue").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
    $("#nombreDestinoAdmTraNue").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
    $("#guardarfnAdmTraNue").prop("disabled", false);
    return false;
  }

  if (nombreEstadoAdmTraNue == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo estado no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
    $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue").removeAttr("disabled");
    $("#nombreEstadoAdmTraNue").removeAttr("disabled");
    $("#nombreTramiteAdmTraNue").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
    $("#nombreDestinoAdmTraNue").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
    $("#guardarfnAdmTraNue").prop("disabled", false);
    return false;
  }

  if (nombreTramiteAdmTraNue == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo trámite no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
    $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue").removeAttr("disabled");
    $("#nombreEstadoAdmTraNue").removeAttr("disabled");
    $("#nombreTramiteAdmTraNue").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
    $("#nombreDestinoAdmTraNue").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
    $("#guardarfnAdmTraNue").prop("disabled", false);
    return false;
  }

  if ($("#nombreEstadoAdmTraNue").val() >= 3) {
    if (nombreExpedienteAdmTraNue == "") {
      swal(
        "¡Algo salió mal!",
        "El campo número de expediente no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
      $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
      $("#nombreOperacionAdmTraNue").removeAttr("disabled");
      $("#nombreEstadoAdmTraNue").removeAttr("disabled");
      $("#nombreTramiteAdmTraNue").removeAttr("disabled");
      $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
      $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
      $("#nombreDestinoAdmTraNue").removeAttr("disabled");
      $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
      $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
      $("#guardarfnAdmTraNue").prop("disabled", false);
      return false;
    }
  }

  if ($("#nombreEstadoAdmTraNue").val() >= 3) {
    if ($("#nombreAbogadoAdmTraNue").find("option:selected").val() == "0") {
      swal(
        "¡Algo salió mal!",
        "El campo abogado no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
      $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
      $("#nombreOperacionAdmTraNue").removeAttr("disabled");
      $("#nombreEstadoAdmTraNue").removeAttr("disabled");
      $("#nombreTramiteAdmTraNue").removeAttr("disabled");
      $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
      $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
      $("#nombreDestinoAdmTraNue").removeAttr("disabled");
      $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
      $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
      $("#guardarfnAdmTraNue").prop("disabled", false);
      return false;
    }
  }
  if (nombreDestinoAdmTraNue == "") {
    swal(
      "¡Algo salió mal!",
      "El campo destino no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraNue").removeAttr("disabled");
    $("#nombreInmuebleAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue").removeAttr("disabled");
    $("#nombreEstadoAdmTraNue").removeAttr("disabled");
    $("#nombreTramiteAdmTraNue").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNue").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNue").removeAttr("disabled");
    $("#nombreDestinoAdmTraNue").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNue").removeAttr("disabled");
    $("#nombreOperacionAdmTraNue1").removeAttr("disabled");
    $("#guardarfnAdmTraNue").prop("disabled", false);
    return false;
  }

  var fd = new FormData();
  fd.append("idSolicitud", idSolicitudAdmTraNue);
  fd.append("nombre", nombreSolicitudAdmTraNue);
  fd.append("idTipoInmueble", nombreInmuebleAdmTraNue);
  fd.append("idTipoOperacion", nombreOperacionAdmTraNue);
  fd.append("idEstado", nombreEstadoAdmTraNue);
  fd.append("idTipoTramite", nombreTramiteAdmTraNue);
  fd.append("nroExpediente", nombreExpedienteAdmTraNue);
  fd.append("idAbogado", nombreAbogadoAdmTraNue);
  fd.append("destino", nombreDestinoAdmTraNue);
  fd.append("ubicacion", nombreUbicacionAdmTraNue);
  fd.append("descripcion", nombreOperacionAdmTraNue1);

  var max = parseInt($("#nuevoArchivoAdmTraNue .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-nfn" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Boton cerrar de la vista modal.
          $("#cerrarfnAdmTraNueOculto").trigger("click");
          $("#guardarfnAdmTraNue").prop("disabled", false);

          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraNue").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              $("#guardarEnvNot").prop("disabled", false);
              var idUsuAdmTraNue = $("#idUsuAdmTraNue").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();

              // if (descripcionEnvNot == '') {
              //     swal("¡Algo salió mal!", "El campo descripcion no puede quedar vacío.", "error");
              //     return false;
              // }

              var fdn = new FormData();
              fdn.append("idSolicitud", idSolicitudAdmTraNue);
              fdn.append("idUsuario", idUsuAdmTraNue);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);

              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      $("#guardarEnvNot").prop("disabled", false);
                      location.reload();
                    });
                  } else {
                    swal({
                      title: "¡Algo salió mal!",
                      text: respObj.message,
                      icon: "error",
                      button: "Aceptar",
                    }).then(function () {
                      $("#guardarEnvNot").prop("disabled", false);
                      location.reload();
                    });
                  }
                })
                .catch((error) => {
                  $("#guardarEnvNot").prop("disabled", false);
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
        });
      } else {
        $("#guardarfnAdmTraNue").prop("disabled", false);
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
      $("#guardarfnAdmTraNue").prop("disabled", false);
      swal("Algo salió mal!", error, "error");
    });
});

/***************FORMULARIO 5 o 6*****************/

function cerrarVentanacsAdmTraNue() {
  $("#botonescsAdmTraNueDos").css("visibility", "hidden");
  $("#editarcsAdmTraNueDos").css("display", "block");
  $("#guardarcsAdmTraNueDos").css("display", "none");

  // trámite nuevo
  $("#nombreDestinoAdmTraNueDos option").remove();
  $("#nuevoArchivoAdmTraNueDos .form-group").remove();
  $("#nombreSolicitudAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraNueDos").attr("disabled", "disabled");
}

// Agregar archivos nuevos
$("#agregarcsAdmTraNueDos").click(function () {
  var contador = parseInt($("#nuevoArchivoAdmTraNueDos .form-group").length);
  contador += 1;
  $("#nuevoArchivoAdmTraNueDos").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivocs' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs' +
      contador +
      '" id="input-file-preview-ncs' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-ncs" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivocs" + i).val(filename);
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
  $("#botonescsAdmTraNueDos").css("visibility", "visible");
  $("#editarcsAdmTraNueDos").css("display", "none");
  $("#guardarcsAdmTraNueDos").css("display", "block");

  // Campos de la vista modal.
  $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
  $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
  $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
  $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
  $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
  $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
  $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#guardarcsAdmTraNueDos").click(function () {
  // Campos habilitados para editar.
  $("#nombreSolicitudAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraNueDos").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraNueDos").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var idSolicitudAdmTraNueDos = $("#idSolicitudAdmTraNueDos").val();

  var nombreSolicitudAdmTraNueDos = $("#nombreSolicitudAdmTraNueDos").val();

  var nombreEstadoAdmTraNueDos = $("#nombreEstadoAdmTraNueDos").val();
  var nombreTramiteAdmTraNueDos = $("#nombreTramiteAdmTraNueDos").val();
  var nombreExpedienteAdmTraNueDos = $("#nombreExpedienteAdmTraNueDos").val();
  var nombreAbogadoAdmTraNueDos = $("#nombreAbogadoAdmTraNueDos").val();
  var nombreDestinoAdmTraNueDos = $("#nombreDestinoAdmTraNueDos").val();
  var nombreUbicacionAdmTraNueDos = $("#nombreUbicacionAdmTraNueDos").val();

  if (idSolicitudAdmTraNueDos == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
    return false;
  }

  if (nombreEstadoAdmTraNueDos == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo estado no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
    return false;
  }

  if (nombreTramiteAdmTraNueDos == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo trámite no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
    return false;
  }

  if ($("#nombreEstadoAdmTraNueDos").val() >= 3) {
    if (nombreExpedienteAdmTraNueDos == "") {
      swal(
        "¡Algo salió mal!",
        "El campo número de expediente no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
      $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
      $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
      $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
      $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
      $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
      $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
      return false;
    }
  }

  if ($("#nombreEstadoAdmTraNueDos").val() >= 3) {
    if ($("#nombreAbogadoAdmTraNueDos").find("option:selected").val() == "0") {
      swal(
        "¡Algo salió mal!",
        "El campo abogado no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
      $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
      $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
      $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
      $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
      $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
      $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
      return false;
    }
  }
  if (nombreDestinoAdmTraNueDos == "") {
    swal(
      "¡Algo salió mal!",
      "El campo destino no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraNueDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraNueDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraNueDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraNueDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraNueDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraNueDos").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idSolicitud", idSolicitudAdmTraNueDos);
  fd.append("nombre", nombreSolicitudAdmTraNueDos);
  fd.append("idEstado", nombreEstadoAdmTraNueDos);
  fd.append("idTipoTramite", nombreTramiteAdmTraNueDos);
  fd.append("nroExpediente", nombreExpedienteAdmTraNueDos);
  fd.append("idAbogado", nombreAbogadoAdmTraNueDos);
  fd.append("destino", nombreDestinoAdmTraNueDos);
  fd.append("ubicacion", nombreUbicacionAdmTraNueDos);
  fd.append("idTipoInmueble", 0);
  fd.append("idTipoOperacion", 0);
  fd.append("descripcion", 0);

  var max = parseInt($("#nuevoArchivoAdmTraNueDos .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-ncs" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Boton cerrar de la vista modal.
          $("#cerrarcsAdmTraNueDosOculto").trigger("click");

          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraNueDos").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              var idUsuAdmTraNueDos = $("#idUsuAdmTraNueDos").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();

              var fdn = new FormData();
              fdn.append("idSolicitud", idSolicitudAdmTraNueDos);
              fdn.append("idUsuario", idUsuAdmTraNueDos);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
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
      swal("Algo salió mal!", error, "error");
    });
});

/*************************************************
 *********ADMIN > TRÁMITE EN PROCESO***************
 *************************************************/

/***************FORMULARIO NUEVO*****************/

function cerrarVentanafnAdmTraProc() {
  $("#botonesfnAdmTraProc").css("visibility", "hidden");
  $("#editarfnAdmTraProc").css("display", "block");
  $("#guardarfnAdmTraProc").css("display", "none");

  // trámite proceso
  $("#nombreAbogadoAdmTraProc option").remove();
  $("#nuevoArchivoAdmTraProc .form-group").remove();
  $("#nombreSolicitudAdmTraProc").attr("disabled", "disabled");
  $("#nombreInmuebleAdmTraProc").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraProc").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraProc").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraProc").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraProc").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraProc").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraProc").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraProc").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraProc1").attr("disabled", "disabled");
}

// Agregar archivos nuevos
$("#agregarfnAdmTraProc").click(function () {
  var contador = parseInt($("#nuevoArchivoAdmTraProc .form-group").length);
  contador += 1;
  $("#nuevoArchivoAdmTraProc").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivofn' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn' +
      contador +
      '" id="input-file-preview-nfn' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-nfn" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivofn" + i).val(filename);
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
    buttons: ["NO", "SI"],
  }).then(function (isConfirm) {
    if (isConfirm) {
      $("#cerrarfnAdmTraProcOculto").trigger("click");
      $("#EnvNotAdmTraProc").append(
        '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
      );
      $("#ejecutarModalEnvNot").trigger("click");

      $("#EnviarNotificacion").on("hidden.bs.modal", function () {
        alert("Esta accion se ejecuta al cerrar el modal");
      });

      $("#guardarEnvNot").click(function () {
        var idUsuAdmTraProc = $("#idUsuAdmTraProc").val();
        var descripcionEnvNot = $("#descripcionEnvNot").val();
        var idUsuarioEmisor = $("#idUsuarioprueba").val();
        console.log(url_base);

        var fdn = new FormData();
        fdn.append("idSolicitud", idSolicitudAdmTraProc);
        fdn.append("idUsuario", idUsuAdmTraProc);
        fdn.append("descripcion", descripcionEnvNot);
        fdn.append("idUsuarioEmisor", idUsuarioEmisor);
        fetch(url_base + "api/fronteras/notificacion/insertar-notificacion", {
          method: "POST",
          body: fdn,
        })
          .then((resp) => resp.json())
          .then((respObj) => {
            if (respObj.status == 0) {
              swal({
                title: "¡Excelente!",
                text: "La notificación se guardo con éxito.",
                icon: "success",
                button: "Aceptar",
              }).then(function () {
                location.reload();
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
            swal("Algo salió mal!", error, "error");
          });
      });

      // location.reload();
    } else {
      swal.close();
    }
  });
});
//Botones dinamico de la vista modal.
$("#editarfnAdmTraProc").click(function () {
  // Botones de la vista modal.
  $("#botonesfnAdmTraProc").css("visibility", "visible");
  $("#editarfnAdmTraProc").css("display", "none");
  $("#guardarfnAdmTraProc").css("display", "block");

  // Campos de la vista modal.
  $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
  $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
  $("#nombreOperacionAdmTraProc").removeAttr("disabled");
  $("#nombreEstadoAdmTraProc").removeAttr("disabled");
  $("#nombreTramiteAdmTraProc").removeAttr("disabled");
  $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
  $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
  $("#nombreDestinoAdmTraProc").removeAttr("disabled");
  $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
  $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#guardarfnAdmTraProc").click(function () {
  // Campos habilitados para editar.
  $("#nombreSolicitudAdmTraProc").attr("disabled", "disabled");
  $("#nombreInmuebleAdmTraProc").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraProc").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraProc").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraProc").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraProc").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraProc").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraProc").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraProc").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraProc1").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var idSolicitudAdmTraProc = $("#idSolicitudAdmTraProc").val();
  var nombreSolicitudAdmTraProc = $("#nombreSolicitudAdmTraProc").val();
  var nombreInmuebleAdmTraProc = $("#nombreInmuebleAdmTraProc").val();
  var nombreOperacionAdmTraProc = $("#nombreOperacionAdmTraProc").val();
  var nombreEstadoAdmTraProc = $("#nombreEstadoAdmTraProc").val();
  var nombreTramiteAdmTraProc = $("#nombreTramiteAdmTraProc").val();
  var nombreExpedienteAdmTraProc = $("#nombreExpedienteAdmTraProc").val();
  var nombreAbogadoAdmTraProc = $("#nombreAbogadoAdmTraProc").val();
  var nombreDestinoAdmTraProc = $("#nombreDestinoAdmTraProc").val();
  var nombreUbicacionAdmTraProc = $("#nombreUbicacionAdmTraProc").val();
  var nombreOperacionAdmTraProc1 = $("#nombreOperacionAdmTraProc1").val();

  if (idSolicitudAdmTraProc == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
    $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc").removeAttr("disabled");
    $("#nombreEstadoAdmTraProc").removeAttr("disabled");
    $("#nombreTramiteAdmTraProc").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
    $("#nombreDestinoAdmTraProc").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
    return false;
  }

  if (nombreEstadoAdmTraProc == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo estado no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
    $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc").removeAttr("disabled");
    $("#nombreEstadoAdmTraProc").removeAttr("disabled");
    $("#nombreTramiteAdmTraProc").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
    $("#nombreDestinoAdmTraProc").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
    return false;
  }

  if (nombreTramiteAdmTraProc == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo trámite no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
    $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc").removeAttr("disabled");
    $("#nombreEstadoAdmTraProc").removeAttr("disabled");
    $("#nombreTramiteAdmTraProc").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
    $("#nombreDestinoAdmTraProc").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
    return false;
  }

  if ($("#nombreEstadoAdmTraProc").val() >= 3) {
    if (nombreExpedienteAdmTraProc == "") {
      swal(
        "¡Algo salió mal!",
        "El campo número de expediente no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
      $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
      $("#nombreOperacionAdmTraProc").removeAttr("disabled");
      $("#nombreEstadoAdmTraProc").removeAttr("disabled");
      $("#nombreTramiteAdmTraProc").removeAttr("disabled");
      $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
      $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
      $("#nombreDestinoAdmTraProc").removeAttr("disabled");
      $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
      $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
      return false;
    }
  }

  if ($("#nombreEstadoAdmTraProc").val() >= 3) {
    if ($("#nombreAbogadoAdmTraProc").find("option:selected").val() == "0") {
      swal(
        "¡Algo salió mal!",
        "El campo abogado no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
      $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
      $("#nombreOperacionAdmTraProc").removeAttr("disabled");
      $("#nombreEstadoAdmTraProc").removeAttr("disabled");
      $("#nombreTramiteAdmTraProc").removeAttr("disabled");
      $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
      $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
      $("#nombreDestinoAdmTraProc").removeAttr("disabled");
      $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
      $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
      return false;
    }
  }

  if (nombreDestinoAdmTraProc == "") {
    swal(
      "¡Algo salió mal!",
      "El campo destino no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraProc").removeAttr("disabled");
    $("#nombreInmuebleAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc").removeAttr("disabled");
    $("#nombreEstadoAdmTraProc").removeAttr("disabled");
    $("#nombreTramiteAdmTraProc").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProc").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProc").removeAttr("disabled");
    $("#nombreDestinoAdmTraProc").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProc").removeAttr("disabled");
    $("#nombreOperacionAdmTraProc1").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idSolicitud", idSolicitudAdmTraProc);
  fd.append("nombre", nombreSolicitudAdmTraProc);
  fd.append("idTipoInmueble", nombreInmuebleAdmTraProc);
  fd.append("idTipoOperacion", nombreOperacionAdmTraProc);
  fd.append("idEstado", nombreEstadoAdmTraProc);
  fd.append("idTipoTramite", nombreTramiteAdmTraProc);
  fd.append("nroExpediente", nombreExpedienteAdmTraProc);
  fd.append("idAbogado", nombreAbogadoAdmTraProc);
  fd.append("destino", nombreDestinoAdmTraProc);
  fd.append("ubicacion", nombreUbicacionAdmTraProc);
  fd.append("descripcion", nombreOperacionAdmTraProc1);

  var max = parseInt($("#nuevoArchivoAdmTraProc .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-nfn" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Boton cerrar de la vista modal.
          $("#cerrarfnAdmTraProcOculto").trigger("click");

          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraProc").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              var idUsuAdmTraProc = $("#idUsuAdmTraProc").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();

              var fdn = new FormData();
              fdn.append("idSolicitud", idSolicitudAdmTraProc);
              fdn.append("idUsuario", idUsuAdmTraProc);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
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
      swal("Algo salió mal!", error, "error");
    });
});

/***************FORMULARIO 5 o 6*****************/

function cerrarVentanacsAdmTraProc() {
  $("#botonescsAdmTraProcDos").css("visibility", "hidden");
  $("#editarcsAdmTraProcDos").css("display", "block");
  $("#guardarcsAdmTraProcDos").css("display", "none");

  // trámite proceso
  $("#nombreAbogadoAdmTraProcDos option").remove();
  $("#nuevoArchivoAdmTraProcDos .form-group").remove();
  $("#nombreSolicitudAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraProcDos").attr("disabled", "disabled");
}

// Agregar archivos nuevos
$("#agregarcsAdmTraProcDos").click(function () {
  var contador = parseInt($("#nuevoArchivoAdmTraProcDos .form-group").length);
  contador += 1;
  $("#nuevoArchivoAdmTraProcDos").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivocs' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs' +
      contador +
      '" id="input-file-preview-ncs' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-ncs" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivocs" + i).val(filename);
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

    buttons: ["NO", "SI"],
  }).then(function (isConfirm) {
    if (isConfirm) {
      $("#cerrarcsAdmTraProcDosOculto").trigger("click");

      // Enviar notificación

      $("#EnvNotAdmTraProcDos").append(
        '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
      );
      $("#ejecutarModalEnvNot").trigger("click");

      $("#EnviarNotificacion").on("hidden.bs.modal", function () {
        alert("Esta accion se ejecuta al cerrar el modal");
      });

      $("#guardarEnvNot").click(function () {
        var idUsuAdmTraProcDos = $("#idUsuAdmTraProcDos").val();
        var descripcionEnvNot = $("#descripcionEnvNot").val();
        var idUsuarioEmisor = $("#idUsuarioprueba").val();

        var fdn = new FormData();
        fdn.append("idSolicitud", idSolicitudAdmTraProcDos);
        fdn.append("idUsuario", idUsuAdmTraProcDos);
        fdn.append("descripcion", descripcionEnvNot);
        fdn.append("idUsuarioEmisor", idUsuarioEmisor);
        fetch(url_base + "api/fronteras/notificacion/insertar-notificacion", {
          method: "POST",
          body: fdn,
        })
          .then((resp) => resp.json())
          .then((respObj) => {
            if (respObj.status == 0) {
              swal({
                title: "¡Excelente!",
                text: "La notificación se guardo con éxito.",
                icon: "success",
                button: "Aceptar",
              }).then(function () {
                location.reload();
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
            swal("Algo salió mal!", error, "error");
          });
      });

      // location.reload();
    } else {
      swal.close();
    }
  });
});

//Botones dinamico de la vista modal.
$("#editarcsAdmTraProcDos").click(function () {
  // Botones de la vista modal.
  $("#botonescsAdmTraProcDos").css("visibility", "visible");
  $("#editarcsAdmTraProcDos").css("display", "none");
  $("#guardarcsAdmTraProcDos").css("display", "block");

  // Campos de la vista modal.
  $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
  $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
  $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
  $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
  $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
  $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
  $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#guardarcsAdmTraProcDos").click(function () {
  // Campos habilitados para editar.
  $("#nombreSolicitudAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraProcDos").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraProcDos").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var idSolicitudAdmTraProcDos = $("#idSolicitudAdmTraProcDos").val();
  var nombreSolicitudAdmTraProcDos = $("#nombreSolicitudAdmTraProcDos").val();
  var nombreEstadoAdmTraProcDos = $("#nombreEstadoAdmTraProcDos").val();
  var nombreTramiteAdmTraProcDos = $("#nombreTramiteAdmTraProcDos").val();
  var nombreExpedienteAdmTraProcDos = $("#nombreExpedienteAdmTraProcDos").val();
  var nombreAbogadoAdmTraProcDos = $("#nombreAbogadoAdmTraProcDos").val();
  var nombreDestinoAdmTraProcDos = $("#nombreDestinoAdmTraProcDos").val();
  var nombreUbicacionAdmTraProcDos = $("#nombreUbicacionAdmTraProcDos").val();

  if (idSolicitudAdmTraProcDos == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
    return false;
  }

  if (nombreEstadoAdmTraProcDos == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo estado no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
    return false;
  }

  if (nombreTramiteAdmTraProcDos == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo trámite no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
    return false;
  }

  if ($("#nombreEstadoAdmTraProcDos").val() >= 3) {
    if (nombreExpedienteAdmTraProcDos == "") {
      swal(
        "¡Algo salió mal!",
        "El campo número de expediente no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
      $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
      $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
      $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
      $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
      $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
      $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
      return false;
    }
  }

  if ($("#nombreEstadoAdmTraProcDos").val() >= 3) {
    if ($("#nombreAbogadoAdmTraProcDos").find("option:selected").val() == "0") {
      swal(
        "¡Algo salió mal!",
        "El campo abogado no puede quedar vacío.",
        "error"
      );
      $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
      $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
      $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
      $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
      $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
      $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
      $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
      return false;
    }
  }

  if (nombreDestinoAdmTraProcDos == "") {
    swal(
      "¡Algo salió mal!",
      "El campo destino no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraProcDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraProcDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraProcDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraProcDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraProcDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraProcDos").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idSolicitud", idSolicitudAdmTraProcDos);
  fd.append("nombre", nombreSolicitudAdmTraProcDos);
  fd.append("idEstado", nombreEstadoAdmTraProcDos);
  fd.append("idTipoTramite", nombreTramiteAdmTraProcDos);
  fd.append("nroExpediente", nombreExpedienteAdmTraProcDos);
  fd.append("idAbogado", nombreAbogadoAdmTraProcDos);
  fd.append("destino", nombreDestinoAdmTraProcDos);
  fd.append("ubicacion", nombreUbicacionAdmTraProcDos);
  fd.append("idTipoInmueble", 0);
  fd.append("idTipoOperacion", 0);
  fd.append("descripcion", 0);

  var max = parseInt($("#nuevoArchivoAdmTraProcDos .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-ncs" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Boton cerrar de la vista modal.
          $("#cerrarcsAdmTraProcDosOculto").trigger("click");

          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraProcDos").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              var idUsuAdmTraProcDos = $("#idUsuAdmTraProcDos").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();

              var fdn = new FormData();
              fdn.append("idSolicitud", idSolicitudAdmTraProcDos);
              fdn.append("idUsuario", idUsuAdmTraProcDos);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
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
      swal("Algo salió mal!", error, "error");
    });
});

/*************************************************
 *********ADMIN > TRÁMITE FINALIZADO***************
 *************************************************/

/***************FORMULARIO NUEVO*****************/

function cerrarVentanafnAdmTraFin() {
  $("#botonesfnAdmTraFin").css("visibility", "hidden");
  $("#editarfnAdmTraFin").css("display", "block");
  $("#guardarfnAdmTraFin").css("display", "none");

  // trámite finalizado
  $("#nombreAbogadoAdmTraFin option").remove();
  $("#nuevoArchivoAdmTraFin .form-group").remove();
  $("#nombreSolicitudAdmTraFin").attr("disabled", "disabled");
  $("#nombreInmuebleAdmTraFin").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraFin").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraFin").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraFin").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraFin").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraFin").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraFin").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraFin").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraFin1").attr("disabled", "disabled");
}

// Agregar archivos nuevos
$("#agregarfnAdmTraFin").click(function () {
  var contador = parseInt($("#nuevoArchivoAdmTraFin .form-group").length);
  contador += 1;
  $("#nuevoArchivoAdmTraFin").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivofn' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn' +
      contador +
      '" id="input-file-preview-nfn' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-nfn" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivofn" + i).val(filename);
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
  $("#botonesfnAdmTraFin").css("visibility", "visible");
  $("#editarfnAdmTraFin").css("display", "none");
  $("#guardarfnAdmTraFin").css("display", "block");

  // Campos de la vista modal.
  $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
  $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
  $("#nombreOperacionAdmTraFin").removeAttr("disabled");
  $("#nombreEstadoAdmTraFin").removeAttr("disabled");
  $("#nombreTramiteAdmTraFin").removeAttr("disabled");
  $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
  $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
  $("#nombreDestinoAdmTraFin").removeAttr("disabled");
  $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
  $("#nombreOperacionAdmTraFin1").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#guardarfnAdmTraFin").click(function () {
  // Campos habilitados para editar.
  $("#nombreSolicitudAdmTraFin").attr("disabled", "disabled");
  $("#nombreInmuebleAdmTraFin").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraFin").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraFin").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraFin").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraFin").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraFin").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraFin").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraFin").attr("disabled", "disabled");
  $("#nombreOperacionAdmTraFin1").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var idSolicitudAdmTraFin = $("#idSolicitudAdmTraFin").val();
  var nombreSolicitudAdmTraFin = $("#nombreSolicitudAdmTraFin").val();
  var nombreInmuebleAdmTraFin = $("#nombreInmuebleAdmTraFin").val();
  var nombreOperacionAdmTraFin = $("#nombreOperacionAdmTraFin").val();
  var nombreEstadoAdmTraFin = $("#nombreEstadoAdmTraFin").val();
  var nombreTramiteAdmTraFin = $("#nombreTramiteAdmTraFin").val();
  var nombreExpedienteAdmTraFin = $("#nombreExpedienteAdmTraFin").val();
  var nombreAbogadoAdmTraFin = $("#nombreAbogadoAdmTraFin").val();
  var nombreDestinoAdmTraFin = $("#nombreDestinoAdmTraFin").val();
  var nombreUbicacionAdmTraFin = $("#nombreUbicacionAdmTraFin").val();
  var nombreOperacionAdmTraFin1 = $("#nombreOperacionAdmTraFin1").val();

  if (idSolicitudAdmTraFin == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
    $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin").removeAttr("disabled");
    $("#nombreEstadoAdmTraFin").removeAttr("disabled");
    $("#nombreTramiteAdmTraFin").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
    $("#nombreDestinoAdmTraFin").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin1").removeAttr("disabled");
    return false;
  }

  if (nombreEstadoAdmTraFin == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo estado no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
    $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin").removeAttr("disabled");
    $("#nombreEstadoAdmTraFin").removeAttr("disabled");
    $("#nombreTramiteAdmTraFin").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
    $("#nombreDestinoAdmTraFin").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin1").removeAttr("disabled");
    return false;
  }

  if (nombreTramiteAdmTraFin == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo trámite no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
    $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin").removeAttr("disabled");
    $("#nombreEstadoAdmTraFin").removeAttr("disabled");
    $("#nombreTramiteAdmTraFin").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
    $("#nombreDestinoAdmTraFin").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin1").removeAttr("disabled");

    return false;
  }

  if (nombreExpedienteAdmTraFin == "") {
    swal(
      "¡Algo salió mal!",
      "El campo número de expediente no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
    $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin").removeAttr("disabled");
    $("#nombreEstadoAdmTraFin").removeAttr("disabled");
    $("#nombreTramiteAdmTraFin").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
    $("#nombreDestinoAdmTraFin").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin1").removeAttr("disabled");
    return false;
  }

  if (nombreAbogadoAdmTraFin == "") {
    swal(
      "¡Algo salió mal!",
      "El campo abogado no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
    $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin").removeAttr("disabled");
    $("#nombreEstadoAdmTraFin").removeAttr("disabled");
    $("#nombreTramiteAdmTraFin").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
    $("#nombreDestinoAdmTraFin").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin1").removeAttr("disabled");
    return false;
  }

  if (nombreDestinoAdmTraFin == "") {
    swal(
      "¡Algo salió mal!",
      "El campo destino no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraFin").removeAttr("disabled");
    $("#nombreInmuebleAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin").removeAttr("disabled");
    $("#nombreEstadoAdmTraFin").removeAttr("disabled");
    $("#nombreTramiteAdmTraFin").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFin").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFin").removeAttr("disabled");
    $("#nombreDestinoAdmTraFin").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFin").removeAttr("disabled");
    $("#nombreOperacionAdmTraFin1").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idSolicitud", idSolicitudAdmTraFin);
  fd.append("nombre", nombreSolicitudAdmTraFin);
  fd.append("idTipoInmueble", nombreInmuebleAdmTraFin);
  fd.append("idTipoOperacion", nombreOperacionAdmTraFin);
  fd.append("idEstado", nombreEstadoAdmTraFin);
  fd.append("idTipoTramite", nombreTramiteAdmTraFin);
  fd.append("nroExpediente", nombreExpedienteAdmTraFin);
  fd.append("idAbogado", nombreAbogadoAdmTraFin);
  fd.append("destino", nombreDestinoAdmTraFin);
  fd.append("ubicacion", nombreUbicacionAdmTraFin);
  fd.append("descripcion", nombreOperacionAdmTraFin1);

  var max = parseInt($("#nuevoArchivoAdmTraFin .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-nfn" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Boton cerrar de la vista modal.
          $("#cerrarfnAdmTraFinOculto").trigger("click");

          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraFin").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              var idUsuAdmTraFin = $("#idUsuAdmTraFin").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();

              var fdn = new FormData();
              fdn.append("idSolicitud", idSolicitudAdmTraFin);
              fdn.append("idUsuario", idUsuAdmTraFin);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
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
      swal("Algo salió mal!", error, "error");
    });
});

/***************FORMULARIO 5 o 6*****************/

function cerrarVentanacsAdmTraFin() {
  $("#botonescsAdmTraFinDos").css("visibility", "hidden");
  $("#editarcsAdmTraFinDos").css("display", "block");
  $("#guardarcsAdmTraFinDos").css("display", "none");

  // trámite Finalizado
  $("#nombreAbogadoAdmTraFinDos option").remove();
  $("#nuevoArchivoAdmTraFinDos .form-group").remove();
  $("#nombreSolicitudAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraFinDos").attr("disabled", "disabled");
}

// Agregar archivos nuevos
$("#agregarcsAdmTraFinDos").click(function () {
  var contador = parseInt($("#nuevoArchivoAdmTraFinDos .form-group").length);
  contador += 1;
  $("#nuevoArchivoAdmTraFinDos").append(
    '<div class="form-group">' +
      '<div class="input-group">' +
      '<input id="nombreArchivocs' +
      contador +
      '" placeholder="" type="text" class="form-control" disabled="disabled">' +
      '<div class="btn btn-default carga-archivo-input-f" style="background-color: #f8f9fa; border-color: #ccc; font-size: 0.9rem; border-radius: 0rem;">' +
      '<i class="fas fa-folder-open"></i>' +
      '<span class="carga-archivo-input-title">Seleccionar archivo</span>' +
      '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-ncs' +
      contador +
      '" id="input-file-preview-ncs' +
      contador +
      '">' +
      "</div>" +
      "</div>" +
      "</div>"
  );

  // Creo de forma dinámica los eventos para asignar en el los input de la vista.
  $(document).ready(function () {
    for (let i = 1; i <= contador; i++) {
      $(document).on("change", ".input-file-preview-ncs" + i, function () {
        filename = this.files[0].name;
        $("#nombreArchivocs" + i).val(filename);
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
  $("#botonescsAdmTraFinDos").css("visibility", "visible");
  $("#editarcsAdmTraFinDos").css("display", "none");
  $("#guardarcsAdmTraFinDos").css("display", "block");

  // Campos de la vista modal.
  $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
  $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
  $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
  $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
  $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
  $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
  $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#guardarcsAdmTraFinDos").click(function () {
  // Campos habilitados para editar.
  $("#nombreSolicitudAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreEstadoAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreTramiteAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreExpedienteAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreAbogadoAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreDestinoAdmTraFinDos").attr("disabled", "disabled");
  $("#nombreUbicacionAdmTraFinDos").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var idSolicitudAdmTraFinDos = $("#idSolicitudAdmTraFinDos").val();
  var nombreSolicitudAdmTraFinDos = $("#nombreSolicitudAdmTraFinDos").val();
  var nombreEstadoAdmTraFinDos = $("#nombreEstadoAdmTraFinDos").val();
  var nombreTramiteAdmTraFinDos = $("#nombreTramiteAdmTraFinDos").val();
  var nombreExpedienteAdmTraFinDos = $("#nombreExpedienteAdmTraFinDos").val();
  var nombreAbogadoAdmTraFinDos = $("#nombreAbogadoAdmTraFinDos").val();
  var nombreDestinoAdmTraFinDos = $("#nombreDestinoAdmTraFinDos").val();
  var nombreUbicacionAdmTraFinDos = $("#nombreUbicacionAdmTraFinDos").val();

  if (idSolicitudAdmTraFinDos == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
    return false;
  }

  if (nombreEstadoAdmTraFinDos == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo estado no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
    return false;
  }

  if (nombreTramiteAdmTraFinDos == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo trámite no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
    return false;
  }

  if (nombreExpedienteAdmTraFinDos == "") {
    swal(
      "¡Algo salió mal!",
      "El campo número de expediente no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
    return false;
  }

  if (nombreAbogadoAdmTraFinDos == "") {
    swal(
      "¡Algo salió mal!",
      "El campo abogado no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
    return false;
  }

  if (nombreDestinoAdmTraFinDos == "") {
    swal(
      "¡Algo salió mal!",
      "El campo destino no puede quedar vacío.",
      "error"
    );
    $("#nombreSolicitudAdmTraFinDos").removeAttr("disabled");
    $("#nombreEstadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreTramiteAdmTraFinDos").removeAttr("disabled");
    $("#nombreExpedienteAdmTraFinDos").removeAttr("disabled");
    $("#nombreAbogadoAdmTraFinDos").removeAttr("disabled");
    $("#nombreDestinoAdmTraFinDos").removeAttr("disabled");
    $("#nombreUbicacionAdmTraFinDos").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idSolicitud", idSolicitudAdmTraFinDos);
  fd.append("nombre", nombreSolicitudAdmTraFinDos);
  fd.append("idEstado", nombreEstadoAdmTraFinDos);
  fd.append("idTipoTramite", nombreTramiteAdmTraFinDos);
  fd.append("nroExpediente", nombreExpedienteAdmTraFinDos);
  fd.append("idAbogado", nombreAbogadoAdmTraFinDos);
  fd.append("destino", nombreDestinoAdmTraFinDos);
  fd.append("ubicacion", nombreUbicacionAdmTraFinDos);
  fd.append("idTipoInmueble", 0);
  fd.append("idTipoOperacion", 0);
  fd.append("descripcion", 0);

  var max = parseInt($("#nuevoArchivoAdmTraFinDos .form-group").length);
  for (var i = 1; i <= max; i++) {
    fd.append("archivos[]", $("#input-file-preview-ncs" + i)[0].files[0]);
  }

  fetch(url_base + "api/fronteras/solicitud/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Boton cerrar de la vista modal.
          $("#cerrarcsAdmTraFinDosOculto").trigger("click");

          // Enviar notificación
          $(document).ready(function () {
            $("#EnvNotAdmTraFinDos").append(
              '<button id="ejecutarModalEnvNot" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#EnviarNotificacion" hidden></button>'
            );
            $("#ejecutarModalEnvNot").trigger("click");

            $("#EnviarNotificacion").on("hidden.bs.modal", function () {
              alert("Esta accion se ejecuta al cerrar el modal");
            });

            $("#guardarEnvNot").click(function () {
              var idUsuAdmTraFinDos = $("#idUsuAdmTraFinDos").val();
              var descripcionEnvNot = $("#descripcionEnvNot").val();
              var idUsuarioEmisor = $("#idUsuarioprueba").val();

              var fdn = new FormData();
              fdn.append("idSolicitud", idSolicitudAdmTraFinDos);
              fdn.append("idUsuario", idUsuAdmTraFinDos);
              fdn.append("descripcion", descripcionEnvNot);
              fdn.append("idUsuarioEmisor", idUsuarioEmisor);
              fetch(
                url_base + "api/fronteras/notificacion/insertar-notificacion",
                {
                  method: "POST",
                  body: fdn,
                }
              )
                .then((resp) => resp.json())
                .then((respObj) => {
                  if (respObj.status == 0) {
                    swal({
                      title: "¡Excelente!",
                      text: "La notificación se guardo con éxito.",
                      icon: "success",
                      button: "Aceptar",
                    }).then(function () {
                      location.reload();
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
                  swal("Algo salió mal!", error, "error");
                });
            });
          });
          // location.reload();
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
      swal("Algo salió mal!", error, "error");
    });
});

/*********************************************
 ***************ADMIN > ESCRIBANO**************
 *********************************************/

function cerrarVentanaEscribano() {
  $("#escribanoeditarfn").css("display", "block");
  $("#escribanoguardarfn").css("display", "none");

  $("#nuevoArchivoEscribano .form-group").remove();
  $("#escribanonombre").attr("disabled", "disabled");
  $("#escribanodirpostal").attr("disabled", "disabled");
  $("#escribanocodigopostal").attr("disabled", "disabled");
  $("#escribanoprovincia").attr("disabled", "disabled");
  $("#escribanoactivo").attr("disabled", "disabled");
}

//Botones dinamico de la vista modal.
$("#escribanoeditarfn").click(function () {
  // Botones de la vista modal.
  $("#escribanoeditarfn").css("display", "none");
  $("#escribanoguardarfn").css("display", "block");

  // Campos de la vista modal.
  $("#escribanonombre").removeAttr("disabled");
  $("#escribanodirpostal").removeAttr("disabled");
  $("#escribanocodigopostal").removeAttr("disabled");
  $("#escribanoprovincia").removeAttr("disabled");
  $("#escribanoactivo").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#escribanoguardarfn").click(function () {
  // Campos habilitados para editar.
  $("#escribanonombre").attr("disabled", "disabled");
  $("#escribanodirpostal").attr("disabled", "disabled");
  $("#escribanocodigopostal").attr("disabled", "disabled");
  $("#escribanoprovincia").attr("disabled", "disabled");
  $("#escribanoactivo").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var CodEsc = $("#CodEsc").val();
  var escribanonombre = $("#escribanonombre").val();
  var escribanomail = $("#escribanomail").val();
  var escribanodirpostal = $("#escribanodirpostal").val();
  var escribanocodigopostal = $("#escribanocodigopostal").val();
  var escribanoprovincia = $("#escribanoprovincia").val();
  var escribanoactivo = $("#escribanoactivo").prop("checked") ? 1 : 0;
  var escribanoprovincia = $("#escribanoprovincia").val();

  if (CodEsc == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#escribanonombre").removeAttr("disabled");
    $("#escribanodirpostal").removeAttr("disabled");
    $("#escribanocodigopostal").removeAttr("disabled");
    $("#escribanoprovincia").removeAttr("disabled");
    $("#escribanoactivo").removeAttr("disabled");
    return false;
  }

  if (escribanonombre == "") {
    swal(
      "¡Algo salió mal!",
      "El campo nombre no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#escribanonombre").removeAttr("disabled");
    $("#escribanodirpostal").removeAttr("disabled");
    $("#escribanocodigopostal").removeAttr("disabled");
    $("#escribanoprovincia").removeAttr("disabled");
    $("#escribanoactivo").removeAttr("disabled");
    return false;
  }

  if (escribanodirpostal == "") {
    swal(
      "¡Algo salió mal!",
      "El campo dirección no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#escribanonombre").removeAttr("disabled");
    $("#escribanodirpostal").removeAttr("disabled");
    $("#escribanocodigopostal").removeAttr("disabled");
    $("#escribanoprovincia").removeAttr("disabled");
    $("#escribanoactivo").removeAttr("disabled");
    return false;
  }

  if (escribanocodigopostal == "") {
    swal("¡Algo salió mal!", "El campo postal no puede quedar vacío.", "error");
    $("#escribanonombre").removeAttr("disabled");
    $("#escribanodirpostal").removeAttr("disabled");
    $("#escribanocodigopostal").removeAttr("disabled");
    $("#escribanoprovincia").removeAttr("disabled");
    $("#escribanoactivo").removeAttr("disabled");
    return false;
  }

  if (escribanoprovincia == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo provincia no puede quedar vacío.",
      "error"
    );
    $("#escribanonombre").removeAttr("disabled");
    $("#escribanodirpostal").removeAttr("disabled");
    $("#escribanocodigopostal").removeAttr("disabled");
    $("#escribanoprovincia").removeAttr("disabled");
    $("#escribanoactivo").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idUsuario", CodEsc);
  fd.append("nombre", escribanonombre);
  fd.append("email", escribanomail);
  fd.append("direccion", escribanodirpostal);
  fd.append("cp", escribanocodigopostal);
  fd.append("idProvincia", escribanoprovincia);
  fd.append("activo", escribanoactivo);
  fd.append("profile", 1);

  // fetch(url_base + 'api/fronteras/usuario/editar', {
  fetch(url_base + "api/fronteras/usuario/editarEscribano", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Botones que pasa a su estado normal para editar y se refresca la pagina.
          $("#escribanoeditarfn").css("display", "block");
          $("#escribanoguardarfn").css("display", "none");
          location.reload();
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
    buttons: ["NO", "SI"],
  }).then(function (isConfirm) {
    if (isConfirm) {
      var fd = new FormData();
      fd.append("idUsuario", CodEsc);

      fetch(url_base + "api/fronteras/usuario/eliminarEscribano", {
        method: "POST",
        body: fd,
      })
        .then((resp) => resp.json())
        .then((respObj) => {
          if (respObj.status == 0) {
            swal({
              title: "¡Excelente!",
              text: "El cambio ha sido exitoso.",
              icon: "success",
              button: "Aceptar",
            }).then(function () {
              // Botones que pasa a su estado normal para editar y se refresca la pagina.
              $("#escribanoeditarfn").css("display", "block");
              $("#escribanoguardarfn").css("display", "none");
              location.reload();
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
          swal("Algo salió mal!", error, "error");
        });
    } else {
      swal.close();
    }
  });
});

/*********************************************
 ***************ADMIN > USUARIOS***************
 *********************************************/

function cerrarVentanaUsuarios() {
  $("#usuarioseditarfn").css("display", "block");
  $("#usuariosguardarfn").css("display", "none");

  $("#usuariosnombre").attr("disabled", "disabled");
  $("#usuariosdirpostal").attr("disabled", "disabled");
  $("#usuarioscodigopostal").attr("disabled", "disabled");
  $("#usuariosprovincia").attr("disabled", "disabled");
  $("#usuariosperfil").attr("disabled", "disabled");
  $("#usuariosclave").attr("disabled", "disabled");
  $("#usuariosactivo").attr("disabled", "disabled");
}

//Botones dinamico de la vista modal.
$("#usuarioseditarfn").click(function () {
  // Botones de la vista modal.
  $("#usuarioseditarfn").css("display", "none");
  $("#usuariosguardarfn").css("display", "block");

  // Campos de la vista modal.
  $("#usuariosnombre").removeAttr("disabled");
  $("#usuariosdirpostal").removeAttr("disabled");
  $("#usuarioscodigopostal").removeAttr("disabled");
  $("#usuariosprovincia").removeAttr("disabled");
  $("#usuariosperfil").removeAttr("disabled");
  $("#usuariosclave").removeAttr("disabled");
  $("#usuariosactivo").removeAttr("disabled");
});

// Guarda los cambios de los tramites nuevos.
$("#usuariosguardarfn").click(function () {
  // Campos habilitados para editar.
  $("#usuariosnombre").attr("disabled", "disabled");
  $("#usuariosdirpostal").attr("disabled", "disabled");
  $("#usuarioscodigopostal").attr("disabled", "disabled");
  $("#usuariosprovincia").attr("disabled", "disabled");
  $("#usuariosperfil").attr("disabled", "disabled");
  $("#usuariosclave").attr("disabled", "disabled");
  $("#usuariosactivo").attr("disabled", "disabled");

  var url_base = $("#url_base").val();
  var CodUsu = $("#CodUsu").val();
  var usuariosnombre = $("#usuariosnombre").val();
  var usuariosmail = $("#usuariosmail").val();
  var usuariosdirpostal = $("#usuariosdirpostal").val();
  var usuarioscodigopostal = $("#usuarioscodigopostal").val();
  var usuariosprovincia = $("#usuariosprovincia").val();
  var usuariosperfil = $("#usuariosperfil").val();
  var usuariosclave = $("#usuariosclave").val();
  var usuariosactivo = $("#usuariosactivo").prop("checked") ? 1 : 0;

  if (CodEsc == "") {
    swal("¡Algo salió mal!", "No existe el codigo de la solicitud", "error");
    $("#usuariosnombre").removeAttr("disabled");
    $("#usuariosdirpostal").removeAttr("disabled");
    $("#usuarioscodigopostal").removeAttr("disabled");
    $("#usuariosprovincia").removeAttr("disabled");
    $("#usuariosperfil").removeAttr("disabled");
    $("#usuariosclave").removeAttr("disabled");
    $("#usuariosactivo").removeAttr("disabled");
    return false;
  }

  if (usuariosnombre == "") {
    swal(
      "¡Algo salió mal!",
      "El campo nombre no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#usuariosnombre").removeAttr("disabled");
    $("#usuariosdirpostal").removeAttr("disabled");
    $("#usuarioscodigopostal").removeAttr("disabled");
    $("#usuariosprovincia").removeAttr("disabled");
    $("#usuariosperfil").removeAttr("disabled");
    $("#usuariosclave").removeAttr("disabled");
    $("#usuariosactivo").removeAttr("disabled");
    return false;
  }

  if (usuariosdirpostal == "") {
    swal(
      "¡Algo salió mal!",
      "El campo dirección no puede quedar sin Opción, elija una.",
      "error"
    );
    $("#usuariosnombre").removeAttr("disabled");
    $("#usuariosdirpostal").removeAttr("disabled");
    $("#usuarioscodigopostal").removeAttr("disabled");
    $("#usuariosprovincia").removeAttr("disabled");
    $("#usuariosperfil").removeAttr("disabled");
    $("#usuariosclave").removeAttr("disabled");
    $("#usuariosactivo").removeAttr("disabled");
    return false;
  }

  if (usuarioscodigopostal == "") {
    swal("¡Algo salió mal!", "El campo postal no puede quedar vacío.", "error");
    $("#usuariosnombre").removeAttr("disabled");
    $("#usuariosdirpostal").removeAttr("disabled");
    $("#usuarioscodigopostal").removeAttr("disabled");
    $("#usuariosprovincia").removeAttr("disabled");
    $("#usuariosperfil").removeAttr("disabled");
    $("#usuariosclave").removeAttr("disabled");
    $("#usuariosactivo").removeAttr("disabled");
    return false;
  }

  if (usuariosprovincia == 0) {
    swal(
      "¡Algo salió mal!",
      "El campo provincia no puede quedar vacío.",
      "error"
    );
    $("#usuariosnombre").removeAttr("disabled");
    $("#usuariosdirpostal").removeAttr("disabled");
    $("#usuarioscodigopostal").removeAttr("disabled");
    $("#usuariosprovincia").removeAttr("disabled");
    $("#usuariosperfil").removeAttr("disabled");
    $("#usuariosclave").removeAttr("disabled");
    $("#usuariosactivo").removeAttr("disabled");
    return false;
  }

  var fd = new FormData();
  fd.append("idUsuario", CodUsu);
  fd.append("nombre", usuariosnombre);
  fd.append("email", usuariosmail);
  fd.append("direccion", usuariosdirpostal);
  fd.append("cp", usuarioscodigopostal);
  fd.append("idProvincia", usuariosprovincia);
  fd.append("profile", usuariosperfil);
  fd.append("clave", usuariosclave);
  fd.append("activo", usuariosactivo);

  fetch(url_base + "api/fronteras/usuario/editar", {
    method: "POST",
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: "El cambio ha sido exitoso.",
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          // Botones que pasa a su estado normal para editar y se refresca la pagina.
          $("#usuarioseditarfn").css("display", "block");
          $("#usuariosguardarfn").css("display", "none");
          location.reload();
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
      swal("Algo salió mal!", error, "error");
    });
});

function abrirLoading() {
  $("#loading-overlay").show();
}

function cerrarLoading() {
  $("#loading-overlay").hide();
}

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

  if (NueUsuarionombre == "") {
    $("#nombresolicitud").addClass("is-invalid");
    swal(
      "¡Algo salió mal!",
      "El campo 'Nombre y Apellido' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (NueUsuariodirpostal == "") {
    $("#tipoinmueble").addClass("is-invalid");
    swal(
      "¡Algo salió mal!",
      "El campo 'Dirección postal' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (NueUsuariocodigopostal == "") {
    $("#tipooperacion").addClass("is-invalid");
    swal(
      "¡Algo salió mal!",
      "El campo 'Código postal' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (NueUsuarioprovincia == 0) {
    $("#nombresolicitud").addClass("is-invalid");
    swal(
      "¡Algo salió mal!",
      "El campo 'Provincia' no puede estar vacío.",
      "error"
    );
    return false;
  }

  if (NueUsuariomail == "") {
    $("#tipoinmueble").addClass("is-invalid");
    swal("¡Algo salió mal!", "El campo 'Mail' no puede estar vacío.", "error");
    return false;
  }
  if (NueUsuarioclave == "") {
    $("#tipoinmueble").addClass("is-invalid");
    swal(
      "¡Algo salió mal!",
      "El campo 'Contraseña' no puede estar vacío.",
      "error"
    );
    return false;
  }

  $("#guardarInsUsuario").attr("disabled", "disabled");
  $("#cerrarAdmUsu").attr("disabled", "disabled");
  $("#imgCargando").attr(
    "src",
    url_base + "views/assets/images/loading-cargando.gif"
  );
  abrirLoading();
  // var fd = new FormData();
  // fd.append('nombre', NueUsuarionombre);
  // fd.append('email', NueUsuariomail);
  // fd.append('profile', NueUsuarioperfil);
  // fd.append('direccion', NueUsuariodirpostal);
  // fd.append('cp', NueUsuariocodigopostal);
  // fd.append('idProvincia', NueUsuarioprovincia);

  fetch(url_base + "api/fronteras/usuario/insertar-usuario", {
    method: "POST",
    // body: fd
    body: JSON.stringify({
      nombre: NueUsuarionombre,
      email: NueUsuariomail,
      profile: NueUsuarioperfil,
      direccion: NueUsuariodirpostal,
      cp: NueUsuariocodigopostal,
      idProvincia: NueUsuarioprovincia,
      password: NueUsuarioclave,
    }),
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal({
          title: "¡Excelente!",
          text: respObj.message,
          icon: "success",
          button: "Aceptar",
        }).then(function () {
          location.reload();
        });
      } else {
        swal({
          title: "¡Algo salió mal!",
          text: respObj.message,
          icon: "error",
          button: "Aceptar",
        }).then(function () {
          $("#cerrarAdmUsu").removeAttr("disabled");
        });
      }
    })
    .catch((error) => {
      $("#cerrarAdmUsu").removeAttr("disabled");
      swal("Algo salió mal!", "Ocurrio un error al crear usuario", "error");
    })
    .finally(() => {
      cerrarLoading();
    });
});

//MOSTRAR U OCULTAR CONTRASEÑA DEL ALTA DE USUARIOS
$("#button-view-claveUsu").click(function () {
  if ($("#viewerPassNueUsu").hasClass("fas fa-eye")) {
    $("#viewerPassNueUsu")
      .removeClass("fas fa-eye")
      .addClass("fas fa-eye-slash");
    $("#NueUsuariosclave").attr("type", "text");
  } else {
    $("#viewerPassNueUsu")
      .removeClass("fas fa-eye-slash")
      .addClass("fas fa-eye");
    $("#NueUsuariosclave").attr("type", "password");
  }
});

//MOSTRAR U OCULTAR CONTRASEÑA DEL ALTA DE USUARIOS
$("#button-view-claveusuvis").click(function () {
  if ($("#viewerPassUsu").hasClass("fas fa-eye")) {
    $("#viewerPassUsu").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
    $("#usuariosclave").attr("type", "text");
  } else {
    $("#viewerPassUsu").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
    $("#usuariosclave").attr("type", "password");
  }
});
