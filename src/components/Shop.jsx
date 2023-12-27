import Header from "./Header"
import MainForShopPage from "./MainForShopPage"
import PropTypes from 'prop-types'

export default function Shop({itemCount, addedCartItems, setAddedCartItems}) {
    return(
        <>
            <Header
                itemCount={itemCount}
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            ></Header>
            <MainForShopPage></MainForShopPage>
        </>
    )    
}

Shop.propTypes = {
    itemCount: PropTypes.number,
    setAddedCartItems: PropTypes.func
}