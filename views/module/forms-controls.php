<div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                       <i class="fab fa-delicious"></i>
                                    </div>
                                    <div>Elementos de formulario
                                        <div class="page-title-subheading">Elementos de formulario usando la base de código Bootstrap 4, pero construida con React.
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
                                    <span>Básico</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a role="tab" class="nav-link" id="tab-1" data-toggle="tab" href="#tab-content-1">
                                    <span>Grupo de inputs</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a role="tab" class="nav-link" id="tab-2" data-toggle="tab" href="#tab-content-2">
                                    <span>Controles personalizados</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Tipos de controles</h5>
                                                <form class="">
                                                    <div class="position-relative form-group"><label for="exampleEmail" class="">Email</label><input name="email" id="exampleEmail" placeholder="with a placeholder" type="email" class="form-control"></div>
                                                    <div class="position-relative form-group"><label for="examplePassword" class="">Contraseña</label><input name="password" id="examplePassword" placeholder="password placeholder" type="password"
                                                                                                                                                           class="form-control"></div>
                                                    <div class="position-relative form-group"><label for="exampleSelect" class="">Selección</label><select name="select" id="exampleSelect" class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select></div>
                                                    <div class="position-relative form-group"><label for="exampleSelectMulti" class="">Selección Múltiple</label><select multiple="" name="selectMulti" id="exampleSelectMulti" class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select></div>
                                                    <div class="position-relative form-group"><label for="exampleText" class="">Área de texto</label><textarea name="text" id="exampleText" class="form-control"></textarea></div>
                                                    <div class="position-relative form-group"><label for="exampleFile" class="">Archivo</label><input name="file" id="exampleFile" type="file" class="form-control-file">
                                                        <small class="form-text text-muted"> Este es un texto de ayuda a nivel de bloque de marcador de posición para la entrada anterior. Es un poco más ligero y se ajusta fácilmente a una nueva línea.</small>
                                                    </div>
                                                    <button class="mt-1 btn btn-primary">Subir</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Tamaños</h5>
                                                <form class=""><input placeholder="lg" type="text" class="mb-2 form-control-lg form-control"><input placeholder="default" type="text" class="mb-2 form-control"><input placeholder="sm" type="text"
                                                                                                                                                                                                                       class="mb-2 form-control-sm form-control">
                                                    <div class="divider"></div>
                                                    <select class="mb-2 form-control-lg form-control">
                                                        <option>Selector grande</option>
                                                    </select><select class="mb-2 form-control">
                                                        <option>Selector por defecto</option>
                                                    </select><select class="form-control-sm form-control">
                                                        <option>Selector pequeño</option>
                                                    </select></form>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">"Checkboxes &amp; Radios"</h5>
                                                <form class="">
                                                    <fieldset class="position-relative form-group">
                                                        <div class="position-relative form-check"><label class="form-check-label"><input name="radio1" type="radio" class="form-check-input">Opción 1</label>
                                                        </div>
                                                        <div class="position-relative form-check"><label class="form-check-label"><input name="radio1" type="radio" class="form-check-input"> Opción 2</label></div>
                                                        <div class="position-relative form-check disabled"><label class="form-check-label"><input name="radio1" disabled="" type="radio" class="form-check-input"> Opción 3 está deshabilitada</label></div>
                                                    </fieldset>
                                                    <div class="position-relative form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input">Elemento clickeable</label></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane tabs-animation fade" id="tab-content-1" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Grupo de "inputs"</h5>
                                                <div>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text">@</span></div>
                                                        <input placeholder="username" type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text"><input aria-label="Checkbox for following text input" type="checkbox" class=""></span></div>
                                                        <input placeholder="Check it out" type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group"><input placeholder="username" type="text" class="form-control">
                                                        <div class="input-group-append"><span class="input-group-text">@ejemplo.gob.ar</span></div>
                                                    </div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text">$</span><span class="input-group-text">$</span></div>
                                                        <input placeholder="Dolla dolla billz yo!" type="text" class="form-control">
                                                        <div class="input-group-append"><span class="input-group-text">$</span><span class="input-group-text">$</span></div>
                                                    </div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                                                        <input placeholder="Amount" step="1" type="number" class="form-control">
                                                        <div class="input-group-append"><span class="input-group-text">.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Botones desplegbles</h5>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle btn btn-secondary">Botón desplegable</button>
                                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu"><h6 tabindex="-1" class="dropdown-header">Cabecera</h6>
                                                            <button type="button" disabled="" tabindex="-1" class="disabled dropdown-item">Acción</button>
                                                            <button type="button" tabindex="0" class="dropdown-item">Acción 2</button>
                                                            <div tabindex="-1" class="dropdown-divider"></div>
                                                            <button type="button" tabindex="0" class="dropdown-item">Acción 3</button>
                                                        </div>
                                                    </div>
                                                    <input type="text" class="form-control"></div>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Grupo de "inputs" con botón</h5>
                                                <div>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-secondary">¡A la derecha!</button>
                                                        </div>
                                                        <input type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group"><input type="text" class="form-control">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-secondary">¡A la izquierda!</button>
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-danger">¡A la derecha!</button>
                                                        </div>
                                                        <input placeholder="and..." type="text" class="form-control">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-success">¡A la izquierda!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Tamaños de grupos de "inputs"</h5>
                                                <div>
                                                    <div class="input-group input-group-lg">
                                                        <div class="input-group-prepend"><span class="input-group-text">@lg</span></div>
                                                        <input type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text">@normal</span></div>
                                                        <input type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group input-group-sm">
                                                        <div class="input-group-prepend"><span class="input-group-text">@sm</span></div>
                                                        <input type="text" class="form-control"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Grupo de "inputs" convinados</h5>
                                                <div>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text">¡A la derecha!</span></div>
                                                        <input type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group"><input type="text" class="form-control">
                                                        <div class="input-group-append"><span class="input-group-text">¡A la izquierda!</span></div>
                                                    </div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend"><span class="input-group-text">¡A la derecha!</span></div>
                                                        <input placeholder="and..." type="text" class="form-control">
                                                        <div class="input-group-append"><span class="input-group-text">¡A la izquierda!</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main-card mb-3 card">
                                            <div class="card-body"><h5 class="card-title">Otras convinaciones</h5>
                                                <div>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-secondary">Soy un botón</button>
                                                        </div>
                                                        <input type="text" class="form-control"></div>
                                                    <br>
                                                    <div class="input-group"><input type="text" class="form-control">
                                                        <div class="input-group-append">
                                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle btn btn-secondary">Botón desplegable</button>
                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu"><h6 tabindex="-1" class="dropdown-header">Cabecera</h6>
                                                                <button type="button" disabled="" tabindex="-1" class="disabled dropdown-item">Acción 1</button>
                                                                <button type="button" tabindex="0" class="dropdown-item">Acción 2</button>
                                                                <div tabindex="-1" class="dropdown-divider"></div>
                                                                <button type="button" tabindex="0" class="dropdown-item">Acción 3</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-outline-secondary">Bot{on repartido</button>
                                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle dropdown-toggle-split btn btn-outline-secondary"><span
                                                                    class="sr-only">Accesorio Desplegable</span></button>
                                                            <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu"><h6 tabindex="-1" class="dropdown-header">Cabecera</h6>
                                                                <button type="button" disabled="" tabindex="-1" class="disabled dropdown-item">Acción 1</button>
                                                                <button type="button" tabindex="0" class="dropdown-item">Acción 2</button>
                                                                <div tabindex="-1" class="dropdown-divider"></div>
                                                                <button type="button" tabindex="0" class="dropdown-item">Acción 3</button>
                                                            </div>
                                                        </div>
                                                        <input placeholder="and..." type="text" class="form-control">
                                                        <div class="input-group-append">
                                                            <button class="btn btn-secondary">Soy un botón</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane tabs-animation fade" id="tab-content-2" role="tabpanel">
                                <form class="">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="main-card mb-3 card">
                                                <div class="card-body"><h5 class="card-title">"Checkboxes"</h5>
                                                    <div class="position-relative form-group">
                                                        <div>
                                                            <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox" class="custom-control-input"><label class="custom-control-label" for="exampleCustomCheckbox">Casilla de verificación personalizada</label></div>
                                                            <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input"><label class="custom-control-label" for="exampleCustomCheckbox2">Casilla de verificación personalizada 2</label></div>
                                                            <div class="custom-checkbox custom-control"><input type="checkbox" id="exampleCustomCheckbox3" disabled="" class="custom-control-input"><label class="custom-control-label" for="exampleCustomCheckbox3">Casilla de verificación deshabilitada</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="main-card mb-3 card">
                                                <div class="card-body"><h5 class="card-title">En línea</h5>
                                                    <div class="position-relative form-group">
                                                        <div>
                                                            <div class="custom-checkbox custom-control custom-control-inline"><input type="checkbox" id="exampleCustomInline" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                                                  for="exampleCustomInline">"Input" en línea personalizado</label></div>
                                                            <div class="custom-checkbox custom-control custom-control-inline"><input type="checkbox" id="exampleCustomInline2" class="custom-control-input"><label class="custom-control-label"
                                                                                                                                                                                                                   for="exampleCustomInline2">"Input" en línea personalizado 2</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="main-card mb-3 card">
                                                <div class="card-body"><h5 class="card-title">"Radios"</h5>
                                                    <div class="position-relative form-group">
                                                        <div>
                                                            <div class="custom-radio custom-control"><input type="radio" id="exampleCustomRadio" name="customRadio" class="custom-control-input"><label class="custom-control-label" for="exampleCustomRadio">"Radio" personalizado</label></div>
                                                            <div class="custom-radio custom-control"><input type="radio" id="exampleCustomRadio2" name="customRadio" class="custom-control-input"><label class="custom-control-label" for="exampleCustomRadio2">"Radio" personalizado 2</label></div>
                                                            <div class="custom-radio custom-control"><input type="radio" id="exampleCustomRadio3" disabled="" class="custom-control-input"><label class="custom-control-label" for="exampleCustomRadio3">"Radio" deshabilitado</label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="main-card mb-3 card">
                                                <div class="card-body"><h5 class="card-title">Selectores de formulario</h5>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="position-relative form-group"><label for="exampleCustomSelect" class="">Selectores personalizados</label><select type="select" id="exampleCustomSelect" name="customSelect" class="custom-select">
                                                                <option value="">Selector</option>
                                                                <option>Opción 1</option>
                                                                <option>Opción 2</option>
                                                                <option>Opción 3</option>
                                                                <option>Opción 4</option>
                                                                <option>Opción 5</option>
                                                            </select></div>
                                                            <div class="position-relative form-group"><label for="exampleCustomMutlipleSelect" class="">Múltiple selector</label><select multiple="" type="select" id="exampleCustomMutlipleSelect"
                                                                                                                                                                                              name="customSelect" class="custom-select">
                                                                <option value="">Selector</option>
                                                                 <option>Opción 1</option>
                                                                <option>Opción 2</option>
                                                                <option>Opción 3</option>
                                                                <option>Opción 4</option>
                                                                <option>Opción 5</option>
                                                            </select></div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="position-relative form-group"><label for="exampleCustomSelectDisabled" class="">Selector deshabilitado</label><select type="select" id="exampleCustomSelectDisabled" name="customSelect"
                                                                                                                                                                                              disabled="" class="custom-select">
                                                                <option value="">Selector</option>
                                                                <option>Opción 1</option>
                                                                <option>Opción 2</option>
                                                                <option>Opción 3</option>
                                                                <option>Opción 4</option>
                                                                <option>Opción 5</option>
                                                            </select></div>
                                                            <div class="position-relative form-group"><label for="exampleCustomMutlipleSelectDisabled" class="">Múltiple selector deshabilitado</label><select multiple="" type="select"
                                                                                                                                                                                                               id="exampleCustomMutlipleSelectDisabled"
                                                                                                                                                                                                               name="customSelect" disabled="" class="custom-select">
                                                                <option value="">Selector</option>
                                                                <option>Opción 1</option>
                                                                <option>Opción 2</option>
                                                                <option>Opción 3</option>
                                                                <option>Opción 4</option>
                                                                <option>Opción 5</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>