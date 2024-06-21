import { createBrowserRouter } from "react-router-dom";
import Signup from '../src/assets/modules/Auth/pages/signup';
import LoginUser from '../src/assets/modules/Auth/pages/login'
import Home from '../src/assets/modules/Auth/pages/home';
import GeneralErrorPage from '../src/assets/modules/page/error';
import ProtectedRouteProvider from '../src/assets/modules/page/contexts/protectedRoute';
import CartDisplay from "./assets/modules/cartDisplay";
import Dashboard from './assets/modules/page/dashboard'
import LandingPage from "./assets/modules/page/LandingPage";
    



export const router = createBrowserRouter([
    {
        path:"/",
        element:  <LandingPage/> 
    },
    {
        path:"/dashboard",
        element: <ProtectedRouteProvider><Dashboard/></ProtectedRouteProvider>  
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
       path:"/login",
       element:<LoginUser/>
    },
    {
        path:"*",
        element:<GeneralErrorPage/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/showcart",
        element:<CartDisplay/>
    }
])