import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import foodImage from '../../Assest/pic.jpg.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
             <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt="Food" />
            </div>
        </Fragment>
    );
}

export default Header;
