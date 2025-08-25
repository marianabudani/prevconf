<?php 

$id_solicitud = $_GET['id_solicitud'];
$nombreExpedienteAdmTraProc = $_GET['nombreExpedienteAdmTraProc'];
$zipFile = "./testZip.zip";
$zipArchive = new ZipArchive();

if ($zipArchive->open($zipFile, (ZipArchive::CREATE | ZipArchive::OVERWRITE)) !== true)
    die("Failed to create archive\n");

$options = array('remove_all_path' => TRUE);
$zipArchive->addGlob("../../../../archivos/solicitudes/".$id_solicitud."/*.*",GLOB_BRACE,$options);
if ($zipArchive->status != ZIPARCHIVE::ER_OK)
    echo "Failed to write files to zip\n";
        $zipArchive->close();
        $date = date('Y-m-d');
        header('Content-Type: application/zip');
  header('Content-Disposition: attachment; filename="'.$date.'_'.$nombreExpedienteAdmTraProc.'.zip"');
  header('Content-Length: ' . filesize($zipFile));

  flush();
        readfile($zipFile);
       


        $path = 'testZip.zip'; // added reference to filename
        $path_user = 'archivos/solicitudes/'.$id_solicitud.'/';
        
        // Create the user folder if missing
        if (!file_exists($path_user)) {
           mkdir( $path_user,0777,false );
        }
        // If the user file in existing directory already exist, delete it
        else if (file_exists($path_user.$path)) {
           unlink($path_user.$path);
        }       


 

 ?>
