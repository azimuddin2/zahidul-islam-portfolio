import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Behind from "../pages/Behind/Behind";
import Contact from "../pages/Contact/Contact";
import Mentorship from "../pages/Mentorship/Mentorship";

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
                path: 'mentorship',
                element: <Mentorship></Mentorship>
            },
            {
                path: 'behind',
                element: <Behind></Behind>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ],
    },
]);

export default router;