import '../styles/ItemAddToCart.css'
import PropTypes from 'prop-types';
import decreaseIcon from '../assets/decrease.png'
import increaseIcon from '../assets/increase.png'

export default function ItemAddToCart(item) {
    console.log(item.item.item.image)

    return(
        <div className="itemAddToCart">
            <div className='imageAndAddToCart'>
                <img className='itemAddCartImg' src={item.item.item.image}></img>

                <div className='itemDetails'>
                    <h3 className='itemTitle'>{item.item.item.title}</h3>
                    <p className='itemPrice'>${item.item.item.price}</p>

                    <div className='changeItemCount'>
                        <button className='decreaseButton'>
                            <img className='decreaseIcon' src={decreaseIcon}></img>
                        </button>

                        <input type='number' className='itemCount'></input>

                        <button className='increaseButton'>
                            <img className='increaseIcon' src={increaseIcon}></img>
                        </button>
                    </div>

                    <button className='addToCart'>Add To Cart</button>
                </div>
            </div>

            <div className='itemDescriptionContainer'>
                <h3 className='descriptionHeader'>Description</h3>
                <p className='itemDescription'>{item.item.item.description}</p>
            </div>
        </div>
    )
}

ItemAddToCart.propTypes = {
    item: PropTypes.object
}