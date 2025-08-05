import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Root-Layout/RootLayout';
import Error from '../Pages/Error/Error';
import Spinner from '../Component/Spinner/Spinner';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import FindTutors from '../Pages/FindTutors/FindTutors';
import AddTutorials from '../Pages/AddTutorials/AddTutorials';
import MyBookedTutors from '../Pages/MyBookedTutors/MyBookedTutors';
import Register from '../Pages/Register/Register';
import MyTutorials from '../Pages/MyTutorials/MyTutorials';
import PrivateRoute from '../Context/PrivateRoute';
import Update from '../Component/Update/Update';
import TutorDetails from '../Component/TutorDetails/TutorDetails';

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Spinner></Spinner>,
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        loader: () => fetch('https://language-club-orcin.vercel.app/addTutors'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/findTutors',
        element: <FindTutors></FindTutors>
      },
      {
        path: '/tutorDetails/:_id',
        loader: ({params})=>fetch(`https://language-club-orcin.vercel.app/addTutors/${params._id}`),
        element: <PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>
      },
      {
        path: '/addTutorials',
        element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
      },
      {
        path: '/myTutorials',
        element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
      },
      {
        path: '/bookedTutors',
        loader: ()=> fetch('https://language-club-orcin.vercel.app/bookedTutors'),
        element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
      },
      {
        path: '/updateTutor/:_id',
        loader: ({params})=>fetch(`https://language-club-orcin.vercel.app/addTutors/${params._id}`),
        element: <PrivateRoute><Update></Update></PrivateRoute>
      }
    ]
  },
  {
    path: "/*",
    element: <Error></Error>
  }
]);



export default router;