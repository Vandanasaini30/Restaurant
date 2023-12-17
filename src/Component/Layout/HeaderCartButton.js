import classes from './HeaderCartButton.module.css';
import { useCart } from '../CartContext/CartContext';


const HeaderCartButton = (props) => {
  const { cartItemCount} = useCart();

  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}></span>
        <span>Your Cart </span>
        <span className={classes.badge}>{cartItemCount}</span>
        
      </button>
      
          </div>
  );
};

export default HeaderCartButton;
