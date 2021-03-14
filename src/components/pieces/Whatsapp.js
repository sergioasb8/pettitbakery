import React from 'react';
import '../../assets/styles/Whatsapp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Whatsapp = ({ carItems }) => {

    const itemsPrice = carItems.reduce((a, c) => a + c.price * c.amount, 0);

    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });
    
    let waMsj='';

    //function tha builds the whatsapp url
    const waString=()=>{
        let str = '';
        //for every item in the order creates a string and adds thas string to str
        carItems.forEach(item=>{
            
            let subst=`${item.nameProduct}%20(${item.amount})%20precio:$${item.amount*item.price}%20`;
            str+=subst;            
        }   
        )
        //add the string to whatsapp url
        let waS = `https://wa.me/573215916795?text=${str}`
        //replaces all spaces for %20 that is a space in url
        waS=  waS.replace(/ /g, '%20');
       ;
        //set the url with the total
        waMsj=`${waS}%20Total%20sin%20domicilio:%20${formatter.format(itemsPrice)}`
        //returns the url 
        return waMsj;   
    }  
    return (
        <div className='SendContainer'> 
            <a href={waString()} className='WhatsappContainer'>
                <FontAwesomeIcon icon={faWhatsapp} className='Whatsapp' />
                <p className='Enviar'>Enviar whatsapp</p>
            </a>
        </div>
    )
}