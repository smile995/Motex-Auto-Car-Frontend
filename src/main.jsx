import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./Components/SignIn"
import MyCarts from './Components/MyCarts.jsx';
import SignUp from './Components/SignUp.jsx';
import ErrorPage from './Components/ErrorPage';
import HomePage from './Components/HomePage';
import Root from './Components/Root';
import AddProducts from './Components/AddProducts'




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
        path: "/addProducts",
        element: <AddProducts></AddProducts>
      },
      {
        path: "/myCarts",
        element: <MyCarts></MyCarts>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
   



  </React.StrictMode>,
)
