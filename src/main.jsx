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
import Update from './Components/Update';
import AuthProvider from '../public/ContentAPI/AuthContext';
import PrivateRoute from './Components/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/addProducts')
      },
      {
        path: "/addProducts",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: "/myCarts",
        element: <PrivateRoute><MyCarts></MyCarts></PrivateRoute>,
        loader:()=>fetch(' http://localhost:5000/addProducts')
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/update",
        element: <PrivateRoute><Update></Update></PrivateRoute>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
