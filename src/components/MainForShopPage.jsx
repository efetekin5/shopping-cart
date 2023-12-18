import { useState, useEffect } from "react";
import '../styles/MainForShopPage.css'

export default function MainForShopPage() {
    const [itemData, setItemData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await fetch('https://fakestoreapi.com/products');
                const realData = await data.json();

                setItemData(realData);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        getData();
    })

    if(error) return <h1>An Error Was Encountered</h1>
    if(loading) return <h1>Loading...</h1>

    return (
        <div className="mainForShopPage" data-testid='mainForShopPage'>
            <div className="items">
                {itemData.map((item) => {
                    return(
                        <div className="item">
                            <img className="itemImg" src={item.image}></img>
                            <h6 className='itemTitle'>{item.title}</h6>
                            <p className='itemPrice'>${item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}