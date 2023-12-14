// MealItemForm.js
import React, { useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useCart } from '../../CartContext/CartContext';

const MealItemForm = () => {
  const [enteredAmount, setEnteredAmount] = useState(1);
  const { addToCart } = useCart();

  const amountInputChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addToCart(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value: enteredAmount,
          onChange: amountInputChangeHandler,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
