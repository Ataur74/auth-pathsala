import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home';
import Resume from './Components/Resume';
import Login from './Components/Login';
import Register from './Components/Register';
import CoverLetter from './Components/CoverLetter';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/resume",
        element:<Resume/>
      },
      {
        path:"/coverletter",
        element:<CoverLetter/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
        ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
