import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom";
import searchIcon from '../assets/search.png'
import shoppingCart from '../assets/shopping-cart.png'
import PropTypes from 'prop-types'

export default function Header(itemCount) {
    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header' : 'shopHeader';
    console.log(itemCount)

    return(
        <div className={headerClass} data-testid='header'>
            <Link to='/' className='logo'>FAKE STORE</Link>

            <nav className="navBar">
                <Link to='/shop' className='shop'>Shop</Link>
                <Link to=''><img src={searchIcon} className='searchIcon' alt='search icon'></img></Link>
                <button className='displayShoppingCart' onClick=''>
                    <img src={shoppingCart} alt='cart icon'></img>
                    <span className='itemCountCircle'>{itemCount.itemCount}</span>
                </button>
            </nav>
        </div>
    )
}

Header.propTypes = {
    itemCount: PropTypes.number,
}