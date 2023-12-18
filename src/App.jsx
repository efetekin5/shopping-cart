import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Shop from "./components/Shop"
import './styles/App.css'

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
    ])

    return(
        <RouterProvider router={router} />
    )
}