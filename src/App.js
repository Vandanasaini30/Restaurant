import React,{useState} from  'react';
import Header from './Component/Layout/Header';
import Meals from './Component/Meal/Meals';
import { CartProvider } from './Component/CartContext/CartContext';


import Cart from './Component/Cart/Cart';

const App=()=>{
    const[cartShown,setCart]=useState(false);
    const cartHandler=()=>{
        setCart(true);
    };
    const HideCart=()=>{
        setCart(false);
    };

    return(
    
    <CartProvider>
        { cartShown && <Cart onClose={HideCart}/>}
        <Header onShowcart={cartHandler} onClose={HideCart}/>

        <main>
        <Meals/>

        </main>
        
        </CartProvider>
        
    );
}
export default App;

