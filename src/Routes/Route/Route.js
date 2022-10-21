import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from '../../pages/Home/Home/Home'
import Login from "../../pages/Login/Login/Login";
import Profile from "../../pages/Login/Login/Profile";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import TermsAndCondition from "../../pages/Other/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => fetch('https://dragon-news-server-six.vercel.app/news')
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
                path: '/terms',
                element: <TermsAndCondition />,
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>,
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: async ({ params }) => fetch(`https://dragon-news-server-six.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute>
                    <News />
                </PrivateRoute>,
                loader: async ({ params }) => fetch(`https://dragon-news-server-six.vercel.app/news/${params.id}`)
            }
        ]
    }
])