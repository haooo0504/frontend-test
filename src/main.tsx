import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from "./routes/product";
import Cart from "./routes/cart";
import { Navbar } from "./components/navbar";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
