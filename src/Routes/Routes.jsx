import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Pages/Home/Header/Header";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";

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
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "services/:id",
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;