// tabla de notificación
$(document).ready(function () {
  var url_base = $("#url_base").val();
  var id = $("#idUsuario").val();
  var id_perfil = $("#id_perfil_usuario").val();

  if (id === "no definido" || url_base === "") {
    return false;
  }

  fetch(
    url_base + "api/fronteras/notificacion/traer-por-usuario?idUsuario=" + id,
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
        if (id_perfil == 2) {
          $("#notificaciones").DataTable({
            language: idioma_espanol,
            data: respObj.message,
            columnDefs: [
              { title: "Fecha", targets: 0 },
              { title: "Nombre", targets: 1 },
              { title: "Descripción", targets: 2 },
              { title: "Solicitante", targets: 3 },
            ],
            columns: [
              { data: "fecha" },
              { data: "nombre" },
              { data: "descripcion" },
              { data: "solicitante" },
            ],
            order: [[0, "desc"]],
          });
        } else {
          $("#notificaciones").DataTable({
            language: idioma_espanol,
            data: respObj.message,
            columnDefs: [
              { title: "Fecha", targets: 0 },
              { title: "Nombre", targets: 1 },
              { title: "Descripción", targets: 2 },
              { title: "Solicitante", targets: 3 },
              { title: "¿Leido?", targets: 4, orderable: false },
            ],
            columns: [
              { data: "fecha" },
              { data: "nombre" },
              { data: "descripcion" },
              { data: "solicitante" },

              {
                render: function (data, type, row) {
                  if (row.leido == 1) {
                    return (
                      "<input type='checkbox' onchange = 'cambioEscLeido(\"" +
                      row.id_notificacion +
                      "\");' data-toggle='toggle' data-size='mini' style='width: 52px;' checked>"
                    );
                  } else {
                    return (
                      "<input type='checkbox' onchange = 'cambioEscLeido(\"" +
                      row.id_notificacion +
                      "\");' data-toggle='toggle' data-size='mini' style='width: 52px;'>"
                    );
                  }
                },
              },
            ],
            order: [[0, "desc"]],
          });
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
      swal({ title: "¡Error!", text: error, icon: "error" });
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
  fdnot.append("idNotificacion", id_notificacion);
  // fdnot.append('leido', valorcke);

  fetch(url_base + "api/fronteras/notificacion/marcar-leida", {
    method: "POST",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    body: fdnot,
    // body: JSON.stringify({ idNotificacion: id_notificacion })
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      console.log(respObj.status);
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
      swal("Algo salió mal!", error, "error");
    });
}
