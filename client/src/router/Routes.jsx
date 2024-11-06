import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Projects from "../pages/Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ],
    },
]);

export default router;