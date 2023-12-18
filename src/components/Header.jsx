import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom";
import searchIcon from '../assets/search.png'
import shoppingCart from '../assets/shopping-cart.png'

export default function Header() {
    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header' : 'shopHeader';

    return(
        <div className={headerClass} data-testid='header'>
            <Link to='/' className='logo'>FAKE STORE</Link>

            <nav className="navBar">
                <Link to='/shop' className='shop'>Shop</Link>
                <Link to=''><img src={searchIcon} className='searchIcon' alt='search icon'></img></Link>
                <Link to=''><img src={shoppingCart} alt='cart icon'></img></Link>
            </nav>
        </div>
    )
}