import classes from './HeaderCartButton.module.css';
import { useCart } from '../CartContext/CartContext';

const HeaderCartButton=props=>{
    const { cartItemCount } = useCart();

    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}></span>
        <p>Your Cart:-{cartItemCount}</p>
        
    </button>
    )
}
export default HeaderCartButton;


