import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import AllCampain from "../components/AllCampain";
import AddNewCampain from "../components/AddNewCampain";
import MyCampain from "../components/MyCampain";
import MyDonation from "../components/MyDonation";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayouts from "../components/AuthLayout";
import ErrorPage from "../components/Error";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts />,
    },
    {
      path: "/allcampain",
      element: <AllCampain />,
    },
    {
      path: "/addCampaign",
      element: <PrivetRoute><AddNewCampain /></PrivetRoute>,
    },
    {
      path: "/mycampain",
      element: <PrivetRoute><MyCampain /></PrivetRoute>,
    },
    {
      path: "/mydonation",
      element: <PrivetRoute><MyDonation /></PrivetRoute>,
    },{
      path: "/auth",
      element:<AuthLayouts />,
      children:[
        {
            path: "/auth/login",
            element: <Login />, 
        },
        {
            path: "/auth/register",
            element: <Register />, 
        },
       
      ]
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  export default router;