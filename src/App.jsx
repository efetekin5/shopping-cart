import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Shop from "./components/Shop"
import './styles/App.css'
import Item from "./components/Item"

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/shop',
            element: <Shop />,
        },
        {
            path: '/shop/:itemName',
            element: <Item />
        }
    ])

    return(
        <RouterProvider router={router} />
    )
}