import Header from './Header'
import MainForHomePage from './MainForHomePage'
import PropTypes from 'prop-types'

export default function Home({itemCount}) {
    return(
        <>
            <Header itemCount={itemCount}></Header>
            <MainForHomePage></MainForHomePage>
        </>
    )
}

Home.propTypes = {
    itemCount: PropTypes.number,
}