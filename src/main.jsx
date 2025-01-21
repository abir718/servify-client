import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Services from './Components/Services.jsx';
import Hidden from './Hidden.jsx';
import Addservice from './Components/Addservice.jsx';
import Myreviews from './Components/Myreviews.jsx';
import Myservices from './Components/Myservices.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/services',
        element: <Services/>,
      },
      {
        path: '/addservice',
        element:<Hidden><Addservice/></Hidden>,
      },
      {
        path: '/myreviews',
        element:<Hidden><Myreviews/></Hidden>,
      },
      {
        path: '/myservices',
        element:<Hidden><Myservices/></Hidden>,
      },
      

    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
