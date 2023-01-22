import React from 'react'
import { useContext } from 'react';

import { CartContext, ProductContext } from '../Layout/Main';
import Product from './Product';
import {modifyDB} from '../utils/fakedb';
import { toast } from 'react-hot-toast';
const Shop = () => {

  const productsData = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  // console.log(productsData);

  const handleAddtoCart = (product) => {

    let newCart = [];
    // console.log(cart, cart.length);
    if (cart && cart.length) {
      let exist = cart.find(p => p.id === product.id);
      if (exist) {
        const remaining = cart.filter(c => c.id !== product.id);
        product.quantity += 1;
        newCart = [...remaining, product];
      }
      else {
        // console.log("exist false");
        product.quantity = 1;
        newCart = [...cart, product];
      }
    }
    else {
      product.quantity = 1;
      newCart = [product];
    }
    setCart(newCart);
    modifyDB(newCart);
    toast.success('Successfully added to cart!');
  }


  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>

      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          productsData.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
        }
      </div>
    </div>
  )
}

export default Shop
