<div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                        <i class="metismenu-icon fas fa-cog"></i>
                                    </div>
                                    <div>Notificaciones
                                        <div class="page-title-subheading">Las notificaciones representan una de las mejores formas de dar comentarios sobre las acciones de varios usuarios.
                                        </div>
                                    </div>
                                </div>
                                <div class="page-title-actions">
                                    <button type="button" data-toggle="tooltip" title="Ejemplo de "tooltip"" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                                        <i class="fa fa-star"></i>
                                    </button>
                                    <div class="d-inline-block dropdown">
                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow dropdown-toggle btn btn-info">
                                            <span class="btn-icon-wrapper pr-2 opacity-7">
                                                <i class="fa fa-business-time fa-w-20"></i>
                                            </span>
                                           Botón desplegable                                        </button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <ul class="nav flex-column">
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-inbox"></i>
                                                        <span>
                                                            Mensajes
                                                        </span>
                                                        <div class="ml-auto badge badge-pill badge-secondary">86</div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-book"></i>
                                                        <span>
                                                           Mensajes 2
                                                        </span>
                                                        <div class="ml-auto badge badge-pill badge-danger">5</div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">
                                                        <i class="nav-link-icon lnr-picture"></i>
                                                        <span>
                                                           Mensajes
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a disabled href="javascript:void(0);" class="nav-link disabled">
                                                        <i class="nav-link-icon lnr-file-empty"></i>
                                                        <span>
                                                            Mensaje deshabilitado
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>    </div>
                        </div>            
                        <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                            <li class="nav-item">
                                <a role="tab" class="nav-link active" id="tab-0" data-toggle="tab" href="#tab-content-0">
                                    <span>Alertas "Toastr"</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a role="tab" class="nav-link" id="tab-2" data-toggle="tab" href="#tab-content-2">
                                    <span>Alertas básicos</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                                <div class="main-card mb-3 card">
                                    <div class="card-body">
                                        <div class="card-title">Configurador "Toastr"</div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-label" for="title">Título</label>
                                                    <input id="title" type="text" class="form-control" placeholder="Enter a title ..."/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label" for="message">Mensaje</label>
                                                    <textarea class="form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <div class="form-check">
                                                        <input id="closeButton" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="closeButton">
                                                            Botón cerrar
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="addBehaviorOnToastClick" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="addBehaviorOnToastClick">
                                                            Agregar comportamiento en "toastr" al hacer click
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input disabled id="addBehaviorOnToastCloseClick" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="addBehaviorOnToastCloseClick">
                                                           Agregar comportamiento en "toastr" al hacer click en botón cerrar
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="debugInfo" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="debugInfo">
                                                            Depurar
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="progressBar" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="progressBar">
                                                            Barra de progresoProgress Bar
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="rtl" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="rtl">
                                                            De derecha a izquierda
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="preventDuplicates" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="preventDuplicates">
                                                            Prevenir duplicados
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="addClear" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="addClear">
                                                            Agregar botón para forzar la limpieza del "toastr"
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input id="newestOnTop" type="checkbox" value="checked" class="form-check-input"/>
                                                        <label class="form-check-label" for="newestOnTop">
                                                            Ubicar nuevas arriba
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div id="toastTypeGroup">
                                                    <h5>Tipos de "toastr"</h5>
                                                    <div class="form-check">
                                                        <input type="radio" name="toasts" class="form-check-input" value="success" checked/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Success
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="toasts" class="form-check-input" value="info" checked/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Info
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="toasts" class="form-check-input" value="warning" checked/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Warning
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="toasts" class="form-check-input" value="error" checked/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Error
                                                        </label>
                                                    </div>
                                                </div>
                                                <div id="positionGroup">
                                                    <h5>Posición</h5>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-top-right" checked/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Arriba a la derecha
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-bottom-right"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Abajo a la derecha
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-bottom-left"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Abajo a la izquierda
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-top-left"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Arriba a la Izquierda
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-top-full-width"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Arriba ancho total
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-bottom-full-width"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Abajo ancho total
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-top-center"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Arriba centrado
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="positions" class="form-check-input" value=""toastr"-bottom-center"/>
                                                        <label class="form-check-label" for="exampleRadios1">
                                                            Abajo centrado
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="showEasing">Mostrar "Easing"</label>
                                                    <input id="showEasing" type="text" placeholder="swing, linear" class="form-control" value="swing"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="hideEasing">Esconder "Easing"</label>
                                                    <input id="hideEasing" type="text" placeholder="swing, linear" class="form-control" value="linear"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="showMethod">Mostrar "Method"</label>
                                                    <input id="showMethod" type="text" placeholder="show, fadeIn, slideDown" class="form-control" value="fadeIn"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="hideMethod">Esconder "Method"</label>
                                                    <input id="hideMethod" type="text" placeholder="hide, fadeOut, slideUp" class="form-control" value="fadeOut"/>
                                                </div>
                                            </div>
            
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="form-label" for="showDuration">Mostrar "Duration"</label>
                                                    <input id="showDuration" type="number" placeholder="ms" class="form-control" value="300"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label" for="hideDuration">Esconder Duration</label>
                                                    <input id="hideDuration" type="number" placeholder="ms" class="form-control" value="1000"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label" for="timeOut">"Time out"</label>
                                                    <input id="timeOut" type="number" placeholder="ms" class="form-control" value="5000"/>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label" for="extendedTimeOut">"Extended time out"</label>
                                                    <input id="extendedTimeOut" type="number" placeholder="ms" class="form-control" value="1000"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer d-block clearfix">
                                        <div class="float-left">
                                            <button type="button" class="btn btn-link text-danger" id="cleartoasts">Limpiar "Toastr"</button>
                                            <button type="button" class="btn btn-link" id="clearlasttoast">Limpiar el útimo "toastr"</button>
                                        </div>
                                        <div class="float-right">
                                            <button type="button" class="btn btn-success" id="showtoast">Mostrar "toastr"</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane tabs-animation fade" id="tab-content-2" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Alertas</h5>
                                                <div class="alert alert-primary fade show" role="alert">Esta es una alerta "primary" — ¡Mirá esto!</div>
                                                <div class="alert alert-secondary fade show" role="alert">Esta es una alerta "secondary" — ¡Mirá esto!</div>
                                                <div class="alert alert-success fade show" role="alert">Esta es una alerta "success" — ¡Mirá esto!</div>
                                                <div class="alert alert-danger fade show" role="alert">Esta es una alerta "danger" — ¡Mirá esto!</div>
                                                <div class="alert alert-warning fade show" role="alert">Esta es una alerta "warning" — ¡Mirá esto!</div>
                                                <div class="alert alert-info fade show" role="alert">Esta es una alerta "info" — ¡Mirá esto!</div>
                                                <div class="alert alert-light fade show" role="alert">Esta es una alerta "light" — ¡Mirá esto!</div>
                                                <div class="alert alert-dark fade show" role="alert">Esta es una alerta "dark" — ¡Mirá esto!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Alerts Link Color</h5>
                                                <div class="alert alert-primary fade show" role="alert">Esta es una alerta "primary" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-secondary fade show" role="alert">Esta es una alerta "secondary" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-success fade show" role="alert">Esta es una alerta "success" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-danger fade show" role="alert">Esta es una alerta "danger" con<a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-warning fade show" role="alert">Esta es una alerta "warning" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-info fade show" role="alert">Esta es una alerta "info" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-light fade show" role="alert">Esta es una alerta "light" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                                <div class="alert alert-dark fade show" role="alert">Esta es una alerta "dark" con <a href="javascript:void(0);" class="alert-link">un ejemplo de link</a>. Hacé click si te gusta.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Contenido de alertas</h5>
                                                <div class="alert alert-success fade show" role="alert"><h4 class="alert-heading">¡Bien hecho!</h4>
                                                    <p>Ah, sí, ha leído correctamente este importante mensaje de alerta. Este texto de ejemplo se extenderá un poco más para que pueda ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.</p>
                                                    <hr>
                                                    <p class="mb-0">Siempre que lo necesite, asegúrese de utilizar las utilidades de margen para mantener las cosas en orden.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title"> Alertas descartables</h5>
                                                <div class="alert alert-info alert-dismissible fade show" role="alert">
                                                    <button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                    ¡Yo soy un alerta y puedo ser descartada!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>