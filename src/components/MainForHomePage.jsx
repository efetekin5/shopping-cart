import { useEffect, useState } from 'react'
import '../styles/MainForHomePage.css'

export default function MainForHomePage() {
    const [itemData, setItemData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try{
                const data = await fetch('https://fakestoreapi.com/products?limit=4');
                const actualData = await data.json();
                setItemData(actualData);
            } catch(error){
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])

    if(error) return <h1>An Error Was Encountered</h1>
    if(loading) return <h1>Loading...</h1>

    console.log(itemData);
    return(
        <div className="mainForHomePage">
            <div className='overlayText'>
                <h1 className='homePageHeader'>Your one-stop destination for all your needs</h1>
                <p className='homePageText'>Discover an unparalleled shopping experience with our extensive selection of products, unbeatable prices, and exceptional customer service. Shop now and transform your shopping journey with us.</p>
            </div>

            <div className='featuredItemsContainer'>
                <h3 className='featuredItemsHeader'>Featured Items</h3>

                <div className='items'>
                    {itemData.map((item) => {
                        return(
                            <div className='item'>
                                <img src={item.image} className='itemImg'></img>
                                <h6 className='itemTitle'>{item.title}</h6>
                                <p className='itemPrice'>${item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}