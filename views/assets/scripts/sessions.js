//EVENTO ENTER
$("#emailin").keypress(function (e) {
  if (e.which == 13) {
    generateLogin();
  }
});

$("#passin").keypress(function (e) {
  if (e.which == 13) {
    generateLogin();
  }
});

//VALIDO QUE SOLO SE DIGITE LETRAS
$("#nombreup").keypress(function (e) {
  var key = e.keyCode || e.which;
  var Caracteres = /[ a-zA-ZáéíóúñÁÉÍÓÚÑ\s]/;
  var tecla = String.fromCharCode(key).toLowerCase();
  return Caracteres.test(tecla);
});

//Ejecutar Carrousel de imágenes del login
function rollImages() {
  setInterval(function () {
    $(".slick-next").trigger("click");
  }, 3000);
}

rollImages();

//VALIR Y ENTRAR
function generateLogin() {
  if ($("#okCheck").prop("checked")) {
    localStorage.setItem("okCheck", true);
    localStorage.setItem("login-email", $("#emailin").val());
    localStorage.setItem("login-password", $("#passin").val());
  } else {
    localStorage.removeItem("login-email");
    localStorage.removeItem("login-password");
    localStorage.setItem("okCheck", false);
  }

  // $(".loginIn").hide();

  var email = $("#emailin").val();
  var pass = $("#passin").val();

  if (email == "") {
    swal(
      "¡Atención!",
      "Revisá por favor revisá el campo [correo electrónico] debe tener un valor.",
      "warning"
    );
    $(".loginIn").show();
    return false;
  }
  if (pass == "") {
    swal(
      "¡Atención!",
      "Revisá por favor revisá el campo [contraseña] debe tener un valor.",
      "warning"
    );
    $(".loginIn").show();
    return false;
  }

  var url_base = $("#url_base").val();

  let formData = new FormData();
  formData.append("user", email);
  formData.append("pass", pass);

  fetch(url_base + "api/perfiles/login", {
    method: "POST",
    body: formData,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
      if (respObj.status == 0) {
        if (respObj.messege != "cambiar") {
          $("#emailin").attr("disabled", "disabled");
          $("#passin").attr("disabled", "disabled");
          $("#okCheck").attr("disabled", "disabled");
          $(".idreglog").removeAttr("href");
          $(".idclalog").removeAttr("href");
          // swal("¡Excelente!", respObj.messege, "success");
          function show_popup() {
            window.location.href = url_base;
          }
          window.setTimeout(show_popup, 2000);
        } else {
          swal({
            title: "¡Información!",
            text: "Tienes que cambiar la contraseña.",
            icon: "info",
            button: "Aceptar",
          }).then(function () {
            $(document).ready(function () {
              $("#vistaModalCC").append(
                '<button id="ejecutarModal" type="button" class="btn mr-2 mb-2 btn-primary" data-toggle="modal" data-target="#loguinCamCon" hidden></button>'
              );
              $("#ejecutarModal").trigger("click");
              $("#LoguinIdUsu").val(respObj.id);
            });
          });
        }
      } else {
        $(".loginIn").show();
        swal("¡Algo salió mal!", respObj.messege, "error");
      }
    })
    .catch((error) => {
      $(".loginIn").show();
      swal("¡Algo salió mal!", error, "error");
    });
}

$("#loguinGC").click(function () {
  var url_base = $("#url_base").val();
  var emailin = $("#emailin").val();
  var loginConNue = $("#loginConNue").val();
  var loginRepConNue = $("#loginRepConNue").val();

  if (loginConNue != loginRepConNue) {
    swal("¡Algo salió mal!", "La contraseña no coincide.", "error");
    return false;
  }

  var fd = new FormData();
  // fd.append('idUsuario', emailin);
  fd.append("idUsuario", $("#LoguinIdUsu").val());
  fd.append("clave", loginRepConNue);

  /*fd.append('email','');
    fd.append('password', '');
    fd.append('nombre','');
    fd.append('profile', 0);
    fd.append('hashSession','');
    fd.append('direccion', '');
    fd.append('cp','');
    fd.append('idProvincia', 1);
    fd.append('activo',1);
    fd.append('archivos', '');*/

  fetch(url_base + "api/fronteras/usuario/cambiar-clave", {
    method: "POST",
    // headers: new Headers({
    //     'Content-Type': 'application/json',
    // }),
    body: fd,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      console.log(respObj);
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
      swal("¡Algo salió mal!", error, "error");
    });
});

$("#loguinCC").click(function () {
  location.href = "login";
});

if (localStorage.getItem("okCheck") == "true") {
  $("#emailin").val(localStorage.getItem("login-email"));
  $("#passin").val(localStorage.getItem("login-password"));
  $("#okCheck").prop("checked", true);
} else {
  localStorage.removeItem("login-email");
  localStorage.removeItem("login-password");
  localStorage.setItem("okCheck", false);
}

//MOSTRAR U OCULTAR CONTRASEÑA LOGIN
$("#button-view").click(function () {
  if ($("#viewerPass").hasClass("fas fa-eye")) {
    $("#viewerPass").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
    $("#passin").attr("type", "text");
    $("#passup").attr("type", "text");
  } else {
    $("#viewerPass").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
    $("#passin").attr("type", "password");
    $("#passup").attr("type", "password");
  }
});

//MOSTRAR U OCULTAR CONTRASEÑA DEL ALTA
$("#button-view-alta").click(function () {
  if ($("#viewerPassAlta").hasClass("fas fa-eye")) {
    $("#viewerPassAlta").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
    $("#passup").attr("type", "text");
  } else {
    $("#viewerPassAlta").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
    $("#passup").attr("type", "password");
  }
});

//MOSTRAR U OCULTAR CUANDO SE RECUPERA LA CONTRASEÑA
$("#button-viewRecovery1").click(function () {
  if ($("#viewerPass1").hasClass("fas fa-eye")) {
    $("#viewerPass1").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
    $("#login-passwordOne").attr("type", "text");
  } else {
    $("#viewerPass1").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
    $("#login-passwordOne").attr("type", "password");
  }
});

//MOSTRAR U OCULTAR CUANDO REPITE LA CONTRASEÑA AL RECUPERAR
$("#button-viewRecovery2").click(function () {
  if ($("#viewerPass2").hasClass("fas fa-eye")) {
    $("#viewerPass2").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
    $("#login-passwordTwo").attr("type", "text");
  } else {
    $("#viewerPass2").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
    $("#login-passwordTwo").attr("type", "password");
  }
});
//MOSTRAR U OCULTAR 1RA CONTRASEÑA DEL ALTA GENESIS
$("#button-view-primeracontra, #button-view-primeracontra-update").click(
  function () {
    var descripcion = $(this).attr("id");
    if (descripcion == "button-view-primeracontra") {
      if ($("#viewerPassAltaPrimera").hasClass("fas fa-eye")) {
        $("#viewerPassAltaPrimera")
          .removeClass("fas fa-eye")
          .addClass("fas fa-eye-slash");
        $("#pass1").attr("type", "text");
      } else {
        $("#viewerPassAltaPrimera")
          .removeClass("fas fa-eye-slash")
          .addClass("fas fa-eye");
        $("#pass1").attr("type", "password");
      }
    } else {
      if ($("#viewerPassAltaPrimeraUpdate").hasClass("fas fa-eye")) {
        $("#viewerPassAltaPrimeraUpdate")
          .removeClass("fas fa-eye")
          .addClass("fas fa-eye-slash");
        $("#pass1Up").attr("type", "text");
      } else {
        $("#viewerPassAltaPrimeraUpdate")
          .removeClass("fas fa-eye-slash")
          .addClass("fas fa-eye");
        $("#pass1Up").attr("type", "password");
      }
    }
  }
);

//MOSTRAR U OCULTAR 2 CONTRASEÑA ALTA GENESIS
$("#button-view-segundacontra, #button-view-segundacontra-update").click(
  function () {
    var descripcion = $(this).attr("id");
    if (descripcion == "button-view-segundacontra") {
      if ($("#viewerPassAltaRepetida").hasClass("fas fa-eye")) {
        $("#viewerPassAltaRepetida")
          .removeClass("fas fa-eye")
          .addClass("fas fa-eye-slash");
        $("#pass2").attr("type", "text");
      } else {
        $("#viewerPassAltaRepetida")
          .removeClass("fas fa-eye-slash")
          .addClass("fas fa-eye");
        $("#pass2").attr("type", "password");
      }
    } else {
      if ($("#viewerPassAltaRepetidaUpdate").hasClass("fas fa-eye")) {
        $("#viewerPassAltaRepetidaUpdate")
          .removeClass("fas fa-eye")
          .addClass("fas fa-eye-slash");
        $("#pass2Up").attr("type", "text");
      } else {
        $("#viewerPassAltaRepetidaUpdate")
          .removeClass("fas fa-eye-slash")
          .addClass("fas fa-eye");
        $("#pass2Up").attr("type", "password");
      }
    }
  }
);

//MOSTRAR U OCULTAR 2Da CONTRASEÑA DEL ALTA GENESIS ver usuarios
$("#button-view-segundacontra-updateTodos").click(function () {
  if ($("#viewerPassAltaRepetidaUpdateTodos").hasClass("fas fa-eye")) {
    $("#viewerPassAltaRepetidaUpdateTodos")
      .removeClass("fas fa-eye")
      .addClass("fas fa-eye-slash");
    $("#pass2UpTodos").attr("type", "text");
  } else {
    $("#viewerPassAltaRepetidaUpdateTodos")
      .removeClass("fas fa-eye-slash")
      .addClass("fas fa-eye");
    $("#pass2UpTodos").attr("type", "password");
  }
});

//     if ($("#viewerPassAltaRepetidaUpdate").hasClass('fas fa-eye')) {
//         $("#viewerPassAltaRepetidaUpdate").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
//         $("#pass2Up").attr('type', 'text');
//     } else {
//         $("#viewerPassAltaRepetidaUpdate").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
//         $("#pass2Up").attr('type', 'password');
//     }
//     });

// $("#button-view-primeracontra-update").click(function () {
//     if ($("#viewerPassAltaPrimeraUpdate").hasClass('fas fa-eye')) {
//         $("#viewerPassAltaPrimeraUpdate").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
//         $("#pass1Up").attr('type', 'text');
//     } else {
//         $("#viewerPassAltaPrimeraUpdate").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
//         $("#pass1Up").attr('type', 'password');
//     }
// });

//MOSTRAR U OCULTAR 1era CONTRASEÑA DE ALTA
// $("#button-view-primeracontra").click(function () {
// if ($("#viewerPassAltaPrimera").hasClass('fas fa-eye')){
//     $("#viewerPassAltaPrimera").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
//     $("#pass1").attr('type', 'text');
// } else {
//     $("#viewerPassAltaPrimera").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
//     $("#pass1").attr('type', 'password');
// }
// });

// //MOSTRAR U OCULTAR 2Da CONTRASEÑA DEL ALTA GENESIS
// $("#button-view-segundacontra").click(function () {
//     if ($("#viewerPassAltaRepetida").hasClass('fas fa-eye')) {
//         $("#viewerPassAltaRepetida").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
//         $("#pass2").attr('type', 'text');
//     } else {
//         $("#viewerPassAltaRepetida").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
//         $("#pass2").attr('type', 'password');
//     }
// });

// //MOSTRAR U OCULTAR 1era CONTRASEÑA DE UPDATE GENEIS
// $("#button-view-primeracontra-update").click(function () {
//     if ($("#viewerPassAltaPrimeraUpdate").hasClass('fas fa-eye')){
//         $("#viewerPassAltaPrimeraUpdate").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
//         $("#pass1Up").attr('type', 'text');
//     } else {
//         $("#viewerPassAltaPrimeraUpdate").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
//         $("#pass1Up").attr('type', 'password');
//     }
//     });

// //MOSTRAR U OCULTAR 2Da CONTRASEÑA DEL UPDATE GENESIS
// $("#button-view-segundacontra-update").click(function () {
//     if ($("#viewerPassAltaRepetidaUpdate").hasClass('fas fa-eye')) {
//         $("#viewerPassAltaRepetidaUpdate").removeClass("fas fa-eye").addClass("fas fa-eye-slash");
//         $("#pass2Up").attr('type', 'text');
//     } else {
//         $("#viewerPassAltaRepetidaUpdate").removeClass("fas fa-eye-slash").addClass("fas fa-eye");
//         $("#pass2Up").attr('type', 'password');
//     }
//     });

//MOSTRAR U OCULTAR EL LOGIN, ALTA Y RECUPERAR
function getSignUp() {
  $(".modulo-login").hide();
  $(".modulo-recovery").hide();
  $(".modulo-signup").show();
}

function getLogin() {
  $(".modulo-signup").hide();
  $(".modulo-recovery").hide();
  $(".modulo-login").show();
}

function getRecovery() {
  $(".modulo-login").hide();
  $(".modulo-recovery").show();
}

function getUppercarse(texto) {
  var letters = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
  for (i = 0; i < texto.length; i++) {
    if (letters.indexOf(texto.charAt(i), 0) != -1) {
      return 1;
    }
  }
  return 0;
}

function getNumber(texto) {
  var numbers = "1234567890";
  for (i = 0; i < texto.length; i++) {
    if (numbers.indexOf(texto.charAt(i), 0) != -1) {
      return 1;
    }
  }
  return 0;
}

//VALIDO QUE LOS CAMPOS TENGAN VALOR.
$("#nombreup").change(function () {
  var nombreup = $("#nombreup").val();

  if (nombreup == "") {
    $("#nombreup").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#nombreup").removeClass("is-invalid").addClass("is-valid");
  }
});

$("#direccionup").change(function () {
  var direccionup = $("#direccionup").val();

  if (direccionup == "") {
    $("#direccionup").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#direccionup").removeClass("is-invalid").addClass("is-valid");
  }
});

$("#postalup").change(function () {
  var postalup = $("#postalup").val();

  if (postalup == "") {
    $("#postalup").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#postalup").removeClass("is-invalid").addClass("is-valid");
  }
});

$("#emailup").change(function () {
  var emailup = $("#emailup").val();

  if (
    emailup == "" ||
    $("#emailup").val().indexOf("@", 0) == -1 ||
    $("#emailup").val().indexOf(".", 0) == -1
  ) {
    $("#emailup").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#emailup").removeClass("is-invalid").addClass("is-valid");
  }
});

$("#passup").change(function () {
  var passup = $("#passup").val();

  if (passup == "") {
    $("#passup").removeClass("is-valid").addClass("is-invalid");
  } else {
    $("#passup").removeClass("is-invalid").addClass("is-valid");
  }
});

// $("#nombreArchivoup").change(function () {
//     var nombreArchivoup = $("#nombreArchivoup").val();

//     if (nombreArchivoup == '') {
//         $("#nombreArchivoup").removeClass("is-valid").addClass("is-invalid");
//     } else {
//         $("#nombreArchivoup").removeClass("is-invalid").addClass("is-valid");
//     }
// });

//ALTA DE RESGISTRO DE USUARIOS
function generateUser() {
  var url_base = $("#url_base").val();
  var nombreup = $("#nombreup").val();
  var direccionup = $("#direccionup").val();
  var postalup = $("#postalup").val();
  var provinciaup = $("#provinciaup").val();
  var emailup = $("#emailup").val();
  var passup = $("#passup").val();
  var nombreArchivoup = $("#input-file-preview-nup")[0].files[0];

  if (nombreup == "") {
    $("#nombreup").addClass("is-invalid");
    return false;
  }

  if (direccionup == "") {
    $("#direccionup").addClass("is-invalid");
    return false;
  }

  if (postalup == "") {
    $("#postalup").addClass("is-invalid");
    return false;
  }

  if (provinciaup == 0 || provinciaup == null || provinciaup == undefined) {
    swal("¡Algo salió mal!", "Debe seleccionar una provincia.", "error");
    return false;
  }

  if (emailup == "") {
    $("#emailup").addClass("is-invalid");
    return false;
  }

  if (
    $("#emailup").val().indexOf("@", 0) == -1 ||
    $("#emailup").val().indexOf(".", 0) == -1
  ) {
    $("#emailup").addClass("is-invalid");
    return false;
  }

  if (passup == "") {
    $("#passup").addClass("is-invalid");
    return false;
  }

  if (nombreArchivoup == "" || nombreArchivoup == undefined) {
    $("#nombreArchivoup").removeClass("is-valid").addClass("is-invalid");
    swal("¡Algo salió mal!", "Debe seleccionar Formulario N°8", "error");
    return false;
  } else {
    $("#nombreArchivoup").removeClass("is-invalid").addClass("is-valid");
  }

  // if (passup.length < 8 || passup.length > 20 || getUppercarse(passup) == 0 || getNumber(passup) == 0) {
  //     $("#passup").addClass("is-invalid");
  //     swal("Validación", "Su contraseña debe tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.", "warning");
  //     return false;
  // }

  // var nombreArchivoup = $("#input-file-preview-nup")[0].files[0]
  // var input = document.querySelector('input[type="file"]')
  // var data = new FormData()
  // data.append('file', input.files[0])
  // var input = document.querySelector('input[type="file"]')
  // console.log(input.files[0]);

  var fd = new FormData();
  fd.append("nombre", nombreup);
  fd.append("email", emailup);
  fd.append("password", passup);
  fd.append("direccion", direccionup);
  fd.append("cp", postalup);
  fd.append("idProvincia", provinciaup);
  fd.append("archivos", nombreArchivoup);

  fetch(url_base + "api/fronteras/usuario/insertar-escribano", {
    method: "POST",
    body: fd,
    // body: "nombre=" + nombreup + "&email=" + emailup + "&password=" + passup + "&direccion=" + direccionup + "&cp=" + postalup + "&idProvincia=" + provinciaup + "&archivos=" + input.name
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      //alert(respObj);
      if (respObj.status == 0) {
        //Cambiar el tipo de status
        swal("¡Excelente!", respObj.message, "success");

        setTimeout(function () {
          location.href = url_base + "login";
        }, 2000);
      } else {
        swal("¡Algo salió mal!", respObj.message, "error");
      }
    })
    .catch((error) => {
      swal("¡Algo salió mal!", error, "error");
    });
}

function abrirLoading() {
  $("#loading-overlay").show();
}

function cerrarLoading() {
  $("#loading-overlay").hide();
}

//ENVIO POR MAIL PARA RECUPERAR CONTRASEÑA DE LOS USUARIOS
function recoveryPass() {
  abrirLoading();
  var url_base = $("#url_base").val();
  var emailrecovery = $("#emailrecovery").val();
  if (emailrecovery == "") {
    $("#emailrecovery").addClass("is-invalid");
    return false;
  }

  if (
    $("#emailrecovery").val().indexOf("@", 0) == -1 ||
    $("#emailrecovery").val().indexOf(".", 0) == -1
  ) {
    $("#emailrecovery").addClass("is-invalid");
    swal(
      "¡Algo salió mal!",
      "El campo [correo electrónico] no corresponde con el formato de un correo electrónico.",
      "error"
    );
    return false;
  }

  fetch(url_base + "api/perfiles/recovery", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: "email=" + emailrecovery + "&base_url=" + url_base,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal("¡Excelente!", respObj.messege, "success");

        setTimeout(function () {
          location.href = "login";
        }, 3000);
      } else {
        swal("¡Algo salió mal!", respObj.messege, "error");
      }
    })
    .catch((error) => {
      swal("¡Algo salió mal!", "Ha ocurrido un error", "error");
    })
    .finally(() => {
      cerrarLoading();
    });
}

/*=============================================
CONFIRMAR PARA RECUPERAR LA CONTRASEÑA
=============================================*/
function forgotPass() {
  var url_base = $("#url_base").val();
  var hash_session = $("#hash_session").val();

  var emailforgot1 = $("#login-passwordOne").val();
  if (emailforgot1 == "") {
    $("#login-passwordOne").addClass("is-invalid");
    return false;
  }
  if (
    emailforgot1.length < 8 ||
    emailforgot1.length > 20 ||
    getUppercarse(emailforgot1) == 0 ||
    getNumber(emailforgot1) == 0
  ) {
    $("#login-passwordOne").addClass("is-invalid");
    swal(
      "Validación",
      "Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números.",
      "warning"
    );
    return false;
  }

  var emailforgot2 = $("#login-passwordTwo").val();
  if (emailforgot2 == "") {
    $("#login-passwordTwo").addClass("is-invalid");
    return false;
  }

  if (
    emailforgot2.length < 8 ||
    emailforgot2.length > 20 ||
    getUppercarse(emailforgot2) == 0 ||
    getNumber(emailforgot2) == 0
  ) {
    $("#login-passwordOne").addClass("is-invalid");
    $("#login-passwordTwo").addClass("is-invalid");
    swal(
      "Validación",
      "Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números.",
      "warning"
    );
    return false;
  }

  if (emailforgot1 != emailforgot2) {
    $("#login-passwordOne").addClass("is-invalid");
    $("#login-passwordTwo").addClass("is-invalid");
    swal(
      "Información",
      "Las contraseñas no coinciden. Corregilo y volvé a intentar",
      "error"
    );
    return false;
  }
  fetch(url_base + "api/perfiles/recovery/update", {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: "newpass=" + emailforgot1 + "&hash_session=" + hash_session,
  })
    .then((resp) => resp.json())
    .then((respObj) => {
      if (respObj.status == 0) {
        swal("¡Excelente!", respObj.messege, "success");

        setTimeout(function () {
          location.href = url_base + "login";
        }, 3000);
      } else {
        swal("¡Algo salió mal!", respObj.messege, "error");
      }
    })
    .catch((error) => {
      swal("¡Algo salió mal!", error, "error");
    });
}

// Cargo el archivo en el input del registrarme como escribano.
$("#input-file-preview-nup").change(function () {
  filename = this.files[0].name;
  // console.log(filename);
  $("#nombreArchivoup").val(filename);
});
