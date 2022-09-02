import React, { useEffect, useState } from 'react';
import '../App.css';
import Product from '../components/Product';
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response=> response.json())
        .then(data => setProducts(data))
    },[])
    //add to cart button
    const addToCart = (props) =>{
        console.log(props);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product addToCart={addToCart} product = {product} key={product.id}></Product> )
                }
            </div>
            <div className="cart-container">
                <h2>This is cart</h2>
            </div>
        </div>
    );
};

export default Shop;