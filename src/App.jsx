// react router dom
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// pages
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
import {
  Home,
  About,
  Contact,
  LikedImages,
  DownloadImages,
  ImageInfo,
  Login,
  Register,
} from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

// actions
import { action as HomeAction } from "./pages/Home";

// components
import { ProtectedRoutes } from "./components";

// global context
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { toast } from "react-toastify";

function App() {
const {user, dispatch, authReady} = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedImages",
          element: <LikedImages />,
        },
        {
          path: "/downloadImages",
          element: <DownloadImages />,
        },
        {
          path: "/imageInfo/:id",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={'/'}/> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to={'/'}/> : <Register />,
    },
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user) {
        dispatch({type: 'LOGIN', payload: user})
      }else{
        toast.warn("User Already Sign Out")
      }
      dispatch({type: 'AUTH_READY'})
    })
  },[])

  return (
    <>
      {authReady && <RouterProvider router={routes} />}
    </>
  )
}

export default App;
