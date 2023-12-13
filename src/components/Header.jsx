import '../styles/Header.css'
import { Link } from "react-router-dom";
import searchIcon from '../assets/search.png'
import shoppingCart from '../assets/shopping-cart.png'

export default function Header() {
    return(
        <div className='header'>
            <Link to='' className='logo'>Furniture</Link>

            <nav className="navBar">
                <Link to='' className='shop'>Shop</Link>
                <Link to=''><img src={searchIcon} className='searchIcon' alt='search icon'></img></Link>
                <Link to=''><img src={shoppingCart} alt='cart icon'></img></Link>
            </nav>
        </div>
    )
}