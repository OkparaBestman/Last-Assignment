import React, {useContext} from 'react';
import  CartContext  from "./Auth/context/CartContext";
import { Link } from 'react-router-dom';

function CartDisplay(){
    const {addCart} = useContext(CartContext.CartContext);
    return(
        <div>
            <div style={{color: "green"}}>DisplayCart</div>
            <div>
                {addCart.map((item)=>{
                    return(
                        <div key={item.id}>
                             <img src={item.image} alt="image-tittle" /> 
                             <h5>{item.name}</h5> 
                             <h6>${item.price}</h6>
                        </div>
                    )
                })};
                <Link to={'/pay'}>
                <p>Make payment here</p>
                </Link>
            </div>
        </div>
    );
}

export default CartDisplay;