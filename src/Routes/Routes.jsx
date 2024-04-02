import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Pages/Home/Header/Header";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Header></Header>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
          path: "services/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
             
      ]
    },
    {
      path: "/checkout/:id",
      element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
    },
    {
      path: "/order",
      element: <PrivateRoute><Order></Order></PrivateRoute>
    }  
    
  ]);

  export default router;