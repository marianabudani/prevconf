/*=============================================
    GET SETTING
=============================================*/

function getDataTable(){
    var url_base = $("#url_base").val();
    //alert(url_base+'api/component/');

    fetch(url_base + 'api/component/', {
        method: "GET"
    })
    .then( resp => resp.json() )
    .then( respObj => {

        for(var i = 0; i<respObj.length; i++){

            $("#detalle").append('<tr role="row" class="odd"> ' +
                                    '<td class="sorting_1 dtr-control">'+respObj[i].usuario+'</td> ' +
                                    '<td>'+respObj[i].mail+'</td> ' +
                                    '<td>'+respObj[i].cuil+'</td> ' +
                                    '<td>'+respObj[i].host+'</td> ' +
                                    '</tr>');
        }

    })
    .catch( error => {

        swal("¡oh oh! Algo salió mal!", error, "error");

    });  
}

getDataTable();