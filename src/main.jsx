import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './assets/pages/ErrorPage'
import DarkModeContextProvider from './context/DarkMode.jsx'
import UserContextProvider from './context/UserContext.jsx'
import LoginPage from './assets/pages/auth/login.jsx'
import RegisterPage from './assets/pages/auth/register.jsx'
import DashboardPage from './assets/pages/auth/dashboard.jsx'
import MaintenancePage from './assets/pages/MaintenancePage'
import GalleryPage from './assets/pages/gallery/gallery.jsx'
import EditorGalleryPage from './assets/pages/gallery/editor.gallery.jsx'
import ProjectEditorPage from './assets/pages/project/editor.project.jsx'
import SupportPage from './assets/pages/support.jsx'
import PublishProjectEditor from './assets/pages/project/publish.project.editor.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    // {
    //   path: "/register",
    //   element: <RegisterPage />
    // },
    {
      path: "/blog",
      element: <MaintenancePage />
    },
    {
      path: "/project",
      element: <MaintenancePage />
    },
    // {
    //   path: "/blog/:id",
    //   element: <MaintenancePage />
    //   //      element: <DetailBlogPage />
    // },
    // {
    //   path: "/project/:id",
    //   element: <MaintenancePage />
    //   //      element: <DetailProjectPage />
    // },
    {
      path: "/about",
      element: <MaintenancePage />
      //      element: <AboutPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    },
    // {
    //   path: "/profile",
    //   element: <ProfilePage />
    // },

    {
      path: "/gallery",
      element: <GalleryPage />
    },
    {
      path: "/support",
      element: <MaintenancePage />
      //element: <SupportPage />
    },
    {
      path: "/editor-project",
      //      element: <MaintenancePage />,
      element: <ProjectEditorPage />
    },
    {
      path: "/editor",
      //      element: <MaintenancePage />,
      element: <PublishProjectEditor />
    },
    {
      path: "/editor-gallery",
      element: <EditorGalleryPage />
    }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <UserContextProvider>
    <DarkModeContextProvider>
      <RouterProvider router={router} />
    </DarkModeContextProvider>
  </UserContextProvider>

  // </React.StrictMode>
)
