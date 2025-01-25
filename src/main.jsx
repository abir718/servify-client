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
import Auth from './Authprovider';
import Homecontent from './HomeContents/Homecontent.jsx';
import Details from './Components/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Homecontent />,
      },
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
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/services/:id',
        element: <Details/>,
        loader: async ({ params }) => {
          const service = await fetch(`http://localhost:5000/services/${params.id}`);
          const reviews = await fetch(`http://localhost:5000/reviews`);
      
          const loadServices = await service.json();
          const loadReviews = await reviews.json();
          return { loadServices, loadReviews };
        },
      },
      {
        path: '/addservice',
        element:<Hidden><Addservice/></Hidden>,
      },
      {
        path: '/myreviews',
        element:<Hidden><Myreviews/></Hidden>,
        loader: () => fetch(`http://localhost:5000/reviews`)
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
    <Auth>
    <RouterProvider router={router} />
    </Auth>
  </StrictMode>
)
