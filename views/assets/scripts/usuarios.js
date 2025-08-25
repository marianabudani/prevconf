// let url_base = $("#url_base").val();

/********************************************
 *******BOTON REGISTRAR / ALTA USUARIO*******
*********************************************/
function altaUsuarios(){
    var configmail = $("#configmail").val();  
   
    //Validación campo NOMBRE
    var nombreup =$("#nombreup").val();

    if( $("#nombreup").val()=="" ){
        $("#nombreup").addClass('is-invalid');
        swal("¡Atención!", 
        "El campo nombre es obligatorio", "warning");
        $("#statusEmail").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        return false;
    }
    //Validación campo EMAIL
    var newemail=$("#newemail").val();
    var inputemailcolor=$("#newemail");

    if( $("#newemail").val()=="" ){
        $("#newemail").addClass('is-invalid');
        swal("¡Atención!", 
        "El campo email/usuario es obligatorio", "warning");
        $("#statusEmail").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        return false;
    }
   
    if (newemail.indexOf(configmail) == -1){
        swal("Algo salió mal!", "El dominio de este mail [" + newemail.substr(newemail.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
        $("#statusEmail").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
        
        inputemailcolor.css("border-color","red"); 
        inputemailcolor.removeClass("is-active");
        inputemailcolor.addClass("is-inactive");
        return false;
   
    } else if(newemail.substr(newemail.indexOf("@")) != ("@" + configmail)){
        swal("Algo salió mal!", "El dominio de este mail [" + newemail.substr(newemail.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
        $("#statusEmail").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
        inputemailcolor.css("border-color","red"); 
        inputemailcolor.removeClass("is-active");
        inputemailcolor.addClass("is-inactive");
        return false;
   
    }
    //Validación campo CONTRASEÑA
    var pass1 = $("#pass1").val();
    var pass2 = $("#pass2").val();

    if( pass1=="" ){
        $("#pass1").addClass('is-invalid');
        swal("¡Atención!", 
        "El campo contraseña es obligatorio y no debe estar vacío", "warning");
        return false;        
    }else if($("#pass1").hasClass("is-invalid")){
        $("#pass1").removeClass('is-invalid');
    }

    if( pass2=="" ){
        $("#pass2").addClass('is-invalid');
        $("#pass2").css("border-color","red"); 
        swal("¡Atención!", 
        "El campo contraseña es obligatorio y no debe estar vacío", "warning");
        return false;
    }
    if (pass1.length <= 8 || pass1.length >= 20 || getUppercarse(pass1) == 0 || getNumber(pass1) == 0) {
        $("#pass1").addClass("is-invalid");
        swal("Validación", "Su contraseña debe tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.", "warning");
        return false;
    }

        if( pass1 != pass2 ){
            swal("¡Atención!", "las contraseñas deben ser iguales", "warning");
            return false;
        }
    
    //Validación campo CHECK
    var check = 0;

    if ($('#adminconfirmation').prop('checked') == true) {
    check = 1;
    } else {
    check = 0;
    }
   

    checkValidMail(newemail, pass1, nombreup,check);
    validarMail();
  
}

/*********************************************
 *****FETCH DE LA FUNCTION ALTAUSUARIO********
 *********************************************/
function checkValidMail(newemail, pass1, nombreup, check){
       
    var inputemail=$("#newemail");
    var url_base = $("#url_base").val();
    
    fetch(url_base + 'api/perfiles/validateuser', {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: "user=" + newemail + "&pass=" + pass1 + "&first_name=" + nombreup + "&checkdeladmin=" + check
    })
    
    .then( resp => resp.json() )
    .then( respObj => {
        //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
        if (respObj.status == 0){
            
            $("#statusEmail").html('<span class="label label-success" style="color: green">'+ respObj.messege +'</span>');
            inputemail.removeClass("is-invalid")
            inputemail.addClass("is-valid")
            inputemail.css("border-color","green"); 
           // swal("¡Excelente!", respObj.messege, "success");
            swal({title: "¡Excelente!", text: respObj.messege, type: "success"}).then(function(){
                location.reload();
            } 
            );
                       
        }else{            
            $("#statusEmail").html('<span class="label label-error" style="color: red">'+ respObj.messege +'</span>');
            inputemail.addClass("is-invalid")
            inputemail.css("border-color","red");

        }
    })
    .catch( error => {
        alert(error);
    }); 
    
}

/**********************************************
******COMIENZAN LAS FUNCIONES DEL ONCHANGE ****
****DEL FORMULARIO DE REGISTRO/ALTA USUARIOS **
**********************************************/
//NOMBRE
function checkValidUser (){
    var nombreup =$("#nombreup").val();
    var nombreinput =$("#nombreup");

    if(nombreup == ""){
        nombreinput.addClass("is-invalid");
        $("#statusName").html('<span class="label label-success" style="color: red">Campo obligatorio</span>');        
    }
    else{        
        $("#statusName").html('');
        nombreinput.removeClass("is-invalid")
        nombreinput.addClass("is-valid");
     return false;  
    }

}
//CONTRASEÑA
function checkValidPassword (){
    var pass1 = $("#pass1").val();
    var pass2 = $("#pass2").val();
    var pass2input= $("#pass2");
    var pass1input =$("#pass1");
    
    if( pass1 != pass2 || pass1.length == 0 || pass1.length <= 8 || pass1.length >= 20 || getUppercarse(pass1) == 0 || getNumber(pass1) == 0){
    pass1input.addClass("is-invalid");
    pass2input.addClass("is-invalid"); 
    $("#statusSecondPassword").html('<span class="label label-success" style="color: red">Deben ser iguales, tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.</span>');
    
    }else{
    pass2input.removeClass("is-invalid");
    pass1input.removeClass("is-invalid");
    pass2input.addClass("is-valid");
    pass1input.addClass("is-valid"); 
    $("#statusSecondPassword").html('');
    }

}
//MAIL
function validarMail(){
    var configmail = $("#configmail").val();
    var newemail=$("#newemail").val();
    var inputemail =$("#newemail");
  
    if( $("#newemail").val()=="" ){
        $("#newemail").addClass('is-invalid');
        $("#statusEmail").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        inputemail.css("border-color","red");
        return false; 
    } else if (newemail.indexOf('@', 0) == -1 || newemail.indexOf('.', 0) == -1) {
        $("#statusEmail").html('<span class="label label-error" style="color: red">El formato no corresponde a un correo.</span>');
        inputemail.removeClass("is-valid");
        inputemail.addClass("is-invalid");
        inputemail.css("border-color","red"); 
        return false;

    }  else if (newemail.indexOf(configmail) == -1){
        $("#statusEmail").html('<span class="label label-error" style="color: red">El dominio de este mail no corresponde al configurado en el sistema.</span>');
        inputemail.removeClass("is-valid");
        inputemail.addClass("is-invalid");
        inputemail.css("border-color","red"); 
        return false;

    }   else if(newemail.substr(newemail.indexOf("@")) != ("@" + configmail)){
            swal("Algo salió mal!", "El dominio de este mail [" + newemail.substr(newemail.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
            $("#statusEmail").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
            inputemail.removeClass("is-valid");
            inputemail.addClass("is-invalid");
            inputemail.css("border-color","red"); 
            return false;
    } else {
        $("#statusEmail").html('<span class="label label-success" style="color: green">El email está correcto</span>');
        inputemail.removeClass("is-invalid");
        inputemail.addClass("is-valid");
        inputemail.css("border-color","green"); 
    }
}



/*******************************************
************ ULTIMOS REGISTROS ************
*******************************************/
//los usuarios se guardan en base de datos y mediante esta función se pueden visualizar los ultimos 5 registros
//La cantidad de registros a trar se modifican desde la api /traerUsuarios
function escribirDatos() {
    var url_base = $("#url_base").val();
    $.ajax({
        url: url_base+'api/perfiles/traerUsuarios',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            var datosArray= data.content;
            var container =$("#usuarioscontainer");
            
            for (i = 0; i < datosArray.length; i++){
                let id =datosArray[i].id;
                let nombreusuario =datosArray[i].nombre;
                let userStatus =datosArray[i].owner;
                let emailusuario = datosArray[i].email;
                let passusuario = datosArray[i].pass;
                
                /* Convierte el valor de 0 y 1 (owner) a string(usuario o administrador) */
                if(userStatus==0){
                    userStatus="Usuario";
                    
                }else{
                userStatus="Administrador";
                }
                
                container.append(
                    '<li class="list-group-item d-flex justify-content-between lh-sm">' +
                        '<div id="infoUsuarios" class="d-flex flex-column">' +
                            '<h6 class="nombreUsuario my-0 font-weight-bold">'+nombreusuario+'</h6>' +
                            '<small class="my-0 text-info" id="userRange">'+userStatus+'</small>' +
                            '<p class="my-0 text-secondary">'+emailusuario+'</p>' +
                        '</div>' +
                        '<div class="widget-content">' +
                            '<div role="group" class="btn-group" data-toggle="buttons">' +
                                '<button type="button" class="btn btn-success" onclick="modificarUsuario('+ id +',\''+ nombreusuario +'\',\''+ emailusuario +'\',\''+ userStatus +'\',\''+ passusuario +'\');" data-toggle="modal" data-target="#updateUsuario"><i class="fas fa-edit fa-lg"></i></button>' +
                                '<button type="button" class="btn btn-danger" onclick="deleteUsuario('+ id +')"><i class="fas fa-trash fa-lg"></i></button>' +                                
                            '</div>' +
                        '</div>' +
                    '</li>'
                );
            }
        }
    });
}
 escribirDatos();  

/******************************************
**BOTON MODIFICAR DEL USUARIO *************
*******************************************/
function modificarUsuario(id,nombreusuario,emailusuario,userStatus, passusuario) {   
    $('#nombreup2').val(nombreusuario);
    $('#newemailUp').val(emailusuario);
    $('#checkUp').val(userStatus);
    $('#idusuarioUp').val(id);
    $('#pass2Up').val(passusuario);
}

/*******************************************
******COMIENZAN LAS FUNCIONES DEL ONCHANGE *
****DEL FORMULARIO DE EDITAR REGISTROS******
*******************************************/
//actualizar NOMBRE
function checkValidUserUp (){
    var nombreup2 =$("#nombreup2").val();
    var nombreinput2 =$("#nombreup2");

    if(nombreup2 == ""){
        nombreinput2.addClass("is-invalid");
        $("#statusName2").html('<span class="label label-success" style="color: red">Campo obligatorio</span>');
    }else{            
        $("#statusName2").html('');
        nombreinput2.removeClass("is-invalid")
        nombreinput2.addClass("is-valid");
        return false;  
    }
}
// actualizar MAIL
function validarMailUp(){
    var configmail = $("#configmail").val();
    var newemailUp=$("#newemailUp").val();
    var inputemailUp =$("#newemailUp");

        
    if( $("#newemailUp").val()=="" ){
        $("#newemailUp").addClass('is-invalid');
        $("#statusEmailUp").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        inputemailUp.css("border-color","red");
        return false; 
    }else if (newemailUp.indexOf('@', 0) == -1 || newemailUp.indexOf('.', 0) == -1) {
        $("#statusEmailUp").html('<span class="label label-error" style="color: red">El formato no corresponde a un correo.</span>');
        inputemailUp.removeClass("is-valid");
        inputemailUp.addClass("is-invalid");
        inputemailUp.css("border-color","red"); 
        return false;

    }else if (newemailUp.indexOf(configmail) == -1){
        $("#statusEmailUp").html('<span class="label label-error" style="color: red">El dominio de este mail no corresponde al configurado en el sistema.</span>');
        inputemailUp.removeClass("is-valid");
        inputemailUp.addClass("is-invalid");
        inputemailUp.css("border-color","red"); 
        return false;

    }else if(newemailUp.substr(newemailUp.indexOf("@")) != ("@" + configmail)){
            swal("Algo salió mal!", "El dominio de este mail [" + newemailUp.substr(newemailUp.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
            $("#statusEmailUp").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
            inputemailUp.removeClass("is-valid");
            inputemailUp.addClass("is-invalid");
            inputemailUp.css("border-color","red"); 
            return false;
        
    }else {
        $("#statusEmailUp").html('<span class="label label-success" style="color: green">El email está correcto</span>');
        inputemailUp.removeClass("is-invalid");
        inputemailUp.addClass("is-valid");
        inputemailUp.css("border-color","green"); 
    }
}
//Actualizar CONTRASEÑA
function checkValidPasswordUp (){          
    var pass2Up = $("#pass2Up").val();
    var pass2inputUp= $("#pass2Up");


    if( pass2Up.length == 0 || pass2Up.length <= 7 || pass2Up.length >= 19 || getUppercarse(pass2Up) == 0 || getNumber(pass2Up) == 0){           
        pass2inputUp.addClass("is-invalid");          
        $("#statusSecondPasswordUp").html('<span class="label label-success" style="color: red">Debe tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.</span>');

    } else{        
        pass2inputUp.removeClass("is-invalid");         
        pass2inputUp.addClass("is-valid");
        $("#statusSecondPasswordUp").html('');

    }
}

/*****************************************
***********UPDATE BOTON*******************
******************************************/
//Boton Cambiar
function actualizarUsuario(){
  
    //var configmail = $("#configmail").val();
    var id = $("#idusuarioUp").val();
    
    // UPDATE nombre
    var nombreup2 =$("#nombreup2").val();
    if( $("#nombreup2").val()=="" ){
        $("#nombreup2").addClass('is-invalid');
        swal("Algo salió mal!", 
        "El campo nombre es obligatorio", "warning");
        $("#statusEmail").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        return false;
    }

    //UPDATE email
    var newemailUp=$("#newemailUp").val();
    // console.log('probando el email'+ newemailUp);
    // var inputemailcolorUp=$("#newemailUp");


    // if( $("#newemailUp").val()=="" ){
    //     $("#newemailUp").addClass('is-invalid');

    //     swal("¡Atención!", 
    //     "El campo email/usuario es obligatorio", "warning");
    //     $("#statusEmailUp").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
    //     return false;
    // }

    // if (newemailUp.indexOf(configmail) == -1){
    //     swal("Algo salió mal!", "El dominio de este mail [" + newemailUp.substr(newemailUp.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
    //     $("#statusEmailUp").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
        
    //     inputemailcolorUp.css("border-color","red"); 
    //     inputemailcolorUp.removeClass("is-active");
    //     inputemailcolorUp.addClass("is-inactive");
    //     return false;

    // } else if(newemailUp.substr(newemailUp.indexOf("@")) != ("@" + configmail)){
    //     swal("Algo salió mal!", "El dominio de este mail [" + newemailUp.substr(newemailUp.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
    //     $("#statusEmail").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
    //     inputemailcolorUp.css("border-color","red"); 
    //     inputemailcolorUp.removeClass("is-active");
    //     inputemailcolorUp.addClass("is-inactive");
    //     return false;

    // }

    //UPDATE contraseña
    var pass2Up = $("#pass2Up").val();
    if( pass2Up=="" ){
            swal("¡Atención!", 
        "El campo contraseña es obligatorio y no debe estar vacío", "warning");
        return false;
    }
    if( pass2Up.length == 0 || pass2Up.length <= 7 || pass2Up.length >= 19 || getUppercarse(pass2Up) == 0 || getNumber(pass2Up) == 0){
        swal("Validación", "Su contraseña debe tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.", "warning");
        return false;
    }

    //UPDATE checkUp
    var checkUp = 0;
    if ($('#adminconfirmationUp').prop('checked') == true) {
        checkUp = 1;
    } else {
        checkUp = 0;
    }

    checkValidMailUp(newemailUp, pass2Up, nombreup2, checkUp, id);
}    

/*********************************************
 ***FETCH DE LA FUNCION ACTUALIZAR USUARIO****
 *********************************************/ 
function checkValidMailUp(newemailUp, pass2Up, nombreup2, checkUp, id){   
    
    var url_base = $("#url_base").val();
        fetch(url_base + 'api/perfiles/updateUsuario', {            
            method: "PUT",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "email=" + newemailUp + "&nombre=" + nombreup2 + "&owner=" + checkUp + "&pass=" + pass2Up + "&id=" + id
        })
        
        .then( resp => resp.json() )
        .then( respObj => {
            //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
            if (respObj.status == 0){              
                    swal({title: "¡Excelente!", text: respObj.messege, type: "success"}).then(function(){
                    location.reload();
                } 
                );
                        
            }else{            
                swal({title: "Algo Salió Mal!", text: respObj.messege, type: "danger"}).then(function(){
                    location.reload();
                } 
                );
            }
        })
        .catch( error => {
            alert(error);
        });
   
}


/******************************************
*********** DELETE USUARIO ****************
*******************************************/
function deleteUsuario(id) {
    var url_base = $("#url_base").val();
    swal({       
        title: "Estás seguro?",
        text: "Estás a punto de borrar el usuario",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {                
                fetch(url_base + 'api/perfiles/deleteUsuario',{
                    method: "DELETE",
                    headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }),
                    body: "id=" + id
                }) 
           
                    .then(resp => resp.json())
                    .then(respObj => {                        
                        if (respObj.status == 0) {
                            swal({title: "¡Excelente!", text: respObj.messege, type: "success"}).then(function(){
                            location.reload();
                            } 
                            );
                            
                        } else {
                            swal("Algo salió mal!", respObj.messege, "error");
                        }
                    })
                    .catch(error => {
                        swal("Algo salió mal!", error, "error");
                    });

            } else {
                swal("¡La operación ha sido cancelada!");
            }
        });
}


/******************************************
*********** VER TODOS *********************
*******************************************/
function escribir(){
    var url_base = $("#url_base").val();
    $.ajax({
    url: url_base + 'api/perfiles/traerTodos',
    dataType: 'json',
    success: function(data){          
            var datosArray= data.content;
            var container =document.querySelector("#traerdatos"); 
            var inputBuscador= document.querySelector('#inputBuscador');
            var boton = document.querySelector('#botonB');
            var filtrar = () => {
                    var texto = inputBuscador.value.toLowerCase();
                    container.innerHTML = '';
                    for(let dato of datosArray) {
                        var nombreusuario = dato.nombre.toLowerCase();
                        let userStatus =dato.owner;
                        let emailusuario = dato.email.toLowerCase();
                        let passusuario = dato.pass;
                        let id =dato.id;                    
                   
                    /* Convierte el valor de 0 y 1 (owner) a string(usuario o administrador) */
                        if(userStatus==0){
                            userStatus="Usuario";
                            
                        }else{
                        userStatus="Administrador";
                        }
                        
                        if(nombreusuario.indexOf(texto) != -1 || emailusuario.indexOf(texto) != -1 ){
                            container.innerHTML +=
                            '<li class="list-group-item d-flex justify-content-between lh-sm">' +
                                '<div id="infoUsuarios" class="d-flex flex-column">' +
                                    '<h6 class="nombreUsuario my-0 font-weight-bold">'+nombreusuario+'</h6>' +
                                        '<small class="my-0 text-info" id="userRange">'+userStatus+'</small>' +
                                    '<p class="my-0 text-secondary">'+emailusuario+'</p>' +
                                '</div>' +
                                '<div class="widget-content">' +
                                    '<div role="group" class="btn-group" data-toggle="buttons">' +
                                        '<button type="button" class="btn btn-success" onclick="modificarUsuarioVertodos('+ id +',\''+ nombreusuario +'\',\''+ emailusuario +'\',\''+ userStatus +'\',\''+ passusuario +'\');" data-toggle="modal" data-target="#updateUsuarioVertodos"><i class="fas fa-edit fa-lg"></i></button>' +
                                        '<button type="button" class="btn btn-danger" onclick="deleteUsuario('+ id +')"><i class="fas fa-trash fa-lg"></i></button>' +                                
                                    '</div>' +
                                '</div>' +
                            '</li>'
                        
                    
                        }
                    
                    }
                    if(container.innerHTML === ""){
                        container.innerHTML += '<div class="noencontrado">' +
                        '<br>'+                        
                        '<h6 class="nombreUsuario my-0 font-weight-bold">El usuario que intenta buscar no existe o no se encuentra en esta lista. Intenta buscarlo desde "historial de usuarios".</h6>' +
                        '<p class="my-0 text-secondary"></p>'+
                        '</div>'
                    }                                               
                }
                boton.addEventListener('click', filtrar);
                inputBuscador.addEventListener('keyup' , filtrar);
                filtrar();                  
             
            
            }
              
    });
  
}
escribir();
/******************************************
**BOTON MODIFICAR DEL USUARIO *************
*******************************************/
function modificarUsuarioVertodos(id,nombreusuario,emailusuario,userStatus, passusuario) {   
    $('#nombreup2Todos').val(nombreusuario);
    $('#newemailUpTodos').val(emailusuario);
    $('#checkUpTodos').val(userStatus);
    $('#idusuarioUpTodos').val(id);
    $('#pass2UpTodos').val(passusuario);
}

/*******************************************
******COMIENZAN LAS FUNCIONES DEL ONCHANGE *
****DEL FORMULARIO DE EDITAR REGISTROS DE VER TODOS******
*******************************************/
//actualizar NOMBRE
function checkValidUserUpTodos (){
    var nombreup2Todos =$("#nombreup2Todos").val();
    var nombreinput2Todos =$("#nombreup2Todos");

    if(nombreup2Todos == ""){
        nombreinput2Todos.addClass("is-invalid");
        $("#statusName2Todos").html('<span class="label label-success" style="color: red">Campo obligatorio</span>');
    }else{            
        $("#statusName2Todos").html('');
        nombreinput2Todos.removeClass("is-invalid")
        nombreinput2Todos.addClass("is-valid");
        return false;  
    }
}
// actualizar MAIL
function validarMailUpTodos(){
    var configmail = $("#configmail").val();
    var newemailUpTodos=$("#newemailUpTodos").val();
    var inputemailUpTodos =$("#newemailUpTodos");

        
    if( $("#newemailUpTodos").val()=="" ){
        $("#newemailUpTodos").addClass('is-invalid');
        $("#statusEmailUpTodos").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        inputemailUpTodos.css("border-color","red");
        return false; 
    }else if (newemailUpTodos.indexOf('@', 0) == -1 || newemailUpTodos.indexOf('.', 0) == -1) {
        $("#statusEmailUpTodos").html('<span class="label label-error" style="color: red">El formato no corresponde a un correo.</span>');
        inputemailUpTodos.removeClass("is-valid");
        inputemailUpTodos.addClass("is-invalid");
        inputemailUpTodos.css("border-color","red"); 
        return false;

    }else if (newemailUpTodos.indexOf(configmail) == -1){
        $("#statusEmailUpTodos").html('<span class="label label-error" style="color: red">El dominio de este mail no corresponde al configurado en el sistema.</span>');
        inputemailUpTodos.removeClass("is-valid");
        inputemailUpTodos.addClass("is-invalid");
        inputemailUpTodos.css("border-color","red"); 
        return false;

    }else if(newemailUpTodos.substr(newemailUpTodos.indexOf("@")) != ("@" + configmail)){
            swal("Algo salió mal!", "El dominio de este mail [" + newemailUpTodos.substr(newemailUpTodos.indexOf("@")) + "] no corresponde al configurado en el sistema [Config.ini].", "error");
            $("#statusEmailUpTodos").html('<span class="label label-error" style="color: red">Dominio de email no valido</span>');
            inputemailUpTodos.removeClass("is-valid");
            inputemailUpTodos.addClass("is-invalid");
            inputemailUpTodos.css("border-color","red"); 
            return false;
        
    }else {
        $("#statusEmailUpTodos").html('<span class="label label-success" style="color: green">El email está correcto</span>');
        inputemailUpTodos.removeClass("is-invalid");
        inputemailUpTodos.addClass("is-valid");
        inputemailUpTodos.css("border-color","green"); 
    }
}
//Actualizar CONTRASEÑA
function checkValidPasswordUpTodos (){          
    var pass2UpTodos = $("#pass2UpTodos").val();
    var pass2inputUpTodos= $("#pass2UpTodos");


    if( pass2UpTodos.length == 0 || pass2UpTodos.length <= 7 || pass2UpTodos.length >= 19 || getUppercarse(pass2UpTodos) == 0 || getNumber(pass2UpTodos) == 0){           
        pass2inputUpTodos.addClass("is-invalid");          
        $("#statusSecondPasswordUpTodos").html('<span class="label label-success" style="color: red">Debe tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.</span>');

    } else{        
        pass2inputUpTodos.removeClass("is-invalid");         
        pass2inputUpTodos.addClass("is-valid");
        $("#statusSecondPasswordUpTodos").html('');

    }
}

/******************************************
***********UPDATE BOTON ver todos *********
******************************************/
//Boton Cambiar
function actualizarUsuarioTodos(){
  
    var configmail = $("#configmail").val();
    var id = $("#idusuarioUpTodos").val();
    
    // UPDATE nombre
    var nombreup2Todos =$("#nombreup2Todos").val();
    if( $("#nombreup2Todos").val()=="" ){
        $("#nombreup2Todos").addClass('is-invalid');
        swal("Algo salió mal!", 
        "El campo nombre es obligatorio", "warning");
        $("#statusEmailTodos").html('<span class="label label-error" style="color: red">Campo obligatorio</span>');
        return false;
    }

    // //UPDATE email
     var newemailUpTodos=$("#newemailUpTodos").val();
   
    //UPDATE contraseña
    var pass2UpTodos = $("#pass2UpTodos").val();
    if( pass2UpTodos=="" ){
            swal("¡Atención!", 
        "El campo contraseña es obligatorio y no debe estar vacío", "warning");
        return false;
    }
    if( pass2UpTodos.length == 0 || pass2UpTodos.length <= 7 || pass2UpTodos.length >= 19 || getUppercarse(pass2UpTodos) == 0 || getNumber(pass2UpTodos) == 0){
        swal("Validación", "Su contraseña debe tener entre 8 y 20 caracteres, contener letras, números y alguna letra en mayúscula.", "warning");
        return false;
    }

    //UPDATE checkUp
    var checkUpTodos = 0;
    if ($('#adminconfirmationUpTodos').prop('checked') == true) {
        checkUpTodos = 1;
    } else {
        checkUpTodos = 0;
    }

    checkValidMailUpTodos(newemailUpTodos, pass2UpTodos, nombreup2Todos, checkUpTodos, id);
}   

/***********************************************
 *FETCH DE LA FUNCION ACTUALIZAR (ver todos)****
 ***********************************************/ 
function checkValidMailUpTodos(newemailUpTodos, pass2UpTodos, nombreup2Todos, checkUpTodos, id){   
    
    var url_base = $("#url_base").val();
        fetch(url_base + 'api/perfiles/updateUsuario', {            
            method: "PUT",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "email=" + newemailUpTodos + "&nombre=" + nombreup2Todos + "&owner=" + checkUpTodos + "&pass=" + pass2UpTodos + "&id=" + id
        })
        
        .then( resp => resp.json() )
        .then( respObj => {
            //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
            if (respObj.status == 0){              
                    swal({title: "¡Excelente!", text: respObj.messege, type: "success"}).then(function(){
                    location.reload();
                } 
                );
                        
            }else{            
                swal({title: "Algo Salió Mal!", text: respObj.messege, type: "danger"}).then(function(){
                    location.reload();
                } 
                );
            }
        })
        .catch( error => {
            alert(error);
        });
   
}

/******************************************
*********** RECUPERAR *********************
*******************************************/
function recuperar(){
    var url_base = $("#url_base").val();
    $.ajax({
    url: url_base + 'api/perfiles/traerHistorial',
    dataType: 'json',
    success: function(data){          
            var datosArray= data.content;
            var container =document.querySelector("#traerdatoshistorial"); 
            var inputBuscador= document.querySelector('#inputBuscadorRecuperar');
            var boton = document.querySelector('#botonBRecuperar');
            var filtrar = () => {
                    var texto = inputBuscador.value.toLowerCase();
                    container.innerHTML = '';
                    for(let dato of datosArray) {
                    var nombreusuario = dato.nombre.toLowerCase();
                    let userStatus =dato.owner;
                    let emailusuario = dato.email.toLowerCase();
                    //let passusuario = dato.pass.toLowerCase();
                    let id =dato.id;                    
                
                    /* Convierte el valor de 0 y 1 (owner) a string(usuario o administrador) */
                    if(userStatus==0){
                        userStatus="Usuario";
                        
                    }else{
                    userStatus="Administrador";
                    }
                    
                    if(nombreusuario.indexOf(texto) != -1 || emailusuario.indexOf(texto) != -1 ){
                        container.innerHTML +=
                        '<li class="list-group-item d-flex justify-content-between lh-sm">' +
                            '<div id="infoUsuarios" class="d-flex flex-column">' +
                                '<h6 class="nombreUsuario my-0 font-weight-bold">'+nombreusuario+'</h6>' +
                                    '<small class="my-0 text-info" id="userRange">'+userStatus+'</small>' +
                                '<p class="my-0 text-secondary">'+emailusuario+'</p>' +
                            '</div>' +
                            '<div class="widget-content">' +
                                '<div role="group" class="btn-group" data-toggle="buttons">' +                                        
                                    '<button type="button" class="btn btn-warning" id="fondoDeRecuperar'+ id +'" onclick="restablecerUsuario('+ id +')"><i class="fas fa-trash-restore fa-lg" id="iconorecuperar"></i></button>' +
                                '</div>' +
                            '</div>' +
                        '</li>'
                    
                
                    }
                    
                    } 
                    if(container.innerHTML === ""){
                        container.innerHTML += '<div class="noencontrado">' +
                        '<br>'+                        
                        '<h6 class="nombreUsuario my-0 font-weight-bold">El usuario que intenta recuperar no existe.</h6>' +
                        '</div>'
                    }                                          
                }
                boton.addEventListener('click', filtrar);
                inputBuscador.addEventListener('keyup' , filtrar);
                filtrar();                  
             
            
            }
              
    });
  
}
recuperar();

/*******************************************
*********** RESTABLECER USUARIO ************
*******************************************/
function restablecerUsuario(id) {
    var url_base = $("#url_base").val();
    swal({       
        title: "Estás seguro?",
        text: "Estás a punto de restablecer este usuario",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {                
                fetch(url_base + 'api/perfiles/recuperarUsuario',{
                    method: "DELETE",
                    headers: new Headers({
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }),
                    body: "id=" + id
                }) 
           
                    .then(resp => resp.json())
                    .then(respObj => {                        
                        if (respObj.status == 0) {
                            swal({title: "¡Excelente!", text: respObj.messege, type: "success"}).then(function(){
                            location.reload();
                            } 
                            );
                            
                        } else {
                            swal("Algo salió mal!", respObj.messege, "error");
                        }
                    })
                    .catch(error => {
                        swal("Algo salió mal!", error, "error");
                    });

            } else {
                swal("¡La operación ha sido cancelada!");
            }
        });
}