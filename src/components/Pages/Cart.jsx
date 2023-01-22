import React from 'react'
import { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../Layout/Main'
import CartItem from './CartItem'
import { modifyDB, removeDB } from '../utils/fakedb'
import { toast } from 'react-hot-toast'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleDeleteCart = id => {
    const remaining = cart.filter(ct => ct.id !== id);
    setCart(remaining);
    modifyDB(remaining);
    if (remaining.length === 0) {
      removeDB();
    }
    toast.error('Successfully remove from cart!');
  }
  const handlePlaceOrder = () => {
    setCart([]);
    removeDB();
    toast.error('Successfully remove all !!!');
  }
  let total = 0

  for (const product of cart) {
    total = total + product.price * product.quantity
  }

  return (
    <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>
          {
            cart.map(ct => <CartItem key={ct.id} ct={ct} handleDeleteCart={handleDeleteCart}></CartItem>)
          }
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='px-6 py-2 border rounded-full border-cyan-400'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          <button onClick={handlePlaceOrder}
            type='button'
            className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
          >
            Place Order
          </button>
        </div>
      </div>

    </div>
  )
}

export default Cart
