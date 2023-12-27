import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Shop from "./components/Shop"
import './styles/App.css'
import Item from "./components/Item"
import { useState } from "react"

export default function App() {
    const [itemCount, setItemCount] = useState(0);
    const [addedCartItems, setAddedCartItems] = useState([]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home
                        itemCount={itemCount}
                        addedCartItems={addedCartItems}
                    />,
        },
        {
            path: '/shop',
            element: <Shop
                        itemCount={itemCount}
                        addedCartItems={addedCartItems}
                    />,
        },
        {
            path: '/shop/:itemName',
            element: <Item
                        itemCount={itemCount}
                        setItemCount={setItemCount}
                        addedCartItems={addedCartItems}
                        setAddedCartItems={setAddedCartItems}
                    />
        }
    ])

    return(
        <RouterProvider router={router} />
    )
}