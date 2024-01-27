import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import Image from '../../assets/Image.png';
import classes from './Header.module.css'

const Header = props => {
    return ( 
    <Fragment>
        <header className = {classes.header}>
            <h1>ReactMeals</h1>
            
        </header>
        <div className={classes ['main-image']}>
            <img src={Image} height="400px" alt="A table full of delicious food!" />
        </div>
    </Fragment>
    );
}

export default Header;