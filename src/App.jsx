// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
import { Home, About, Contact, LikedImages, DownloadImages, ImageInfo } from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

// actions
import { action as HomeAction } from "./pages/Home";


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
          action: HomeAction
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/likedImages',
          element: <LikedImages/>
        },
        {
          path: '/downloadImages',
          element: <DownloadImages/>
        },
        {
          path: '/imageInfo/:id',
          element: <ImageInfo/>
        },
      ]

    }
  ])

  return <RouterProvider router={routes}/>
}

export default App;