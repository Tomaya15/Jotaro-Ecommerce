import React from 'react';
import "./Checkout.css";
import {useFormik, Formik} from 'formik';
import { useCartContext } from '../../context/CartContext';
import { addOrder } from './addOrder';



const Checkout = () => {
    
    const {cart} = useCartContext();
    
    const now = new Date;

    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const dateString = day + "/" + (month + 1 ) + "/" + year;

    const totalPrice = cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0).toFixed(2);

    const validate = values => {
        const errors = { }

        if(!values.email) {
            errors.mail = 'El campo mail es requerido'
        }
        else if(values.email.length < 4){
            errors.mail = 'El email ingresado es muy corto'
        }

        if(!values.nombreCompleto) {
            errors.nombreCompleto = 'El campo nombre completo es requerido'
        }
        else if (values.nombreCompleto.length < 4){
            errors.nombreCompleto = "El nombre ingresado es muy corto"
        }

        if(!values.telefono){
            errors.telefono = 'El campo telefono es requerido'
        }
        else if (values.telefono.length < 4){
            errors.telefono = "El telefono ingresado es muy corto"
        }

        if(!values.remail){
            errors.remail = 'Falta confirmar el mail'
        }
        else if(values.remail.length < 4){
            errors.remail = 'El email ingresado es muy corto'
        }
        else if(values.remail != values.email){
            errors.remail = 'El mail debe ser el mismo que ingreso anteriormente'
        }


       return errors; 
    }
    const formik = useFormik({
       initialValues : {
        nombreCompleto : '',
        telefono : '',
        email : '',
        remail : '',
        products: cart,
        costo: `${cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0).toFixed(2)}`,
        date: `${dateString}`
        
    },
    validate,
    onSubmit: initialValues => {
        addOrder(initialValues);    
        formik.handleReset();
        window.alert('Muchas gracias por comprar, estaremos en contacto para entregarte el pedido');
        
    }
    }); 
    return (<div className="checkout">
            <h1 className="title-form">Falta poco para terminar tu compra</h1>
            <form onSubmit={formik.handleSubmit} className='form-container'>
                <label htmlFor="nombreCompleto">Nombre Completo</label>
                <input onChange={formik.handleChange} value={formik.values.nombreCompleto} onBlur={formik.handleBlur} id="nombreCompleto" name="nombreCompleto"/>
                {(formik.touched.nombreCompleto && formik.errors.nombreCompleto) ? <div className="error-form">{formik.errors.nombreCompleto}</div> : null}
                <label htmlFor="telefono">Telefono</label>
                <input type="tel" onChange={formik.handleChange} value={formik.values.telefono} onBlur={formik.handleBlur} id="telefono" name="telefono"/>
                {formik.touched.telefono && formik.errors.telefono ? <div className="error-form">{formik.errors.telefono}</div> : null}
                <label htmlFor="email">Email</label>
                <input type="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}  id="email" name="email"/>
                {formik.touched.email && formik.errors.email ? <div className="error-form">{formik.errors.email}</div> : null}
                <label htmlFor="remail">Confirma tu email</label>
                <input onChange={formik.handleChange} value={formik.values.remail} onBlur={formik.handleBlur} id="remail" name="remail"/>
                {formik.touched.remail && formik.errors.remail ? <div className="error-form">{formik.errors.remail}</div> : null}
                <label htmlFor="costo">Costo</label>
                <input readOnly="readonly" type="number" value={totalPrice}/>
                {formik.errors.costo ? <div className="error-form">{formik.errors.costo}</div> : null}
                <label htmlFor="date">Fecha</label>
                <input readOnly="readonly" value={dateString}></input>
                <button type="submit" className="button-form">Enviar Orden</button>
            </form>
        </div>
    )
}

export default Checkout;
