import Header from "./Header"
import MainForShopPage from "./MainForShopPage"
import PropTypes from 'prop-types'

export default function Shop({itemCount}) {
    return(
        <>
            <Header itemCount={itemCount}></Header>
            <MainForShopPage></MainForShopPage>
        </>
    )    
}

Shop.propTypes = {
    itemCount: PropTypes.number,
}