/*=============================================
    ACTIVA O DESACTIVA MARCO EN PRODUCTOS
=============================================*/
$(".checkbox").change(function() {
    var url_base = $("#url_base").val();

    var resource = $(this).attr('resource');
    var attribute = $(this).attr('name');
    var value = null;

    if(this.checked) {
        value = 1;
    }else{
        value = 0;
    }

    let formData = new FormData();
    formData.append('resource', resource);
    formData.append('attribute', attribute);
    formData.append('value', value);

    fetch(url_base + 'api/setting/modify', {
        method: "POST",
        body: formData
    })
    .then( resp => resp.json() )
    .then( respObj => {
        //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
        if (respObj.status == 0){
            $(".action").html('<div class="alert alert-success" role="alert">Parámetro actualizado con éxito <span class="count-close"></span></div>');
            
            if(resource=="sp_framework"){
                setTimeout(function(){ location.reload();}, 1000);
                
            }else{
                setTimeout(function(){ $(".action").empty(); }, 3000);
            }

        }else{
            swal("¡Status inesperado, algo salió mal!", respObj.messege, "error");
        }
    })
    .catch( error => {

        swal("¡oh oh! Algo salió mal!", error, "error");

    });

});

/*=============================================
    GET SETTING
=============================================*/

function getSetting(){
    var url_base = $("#url_base").val();

    fetch(url_base+'api/setting/', {
        method: "GET"
    })
    .then( resp => resp.json() )
    .then( respObj => {
        //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
        //alert(respObj.status);
        //alert(respObj.cantidad);

        if(respObj.status=="0"){

            if (respObj.content[0].usa_carrousel_ini == "1"){
                //$('#usa_carrousel_ini').trigger('click'); ANDA COMO CLICK pero ejecuta el evento CHANGE, acá no sirve, pero esta bueno.
                $("#usa_carrousel_ini").attr("checked",true);
            }else{
                $("#usa_carrousel_ini").attr("checked",false);
            }

            if (respObj.content[0].usa_carrusel_txt == "1"){
                $("#usa_carrusel_txt").attr("checked",true);
            }else{
                $("#usa_carrusel_txt").attr("checked",false);
            }

            if (respObj.content[0].usa_alta_user == "1"){
                $("#usa_alta_user").attr("checked",true);
            }else{
                $("#usa_alta_user").attr("checked",false);
            }
            
            if (respObj.content[0].usa_recovery_user == "1"){
                $("#usa_recovery_user").attr("checked",true);
            }else{
                $("#usa_recovery_user").attr("checked",false);
            }        
        }else{

            swal("¡Algo salió mal!", "No podemos cargar los parámetros", "warning");

        }

    })
    .catch( error => {

        swal("¡oh oh! Algo salió mal!", error, "error");

    });  
}

getSetting();

/*=============================================
    GET SETTING FRAMEWORK
=============================================*/
function getSettingFrame(){
    var url_base = $("#url_base").val();
    console.log(url_base);
    fetch(url_base+'api/setting/framework/all', {
        method: "GET"
    })
    .then( resp => resp.json() )
    .then( respObj => {
        //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
        //alert(respObj.status);
        //alert(respObj.cantidad);

        if(respObj.status=="0"){

            if (respObj.content[0].header == "1"){
                //$('#usa_carrousel_ini').trigger('click'); ANDA COMO CLICK pero ejecuta el evento CHANGE, acá no sirve, pero esta bueno.
                $("#header").attr("checked",true);
            }else{
                $("#header").attr("checked",false);
            }

            if (respObj.content[0].menu == "1"){
                $("#menu").attr("checked",true);
            }else{
                $("#menu").attr("checked",false);
            }

            if (respObj.content[0].footer == "1"){
                $("#footer").attr("checked",true);
            }else{
                $("#footer").attr("checked",false);
            }
            
            if (respObj.content[0].config_button == "1"){
                $("#config_button").attr("checked",true);
            }else{
                $("#config_button").attr("checked",false);
            }        
        }else{

            swal("¡Algo salió mal!", "No podemos cargar los parámetros", "warning");

        }

    })
    .catch( error => {

        swal("¡oh oh! Algo salió mal!", error, "error");

    });  
}

getSettingFrame();

/*=============================================
UPLOAD CHANGE PICTURE
=============================================*/
$("#one-file, #two-file, #three-file, #ico-file").change(function(){
    
    var id_image = $(this).attr('id');

    var url_base = $("#url_base").val();

    var imagenBG = null;

	imagenBG = this.files[0];

	/*=============================================
  	VALIDAMOS EL FORMATO DE LA IMAGEN SEA JPG O PNG
  	=============================================*/
  	if(imagenBG["type"] != "image/jpeg" && imagenBG["type"] != "image/png"){

  		//$(".preview").val("");

        swal({
            title: "Error al subir la imagen",
            text: "¡La imagen debe estar en formato JPG o PNG!",
            type: "error",
            confirmButtonText: "¡Cerrar!"
        });
            
        return false;

  	}else if(imagenBG["size"] > 2000000){

  		//$(".preview").val("");

  		 swal({
		      title: "Error al subir la imagen",
		      text: "¡La imagen no debe pesar mÃ¡s de 2MB!",
		      type: "error",
		      confirmButtonText: "¡Cerrar!"
            });

        return false;

  	}else{

  		var datosImagen = new FileReader;
  		datosImagen.readAsDataURL(imagenBG);

  		$(datosImagen).on("load", function(event){

  			var rutaImagen = event.target.result;
            
            //$(".preview").show();
  			$("#"+id_image+"-preview").attr("src", rutaImagen);

  		})

    }

    // if(url_base=='https://sistemas.mininterior.gob.ar/add/genesis/'){//Modificar esto en producción
    if(url_base=='https://previaconformidad.mininterior.gob.ar'){    
    var dinamicBaseUrl = '/views/assets/images/';
    }else{
        var dinamicBaseUrl = '/thematrix/views/assets/images/'
    }
    let formData = new FormData();
    formData.append('id_image', id_image);
    formData.append('folder', dinamicBaseUrl);
    formData.append('file', imagenBG);

    fetch( url_base+'api/setting/picture', {
        method: "POST",
        body: formData
    })
    .then( resp => resp.json() )
    .then( respObj => {
        if (respObj.status == 0){
            if(id_image="ico-file"){
                swal("¡Excelente!", respObj.messege, "success");
                setTimeout(function(){ location.reload();}, 2000);
            }else{
                swal("¡Excelente!", respObj.messege, "success");
            }
        }else{
            swal("Algo salió mal! respuesta inesperada", respObj.messege, "error");
        }
    })
    .catch( error => {
        swal("Algo salió mal!", error, "error");
    }); 

});

/*=============================================
UPLOAD CHANGE TEXTO
=============================================*/
$(".updateTxt").change(function(){

    var url_base = $("#url_base").val();

    var resource = $(this).attr('resource');//DB
    var attribute = $(this).attr('attribute');//ATRIBUTO
    var valor = $(this).val();
    var orden = $(this).attr('orden');//ORDEN FOR WHERE

    let formData = new FormData();
    formData.append('resource', resource);
    formData.append('attribute', attribute);
    formData.append('valor', valor);
    formData.append('orden', orden);

    fetch(url_base + 'api/setting/modify/text', {
        method: "POST",
        body: formData
    })
    .then( resp => resp.json() )
    .then( respObj => {
        //Espera la respuesta de la API y consulta siempre por 0 (cero), si es correcto.
        if (respObj.status == 0){

            swal("¡Excelente!", respObj.messege, "success");

        }else{
            swal("¡Status inesperado, algo salió mal!", respObj.messege, "error");
        }
    })
    .catch( error => {

        swal("¡oh oh! Algo salió mal!", error, "error");

    });    

})

 
