// import Home from "../pages/Home";
// import Contact from "../pages/Contact";
// import About from "../pages/About";

// import IRoute from '../interfaces/route';


// const routes: IRoute[] = [
//     {
//         path: '/',
//         exact: true,
//         name: 'Welcome Home Page',
//         component: Home,
//         protected:false

//     },
//     {
//         path: '/about',
//         exact: true,
//         name: 'About Welcome Page',
//         component: About,
//         protected:false

//     },
//     {
//         path: '/contact',
//         exact: true,
//         name: 'Contact Welcome Page',
//         component: Contact,
//         protected:false

//     }
// ]

// export default routes;

import IRoute from "../interfaces/route";
import ChangePasswordPage from "../pages/auth/change";
import ForgotPasswordPage from "../pages/auth/forgot";
import LoginPage from "../pages/auth/login";
import LogoutPage from "../pages/auth/logout";
import RegisterPage from "../pages/auth/register";
import ResetPasswordPage from "../pages/auth/reset";
import HomePage from "../pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/change',
        exact: true,
        component: ChangePasswordPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/logout',
        exact: true,
        component: LogoutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/forget',
        exact: true,
        component: ForgotPasswordPage,
        name: 'Forgot Password Page',
        protected: false
    },
    {
        path: '/reset',
        exact: true,
        component: ResetPasswordPage,
        name: 'Reset Password Page',
        protected: false
    }
];

export default routes;