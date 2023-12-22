import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import ItemAddToCart from './ItemAddToCart';

export default function Item() {
    const location = useLocation()
    const item = location.state;

    return(
        <>
            <Header></Header>
            <ItemAddToCart
                item={item}
            ></ItemAddToCart>
        </>
    )
}