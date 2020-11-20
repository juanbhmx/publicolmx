import React from 'react';
import Checkout from '../checkout';
import '../login/style.scss';


const CartPrice = props => {

    return (
      <div class="container">
      <h1>Editar Perfil</h1>
      
    <div class="row">
        
        <div class="col-md-3">
          <div class="text-center">
            <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"/>
            <h6>Subir una foto...</h6>
            <input type="file" class="form-control"/>
          </div>
        </div>
        
        
        <div class="col-md-9 personal-info">
          <div class="alert alert-info alert-dismissable">
            <a class="panel-close close" data-dismiss="alert">×</a> 
            <i class="fa fa-coffee"></i>
            Escribe <strong>cuidadosamente</strong> recuerda que es personal
          </div>
          <h3>Informacion personal</h3>
          
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-lg-3 control-label"> Apellido:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="Bautista"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Nombre:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="Juan"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Compañia:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="BrocoLand"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Email:</label>
              <div class="col-lg-8">
                <input class="form-control" type="text" value="brocolandmx@gmail.com"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Zona Horaria:</label>
              <div class="col-lg-8">
                <div class="ui-select">
                  <select id="user_time_zone" class="form-control">
                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                    <option value="Alaska">(GMT-09:00) Alaska</option>
                    <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                    <option value="Arizona">(GMT-07:00) Arizona</option>
                    <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                    <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                    <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                    <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Nombre del Usuario:</label>
              <div class="col-md-8">
                <input class="form-control" type="text" value="juanbhmx"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Contraseña:</label>
              <div class="col-md-8">
                <input class="form-control" type="password" value="11111122333"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Confirma la Contraseña:</label>
              <div class="col-md-8">
                <input class="form-control" type="password" value="11111122333"/>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label"></label>
              <div class="col-md-8">
                <input type="button" class="btn btn-primary" value="Guardar Cambios"/>
                <span></span>
                <input type="reset" class="btn btn-default" value="Cancelar"/>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
  
    )
}

export default CartPrice;