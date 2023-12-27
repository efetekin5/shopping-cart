import Header from './Header'
import MainForHomePage from './MainForHomePage'
import PropTypes from 'prop-types'

export default function Home({itemCount, addedCartItems, setAddedCartItems}) {
    return(
        <>
            <Header 
                itemCount={itemCount}>
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            </Header>
            <MainForHomePage></MainForHomePage>
        </>
    )
}

Home.propTypes = {
    itemCount: PropTypes.number,
    addedCartItems: PropTypes.array,
    setAddedCartItems: PropTypes.func,
}