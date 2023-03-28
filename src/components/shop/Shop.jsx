import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Product from '../Product/product';
import { addToDb, getShoppingCart } from '../utilities/fakedb'
import './Shop.css'
import Cart from '../cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCard = [];
        // console.log(storedCart)
        // step 1: get id
        for (const id in storedCart) {
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            // step:3 get quantity of product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step:4
                savedCard.push(addedProduct);
            }
        }
        // step 5:
        setCart(savedCard);
    }, [products])

    const handlerBtn = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='container'>
            <div className="items-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerBtn={handlerBtn}></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='order-summary'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;