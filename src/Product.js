import React from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutlined';
import './product.css';
import {useStateValue } from './StateProvider';
 
function Product({id, title, image, price, ratting}){
    let [ {} , dispatch] = useStateValue()
    const addToBuscket=()=>{
        dispatch({
            type:"ADD_TO_BASCKET",
            item :{ id, title, image, price, ratting}
        })

    }
    return(
         <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(ratting).fill().map((_)=><StarOutlineIcon className="product_start"/>)
                    }
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBuscket}>Add Buscket</button>

         </div>
    )
}


export default Product;