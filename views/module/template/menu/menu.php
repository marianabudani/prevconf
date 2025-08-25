<div class="app-sidebar sidebar-shadow">
                    <div class="app-header__logo">
                        <!-- <img src="https://sistemas.mininterior.gob.ar/add/genesis/views/assets/images/logo-inverse.png" alt="" /> -->
                        <img src="views/assets/images/logo-m.png" alt="" />

                        <div class="header__pane ml-auto">
                            <div>
                                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="app-header__mobile-menu">
                        <div>
                            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="app-header__menu">
                        <span>
                            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span class="btn-icon-wrapper">
                                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>    
                    <div class="scrollbar-sidebar">
                    <?php if($settingFramework["menu"]=="1" && $_SESSION["OWNER"]=="1"){ ?>
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li class="app-sidebar__heading">Paneles</li>
                                <li>
                                    <a href="<?php echo $front."";?>" class="mm-active">
                                        <i class="metismenu-icon fas fa-columns"></i>
                                        Panel Ejemplo 1
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Componentes de interfaz</li>
                                <li>
                                    <a href="#">
										<i class="metismenu-icon fas fa-bookmark"></i>
                                        Elementos
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?php echo $front."elements-buttons-standard";?>" class="mm-active">
                                                <i class="metismenu-icon"></i>
                                                Botones
                                            </a>
                                        </li>
                                        <li>
                                        <a href="<?php echo $front."elements-dropdowns";?>">
                                                <i class="metismenu-icon">
                                                </i>Desplegables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."elements-icons";?>">
                                                <i class="metismenu-icon">
                                                </i>íconos
                                            </a>
                                        </li>
                                        <li>
                                        <a href="<?php echo $front."elements-badges-labels";?>">
                                                <i class="metismenu-icon">
                                                </i>Distintivos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."elements-cards";?>">
                                                <i class="metismenu-icon">
                                                </i>Tarjetas
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."elements-list-group";?>">
                                                <i class="metismenu-icon">
                                                </i>Grupo de listas
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."elements-navigation";?>">
                                                <i class="metismenu-icon">
                                                </i>Menús de navegación
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."elements-utilities";?>">
                                                <i class="metismenu-icon">
                                                </i>Utilidades
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
										<i class="metismenu-icon fas fa-cog"></i>
                                        Componentes
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?php echo $front."components-tabs";?>">
                                                <i class="metismenu-icon">
                                                </i>Pestañas
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-accordions";?>">
                                                <i class="metismenu-icon">
                                                </i>Acordeones
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-notifications";?>">
                                                <i class="metismenu-icon">
                                                </i>Notificaciones
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-modals";?>">
                                                <i class="metismenu-icon">
                                                </i>Modales
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-progress-bar";?>">
                                                <i class="metismenu-icon">
                                                </i>Barras de Progreso
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-tooltips-popovers";?>">
                                                <i class="metismenu-icon">
                                                </i>Popovers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-carousel";?>">
                                                <i class="metismenu-icon">
                                                </i>Carrusel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-calendar";?>">
                                                <i class="metismenu-icon">
                                                </i>Calendario
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-pagination";?>">
                                                <i class="metismenu-icon">
                                                </i>Paginación
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-scrollable-elements";?>">
                                                <i class="metismenu-icon">
                                                </i>ScrollS
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?php echo $front."components-maps";?>">
                                                <i class="metismenu-icon">
                                                </i>Mapas
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?php echo $front."tables-regular";?>">
										<i class="metismenu-icon fas fa-border-all"></i>
                                        Tablas
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo $front."tables-dinamic";?>">
										<i class="metismenu-icon fas fa-border-all"></i>
                                        Tablas dinámicas 
                                    </a>
                                </li>                                

                                <li>
                                    <a href="#">
										<i class="metismenu-icon far fa-clone"></i>
                                        Menú
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul class="mm-collapse">
                                        <li>
                                            <a href="<?php echo $front."usuarios";?>">
                                                <i class="far fa-clipboard"></i>
                                                Usuarios
                                            </a>
                                        </li>

                                        <li>
                                            <a href="<?php echo $front."nuevo-formulario";?>">
                                                <i class="metismenu-icon fas fa-clipboard"></i>
												
                                                Nuevo
                                            </a>
                                        </li>

                                        <li>
                                            <a href="<?php echo $front."formulario-cinco-seis";?>">
                                                <i class="metismenu-icon fas fa-copy"></i>
                                                Formulario 5 o 6
                                            </a>
                                        </li>

                                        <li>
                                            <a href="<?php echo $front."adjuntar-documentacion";?>">
                                                <i class="metismenu-icon fas fa-paperclip"></i>
                                                Adjuntar documentación
                                                <!-- Adjuntar documentación tramites iniciados -->
                                            </a>
                                        </li>

                                        <li>
                                            <a href="<?php echo $front."consulta";?>">
                                               <i class="metismenu-icon fas fa-question"></i>
                                                Consulta
                                            </a>
                                        </li>

                                        <li>
                                            <a href="<?php echo $front."notificaciones";?>">
                                                <i class="metismenu-icon fas fa-exclamation"></i>
                                                Notificaciones
                                            </a>
                                        </li>
                                       
                                    </ul>                                
                                </li>

                                <li class="app-sidebar__heading">Widgets</li>
                                <li>
                                    <a href="<?php echo $front."dashboard-boxes";?>">
										<i class="metismenu-icon fas fa-cube"></i>
                                        Cajas del Panel
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Formularios</li>
                                <li>
                                    <a href="<?php echo $front."forms-controls";?>">
										<i class="metismenu-icon fab fa-delicious"></i>
                                        </i>Elementos
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo $front."forms-layouts";?>">
										<i class="metismenu-icon fas fa-file"></i>
                                        </i>Páginas
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo $front."forms-validation";?>">
									   <i class="metismenu-icon fas fa-check-circle"></i>
                                        </i>Validaciones
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Gráficos</li>
                                <li>
                                    <a href="<?php echo $front."charts-chartjs";?>">
                                        <i class="metismenu-icon fas fa-chart-pie"></i>
                                        </i>Gráficos JS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    <?php }else if ($_SESSION["OWNER"]=="0" && $_SESSION["PROFILE"]=="0"){?>
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li>
                                    <li class="app-sidebar__heading">Menú principal</li>

                                    <li>
                                        <a href="<?php echo $front."tramites-nuevos";?>">
                                            <i class="metismenu-icon fas fa-file"></i>
                                            Trámites nuevos
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."tramites-proceso";?>">
                                          <i class="metismenu-icon fas fa-file-alt"></i>
                                            Trámites en proceso
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."tramites-finalizados";?>">
                                            <i class="metismenu-icon fas fa-file-contract"></i>
                                            Trámites finalizados
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."escribano";?>">
                                            <i class="metismenu-icon fas fa-user-tie"></i>
                                            Escribanos
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."usuarios-admin";?>">
                                           <i class="metismenu-icon fas fa-user-circle"></i>
                                            Usuarios
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."notificaciones";?>">
                                            <i class="metismenu-icon fas fa-exclamation"></i>
                                            Notificaciones
                                        </a>
                                    </li>

                                </li>
                            </ul>
                        </div>
                    <?php }else if ($_SESSION["OWNER"]=="0" && $_SESSION["PROFILE"]=="1"){?>
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li>
                                    <li class="app-sidebar__heading">Menú principal</li>

                                    <li>
                                        <a href="<?php echo $front."nuevo-formulario";?>">
                                             <i class="metismenu-icon fas fa-clipboard"></i>
                                            Nuevo
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."formulario-cinco-seis";?>">
                                             <i class="metismenu-icon fas fa-copy"></i>
                                            Formulario 5 o 6
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."adjuntar-documentacion";?>">
                                             <i class="metismenu-icon fas fa-paperclip"></i>
                                            Adjuntar documentación
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."consulta";?>">
                                             <i class="metismenu-icon fas fa-question"></i>
                                            Consulta
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."notificaciones";?>">
                                            <i class="metismenu-icon fas fa-exclamation"></i>
                                            Notificaciones
                                        </a>
                                    </li>

                                </li>
                            </ul>
                        </div>
                    <?php }else{?>
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li>
                                    <li class="app-sidebar__heading">Menú principal</li>

                                    <li>
                                        <a href="<?php echo $front."abogado-tramites-nuevos";?>">
                                            <i class="metismenu-icon fas fa-file"></i>
                                            Trámites nuevos
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."abogado-tramites-proceso";?>">
                                            <i class="metismenu-icon fas fa-file-alt"></i>
                                            Trámites en proceso
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."abogado-tramites-finalizados";?>">
                                           <i class="metismenu-icon fas fa-file-contract"></i>
                                            Trámites finalizados
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?php echo $front."notificaciones";?>">
                                            <i class="metismenu-icon fas fa-exclamation"></i>
                                            Notificaciones
                                        </a>
                                    </li>

                                </li>
                            </ul>
                        </div>
                    <?php } ?>
                    </div>
                </div>