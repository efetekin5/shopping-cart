import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import ItemAddToCart from './ItemAddToCart';
import PropTypes from 'prop-types'

export default function Item({addedCartItems, setAddedCartItems}) {
    const location = useLocation()
    const item = location.state;

    return(
        <>
            <Header
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            ></Header>
            <ItemAddToCart
                item={item}
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            ></ItemAddToCart>
        </>
    )
}

Item.propTypes = {
    itemCount: PropTypes.number,
    addedCartItems: PropTypes.array,
    setAddedCartItems: PropTypes.func,
}