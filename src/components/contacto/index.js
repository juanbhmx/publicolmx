import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Escribenos</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Nombre
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Correo
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Asunto
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Mensaje
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4"> <br></br>
                  <MDBBtn color="warning" outline type="submit">
                    Enviar
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn> 
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer> 
      );
    };

    export default FormPage;