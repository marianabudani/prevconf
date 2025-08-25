<?php namespace Fronteras\Utils;

//Archivos para el envio de mail.
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../../configMail/PHPMailer/Exception.php';
require __DIR__ . '/../../../configMail/PHPMailer/PHPMailer.php';
require __DIR__ . '/../../../configMail/PHPMailer/SMTP.php';


class Mailing {

    public static function enviarMail($remitente, $asunto, $template) {
        try {
            $mail = self::armarObjeto();
            $mail->Subject = $asunto;
            $mail->addAddress($remitente);
            $mail->MsgHTML($template);
            $mail->send();

            return true;

        } catch(Exception $e) {
            return false;
        }
    }

    private static function armarObjeto() {
        $mail = new PHPMailer(true);
        $mail->CharSet = 'UTF-8';
        $mail->isSMTP();
        $mail->SMTPAuth = false;
        $mail->From = 'mesadeayuda@mininterior.gob.ar';
        $mail->Host = 'smtp.mininterior.gob.ar';
        $mail->Port= 25;
        $mail->SMTPAutoTLS=false;
        $mail->SMTPSecure = false;
        $mail->setFrom('mesadeayuda@mininterior.gob.ar', 'Previa Conformidad');
        $mail->isHTML(true);

        return $mail;
    }

}
