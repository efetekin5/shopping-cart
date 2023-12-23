import '../styles/ItemAddToCart.css'
import PropTypes from 'prop-types';
import decreaseIcon from '../assets/decrease.png'
import increaseIcon from '../assets/increase.png'
import { useState } from 'react';

export default function ItemAddToCart({item, itemCount, setItemCount}) {
    const [displayedItemCount, setDisplayedItemCount] = useState(1);

    function increaseItemCount() {
        if(itemCount === 100) {
            return;
        } else {
            setDisplayedItemCount((prevCount) => prevCount + 1);
        }
    }

    function decreaseItemCount() {
        if(itemCount === 1) {
            return;
        } else {
            setDisplayedItemCount((prevCount) => prevCount - 1);
        }
    }

    function inputChange(e) {
        setDisplayedItemCount(parseInt(e.target.value, 10));
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

                    <button className='addToCart' onClick={() => setItemCount((prevCount) => prevCount + displayedItemCount)}>Add To Cart</button>
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
    itemCount: PropTypes.number,
    setItemCount: PropTypes.func,
}