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
import Details from "../components/Details";
import Update from "../components/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts />,
    },
    {
      path: "/allcampain",
      element: <AllCampain />,
      loader:()=>fetch("https://crowdcube-server-black.vercel.app/allcampain")
    },
    {
      path: "/addCampaign",
      element: <PrivetRoute><AddNewCampain /></PrivetRoute>,
    },
    {
      path: "/mycampain",
      element: <PrivetRoute><MyCampain /></PrivetRoute>,
      loader:()=>fetch("https://crowdcube-server-black.vercel.app/mycampain")
    },
    {
      path: "/campain/:id",
      element: <PrivetRoute><Details /></PrivetRoute>,
      loader:({params})=>fetch(`https://crowdcube-server-black.vercel.app/campain/${params.id}`)
    },
    {
      path: "/update/:id",
      element:<PrivetRoute><Update /></PrivetRoute> ,
      loader:({params})=>fetch(`https://crowdcube-server-black.vercel.app/campain/${params.id}`)
    },
    {
      path: "/mydonation",
      element: <PrivetRoute><MyDonation /></PrivetRoute>,
      loader:()=>fetch("https://crowdcube-server-black.vercel.app/mydonation")
    },
    {
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