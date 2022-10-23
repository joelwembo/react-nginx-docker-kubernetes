import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

import IRoute from '../interfaces/route';


const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        name: 'Welcome Home Page',
        component: Home,
        protected:false

    },
    {
        path: '/about',
        exact: true,
        name: 'About Welcome Page',
        component: About,
        protected:false

    },
    {
        path: '/contact',
        exact: true,
        name: 'Contact Welcome Page',
        component: Contact,
        protected:false

    }
]

export default routes;