import React, { useState } from 'react';

import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import { createContext } from 'react';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);


const Main = () => {
    const { productsData, initialCart } = useLoaderData();

    // console.log(productContext);
    // console.log(productsData, "\n", cartData, '\n');
    // console.log(initialCart);
    const [cart, setCart] = useState(initialCart);

    const num=cart.length;
    return (

        <CartContext.Provider value={[ cart, setCart ]}>
            <ProductContext.Provider value={productsData}>
                <div>
                    <Header num={num}></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </ProductContext.Provider>
        </CartContext.Provider>
    );
};

export default Main;