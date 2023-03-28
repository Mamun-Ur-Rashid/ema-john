import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name,ratings,img,seller, price} = props.product;

    // handle function btn
    const handlerBtn = props.handlerBtn;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufactureer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handlerBtn(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;