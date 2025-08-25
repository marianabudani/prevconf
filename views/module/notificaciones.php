<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="fas fa-exclamation"></i>
            </div>
            <div>Notificación
                
                <?php 
                if($_SESSION['PROFILE'] == 1){
                    echo "<div class='page-title-subheading'>Desde aquí podrás visualizar las notificaciones recibidas desde la Dirección Nacional de Asuntos Técnicos de Fronteras.</div>";   
                }
                ?>
            </div>
        </div>
        <!-- <div class="page-title-actions">
            <button id="" class="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x btn btn-outline-primary"><i class="lnr lnr-enter"> </i>Guardar</button>
        </div> -->
    </div>
</div>

<div class="tab-content">
    <table id="notificaciones" class="display" width="100%"></table>
</div>