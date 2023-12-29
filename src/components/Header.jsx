import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom"
import shoppingCart from '../assets/shopping-cart.png'
import PropTypes from 'prop-types'
import { useState } from 'react'
import decreaseIcon from '../assets/decrease.png'
import increaseIcon from '../assets/increase.png'

export default function Header({addedCartItems = [], setAddedCartItems}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const totalItemCount = addedCartItems.reduce((total, addedItem) => {
        return total + addedItem.howManyItems
    }, 0)

    const location = useLocation();
    const headerClass = location.pathname === '/' ? 'header' : 'shopHeader';

    function toggleShoppingCart() {
        setIsCartOpen((prev) => !prev);
    }

    let total = 0;

    if(addedCartItems != []) {
        total = addedCartItems.reduce((accumulator, item) => {
            return(
                accumulator += item.price * item.howManyItems
            )
        }, 0)
    }

    function cartItemDecrease(item) {
        console.log(item.howManyItems - 1)
        if(item.howManyItems - 1 === 0) {
            console.log('a')
            setAddedCartItems(
                addedCartItems.filter((addedItem) => addedItem.title != item.title)
            )
        } else {
            setAddedCartItems(
                addedCartItems.map((addedItem) => {
                    if(addedItem.title === item.title) {
                        return(
                            {
                                ...addedItem,
                                howManyItems: addedItem.howManyItems - 1
                            }
                        )
                    } else {
                        return addedItem;
                    }
                })
            )
        }
    }

    function cartItemIncrease(item) {
        setAddedCartItems(
            addedCartItems.map((addedItem) => {
                if(addedItem.title === item.title) {
                    return(
                        {
                            ...addedItem,
                            howManyItems: addedItem.howManyItems + 1
                        }
                    )
                } else {
                    return addedItem;
                }
            })
        )
    }

    function cartInputChange(e, item) {
        if(parseInt(e.target.value, 10) < 1) {
            setAddedCartItems(
                addedCartItems.filter((addedItem) => addedItem.title != item.title)
            )
        } else {
            setAddedCartItems(
                addedCartItems.map((addedItem) => {
                    if(addedItem.title === item.title) {
                        return(
                            {
                                ...addedItem,
                                howManyItems: parseInt(e.target.value, 10)
                            }
                        )
                    } else {
                        return addedItem;
                    }
                })
            )
        }
    }

    return(
        <div className={headerClass} data-testid='header'>
            <Link to='/' className='logo'>FAKE STORE</Link>

            <nav className="navBar">
                <Link to='/shop' className='shop'>Shop</Link>
                <button className='displayShoppingCart' onClick={toggleShoppingCart}>
                    <img className='cartIcon' src={shoppingCart} alt='cart icon'></img>
                    <span className='itemCountCircle'>{totalItemCount}</span>
                </button>
            </nav>

            {isCartOpen && (
                <div className='backgroundOverlay'>
                    <div className='shoppingCart'>
                        <div className='headerAndCloseButton'>
                            <h2 className='cartItemCount'>Cart ({`${totalItemCount}`})</h2>
                            <button className='cartCloseButton' onClick={toggleShoppingCart}>
                                <svg className='cartCloseIcon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                            </button>
                        </div>

                        <div className='shoppingCartGrid'>
                            {addedCartItems.map((item, index) => {
                                return(
                                    <div className='cartGridItem' key={`cartGridItem${index}`}>
                                        <img src={item.image} className='cartItemImg'></img>
                                        <div className='cartItemDetails'>
                                            <h5 className='cartItemTitle'>{item.title}</h5>
                                            <p className='cartItemPrice'>${(item.price * item.howManyItems).toFixed(2)}</p>

                                            <div className='shoppingCartItemCount'>
                                                <p className='quantity'>Quantity:</p>

                                                <button className='cartDecreaseButton' onClick={() => cartItemDecrease(item)}>
                                                    <img className='cartDecreaseImg' src={decreaseIcon}></img>
                                                </button>

                                                <input className='cartInput' type='number' value={item.howManyItems} onChange={(e) => cartInputChange(e, item)}></input>

                                                <button className='cartIncreaseButton' onClick={() => cartItemIncrease(item)}>
                                                    <img className='cartIncreaseImg' src={increaseIcon}></img>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='totalAndCheckout'>
                            <p className='total'>{`Total: $${total.toFixed(2)}`}</p>
                            <button className='checkout'>Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

Header.propTypes = {
    addedCartItems: PropTypes.array,
    setAddedCartItems: PropTypes.func,
}