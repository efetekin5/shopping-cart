import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Shop from "./components/Shop"
import './styles/App.css'
import Item from "./components/Item"
import { useState } from "react"

export default function App() {
    const [addedCartItems, setAddedCartItems] = useState([]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home
                        addedCartItems={addedCartItems}
                    />,
        },
        {
            path: '/shop',
            element: <Shop
                        addedCartItems={addedCartItems}
                    />,
        },
        {
            path: '/shop/:itemName',
            element: <Item
                        addedCartItems={addedCartItems}
                        setAddedCartItems={setAddedCartItems}
                    />
        }
    ])

    return(
        <RouterProvider router={router} />
    )
}