import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage.jsx';
import Root from './Components/Root.jsx';
import HomePage from './Components/HomePage.jsx';
import AddProducts from './Components/AddProducts.jsx';
import MyCarts from './Components/MyCarts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path:"/addProducts",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/myCarts",
        element:<MyCarts></MyCarts>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
