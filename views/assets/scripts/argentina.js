//Busca los archivos por la ruta
$("#ejecutar").click(function () {
    var valor = $("#buscar").val();
    var url = "https://www.argentina.gob.ar/buscar/";
    // console.log('Valor:'+valor);
    // console.log('Url:'+url);
    window.location.replace(url + valor);
});

// init



const zoomist = new Zoomist('#my-zoomist', {
  height: "100%",
  slider: true,
  zoomer: true
})

zoomist.on('ready', function() {
  zoomist.move(0, -150)
})