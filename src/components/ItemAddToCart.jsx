import '../styles/ItemAddToCart.css'
import PropTypes from 'prop-types';
import decreaseIcon from '../assets/decrease.png'
import increaseIcon from '../assets/increase.png'
import { useState, useEffect } from 'react';

export default function ItemAddToCart({item, setItemCount, addedCartItems, setAddedCartItems}) {
    const [displayedItemCount, setDisplayedItemCount] = useState(1);

    useEffect(() => {
        addedCartItems.map((cartItem) => {
            if(cartItem.title === item.item.title) {
                setDisplayedItemCount(cartItem.howManyItems);
            }
        })
    }, [item, addedCartItems])

    function increaseItemCount() {
        if(displayedItemCount === 100) {
            return;
        } else {
            setDisplayedItemCount((prevCount) => prevCount + 1);
        }
    }

    function decreaseItemCount() {
        if(displayedItemCount === 1) {
            return;
        } else {
            setDisplayedItemCount((prevCount) => prevCount - 1);
        }
    }

    function inputChange(e) {
        setDisplayedItemCount(parseInt(e.target.value, 10));
    }

    function handleAddToCart() {
        setItemCount((prevCount) => prevCount + displayedItemCount);

        const isAlreadyAdded = addedCartItems.some((addedItem) => addedItem.title === item.item.title);

        if(isAlreadyAdded) {
            setAddedCartItems((prevAddedItems) => 
                prevAddedItems.map((prevItem) => {
                    if(prevItem.title === item.item.title) {
                        return {
                            ...prevItem,
                            howManyItems: prevItem.howManyItems + displayedItemCount
                        }
                    } else {
                        return prevItem
                    }
                })
            )
        } else {
            setAddedCartItems((prevAddedItems) => [
                ...prevAddedItems,
                {
                    title: item.item.title,
                    price: item.item.price,
                    image: item.item.image,
                    howManyItems: displayedItemCount,
                }
            ])
        }
    }

    return(
        <div className="itemAddToCart">
            <div className='imageAndAddToCart'>
                <img className='itemAddCartImg' src={item.item.image}></img>

                <div className='itemDetails'>
                    <h3 className='itemTitle'>{item.item.title}</h3>
                    <p className='itemPrice'>${item.item.price}</p>

                    <div className='changeItemCount'>
                        <button className='decreaseButton' onClick={ decreaseItemCount }>
                            <img className='decreaseIcon' src={decreaseIcon}></img>
                        </button>

                        <input type='number' value={displayedItemCount} onChange={ inputChange } className='itemCount'></input>

                        <button className='increaseButton' onClick={ increaseItemCount }>
                            <img className='increaseIcon' src={increaseIcon}></img>
                        </button>
                    </div>

                    <button className='addToCart' onClick={ handleAddToCart }>Add To Cart</button>
                </div>
            </div>

            <div className='itemDescriptionContainer'>
                <h3 className='descriptionHeader'>Description</h3>
                <p className='itemDescription'>{item.item.description}</p>
            </div>
        </div>
    )
}

ItemAddToCart.propTypes = {
    setItemCount: PropTypes.func,
    addedCartItems: PropTypes.array,
    setAddedCartItems: PropTypes.func,
}