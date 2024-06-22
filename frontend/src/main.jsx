import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Layout from './components/Layout';
// route components
import Home from './Home';
import Members from './pages/Members';
import Projects from './pages/Projects';
import Events from './pages/Events';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/members',
        element: <Members />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/events',
        element: <Events />,
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
