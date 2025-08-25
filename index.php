<?php

    require_once "controllers/template.controller.php";
    require_once "controllers/login.controller.php";

    require_once "models/login.model.php";

    require_once "models/route.php";

    $template = new ControllerTemplate();
    $template -> getTemplate();