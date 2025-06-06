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
import Error from './Error.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Dashtext from './Dashboard/Dashtext.jsx';
import AllUsers from './Dashboard/AllUsers.jsx';
import AllServices from './Dashboard/AllServices.jsx';
import AboutUs from './AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homecontent />,
        loader: () => fetch('https://servify-server.vercel.app/services')
      },
      {
        path: '/about-us',
        element: <AboutUs />,
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
        loader: () => fetch('https://servify-server.vercel.app/services')
      },
      {
        path: '/services/:category',
        element: <Services/>,
        loader: () => fetch('https://servify-server.vercel.app/services')
      },
      {
        path: '/service-details/:id',
        element: <Details/>,
        loader: async ({ params }) => {
          const service = await fetch(`https://servify-server.vercel.app/services/${params.id}`);
          const reviews = await fetch(`https://servify-server.vercel.app/reviews`);
          const services = await fetch(`https://servify-server.vercel.app/services`);
      
          const loadServices = await services.json();
          const loadService = await service.json();
          const loadReviews = await reviews.json();
          return { loadService, loadReviews , loadServices };
        },
      },
     

    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Dashtext />,
        loader: async () => {
          const reviews = await fetch(`https://servify-server.vercel.app/reviews`);
          const services = await fetch(`https://servify-server.vercel.app/services`);
          const loadReviews = await reviews.json(); 
          const loadServices = await services.json(); 
          return { loadReviews , loadServices };
        }
      },
      {
        path: 'addservice',
        element:<Hidden><Addservice/></Hidden>,
      },
      {
        path: 'myreviews',
        element:<Hidden><Myreviews/></Hidden>,
        loader: () => fetch(`https://servify-server.vercel.app/reviews`)
      },
      {
        path: 'myservices',
        element:<Hidden><Myservices/></Hidden>,
        loader: () => fetch('https://servify-server.vercel.app/services')
      },
      {
        path: 'admin-alluser',
        element: <AllUsers/>,
      },
      {
        path: 'admin-allservices',
        element: <AllServices/>,
      }

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
