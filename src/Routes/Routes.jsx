import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;