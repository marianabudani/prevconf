$(document).ready(function () {
  var url_base = $("#url_base").val();

  fetch(url_base + "api/fronteras/usuario/traer-escribanos?perfiles=1", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        $("#escribano").DataTable({
          aaSorting: [],
          dom: "Bfrtip",
          buttons: ["pdfHtml5"],
          language: idioma_espanol,
          data: respObj.message,
          columnDefs: [
            { title: "Escribano", targets: 0 },
            { title: "Correo electrónico", targets: 1 },
            { title: "¿Activo?", targets: 2 },
            { title: "Acciones", targets: 3, orderable: false },
          ],
          columns: [
            { data: "nombre" },
            { data: "email" },
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
                  "<button id='' class='btn btn-primary' data-toggle='modal' data-target='#verescribano' onClick='getVisiualizarEscribano(\"" +
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
                  row.archivos +
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

function getVisiualizarEscribano(
  id,
  nombre,
  email,
  direccion,
  cp,
  id_provincia,
  activo,
  archivos
) {
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
  var datos = archivos.split(",");
  for (var i = 0; i < datos.length; i++) {
    $("#nuevoArchivoEscribano").append(
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
        '<input type="file" accept=".pdf, .jpg, .jpeg, .png" class="input-file-preview-nfn' +
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
