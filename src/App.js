import React,{Fragment} from  'react';
import Header from './Component/Layout/Header';
import Meals from './Component/Meal/Meals';
import classes from './App.css'
const App=()=>{
    return(
    
    <Fragment>
         
        <Header/>

        <main>
        <Meals/>

        </main>
        
        </Fragment>
        
    );
}
export default App;