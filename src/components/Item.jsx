import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import ItemAddToCart from './ItemAddToCart';
import PropTypes from 'prop-types'

export default function Item({itemCount, setItemCount}) {
    const location = useLocation()
    const item = location.state;
    console.log(item.item.id)

    return(
        <>
            <Header itemCount={itemCount}></Header>
            <ItemAddToCart
                item={item}
                itemCount={itemCount}
                setItemCount={setItemCount}
            ></ItemAddToCart>
        </>
    )
}

Item.propTypes = {
    itemCount: PropTypes.number,
    setItemCount: PropTypes.func,
}