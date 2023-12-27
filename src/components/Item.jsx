import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import ItemAddToCart from './ItemAddToCart';
import PropTypes from 'prop-types'

export default function Item({itemCount, setItemCount, addedCartItems, setAddedCartItems}) {
    const location = useLocation()
    const item = location.state;

    return(
        <>
            <Header
                itemCount={itemCount}
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            ></Header>
            <ItemAddToCart
                item={item}
                setItemCount={setItemCount}
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            ></ItemAddToCart>
        </>
    )
}

Item.propTypes = {
    itemCount: PropTypes.number,
    setItemCount: PropTypes.func,
    addedCartItems: PropTypes.array,
    setAddedCartItems: PropTypes.func,
}