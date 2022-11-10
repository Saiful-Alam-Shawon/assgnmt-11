import React, { } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';

import Main from '../Layouts/Layout/Main';
import AddService from '../Pages/Add Service/AddService';
import Blog from '../Pages/Blog/Blog';
import Blogs from '../Pages/Blogs/Blogs';
import Error from '../Pages/Error/Error';
import Fake from '../Pages/Fake/Fake';
import Login from '../Pages/Login/Login';
import LogOut from '../Pages/LogOut/LogOut';
import Register from '../Pages/Register/Register';
import Reviews from '../Pages/Reviews/Reviews';
import ServiceDetails from '../Pages/Service Details/ServiceDetails';
import Service6 from '../Pages/Services/Service6';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/blog',
                    element: <Blogs></Blogs>
                },
                {
                    path: '/addservice',
                    element: <AddService></AddService>
                },
                // {
                //     path: '/details',
                //     element: <ServiceDetails></ServiceDetails>
                // },
                // Just Check
                {
                    path: '/reviewcheck',
                    element: <Fake></Fake>,
                    loader: () => fetch('http://localhost:5000/reviews?id')
                },
                // .................
                {
                    path: '/service6',
                    element: <Service6></Service6>,
                    loader: () => fetch('http://localhost:5000/service6')
                },
                {
                    path: '/reviews',
                    element: <Reviews></Reviews>,
                    // loader: () => fetch('http://localhost:5000/courses')
                },
                // {
                //     path: '/service3/:id',
                //     element: <ServiceDetails></ServiceDetails>,
                //     loader: ({ params }) => fetch(`http://localhost:5000/service3/${params.id}`)
                // },
                {
                    path: '/service6/3/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({ params }) => fetch(`http://localhost:5000/service6/3/${params.id}`)
                },
                {
                    path: '/service6/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({ params }) => fetch(`http://localhost:5000/service6/${params.id}`)
                },
                {
                    path: '/*',
                    element: <Error></Error>

                },
            ]
    },
])


const Route = () => {
    return (
        <div>

        </div>
    );
};

export default Route;