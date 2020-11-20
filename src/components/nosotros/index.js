import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


const FormPage = () => {
return (
<div>
<section id="slider">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                  </ol>
                  
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-sm-6">
                        <h1><span>NUESTRA</span>-MISION</h1>
                        <h2>este proyecto busca restaurar esta red de energía vital que sostiene la vida y de la que somos parte.</h2>
                        <p>propone una nueva forma de acercarnos a las abejas, respetuosa y conscientemente dando paso a la reconstrucción de la naturaleza, la refloración y reverdecimiento de nuestro entorno. </p>
                        
                      </div>
                      <div class="col-sm-6">
                        <img src="assets/images/home/girl1.jpg" class="girl img-responsive" alt="" />
                        
                      </div>
                    </div>
                    <div class="item">
                      <div class="col-sm-6">
                        <h1><span>NUESTRA</span>-VISION</h1>
                        <h2>Contribuir a la investigación científica global de las abejas </h2>
                        <p>que nos permita desarrollar acciones que promuevan la protección, preservación y conservación de las abejas. </p>
                        
                      </div>
                      <div class="col-sm-6">
                        <img src="assets/images/home/girl2.jpg" class="girl img-responsive" alt="" />
                        
                      </div>
                    </div>
                    
                    <div class="item">
                      <div class="col-sm-6">
                        <h1><span>NUESTROS</span>-VALORES</h1>
                        <h2>COMPROMISO - RESPETO - AMOR - SENSIBILIDAD - CALIDEZ - CALIDAD</h2>
                      </div>
                      <div class="col-sm-6">
                        <img src="assets/images/home/girl3.jpg" class="girl img-responsive" alt="" />
                        
                      </div>
                    </div>
                    
                  </div>
                  
                  <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </section>

</div>
      );
    };

    export default FormPage;