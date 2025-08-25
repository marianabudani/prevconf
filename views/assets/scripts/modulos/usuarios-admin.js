$(document).ready(function () {
  var url_base = $("#url_base").val();

  fetch(url_base + "api/fronteras/usuario/traer-por-tipo?perfiles=0,2", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        $("#usuariosadmin").DataTable({
          language: idioma_espanol,
          data: respObj.message,
          columnDefs: [
            { title: "Escribano", targets: 0 },
            { title: "Correo electrónico", targets: 1 },
            { title: "Perfil", targets: 2 },
            { title: "¿Activo?", targets: 3 },
            { title: "Acciones", targets: 4, orderable: false },
          ],
          columns: [
            { data: "nombre" },
            { data: "email" },
            {
              render: function (data, type, row) {
                if (row.profile == 0) {
                  return "Administrador";
                } else {
                  return "Abogado";
                }
              },
            },
            {
              render: function (data, type, row) {
                if (row.activo == 1) {
                  return "Si";
                } else {
                  return "No";
                }
              },
            },
            {
              render: function (data, type, row) {
                return (
                  "<button id='' class='btn btn-primary' data-toggle='modal' data-target='#usuariover' onClick='getVisiualizarUsuarios(\"" +
                  row.id +
                  '","' +
                  row.nombre +
                  '","' +
                  row.email +
                  '","' +
                  row.direccion +
                  '","' +
                  row.cp +
                  '","' +
                  row.id_provincia +
                  '","' +
                  row.activo +
                  '","' +
                  row.profile +
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

function getVisiualizarUsuarios(
  id,
  nombre,
  email,
  direccion,
  cp,
  id_provincia,
  activo,
  profile
) {
  $("#CodUsu").val(id);
  $("#usuariosnombre").val(nombre);
  $("#usuariosdirpostal").val(direccion);
  $("#usuarioscodigopostal").val(cp);
  $("#usuariosprovincia").val(id_provincia);
  $("#usuariosmail").val(email);
  $("#usuariosperfil").val(profile);
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
