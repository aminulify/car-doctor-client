import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Pages/Home/Header/Header";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

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
        }
      ]
    },
  ]);

  export default router;