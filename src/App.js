import React,{Fragment,useState} from  'react';
import Header from './Component/Layout/Header';
import Meals from './Component/Meal/Meals';

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
    
    <Fragment>
        { cartShown && <Cart/>}
        <Header onShowcart={cartHandler} onClose={HideCart}/>

        <main>
        <Meals/>

        </main>
        
        </Fragment>
        
    );
}
export default App;