import Header from './Header'
import MainForHomePage from './MainForHomePage'
import PropTypes from 'prop-types'

export default function Home({addedCartItems, setAddedCartItems}) {
    return(
        <>
            <Header
                addedCartItems={addedCartItems}
                setAddedCartItems={setAddedCartItems}
            >
            </Header>
            <MainForHomePage></MainForHomePage>
        </>
    )
}

Home.propTypes = {
    addedCartItems: PropTypes.array,
    setAddedCartItems: PropTypes.func,
}