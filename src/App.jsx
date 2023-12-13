import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import './styles/App.css'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}