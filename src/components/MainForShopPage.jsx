import { useState, useEffect } from "react";
import '../styles/MainForShopPage.css'
import { Link } from "react-router-dom";

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

    console.log(itemData)
    return (
        <div className="mainForShopPage" data-testid="mainForShopPage">
            <div className="shopPageItems">
                {itemData.map((item, index) => {
                    return(
                        <Link key={`shopItem${index}`} className="link">
                            <div className="shopItem">
                                <img className="shopItemImg" src={item.image}></img>
                                <h6 className='shopItemTitle'>{item.title}</h6>
                                <p className='shopItemPrice'>${item.price}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}