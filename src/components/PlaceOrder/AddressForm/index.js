import React, { Component } from 'react';
import NormalInput from '../../../components/UI/NormalInput';


const AddressForm = props =>  {

        const {address} = props;
     

        return (
            <form onSubmit={props.addressSubmitHandler}>
                 <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="fullName"
                                value={address.fullName}
                                placeholder={'Nombre Completo'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="mobileNumber"
                                value={address.mobileNumber}
                                placeholder={'Numero Tel'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="pinCode"
                                value={address.pinCode}
                                placeholder={'CP'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="locality"
                                value={address.locality}
                                placeholder={'Localidad'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
    
                    <div className="Row">
                        <NormalInput 
                                name="address"
                                value={address.address}
                                placeholder={'Dirección (área y calle)'}
                                inputHandler={props.inputHandler}
                                type="textarea"
                                style={{height: '60px'}}
                        />
                    </div>
    
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="cityDistrictTown"
                                value={address.cityDistrictTown}
                                placeholder={'Ciudad / Distrito / Pueblo'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="state"
                                value={address.state}
                                placeholder={'Estado'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
    
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="landmark"
                                value={address.landmark}
                                placeholder={'Landmark (Opcional)'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="alternatePhoneNumber"
                                value={address.alternateNumber}
                                placeholder={'Teléfono alternativo (opcional)'}
                                inputHandler={props.inputHandler}
                                type="text"

                            />
                        </div>
                    </div>

                    <div className="Row">
                        {/* <button className="DeliveryAddressButton" >GUARDAR Y ENTREGAR AQUI</button> */}
                    </div>

            </form>
           
        );
    
    
}

export default AddressForm;