import {  createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Errorpage from '../Pages/ErrorPage.jsx';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import cartandproductloader from '../utils/cartandproductloader';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: cartandproductloader,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
            },
        ]
    },

]);