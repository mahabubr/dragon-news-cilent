import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from '../../pages/Home/Home/Home'
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => fetch('http://localhost:5000/news')
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
                path: '/category/:id',
                element: <Category />,
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News />,
                loader: async ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])