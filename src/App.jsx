import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Shop from "./components/Shop"
import './styles/App.css'
import Item from "./components/Item"
import { useState } from "react"

export default function App() {
    const [itemCount, setItemCount] = useState(0);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home itemCount={itemCount} />,
        },
        {
            path: '/shop',
            element: <Shop itemCount={itemCount} />,
        },
        {
            path: '/shop/:itemName',
            element: <Item itemCount={itemCount} setItemCount={setItemCount}/>
        }
    ])

    return(
        <RouterProvider router={router} />
    )
}